
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { businessConfig } from "../../config/business";
import { db, auth } from "@/lib/firebase";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { handleFirestoreError, OperationType } from "@/lib/firestore-errors";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const CheckoutDialog = ({ children }: { children: React.ReactNode }) => {
  const { cart, total, subtotal, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("pickup");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    const orderData = {
      customerId: auth.currentUser?.uid || "guest",
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      address: orderType === "delivery" ? formData.address : "Pickup at Restaurant",
      type: orderType,
      items: cart.map(i => ({ id: i.id, name: i.name, quantity: i.quantity, price: i.price })),
      subtotal: subtotal,
      deliveryFee: orderType === "delivery" ? businessConfig.delivery.fee : 0,
      total: orderType === "delivery" ? total : subtotal,
      status: "pending",
      notes: formData.notes,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    try {
      await setDoc(doc(db, "orders", orderId), orderData);
      setIsOrdered(true);
      toast.success("Order received! Check your email for confirmation.");
      setTimeout(() => {
        setIsOpen(false);
        setIsOrdered(false);
        clearCart();
        setFormData({ name: "", email: "", phone: "", address: "", notes: "" });
      }, 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `orders/${orderId}`);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (cart.length === 0) return <>{children}</>;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!isLoading) setIsOpen(open);
    }}>
      <DialogTrigger render={children as React.ReactElement} />
      <DialogContent className="sm:max-w-[500px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {isOrdered ? "Order Confirmed!" : "Complete Your Order"}
          </DialogTitle>
        </DialogHeader>

        {isOrdered ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Thank you for your order!</h3>
            <p className="text-zinc-500 max-w-sm">
              We've received your request. {orderType === "delivery" ? `It should arrive in ${businessConfig.delivery.estimatedTime}.` : `It will be ready for pickup in ${businessConfig.pickup.estimatedTime}.`}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <Tabs defaultValue="pickup" onValueChange={(v) => setOrderType(v as any)}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="pickup" disabled={isLoading}>Pickup</TabsTrigger>
                <TabsTrigger value="delivery" disabled={isLoading}>Delivery</TabsTrigger>
              </TabsList>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(203) 555-0000" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isLoading}
                  />
                </div>

                {orderType === "delivery" && (
                  <div className="space-y-2 pt-2 animate-in fade-in slide-in-from-top-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input 
                      id="address" 
                      placeholder="123 Bridgeport Ave" 
                      required={orderType === "delivery"} 
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      disabled={isLoading}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="notes">Order Notes (Optional)</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Allergies, door codes, or special instructions..."
                    className="resize-none"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </Tabs>

            <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-200">
              <div className="flex justify-between text-sm items-center">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Grand Total</span>
                <span className="font-extrabold text-red-700 text-2xl tracking-tight">
                  ${(orderType === 'delivery' ? total : subtotal).toFixed(2)}
                </span>
              </div>
            </div>

            <DialogFooter className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-red-700 hover:bg-red-800 h-14 text-sm font-bold uppercase tracking-widest shadow-xl rounded-2xl transition-transform active:scale-95"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  `Place ${orderType === 'delivery' ? 'Delivery' : 'Pickup'} Order`
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

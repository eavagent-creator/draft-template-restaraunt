
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
import { ShoppingBag, CheckCircle2, Loader2, CreditCard, Banknote } from "lucide-react";
import { toast } from "sonner";

import { useTranslation } from "react-i18next";

export const CheckoutDialog = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  const { cart, total, subtotal, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("pickup");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");

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
      paymentMethod,
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
      
      const stored = localStorage.getItem('pastOrders');
      const pastOrders = stored ? JSON.parse(stored) : [];
      pastOrders.push({ id: orderId, createdAt: Date.now() });
      localStorage.setItem('pastOrders', JSON.stringify(pastOrders));

      setIsOrdered(true);
      toast.success(t('checkout.successToast'));
      setTimeout(() => {
        setIsOpen(false);
        setIsOrdered(false);
        clearCart();
        setFormData({ name: "", email: "", phone: "", address: "", notes: "" });
      }, 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `orders/${orderId}`);
      toast.error(t('checkout.errorToast'));
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
            {isOrdered ? t('checkout.confirmed') : t('checkout.title')}
          </DialogTitle>
        </DialogHeader>

        {isOrdered ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('checkout.thanks')}</h3>
            <p className="text-zinc-500 max-w-sm">
              {t('checkout.received')} {orderType === "delivery" 
                ? t('checkout.willArrive', { time: businessConfig.delivery.estimatedTime }) 
                : t('checkout.willBeReady', { time: businessConfig.pickup.estimatedTime })}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <Tabs defaultValue="pickup" onValueChange={(v) => setOrderType(v as any)}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="pickup" disabled={isLoading}>{t('checkout.pickup')}</TabsTrigger>
                <TabsTrigger value="delivery" disabled={isLoading}>{t('checkout.delivery')}</TabsTrigger>
              </TabsList>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('checkout.fullName')}</Label>
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
                    <Label htmlFor="phone">{t('checkout.phoneNumber')}</Label>
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
                  <Label htmlFor="email">{t('checkout.emailAddress')}</Label>
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
                    <Label htmlFor="address">{t('checkout.deliveryAddress')}</Label>
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
                  <Label htmlFor="notes">{t('checkout.notes')}</Label>
                  <Textarea 
                    id="notes" 
                    placeholder={t('checkout.placeholderNotes')}
                    className="resize-none"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <Label>Payment Method</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div 
                      className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-red-700 bg-red-50 text-red-700' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <CreditCard className="w-6 h-6" />
                      <span className="font-semibold text-sm">Credit / Debit</span>
                    </div>
                    <div 
                      className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${paymentMethod === 'cash' ? 'border-red-700 bg-red-50 text-red-700' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}
                      onClick={() => setPaymentMethod('cash')}
                    >
                      <Banknote className="w-6 h-6" />
                      <span className="font-semibold text-sm">Cash</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>

            <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-200">
              <div className="flex justify-between text-sm items-center">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{t('checkout.grandTotal')}</span>
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
                  t('checkout.placeOrder', { type: orderType === 'delivery' ? t('checkout.delivery') : t('checkout.pickup') })
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "@/lib/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { motion } from "motion/react";
import { Package, Search, ChevronRight, MapPin, Clock, Info, AlertTriangle, CreditCard, Banknote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderData {
  id: string;
  status: "pending" | "accepted" | "preparing" | "completed" | "cancelled";
  customerName: string;
  total: number;
  createdAt: any;
  items: OrderItem[];
  type: string;
  isDelayed?: boolean;
  delayMinutes?: number;
  estimatedReadyAt?: any;
  paymentMethod?: "card" | "cash";
}

export default function Orders() {
  const [pastOrders, setPastOrders] = useState<OrderData[]>([]);
  const [lookupId, setLookupId] = useState("");
  const [lookupResult, setLookupResult] = useState<OrderData | null>(null);
  const [lookupError, setLookupError] = useState("");

  const loadPastOrders = async () => {
    try {
      const stored = localStorage.getItem("pastOrders");
      if (!stored) return;
      const orderIds: { id: string; createdAt: number }[] = JSON.parse(stored);
      
      const ordersData: OrderData[] = [];
      for (const { id } of orderIds) {
        const docRef = doc(db, "orders", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          ordersData.push({ id, ...docSnap.data() } as OrderData);
        }
      }
      // Sort by newest first
      ordersData.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
      setPastOrders(ordersData);
    } catch (e) {
      console.error("Failed to load past orders:", e);
    }
  };

  useEffect(() => {
    loadPastOrders();
  }, []);

  // Listen for live updates on Past Orders
  useEffect(() => {
    const unsubscribers: (() => void)[] = [];
    const stored = localStorage.getItem("pastOrders");
    if (stored) {
      const orderIds: { id: string; createdAt: number }[] = JSON.parse(stored);
      orderIds.forEach(({ id }) => {
        const unsub = onSnapshot(doc(db, "orders", id), (docSnap) => {
          if (docSnap.exists()) {
            setPastOrders((prev) => {
              const updated = [...prev];
              const index = updated.findIndex((o) => o.id === id);
              if (index !== -1) {
                updated[index] = { id, ...docSnap.data() } as OrderData;
              }
              return updated;
            });
            // Update lookupResult if it matches
            setLookupResult((prev) => {
              if (prev && prev.id === id) {
                return { id, ...docSnap.data() } as OrderData;
              }
              return prev;
            });
          }
        });
        unsubscribers.push(unsub);
      });
    }
    return () => {
      unsubscribers.forEach((u) => u());
    };
  }, []);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupId.trim()) return;
    setLookupError("");
    setLookupResult(null);

    try {
      const docRef = doc(db, "orders", lookupId.trim());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data() as Omit<OrderData, 'id'>;
        setLookupResult({ id: docSnap.id, ...data });

        // Save to local storage if not there
        const stored = localStorage.getItem("pastOrders");
        let pastIds: { id: string; createdAt: number }[] = stored ? JSON.parse(stored) : [];
        if (!pastIds.find((p) => p.id === docSnap.id)) {
          pastIds.push({ id: docSnap.id, createdAt: Date.now() });
          localStorage.setItem("pastOrders", JSON.stringify(pastIds));
          loadPastOrders(); // Reload past orders list
        }
      } else {
        setLookupError("Order not found. Please check your tracking ID.");
      }
    } catch (err) {
      setLookupError("Error looking up order. Make sure ID is correct.");
    }
  };

  const getStatusBadge = (status: OrderData["status"]) => {
    switch (status) {
       case 'pending':
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-none font-bold">Pending</Badge>;
      case 'accepted':
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-none font-bold">Accepted</Badge>;
      case 'preparing':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-none font-bold">Preparing</Badge>;
      case 'completed':
        return <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200 border-none font-bold">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-none font-bold">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getEstimatedReadyTime = (order: OrderData) => {
    if (!order.estimatedReadyAt) return null;
    const date = new Date(order.estimatedReadyAt.seconds * 1000);
    if (order.isDelayed && order.delayMinutes) {
      date.setMinutes(date.getMinutes() + order.delayMinutes);
    }
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderOrderCard = (order: OrderData) => (
    <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <span className="text-xs font-bold font-mono bg-slate-100 px-2 py-0.5 rounded-md text-slate-500">#{order.id.split('-').pop()}</span>
             {getStatusBadge(order.status)}
          </div>
          <h4 className="font-bold text-slate-900 mt-2">{order.items.length} items • ${order.total?.toFixed(2)}</h4>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-500">
             <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 
                {order.createdAt ? new Date(order.createdAt.seconds * 1000).toLocaleDateString() + ' ' + new Date(order.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Unknown'}
             </span>
             <span className="flex items-center gap-1 capitalize"><MapPin className="w-4 h-4" /> {order.type}</span>
             {order.paymentMethod && (
               <span className="flex items-center gap-1 capitalize">
                 {order.paymentMethod === 'card' ? <CreditCard className="w-4 h-4" /> : <Banknote className="w-4 h-4" />}
                 {order.paymentMethod}
               </span>
             )}
          </div>
        </div>
      </div>
      
      {(order.estimatedReadyAt || order.isDelayed) && (
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col gap-2 mt-2">
            {order.estimatedReadyAt && order.status !== 'completed' && order.status !== 'cancelled' && (
              <div className="flex items-center gap-2 text-emerald-700 font-medium text-sm">
                <Clock className="w-4 h-4" />
                {order.isDelayed ? 'New estimated' : 'Estimated'} {order.type?.toLowerCase() === 'delivery' ? 'delivery' : 'pickup'} time: {getEstimatedReadyTime(order)}
              </div>
            )}
            {order.isDelayed && order.status !== 'completed' && order.status !== 'cancelled' && (
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm bg-amber-50 p-2 rounded-lg">
                <AlertTriangle className="w-4 h-4" />
                This order is currently experiencing a slight delay{order.delayMinutes ? ` of about ${order.delayMinutes} minutes` : ''}.
              </div>
            )}
        </div>
      )}

      <div className="border-t border-slate-100 pt-4 mt-2 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all">
         <div className="space-y-2">
           {order.items.map((item, i) => (
             <div key={i} className="flex justify-between text-sm">
               <span className="text-slate-600"><span className="font-bold text-slate-800">{item.quantity}x</span> {item.name}</span>
               <span className="font-medium text-slate-800">${(item.price * item.quantity).toFixed(2)}</span>
             </div>
           ))}
         </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto max-w-3xl px-4">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Track Your Order
          </h1>
          <p className="text-slate-500 font-medium">Keep an eye on what's cooking, or look up previous orders.</p>
        </div>

        {/* Order Lookup Form */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-slate-400" />
            Lookup Order by ID
          </h2>
          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-3">
            <Input 
              placeholder="e.g. ORD-12345678-ABCD" 
              value={lookupId}
              onChange={(e) => setLookupId(e.target.value)}
              className="flex-grow h-12 bg-slate-50 border-slate-200 focus-visible:ring-red-500 rounded-xl"
            />
            <Button type="submit" className="h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl px-8">
              Track Order
            </Button>
          </form>
          {lookupError && (
            <p className="text-red-500 text-sm mt-3 font-medium flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> {lookupError}</p>
          )}
        </div>

        {/* Look up Result */}
        {lookupResult && (
           <div className="mb-12">
              <h3 className="text-lg font-bold text-slate-800 mb-4 ml-2">Search Result</h3>
              {renderOrderCard(lookupResult)}
           </div>
        )}

        {/* Past Orders */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 ml-2">
            <Package className="w-5 h-5 text-slate-400" />
            Your Recent Orders
          </h3>
          
          {pastOrders.length > 0 ? (
            <div className="space-y-4 group">
              {/* Note: In a real app we'd need a robust accordian, here we use a small hack with group-hover in the render method to show details */}
              {pastOrders.map(renderOrderCard)}
              <p className="text-xs text-center text-slate-400 mt-6 pt-4 border-t border-slate-200">Orders are saved on this device to help you track them. Hover over an order to see items.</p>
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-100/50 rounded-3xl border border-slate-200/50 mx-2">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">You don't have any recent orders on this device.</p>
              <Link to="/menu">
                <Button variant="outline" className="mt-4 font-bold rounded-xl border-slate-300 text-slate-700 bg-white">Browse Menu</Button>
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

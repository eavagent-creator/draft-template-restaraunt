
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { businessConfig } from "../config/business";
import { LayoutDashboard, Utensils, Settings, Package, Plus, Trash2, Edit2, CheckCircle2, Clock, MapPin, Phone, X, AlertTriangle, ChevronDown, CreditCard, Banknote, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, serverTimestamp, Timestamp, deleteField, addDoc, deleteDoc, writeBatch } from "firebase/firestore";
import { handleFirestoreError, OperationType } from "@/lib/firestore-errors";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  type: "delivery" | "pickup";
  items: { id: string; name: string; quantity: number; price: number }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: "pending" | "accepted" | "completed" | "cancelled";
  notes?: string;
  createdAt: { seconds: number; nanoseconds: number };
  isDelayed?: boolean;
  delayMinutes?: number;
  paymentMethod?: "card" | "cash";
  estimatedReadyAt?: { seconds: number; nanoseconds: number };
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
  createdAt?: any;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderFilter, setOrderFilter] = useState<Order['status'] | 'all'>('pending');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<MenuItem>>({});
  const [isDeletingItem, setIsDeletingItem] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ordersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Order[];
      setOrders(ordersData);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, "orders");
    });

    const menuQ = query(collection(db, "menuItems"), orderBy("name", "asc"));
    const menuUnsubscribe = onSnapshot(menuQ, (snapshot) => {
      const menuData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MenuItem[];
      setMenuItems(menuData);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, "menuItems");
    });

    return () => {
      unsubscribe();
      menuUnsubscribe();
    };
  }, []);

  const migrateMenuToDB = async () => {
    try {
      const batch = writeBatch(db);
      businessConfig.menu.forEach((item) => {
        const docRef = doc(collection(db, "menuItems"), item.id);
        batch.set(docRef, {
          ...item,
          createdAt: serverTimestamp()
        });
      });
      await batch.commit();
      toast.success("Menu migrated to database successfully");
    } catch (error) {
      toast.error("Failed to migrate menu");
      handleFirestoreError(error, OperationType.WRITE, "menuItems");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      toast.error("Image too large. Max 1MB.");
      return;
    }

    setUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentItem(prev => ({ ...prev, image: reader.result as string }));
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const saveMenuItem = async () => {
    if (!currentItem.name || !currentItem.price || !currentItem.category || !currentItem.image) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      if (currentItem.id) {
        await updateDoc(doc(db, "menuItems", currentItem.id), {
          ...currentItem,
          updatedAt: serverTimestamp()
        });
        toast.success("Item updated");
      } else {
        await addDoc(collection(db, "menuItems"), {
          ...currentItem,
          createdAt: serverTimestamp(),
          isAvailable: true
        });
        toast.success("Item added");
      }
      setIsEditingItem(false);
      setCurrentItem({});
    } catch (error) {
      toast.error("Failed to save item");
      handleFirestoreError(error, OperationType.WRITE, "menuItems");
    }
  };

  const deleteMenuItem = async () => {
    if (!itemToDelete) return;
    try {
      await deleteDoc(doc(db, "menuItems", itemToDelete));
      toast.success("Item deleted");
      setIsDeletingItem(false);
      setItemToDelete(null);
    } catch (error) {
      toast.error("Failed to delete item");
      handleFirestoreError(error, OperationType.DELETE, `menuItems/${itemToDelete}`);
    }
  };

  const filteredMenuItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateOrderStatus = async (orderId: string, status: Order['status'], additionalData?: Partial<Order>) => {
    try {
      await updateDoc(doc(db, "orders", orderId), { 
        status,
        updatedAt: serverTimestamp(),
        ...additionalData
      });
      toast.success(`Order status updated to ${status}`);
    } catch (error) {
      toast.error('Failed to update order status');
      handleFirestoreError(error, OperationType.WRITE, `orders/${orderId}`);
    }
  };

  const setOrderDelayed = async (orderId: string, isDelayed: boolean, delayMinutes?: number) => {
    try {
      const updateData: any = {
        isDelayed,
        updatedAt: serverTimestamp() 
      };
      if (delayMinutes !== undefined) {
        updateData.delayMinutes = delayMinutes;
      } else {
        updateData.delayMinutes = deleteField();
      }
      await updateDoc(doc(db, "orders", orderId), updateData);
      toast.success(`Order marked as ${isDelayed ? 'delayed' : 'on time'}`);
    } catch (error) {
      toast.error('Failed to update delay status');
      handleFirestoreError(error, OperationType.WRITE, `orders/${orderId}`);
    }
  };

  const acceptOrderWithTime = (orderId: string, minutesFromNow: number) => {
    const estimatedTime = new Date();
    estimatedTime.setMinutes(estimatedTime.getMinutes() + minutesFromNow);
    
    updateOrderStatus(orderId, 'accepted', {
      estimatedReadyAt: Timestamp.fromDate(estimatedTime) as any
    });
  };

  const getEstimatedReadyTime = (order: Order) => {
    if (!order.estimatedReadyAt) return null;
    const date = new Date(order.estimatedReadyAt.seconds * 1000);
    if (order.isDelayed && order.delayMinutes) {
      date.setMinutes(date.getMinutes() + order.delayMinutes);
    }
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>;
      case 'accepted':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>;
      case 'completed':
        return <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Manage your restaurant presence and menu</p>
          </div>
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            Back to Site
          </Button>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-white border p-1 rounded-xl shadow-sm h-auto grid grid-cols-2 gap-1 w-full max-w-sm">
            <TabsTrigger value="orders" className="flex items-center justify-center gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
              <Package className="w-4 h-4 shrink-0" />
              <span className="truncate">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="menu" className="flex items-center justify-center gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
              <Utensils className="w-4 h-4 shrink-0" />
              <span className="truncate">Menu</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="menu">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold text-slate-800">Menu Management</h3>
                {menuItems.length === 0 && (
                  <Button variant="outline" size="sm" onClick={migrateMenuToDB} className="text-xs">
                    Import from Config
                  </Button>
                )}
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-grow md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input 
                    placeholder="Search dishes or categories..." 
                    className="pl-9 h-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button 
                  className="bg-red-700 hover:bg-red-800 flex items-center gap-2 h-10 shrink-0"
                  onClick={() => {
                    setCurrentItem({ isAvailable: true });
                    setIsEditingItem(true);
                  }}
                >
                  <Plus className="w-4 h-4" />
                  Add Item
                </Button>
              </div>
            </div>
            
            {menuItems.length === 0 ? (
              <div className="text-center py-20 bg-white border border-slate-200 border-dashed rounded-2xl">
                <Utensils className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800">No menu items found</h3>
                <p className="text-slate-500 mb-6">Start by adding your first menu item or imports from config.</p>
                <Button onClick={migrateMenuToDB} variant="outline">Import Initial Menu</Button>
              </div>
            ) : filteredMenuItems.length === 0 ? (
              <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800">No matching items</h3>
                <p className="text-slate-500">Try adjusting your search term.</p>
                <Button variant="ghost" onClick={() => setSearchTerm("")} className="mt-4">Clear search</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMenuItems.map((item) => (
                  <Card key={item.id} className="border-slate-200 shadow-sm overflow-hidden group">
                    <div className="aspect-video relative overflow-hidden bg-slate-100">
                      <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button 
                          size="icon" 
                          variant="secondary" 
                          className="h-8 w-8 rounded-full shadow-lg"
                          onClick={() => {
                            setCurrentItem(item);
                            setIsEditingItem(true);
                          }}
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="destructive" 
                          className="h-8 w-8 rounded-full shadow-lg"
                          onClick={() => {
                            setItemToDelete(item.id);
                            setIsDeletingItem(true);
                          }}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                      {!item.isAvailable && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Badge variant="destructive" className="uppercase font-bold tracking-wider px-3 py-1">Unavailable</Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <span className="font-bold text-red-700">${item.price.toFixed(2)}</span>
                      </div>
                      <CardDescription className="line-clamp-2 mt-1">{item.description}</CardDescription>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-[10px] uppercase font-bold text-slate-500">
                          {item.category}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="orders">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Order Management</h3>
              </div>
              
              {/* Order Status Filters */}
              <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
                {['all', 'pending', 'accepted', 'completed', 'cancelled'].map((status) => (
                  <Button
                    key={status}
                    variant={orderFilter === status ? "default" : "outline"}
                    className={`rounded-full px-6 font-bold text-xs uppercase tracking-wider h-10 whitespace-nowrap transition-all ${
                      orderFilter === status 
                        ? 'bg-slate-900 text-white hover:bg-slate-800' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                    onClick={() => setOrderFilter(status as any)}
                  >
                    {status === 'pending' ? 'New Orders' : status === 'accepted' ? 'Preparing' : status}
                    {status !== 'all' && (
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${
                        orderFilter === status ? 'bg-white/20' : 'bg-slate-100'
                      }`}>
                        {orders.filter(o => o.status === status).length}
                      </span>
                    )}
                  </Button>
                ))}
              </div>

              {orders.filter(o => orderFilter === 'all' || o.status === orderFilter).length === 0 ? (
                <div className="text-center py-20 bg-white border border-slate-200 border-dashed rounded-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
                    <Package className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">No orders found</h3>
                  <p className="text-slate-500 mt-1 max-w-sm mx-auto">
                    {orderFilter === 'all' 
                      ? "When customers place orders, they will appear here." 
                      : `There are no orders with status "${orderFilter}" at the moment.`}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {orders
                    .filter(o => orderFilter === 'all' || o.status === orderFilter)
                    .map((order) => (
                    <Card key={order.id} className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col bg-white">
                      <div className="p-5 border-b border-slate-100 flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-slate-100 text-slate-600 font-bold px-2.5 py-1 rounded-md text-xs tracking-wider">
                              #{order.id.slice(-6).toUpperCase()}
                            </span>
                            {getStatusBadge(order.status)}
                          </div>
                          <h4 className="font-bold text-slate-900 text-lg">{order.customerName}</h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-1">
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 
                              {order.createdAt ? new Date(order.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Now'}
                            </span>
                            <span className="flex items-center gap-1.5"><Package className="w-4 h-4" /> {order.type}</span>
                            {order.paymentMethod && (
                              <span className="flex items-center gap-1.5 capitalize">
                                {order.paymentMethod === 'card' ? <CreditCard className="w-4 h-4" /> : <Banknote className="w-4 h-4" />}
                                {order.paymentMethod}
                              </span>
                            )}
                            {order.estimatedReadyAt && (
                              <span className="flex items-center gap-1.5 font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                                Ready ~{getEstimatedReadyTime(order)}
                              </span>
                            )}
                            {order.isDelayed && (
                              <span className="flex items-center gap-1.5 font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                                <AlertTriangle className="w-3.5 h-3.5" /> Delayed{order.delayMinutes ? ` (${order.delayMinutes}m)` : ''}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black text-slate-900 tracking-tight">${(order.total || 0).toFixed(2)}</p>
                          <p className="text-sm font-medium text-slate-500">{order.items?.length || 0} items</p>
                        </div>
                      </div>
                      
                      <div className="p-5 flex-grow bg-slate-50/50">
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Order Details</p>
                            <ul className="space-y-3">
                              {order.items?.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-start text-sm">
                                  <div className="flex gap-3">
                                    <span className="font-bold text-slate-900 bg-white border border-slate-200 w-6 h-6 rounded flex items-center justify-center shrink-0">{item.quantity}</span>
                                    <span className="text-slate-700 font-medium pt-0.5">{item.name}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {(order.customerPhone || order.address) && (
                            <div className="pt-4 border-t border-slate-200/60">
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Customer Info</p>
                              <div className="space-y-2 text-sm">
                                {order.customerPhone && (
                                  <p className="flex items-center gap-2 text-slate-600">
                                    <Phone className="w-4 h-4 text-slate-400" /> {order.customerPhone}
                                  </p>
                                )}
                                {order.type === 'delivery' && order.address && (
                                  <p className="flex items-start gap-2 text-slate-600">
                                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                                    <span>{order.address}</span>
                                  </p>
                                )}
                              </div>
                            </div>
                          )}

                          {order.notes && (
                            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100 flex items-start gap-2 text-sm">
                              <span className="font-bold text-amber-800 shrink-0">Note:</span>
                              <span className="text-amber-900 italic">"{order.notes}"</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="bg-white border-t border-slate-100 p-4 shrink-0">
                        {order.status === 'pending' && (
                          <div className="grid grid-cols-2 gap-3">
                            <Button 
                              variant="outline" 
                              className="w-full text-slate-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 font-bold h-12 rounded-xl"
                              onClick={() => updateOrderStatus(order.id, 'cancelled')}
                            >
                              Decline
                            </Button>
                            
                            <DropdownMenu>
                              <DropdownMenuTrigger render={
                                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl">
                                  Accept <ChevronDown className="w-4 h-4 ml-2" />
                                </Button>
                              } />
                              <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem onClick={() => updateOrderStatus(order.id, 'accepted')} className="font-medium cursor-pointer">
                                  Accept Order
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => acceptOrderWithTime(order.id, 15)} className="cursor-pointer text-slate-600">
                                  Ready in 15 mins
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => acceptOrderWithTime(order.id, 30)} className="cursor-pointer text-slate-600">
                                  Ready in 30 mins
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => acceptOrderWithTime(order.id, 45)} className="cursor-pointer text-slate-600">
                                  Ready in 45 mins
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => acceptOrderWithTime(order.id, 60)} className="cursor-pointer text-slate-600">
                                  Ready in 1 hour
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        )}
                        {order.status === 'accepted' && (
                          <div className="flex flex-col gap-3">
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-xl"
                              onClick={() => updateOrderStatus(order.id, 'completed')}
                            >
                              <CheckCircle2 className="w-5 h-5 mr-2" />
                              Mark Ready
                            </Button>
                            {order.isDelayed ? (
                              <Button
                                variant="outline"
                                className="w-full font-bold h-10 rounded-xl text-amber-600 border-amber-200 bg-amber-50 hover:bg-amber-100"
                                onClick={() => setOrderDelayed(order.id, false)}
                              >
                                <AlertTriangle className="w-4 h-4 mr-2" />
                                Remove Delay Status
                              </Button>
                            ) : (
                              <DropdownMenu>
                                <DropdownMenuTrigger render={
                                  <Button
                                    variant="outline"
                                    className="w-full font-bold h-10 rounded-xl text-slate-500 border-slate-200 hover:bg-slate-50"
                                  >
                                    <AlertTriangle className="w-4 h-4 mr-2" />
                                    Mark as Delayed <ChevronDown className="w-4 h-4 ml-2" />
                                  </Button>
                                } />
                                <DropdownMenuContent align="end" className="w-48">
                                  <DropdownMenuItem onClick={() => setOrderDelayed(order.id, true, 5)} className="font-medium cursor-pointer">
                                    Delay by 5 mins
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setOrderDelayed(order.id, true, 10)} className="cursor-pointer text-slate-600">
                                    Delay by 10 mins
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setOrderDelayed(order.id, true, 20)} className="cursor-pointer text-slate-600">
                                    Delay by 20 mins
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setOrderDelayed(order.id, true, 30)} className="cursor-pointer text-slate-600">
                                    Delay by 30 mins
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setOrderDelayed(order.id, true)} className="cursor-pointer text-slate-600">
                                    Delay (no specific time)
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            )}
                          </div>
                        )}
                        {(order.status === 'completed' || order.status === 'cancelled') && (
                          <Button 
                            variant="outline"
                            className="w-full text-slate-400 border-slate-200 cursor-default h-12 rounded-xl font-bold"
                            disabled
                          >
                            {order.status === 'completed' ? 'Order Finished' : 'Order Cancelled'}
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add/Edit Item Dialog */}
      <Dialog open={isEditingItem} onOpenChange={setIsEditingItem}>
        <DialogContent className="sm:max-w-[525px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{currentItem.id ? 'Edit Menu Item' : 'Add New Menu Item'}</DialogTitle>
            <DialogDescription>
              Fill in the details for the menu item. For images, you can upload a file (max 1MB).
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Item Name</Label>
              <Input 
                id="name" 
                value={currentItem.name || ''} 
                onChange={(e) => setCurrentItem(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Targeting Name..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input 
                  id="price" 
                  type="number"
                  value={currentItem.price || ''} 
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                  placeholder="0.00"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Input 
                  id="category" 
                  value={currentItem.category || ''} 
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, category: e.target.value }))}
                  placeholder="e.g. Entrees, Sides"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                value={currentItem.description || ''} 
                onChange={(e) => setCurrentItem(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Tell customers about this dish..."
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Photo</Label>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg border bg-slate-50 flex items-center justify-center overflow-hidden shrink-0">
                  {currentItem.image ? (
                    <img src={currentItem.image} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <Utensils className="w-8 h-8 text-slate-300" />
                  )}
                </div>
                <div className="flex-grow space-y-2">
                  <Input 
                    id="image-upload" 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="cursor-pointer"
                  />
                  <p className="text-[10px] text-slate-500">Max size 1MB. Larger images may fail to save.</p>
                </div>
              </div>
              <div className="mt-2">
                <Label htmlFor="image-url" className="text-xs">Or use Image URL</Label>
                <Input 
                  id="image-url" 
                  value={currentItem.image || ''} 
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="https://..."
                  className="mt-1"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="isAvailable" 
                checked={currentItem.isAvailable !== false}
                onChange={(e) => setCurrentItem(prev => ({ ...prev, isAvailable: e.target.checked }))}
                className="w-4 h-4 text-red-600 focus:ring-red-500 border-slate-300 rounded"
              />
              <Label htmlFor="isAvailable" className="font-medium">Item is available for ordering</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditingItem(false)}>Cancel</Button>
            <Button onClick={saveMenuItem} className="bg-red-700 hover:bg-red-800" disabled={uploading}>
              {uploading ? 'Processing...' : 'Save Item'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeletingItem} onOpenChange={setIsDeletingItem}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              Confirm Deletion
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this menu item? This action cannot be undone and it will be removed from the public menu immediately.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setIsDeletingItem(false)}>Cancel</Button>
            <Button variant="destructive" onClick={deleteMenuItem}>Yes, Delete Item</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

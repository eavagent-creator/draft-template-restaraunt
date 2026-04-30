
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { businessConfig } from "../config/business";
import { LayoutDashboard, Utensils, Settings, Package, Plus, Trash2, Edit2, Image as ImageIcon } from "lucide-react";
import { motion } from "motion/react";

export default function AdminDashboard() {
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

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-white border p-1 rounded-xl shadow-sm h-auto grid grid-cols-3 gap-1">
            <TabsTrigger value="general" className="flex items-center justify-center gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
              <Settings className="w-4 h-4 shrink-0" />
              <span className="truncate">General</span>
            </TabsTrigger>
            <TabsTrigger value="menu" className="flex items-center justify-center gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
              <Utensils className="w-4 h-4 shrink-0" />
              <span className="truncate">Menu</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center justify-center gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
              <Package className="w-4 h-4 shrink-0" />
              <span className="truncate">Orders</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Update your restaurant's core details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Restaurant Name</Label>
                    <Input id="name" defaultValue={businessConfig.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Public Email</Label>
                    <Input id="email" defaultValue={businessConfig.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={businessConfig.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue={businessConfig.address} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="desc">Description</Label>
                  <Textarea id="desc" rows={4} defaultValue={businessConfig.description} />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-red-700 hover:bg-red-800">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Menu Management</h3>
              <Button className="bg-red-700 hover:bg-red-800 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Item
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessConfig.menu.map((item) => (
                <Card key={item.id} className="border-slate-200 shadow-sm overflow-hidden group">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-lg">
                        <Edit2 className="w-3.5 h-3.5" />
                      </Button>
                      <Button size="icon" variant="destructive" className="h-8 w-8 rounded-full shadow-lg">
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <span className="font-bold text-red-700">${item.price}</span>
                    </div>
                    <CardDescription className="line-clamp-2 mt-1">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>View and manage incoming customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-500 font-medium">No recent orders found</p>
                  <p className="text-slate-400 text-sm mt-1">Orders will appear here once customers start placing them.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

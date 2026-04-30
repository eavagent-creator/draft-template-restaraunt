import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/layout/Navbar";
import { LanguageSplash } from "./components/layout/LanguageSplash";
import ScrollToTop from "./components/layout/ScrollToTop";
import { Footer } from "./components/sections/Footer";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/AdminDashboard";
import AdminGuard from "./components/layout/AdminGuard";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
          <LanguageSplash />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/orders" element={<Orders />} />
            <Route 
              path="/admin" 
              element={
                <AdminGuard>
                  <AdminDashboard />
                </AdminGuard>
              } 
            />
          </Routes>
          <Footer />
          <Toaster richColors position="top-center" />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

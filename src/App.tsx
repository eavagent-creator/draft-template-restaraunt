import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import { Footer } from "./components/sections/Footer";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AdminGuard from "./components/layout/AdminGuard";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
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


import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { businessConfig } from "../../config/business";
import { auth, signInWithGoogle } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User as FirebaseUser } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";
import { 
  ShoppingBag, 
  Menu, 
  Plus, 
  Minus, 
  Trash2, 
  LogIn, 
  LogOut, 
  User,
  LayoutDashboard,
  Settings,
  Globe
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CheckoutDialog } from "../sections/CheckoutDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { cart, itemCount, total, subtotal, updateQuantity, removeFromCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      setIsNavOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => signOut(auth);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
    if (isAdminPage) return null;
    const itemClass = "hover:text-red-700 transition-colors flex items-center justify-between group";
    
    return (
      <>
        <Link 
          to="/menu"
          onClick={() => mobile && setIsNavOpen(false)}
          className={itemClass}
        >
          {t('nav.menu')}
        </Link>
        <Link 
          to="/orders"
          onClick={() => mobile && setIsNavOpen(false)}
          className={itemClass}
        >
          Orders
        </Link>
        <a 
          href="/#faq" 
          onClick={() => mobile && setIsNavOpen(false)}
          className={itemClass}
        >
          {t('nav.faq')}
        </a>
        <a 
          href="/#contact" 
          onClick={() => mobile && setIsNavOpen(false)}
          className={itemClass}
        >
          {t('nav.contact')}
        </a>
      </>
    );
  };

  const navBackground = isAdminPage || isScrolled ? "bg-white border-b border-slate-200 shadow-sm" : "bg-transparent";
  const textColor = isAdminPage || isScrolled ? "text-slate-800" : "text-white";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${navBackground}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className={`text-2xl font-bold tracking-tight ${textColor}`}>
             <span className="bg-red-700 text-white px-2 py-0.5 rounded-md mr-2">B</span>
             {businessConfig.name}
             {isAdminPage && <span className="ml-2 text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-tighter">Admin</span>}
          </Link>
          <div className={`hidden md:flex gap-8 text-sm font-semibold ${isAdminPage || isScrolled ? 'text-slate-600' : 'text-white/80'}`}>
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger render={
              <Button 
                variant="ghost" 
                size="icon" 
                className={`hidden sm:flex ${textColor} hover:bg-white/10`}
              >
                <Globe className="w-5 h-5" />
              </Button>
            } />
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'font-bold' : ''}>
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => i18n.changeLanguage('es')} className={i18n.language === 'es' ? 'font-bold' : ''}>
                🇪🇸 Español
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => i18n.changeLanguage('pt')} className={i18n.language === 'pt' ? 'font-bold' : ''}>
                🇧🇷 Português
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
            <SheetTrigger 
              render={
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`md:hidden ${textColor} hover:bg-white/10`}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              }
            />
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
              <SheetHeader className="text-left pb-6 border-b border-slate-100">
                <SheetTitle className="text-2xl font-extrabold text-slate-800">
                  <span className="bg-red-700 text-white px-2 py-0.5 rounded-md mr-2">B</span>
                  {t('nav.navigation')}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 py-8 font-bold text-slate-800 text-lg">
                <NavLinks mobile />
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                  <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">Language / Idioma</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'border-red-700 bg-red-50 text-red-700' : ''}>EN</Button>
                    <Button variant="outline" size="sm" onClick={() => i18n.changeLanguage('es')} className={i18n.language === 'es' ? 'border-red-700 bg-red-50 text-red-700' : ''}>ES</Button>
                    <Button variant="outline" size="sm" onClick={() => i18n.changeLanguage('pt')} className={i18n.language === 'pt' ? 'border-red-700 bg-red-50 text-red-700' : ''}>PT</Button>
                  </div>
                </div>
              </div>
              {!user && (
                <div className="mt-auto pt-8 border-t border-slate-100">
                  <Button onClick={handleLogin} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl">
                    <LogIn className="w-4 h-4 mr-2" /> {t('nav.signIn')}
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className={`rounded-lg overflow-hidden border-2 ${isAdminPage || isScrolled ? 'border-slate-200' : 'border-white/20'}`} />}>
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ""} className="w-full h-full object-cover" />
                ) : (
                  <User className={`w-5 h-5 ${textColor}`} />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5 text-xs font-semibold text-slate-500">
                  {user.email}
                </div>
                {isAdminPage ? (
                   <DropdownMenuItem render={<Link to="/" className="flex items-center w-full" />}>
                       <LayoutDashboard className="w-4 h-4 mr-2" /> {t('nav.viewSite')}
                   </DropdownMenuItem>
                ) : (
                   <DropdownMenuItem render={<Link to="/admin" target="_blank" rel="noopener noreferrer" className="flex items-center w-full" />}>
                       <Settings className="w-4 h-4 mr-2" /> {t('nav.dashboard')}
                   </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 font-medium">
                  <LogOut className="w-4 h-4 mr-2" /> {t('nav.logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogin}
              className={`hidden sm:flex items-center gap-2 font-bold ${textColor} hover:bg-white/10`}
            >
              <LogIn className="w-4 h-4" /> {t('nav.signIn')}
            </Button>
          )}

          {!isAdminPage && (
            <Sheet>
              <SheetTrigger
                render={
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`relative ${textColor} hover:bg-white/10`}
                  />
                }
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-700 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in border-2 border-white">
                    {itemCount}
                  </span>
                )}
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-white">
                <SheetHeader className="pb-6 border-b border-slate-100">
                  <SheetTitle className="text-2xl font-extrabold flex items-center gap-2 text-slate-800">
                    {t('cart.title')} <span className="bg-red-700 text-white text-[10px] px-2 py-0.5 rounded-full">{itemCount}</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-grow overflow-hidden flex flex-col">
                  {cart.length === 0 ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <ShoppingBag className="w-8 h-8 text-slate-400" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-400 italic">{t('cart.empty')}</h3>
                      <p className="text-slate-400 text-xs mt-1">{t('cart.emptySub')}</p>
                    </div>
                  ) : (
                    <ScrollArea className="flex-grow pr-4 py-6">
                      <div className="space-y-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-4">
                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-sm text-slate-800 leading-tight pr-4">{item.name}</h4>
                                <span className="font-bold text-red-700 text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                              <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3 bg-slate-100 rounded-lg px-3 py-1">
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="text-slate-500 hover:text-slate-900 transition-colors"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="text-xs font-bold w-4 text-center text-slate-800">{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="text-slate-500 hover:text-slate-900 transition-colors"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-slate-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  )}
                </div>

                {cart.length > 0 && (
                   <SheetFooter className="mt-auto border-t border-slate-100 pt-6 block sm:flex-col gap-4">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">{t('cart.subtotal')}</span>
                        <span className="font-bold text-slate-800">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">{t('cart.deliveryFee')}</span>
                        <span className="font-bold text-slate-800">${businessConfig.delivery.fee.toFixed(2)}</span>
                      </div>
                      <Separator className="my-2 border-dashed" />
                      <div className="flex justify-between text-xl font-extrabold text-slate-800">
                        <span>{t('cart.total')}</span>
                        <span className="text-red-700">${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <CheckoutDialog>
                      <Button className="w-full bg-red-700 hover:bg-red-800 text-white h-14 text-sm font-bold uppercase tracking-widest rounded-2xl shadow-lg transition-transform active:scale-95">
                        {t('cart.checkout')}
                      </Button>
                    </CheckoutDialog>
                  </SheetFooter>
                )}
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};


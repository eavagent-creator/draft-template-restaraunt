
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Plus, Info, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMenu } from "@/hooks/useMenu";

const MenuItemCard = ({ item, idx, handleAddToCart, t }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: idx * 0.05 }}
  >
    <Card className="group border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white rounded-2xl flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={t(`menu.items.${item.id}.name`, { defaultValue: item.name })}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {item.tags?.map((tag: string, i: number) => (
          <div key={i} className="absolute top-4 left-4">
            <Badge className="bg-red-700 text-white border-none text-[10px] font-bold uppercase tracking-widest shadow-lg">
              {tag}
            </Badge>
          </div>
        ))}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-red-700 transition-colors">
            {t(`menu.items.${item.id}.name`, { defaultValue: item.name })}
          </CardTitle>
          <span className="text-xl font-extrabold text-slate-900 tracking-tighter">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {t(`menu.items.${item.id}.description`, { defaultValue: item.description })}
        </p>
      </CardContent>
      <CardFooter className="pt-4 border-t border-slate-50">
        <Button 
          className="w-full bg-slate-900 hover:bg-red-700 text-white font-bold h-12 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
          onClick={() => handleAddToCart(item)}
        >
          <Plus className="w-4 h-4" />
          {t('menu.addToCart')}
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const Menu = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { menuItems, categories, loading } = useMenu();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const handleAddToCart = (item: any) => {
    const translatedItem = {
      ...item,
      name: t(`menu.items.${item.id}.name`, { defaultValue: item.name }),
      description: t(`menu.items.${item.id}.description`, { defaultValue: item.description }),
    };
    addToCart(translatedItem);
    toast.success(`${t('menu.available')}: ${translatedItem.name}`);
  };

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory && item.isAvailable !== false
  );

  const subcategories = Array.from(new Set(filteredItems.map(item => item.subcategory).filter(Boolean)))
    .sort() as string[];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container px-4 mx-auto">
        <header className="mb-8 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 border-red-200 text-red-700 bg-red-50 font-bold uppercase tracking-widest text-[10px] px-3 py-1">
              {t('menu.title')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {t('menu.subtitle')}
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Explore our full selection of coastal-inspired dishes, made fresh daily.
            </p>
          </motion.div>
        </header>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 h-11 font-bold text-sm transition-all ${
                activeCategory === category 
                ? "bg-red-700 text-white border-red-700 hover:bg-red-800" 
                : "border-slate-200 text-slate-600 hover:border-red-700 hover:text-red-700 bg-white"
              }`}
            >
              {t(`menu.categories.${category.toLowerCase()}`, { defaultValue: category })}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {filteredItems.length === 0 && !loading ? (
              <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200">
                <Utensils className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p className="text-slate-400 font-medium">No items available in this category.</p>
              </div>
            ) : (
              <>
                {/* Items without subcategories */}
                {filteredItems.filter(item => !item.subcategory).length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.filter(item => !item.subcategory).map((item, idx) => (
                      <MenuItemCard key={item.id} item={item} idx={idx} handleAddToCart={handleAddToCart} t={t} />
                    ))}
                  </div>
                )}

                {/* Grouped by subcategories */}
                {subcategories.map((subcat) => (
                  <div key={subcat} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-bold text-slate-700 uppercase tracking-wide">
                        {subcat}
                      </h3>
                      <div className="h-px bg-slate-200 flex-grow" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredItems.filter(item => item.subcategory === subcat).map((item, idx) => (
                        <MenuItemCard key={item.id} item={item} idx={idx} handleAddToCart={handleAddToCart} t={t} />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </motion.div>
        </AnimatePresence>
        
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center max-w-3xl mx-auto mt-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-400 mb-4">
            <Info className="w-6 h-6" />
          </div>
          <p className="text-slate-500 text-sm italic leading-relaxed">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. 
            Please inform your server of any allergies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

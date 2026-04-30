
import { useState } from "react";
import { businessConfig } from "../../config/business";
import { useCart } from "../../context/CartContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

import { useTranslation } from "react-i18next";

export const MenuGrid = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const categories = Array.from(new Set(businessConfig.menu.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredMenu = businessConfig.menu.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: any) => {
    const translatedItem = {
      ...item,
      name: t(`menu.items.${item.id}.name`),
      description: t(`menu.items.${item.id}.description`),
    };
    addToCart(translatedItem);
    toast.success(`${t('menu.available')}: ${translatedItem.name}`);
  };

  return (
    <section id="menu" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('menu.title')}</h3>
            <h2 className="text-4xl font-extrabold text-slate-800">{t('menu.subtitle')}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-lg px-6 font-bold text-xs uppercase tracking-wider h-10 ${activeCategory === category ? 'bg-red-700 hover:bg-red-800 border-none' : 'bg-white border-slate-200 text-slate-600'}`}
                onClick={() => setActiveCategory(category)}
              >
                {t(`menu.categories.${category.toLowerCase()}`)}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredMenu.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl group h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={t(`menu.items.${item.id}.name`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                       {item.tags?.map(tag => (
                         <Badge key={tag} variant="secondary" className="bg-red-700 text-white border-none text-[10px] uppercase font-bold py-1 px-3 rounded-md">
                           {tag}
                         </Badge>
                       ))}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-slate-800">{t(`menu.items.${item.id}.name`)}</CardTitle>
                      <span className="text-lg font-extrabold text-red-700">${item.price.toFixed(2)}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-slate-500 text-sm leading-relaxed">{t(`menu.items.${item.id}.description`)}</p>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-slate-100">
                    <Button 
                      className="w-full bg-white border-2 border-slate-100 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors h-11"
                      onClick={() => handleAddToCart(item)}
                    >
                      <Plus className="w-4 h-4 mr-2" /> {t('menu.addToCart')}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

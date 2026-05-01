
import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMenu } from "@/hooks/useMenu";

const Menu = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { menuItems, categories, loading } = useMenu();

  const handleAddToCart = (item: any) => {
    const translatedItem = {
      ...item,
      name: t(`menu.items.${item.id}.name`, { defaultValue: item.name }),
      description: t(`menu.items.${item.id}.description`, { defaultValue: item.description }),
    };
    addToCart(translatedItem);
    toast.success(`${t('menu.available')}: ${translatedItem.name}`);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container px-4 mx-auto">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 border-red-200 text-red-700 bg-red-50 font-bold uppercase tracking-widest text-[10px] px-3 py-1">
              {t('menu.title')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {t('menu.subtitle')}
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Explore our full selection of coastal-inspired dishes, made fresh daily in Bridgeport.
            </p>
          </motion.div>
        </header>

        {categories.map((category, categoryIdx) => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">
                {t(`menu.categories.${category.toLowerCase()}`, { defaultValue: category })}
              </h2>
              <div className="flex-grow h-px bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter(item => item.category === category && item.isAvailable !== false)
                .map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIdx * 0.1) + (idx * 0.05) }}
                  >
                    <Card className="group border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white rounded-2xl flex flex-col h-full">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={t(`menu.items.${item.id}.name`, { defaultValue: item.name })}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {item.tags?.map((tag, i) => (
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
                ))}
            </div>
          </div>
        ))}
        
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

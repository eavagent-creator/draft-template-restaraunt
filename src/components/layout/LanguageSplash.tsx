import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight } from 'lucide-react';

export const LanguageSplash = () => {
  const { i18n } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('i18nextLng_selected');
    if (!hasSelectedLanguage) {
      setShow(true);
    }
  }, []);

  const selectLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng_selected', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        />
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 10 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.95, y: 10 }}
           className="relative bg-white w-full max-w-[340px] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100"
        >
          <div className="bg-red-700 pt-8 pb-6 px-6 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm mb-3">
                <Globe className="w-5 h-5 opacity-90" />
              </div>
              <h2 className="text-xl font-extrabold tracking-tight mb-1">Select Language</h2>
              <p className="text-red-100 text-[13px] font-medium opacity-80">Choose your preferred idiom</p>
            </div>
          </div>
          
          <div className="p-5 space-y-2">
            <Button 
              onClick={() => selectLanguage('en')}
              className="w-full h-14 rounded-xl border-2 border-slate-50 bg-white text-slate-800 hover:border-red-700 hover:bg-red-50/30 transition-all flex items-center justify-between px-5 group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🇺🇸</span>
                <span className="font-bold">English</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-red-700" />
            </Button>

            <Button 
              onClick={() => selectLanguage('es')}
              className="w-full h-14 rounded-xl border-2 border-slate-50 bg-white text-slate-800 hover:border-red-700 hover:bg-red-50/30 transition-all flex items-center justify-between px-5 group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🇪🇸</span>
                <span className="font-bold">Español</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-red-700" />
            </Button>

            <Button 
              onClick={() => selectLanguage('pt')}
              className="w-full h-14 rounded-xl border-2 border-slate-50 bg-white text-slate-800 hover:border-red-700 hover:bg-red-50/30 transition-all flex items-center justify-between px-5 group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🇧🇷</span>
                <span className="font-bold">Português</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-red-700" />
            </Button>
          </div>
          
          <div className="px-6 pb-6 text-center">
            <p className="text-slate-300 text-[9px] uppercase font-bold tracking-[0.2em]">
              Coastal Flavors • Bridgeport
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

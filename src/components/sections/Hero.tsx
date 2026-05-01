
import { motion } from "motion/react";
import { businessConfig } from "../../config/business";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils } from "lucide-react";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-slate-900">
        {/* Blurred background for wide screens */}
        <div 
          className="absolute inset-0 blur-3xl opacity-50 scale-110"
          style={{
            backgroundImage: `url('/storefront.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Crisp contained foreground image */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url('/storefront.jpg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 text-center text-white px-4 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-tight mb-6 whitespace-pre-line">
            {t('hero.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-medium">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-full sm:w-auto">
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white w-full sm:min-w-[220px] h-14 rounded-full font-bold shadow-xl" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('hero.orderNow')}
              </Button>
            </div>
            <Link to="/menu" className="block w-full sm:w-auto">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 w-full sm:min-w-[220px] h-14 rounded-full font-bold text-white shadow-lg">
                {t('hero.viewMenu')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};


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
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 text-center text-white px-4 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-4 mt-4 md:mt-0">
            <Utensils className="w-3 h-3" />
            {t('footer.about')} {businessConfig.name}
          </span>
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

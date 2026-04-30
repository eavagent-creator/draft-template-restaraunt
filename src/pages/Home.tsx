
import { Hero } from "../components/sections/Hero";
import { MenuGrid } from "../components/sections/MenuGrid";
import { FAQ } from "../components/sections/FAQ";
import { businessConfig } from "../config/business";
import { Heart, Truck, Clock, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const Features = () => (
  <section className="py-20 bg-white border-y border-slate-100">
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Heart className="text-red-700" />, title: "Fresh Ingredients", desc: "Sourced from local Bridgeport markets daily." },
          { icon: <Truck className="text-red-700" />, title: "Fast Delivery", desc: `Estimated ${businessConfig.delivery.estimatedTime} in local areas.` },
          { icon: <Clock className="text-red-700" />, title: "Easy Pickup", desc: "Ready in 15-20 mins. Skip the wait." },
          { icon: <ShieldCheck className="text-red-700" />, title: "Secure Payment", desc: "Safe and encrypted checkout process." }
        ].map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-slate-500">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <Hero />
      <MenuGrid />
      <Features />
      <section id="faq">
        <FAQ />
      </section>
    </main>
  );
}

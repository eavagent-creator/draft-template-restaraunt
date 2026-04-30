
import { businessConfig } from "../../config/business";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-24 pb-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
               <span className="bg-red-700 text-white px-2 py-0.5 rounded-md mr-2">B</span>
               {businessConfig.name}
            </a>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              A Bridgeport landmark serving the community with passion since 2015. Crafted with locally sourced ingredients and urban pride.
            </p>
            <div className="flex items-center gap-4">
              <a href={businessConfig.socials.instagram} className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-700 transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={businessConfig.socials.facebook} className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-700 transition-colors text-white">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest mb-8 border-b border-white/10 pb-2">Hours</h4>
            <ul className="space-y-4 text-[13px]">
              {businessConfig.hours.map((hour, i) => (
                <li key={i} className="flex justify-between">
                  {hour}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest mb-8 border-b border-white/10 pb-2">Locate</h4>
            <address className="not-italic text-[13px] leading-loose">
              <div className="font-bold text-white mb-1">Bridgeport Downtown</div>
              {businessConfig.address}<br />
              {businessConfig.city}, {businessConfig.state} {businessConfig.zip}
            </address>
          </div>

          <div>
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest mb-8 border-b border-white/10 pb-2">Connect</h4>
            <ul className="space-y-4 text-[13px]">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-red-500">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                {businessConfig.phone}
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-red-500">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                {businessConfig.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center text-[10px] uppercase font-bold tracking-widest text-slate-600 flex flex-col items-center gap-4">
          <p>© {new Date().getFullYear()} {businessConfig.name} • DineDash Professional Edition</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <span className="text-slate-800">•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <span className="text-slate-800">•</span>
            <Link 
              to="/admin" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-red-700 transition-colors"
            >
              Restaurant Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

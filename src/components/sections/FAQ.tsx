
import { businessConfig } from "../../config/business";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const { t } = useTranslation();
  return (
    <section id="faq" className="py-24 bg-white border-y border-slate-200">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="mb-12">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-red-700 mb-2 font-sans">{t('nav.faq')}</h3>
          <h2 className="text-3xl font-extrabold text-slate-800 leading-none tracking-tight">{t('faq.title')}</h2>
        </div>

        <Accordion className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {businessConfig.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100">
              <AccordionTrigger className="text-sm font-bold text-slate-700 py-6 hover:no-underline text-left">
                {t(`faq.questions.q${index + 1}`)}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-xs leading-relaxed pb-6">
                {t(`faq.questions.a${index + 1}`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

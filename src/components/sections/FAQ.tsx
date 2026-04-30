
import { businessConfig } from "../../config/business";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="mb-12">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-red-700 mb-2 font-sans">Common Questions</h3>
          <h2 className="text-3xl font-extrabold text-slate-800 leading-none tracking-tight">Everything You Need to Know</h2>
        </div>

        <Accordion className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {businessConfig.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100">
              <AccordionTrigger className="text-sm font-bold text-slate-700 py-6 hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-xs leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

export type FaqItem = { q: string; a: string };

export function Faq({
  items,
  eyebrow = "FAQs",
  title = "Answers before you book",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 size-[30rem] rounded-full bg-primary/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[28rem] rounded-full bg-accent/10 blur-[150px]" />
      <div className="shell relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="bg-gradient-red h-px w-10" />
            {eyebrow}
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06]">
            {title}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05} y={24}>
                <div
                  className={`glass overflow-hidden rounded-[var(--radius-3xl)] shadow-[var(--shadow-luxe)] transition-all duration-500 ease-[var(--ease-luxe)] ${
                    isOpen
                      ? "border-primary/50 shadow-[var(--shadow-glow)]"
                      : "hover:border-primary/30"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                  >
                    <span
                      className={`font-display text-base font-semibold transition-colors duration-300 sm:text-lg ${
                        isOpen ? "text-primary" : ""
                      }`}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={`grid size-10 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                        isOpen ? "bg-[var(--gradient-red)] text-white" : "bg-white/6 text-primary"
                      }`}
                    >
                      <Plus className="size-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-7 sm:px-8">
                          <div className="hairline mb-5 opacity-60" />
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
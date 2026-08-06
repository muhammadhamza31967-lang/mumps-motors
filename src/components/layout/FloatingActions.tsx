import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-center gap-3">
      <AnimatePresence>
        {visible ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass grid size-12 place-items-center rounded-full text-foreground transition hover:border-primary/60"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <a
        href={site.phoneHref}
        aria-label="Call Mumps Motors"
        className="glass grid size-12 place-items-center rounded-full text-foreground transition hover:-translate-y-1 hover:border-accent/70"
      >
        <Phone className="size-5" />
      </a>

      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-gradient-red grid size-14 place-items-center rounded-full text-white transition hover:-translate-y-1"
        style={{ animation: "pulse-ring 2.6s infinite" }}
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
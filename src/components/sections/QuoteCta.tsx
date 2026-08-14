import { ArrowRight, Banknote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { useQuote } from "@/components/QuoteModal";
import { logoUrl } from "@/components/brand/Logo";

export function QuoteCta() {
  const { open } = useQuote();

  return (
    <section className="relative overflow-hidden">
      <div className="shell relative py-14 lg:py-20">
        <div className="luxe-card animated-border relative overflow-hidden px-6 py-12 text-center sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute inset-x-0 -top-28 mx-auto h-56 w-[36rem] rounded-full bg-primary/35 blur-[110px]" />
          <img
            src={logoUrl}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-16 left-1/2 w-[40rem] max-w-none -translate-x-1/2 opacity-[0.06]"
          />
          <Reveal>
            <span className="eyebrow justify-center">
              <Banknote className="size-4 text-primary" />
              No obligation quote
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.1rem,5vw,4rem)] font-bold leading-[1.03]">
              Keep Your Vehicle Running <span className="text-chrome">Like New</span>
            </h2>
            <button onClick={open} className="btn-red mt-10">
              Request Free Quote
              <ArrowRight className="size-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
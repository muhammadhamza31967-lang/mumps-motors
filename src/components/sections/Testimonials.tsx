import { useState } from "react";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Testimonial = { name: string; vehicle: string; review: string };

const testimonials: Testimonial[] = [
  {
    name: "James Whitfield",
    vehicle: "BMW 3 Series — Full Service",
    review:
      "Faultless from start to finish. They talked me through every item on the report and the car has never driven better. Genuinely premium treatment.",
  },
  {
    name: "Aisha Rahman",
    vehicle: "Audi A4 — Brake Replacement",
    review:
      "Booked in on WhatsApp within minutes and the brakes were done the same day. Honest pricing and no upselling whatsoever.",
  },
  {
    name: "Daniel Okoye",
    vehicle: "Mercedes C-Class — Suspension",
    review:
      "The ride quality is transformed. You can tell these guys actually care about the work rather than just turning cars around.",
  },
  {
    name: "Sophie Marsden",
    vehicle: "VW Golf GTI — Engine Rebuild",
    review:
      "A full rebuild done properly, with photo updates the whole way through. Completely trust them with my car now.",
  },
  {
    name: "Michael Grant",
    vehicle: "Range Rover Sport — Diagnostics",
    review:
      "Two other garages couldn't find the fault. Mumps Motors diagnosed it in an afternoon and fixed it for a fair price.",
  },
  {
    name: "Priya Sharma",
    vehicle: "Ford Focus — Full Servicing",
    review:
      "Immaculate workshop, superb communication and the car came back cleaner than I left it. Highly recommended.",
  },
];

function Card({ item }: { item: Testimonial }) {
  return (
    <article className="glass group/card relative w-[19rem] shrink-0 overflow-hidden rounded-[var(--radius-3xl)] p-7 shadow-[var(--shadow-luxe)] transition-all duration-500 ease-[var(--ease-luxe)] hover:-translate-y-2 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] sm:w-[23rem]">
      <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/15 blur-[60px] transition-opacity duration-500 group-hover/card:opacity-100 opacity-60" />
      <span className="bg-gradient-red relative grid size-11 place-items-center rounded-xl text-white shadow-[var(--shadow-glow)]">
        <Quote className="size-5" />
      </span>
      <div className="mt-5 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.review}</p>
      <div className="hairline my-5 opacity-60" />
      <p className="font-display text-base font-semibold">{item.name}</p>
      <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        {item.vehicle}
      </p>
    </article>
  );
}

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const track = [...testimonials, ...testimonials];

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-10 size-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />
      <div className="shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="bg-gradient-red h-px w-10" />
            Testimonials
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06]">
            Trusted by drivers <span className="text-chrome">across Oldham</span>
          </h2>
        </Reveal>
      </div>

      <div
        className="relative mt-14 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
        <div
          className="flex w-max gap-6 px-6"
          style={{
            animation: "marquee-x 44s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {track.map((item, i) => (
            <Card key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>

      <div className="shell relative mt-12 text-center">
        <a
          href="https://share.google/U6Wk8tUcp0xwe8rTo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          Submit a Review
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

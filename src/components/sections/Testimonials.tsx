import { useState } from "react";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const REVIEWS_URL = "https://share.google/U6Wk8tUcp0xwe8rTo";

type Testimonial = { name: string; vehicle: string; review: string; profileUrl?: string };

const testimonials: Testimonial[] = [
  {
    name: "Yas",
    vehicle: "Ford Transit — Engine Rebuild",
    review:
      "Had my engine rebuilt from them for a Ford transit absolute great work cannot recommend them enough honestly go above and beyond for all their customers will definitely be back for services! Great team and great work",
  },
  {
    name: "Reece Gradwell",
    profileUrl: REVIEWS_URL,
    vehicle: "Google Review",
    review:
      "Excellent service from Mumps Motor Ltd! The team were friendly, professional and did a fantastic job on my vehicle. They kept me informed throughout and the work was completed quickly and to a very high standard. A special mention to Muhad, who went above and beyond to help — knowledgeable, honest and made the whole experience stress-free. Highly recommend to anyone looking for reliable vehicle repairs and outstanding customer service.",
  },
  {
    name: "Tayler Green",
    profileUrl: REVIEWS_URL,
    vehicle: "Google Review",
    review:
      "Great customer experience, car was handled well and the issue was fixed would recommend if you a want cheap and high grade service.",
  },
  {
    name: "Junaid Khan",
    vehicle: "Google Review",
    review:
      "Solid company no messing about and straight forward with you in regards to your vehicle. Highly recommend",
  },
];

function Card({ item }: { item: Testimonial }) {
  return (
    <article className="glass group/card relative flex h-[24rem] w-[19rem] shrink-0 flex-col overflow-hidden rounded-[var(--radius-3xl)] p-7 shadow-[var(--shadow-luxe)] transition-all duration-500 ease-[var(--ease-luxe)] hover:-translate-y-2 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] sm:w-[23rem]">
      <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/15 blur-[60px] transition-opacity duration-500 group-hover/card:opacity-100 opacity-60" />
      <span className="bg-gradient-red relative grid size-11 shrink-0 place-items-center rounded-xl text-white shadow-[var(--shadow-glow)]">
        <Quote className="size-5" />
      </span>
      <div className="mt-5 flex shrink-0 gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-primary text-primary" />
        ))}
      </div>
      <div className="mt-4 min-h-0 flex-1 overflow-hidden">
        <p className="line-clamp-6 text-sm leading-relaxed text-muted-foreground">{item.review}</p>
      </div>
      <div className="hairline my-5 opacity-60" />
      <div className="shrink-0">
        {item.profileUrl ? (
          <a
            href={item.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-base font-semibold underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {item.name}
          </a>
        ) : (
          <p className="font-display text-base font-semibold">{item.name}</p>
        )}
        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          {item.vehicle}
        </p>
      </div>
    </article>
  );
}

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const track = [...testimonials, ...testimonials, ...testimonials];

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

        <Reveal className="mx-auto mt-8 max-w-3xl">
          <div className="glass mx-auto flex flex-col items-center justify-center gap-5 rounded-[var(--radius-3xl)] px-7 py-6 shadow-[var(--shadow-luxe)] sm:flex-row sm:gap-8">
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl font-bold leading-none text-chrome">5.0</span>
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#f5b301] text-[#f5b301]" />
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  <Info className="size-3.5" />
                  12 reviews
                </span>
              </div>
            </div>
            <span className="hidden h-10 w-px bg-border/60 sm:block" />
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              All Reviews
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>

      <div
        className="relative mt-6 overflow-x-clip overflow-y-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
        <div
          className="flex w-max items-stretch gap-6 px-6 py-12"
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

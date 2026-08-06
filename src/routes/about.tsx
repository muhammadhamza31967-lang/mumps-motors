import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, Gem, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { useQuote } from "@/components/QuoteModal";
import { logoUrl } from "@/components/brand/Logo";
import heroGarage from "@/assets/hero-garage.jpg";
import mechanic from "@/assets/mechanic.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Mumps Motors | Trusted Automotive Workshop" },
      {
        name: "description",
        content:
          "Meet Mumps Motor — trusted automotive repair and vehicle servicing professionals delivering honest advice and high-quality workmanship.",
      },
      { property: "og:title", content: "About Mumps Motors | Trusted Automotive Workshop" },
      {
        property: "og:description",
        content:
          "Our story, mission, vision and values as a premium vehicle servicing and engine rebuild workshop.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: ShieldCheck, title: "Integrity", copy: "Straight answers and recommendations you can verify." },
  { icon: Gem, title: "Quality", copy: "Premium parts and finishing on every repair we sign off." },
  { icon: Compass, title: "Reliability", copy: "Consistent workmanship and timelines you can plan around." },
  { icon: HeartHandshake, title: "Customer Care", copy: "A workshop experience built around your peace of mind." },
];

function About() {
  const { open } = useQuote();

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroGarage}
          alt="Luxury garage interior at Mumps Motors"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b0b0bf2_0%,#0b0b0bcc_50%,#0b0b0b_100%)]" />
        <img
          src={logoUrl}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-24 w-[40rem] max-w-none opacity-[0.05]"
        />
        <div className="shell relative pb-24 pt-44 lg:pb-32 lg:pt-52">
          <Reveal>
            <span className="eyebrow">
              <span className="bg-gradient-red h-px w-10" />
              About Mumps Motor
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.3rem,5.6vw,4.4rem)] font-bold leading-[1.03]">
              Trusted Automotive Repair &amp;{" "}
              <span className="text-chrome">Vehicle Servicing</span> Professionals
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <span className="bg-gradient-red h-px w-10" />
              Our Story
            </span>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.06]">
              Built on honest advice and precise workmanship
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At Mumps Motor, we are passionate about delivering reliable automotive solutions that
              keep our customers safe on the road. Our workshop provides professional servicing,
              mechanical repairs, brake repairs, suspension work, engine fittings and complete engine
              rebuilds for a wide range of vehicles.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our goal is simple—to provide honest advice, quality workmanship and dependable service
              that customers can trust.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={open} className="btn-red">
                Request Quote
                <ArrowRight className="size-4" />
              </button>
              <Link to="/services" className="btn-ghost">
                Our Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <img
              src={mechanic}
              alt="Qualified technician working inside the Mumps Motors workshop"
              loading="lazy"
              width={1200}
              height={1408}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-luxe)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface/50">
        <div className="shell grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Mission",
              copy: "To provide reliable, affordable and high-quality automotive services that maximize vehicle performance while building lasting relationships with our customers through honesty, professionalism and exceptional workmanship.",
            },
            {
              icon: Eye,
              title: "Vision",
              copy: "To become the preferred automotive workshop known for quality repairs, customer satisfaction and trusted mechanical expertise.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="luxe-card animated-border h-full p-9">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary">
                  <item.icon className="size-5" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="bg-gradient-red h-px w-10" />
              Values
            </span>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.06]">
              What every job is measured against
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.07}>
                <article className="luxe-card h-full p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent/15 text-accent">
                    <value.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
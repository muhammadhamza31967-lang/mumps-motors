import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Car,
  ClipboardCheck,
  Clock,
  Cog,
  Disc3,
  Gauge,
  HandCoins,
  Handshake,
  HeartHandshake,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { Counter, Reveal } from "@/components/motion/Reveal";
import { useQuote } from "@/components/QuoteModal";
import { logoUrl } from "@/components/brand/Logo";
import heroGarage from "@/assets/hero-garage.jpg";
import heroCar from "@/assets/hero-car.png";
import mechanic from "@/assets/mechanic.jpg";
import svcServicing from "@/assets/svc-servicing.jpg";
import svcBrakes from "@/assets/svc-brakes.jpg";
import svcSuspension from "@/assets/svc-suspension.jpg";
import svcFitting from "@/assets/svc-fitting.jpg";
import svcRebuild from "@/assets/svc-rebuild.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Mumps Motors | Premium Car Service & Auto Repair Workshop" },
      {
        name: "description",
        content:
          "Expert car service, auto repair, brake repairs, suspension repair, engine fittings and engine rebuilds. Premium automotive workshop you can trust.",
      },
      { property: "og:title", content: "Mumps Motors | Premium Car Service & Auto Repair" },
      {
        property: "og:description",
        content:
          "Professional vehicle servicing and mechanical repairs delivered with precision workmanship and honest advice.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const stats = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Happy Customers", value: 4200, suffix: "+" },
  { label: "Vehicles Repaired", value: 9800, suffix: "+" },
  { label: "Engine Rebuilds", value: 650, suffix: "+" },
  { label: "Customer Satisfaction", value: 99, suffix: "%" },
];

const whyChoose = [
  { icon: Wrench, title: "Experienced Mechanics", copy: "Qualified technicians with years of hands-on workshop expertise." },
  { icon: BadgeCheck, title: "Quality Workmanship", copy: "Every repair finished to a standard we'd accept on our own vehicles." },
  { icon: HandCoins, title: "Honest Pricing", copy: "Transparent quotes with no hidden costs or unnecessary work." },
  { icon: Clock, title: "Fast Turnaround", copy: "Efficient scheduling that gets you back on the road sooner." },
  { icon: HeartHandshake, title: "Customer Satisfaction", copy: "Clear communication and aftercare on every single job." },
  { icon: ShieldCheck, title: "Reliable Service", copy: "Dependable diagnostics and repairs backed by quality parts." },
];

const services = [
  {
    icon: Gauge,
    image: svcServicing,
    title: "Full Servicing",
    copy: "Regular vehicle servicing that keeps your vehicle reliable, fuel-efficient and roadworthy.",
  },
  {
    icon: Disc3,
    image: svcBrakes,
    title: "Brakes & Repairs",
    copy: "Professional brake inspections, replacements and repairs for maximum driving safety.",
  },
  {
    icon: Car,
    image: svcSuspension,
    title: "Suspension Work",
    copy: "Improve comfort, stability and handling with expert suspension diagnostics and repairs.",
  },
  {
    icon: Cog,
    image: svcFitting,
    title: "Engine Fittings",
    copy: "Professional engine fitting and replacement services completed with precision and care.",
  },
  {
    icon: Wrench,
    image: svcRebuild,
    title: "Engine Rebuilds",
    copy: "Complete engine rebuilding solutions designed to restore performance and extend engine life.",
  },
];

const trustPoints = [
  "Skilled & Qualified Technicians",
  "Modern Equipment",
  "Quality Replacement Parts",
  "Affordable Pricing",
  "Honest Recommendations",
  "Customer-Focused Service",
  "Quick Turnaround Times",
  "High-Quality Workmanship",
];

const process = [
  { icon: ClipboardCheck, step: "01", title: "Request a Quote", copy: "Tell us about your vehicle and the service you require." },
  { icon: Search, step: "02", title: "Vehicle Inspection", copy: "Our technicians inspect your vehicle and recommend the best solution." },
  { icon: Wrench, step: "03", title: "Professional Repairs", copy: "We complete all work using quality parts and expert workmanship." },
  { icon: Sparkles, step: "04", title: "Drive with Confidence", copy: "Your vehicle is ready to perform safely and efficiently." },
];

function Home() {
  const { open } = useQuote();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const carX = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.img
          src={heroGarage}
          alt="Luxury sports car on a lift inside a dark premium workshop"
          width={1920}
          height={1088}
          style={{ y: bgY }}
          className="absolute inset-0 size-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#0b0b0be6_0%,#0b0b0bcc_45%,#0b0b0b66_100%)]" />
        <div className="grid-noise absolute inset-0 opacity-40" />
        <img
          src={logoUrl}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 w-[52rem] max-w-none -translate-y-1/2 opacity-[0.05] mix-blend-screen"
        />

        <div className="shell relative grid min-h-[100svh] items-center gap-10 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
          <motion.div style={{ opacity: fade }}>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
            >
              <span className="bg-gradient-red h-px w-10" />
              Premium Automotive Workshop
            </motion.span>

            <motion.h1
              className="mt-6 max-w-2xl font-display text-[clamp(2.3rem,6vw,4.6rem)] font-bold leading-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Professional Car Servicing &amp;{" "}
              <span className="text-chrome">Mechanical Repairs</span> You Can Trust
            </motion.h1>

            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.78, duration: 0.9 }}
            >
              Keep your vehicle running at its best with expert servicing, repairs, and engine
              solutions from Mumps Motor. Our experienced mechanics provide reliable workmanship,
              honest advice, and quality service to ensure your vehicle performs safely and
              efficiently.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.8 }}
            >
              <button onClick={open} className="btn-red">
                Request Free Quote
                <ArrowRight className="size-4" />
              </button>
              <a href="tel:+27600000000" className="btn-ghost">
                <Phone className="size-4" />
                Call Now
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            style={{ x: carX }}
            initial={{ opacity: 0, x: 90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={heroCar}
              alt="Silver luxury sports coupe"
              width={1408}
              height={912}
              className="w-[125%] max-w-none translate-x-16 drop-shadow-[0_50px_60px_rgba(0,0,0,0.65)]"
            />
            <div className="absolute -left-6 top-4 space-y-3">
              {[
                { icon: ShieldCheck, label: "Quality Service" },
                { icon: Users, label: "Professional Mechanics" },
                { icon: Clock, label: "Fast Turnaround" },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  className="glass flex items-center gap-3 rounded-2xl px-4 py-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + i * 0.16, duration: 0.7 }}
                >
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.4 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary"
                  >
                    <card.icon className="size-4" />
                  </motion.span>
                  <span className="text-sm font-medium">{card.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="relative border-y border-white/8 bg-surface/70">
        <div className="shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold text-chrome sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-20 size-[32rem] rounded-full bg-accent/10 blur-[140px]" />
        <div className="shell relative">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="bg-gradient-red h-px w-10" />
              Why Choose Us
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.05]">
              Engineering standards you can <span className="text-primary">feel</span> on the road
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="luxe-card animated-border h-full p-8">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad relative bg-surface/50">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <span className="eyebrow">
                <span className="bg-gradient-red h-px w-10" />
                Our Services
              </span>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.05]">
                Complete mechanical care under one roof
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/services" className="btn-ghost">
                All Services
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.07} className={i === 0 ? "lg:row-span-2" : ""}>
                <article className="luxe-card animated-border group h-full overflow-hidden">
                  <div className={`relative overflow-hidden ${i === 0 ? "h-72 lg:h-[26rem]" : "h-52"}`}>
                    <img
                      src={service.image}
                      alt={`${service.title} at Mumps Motors`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b66] to-transparent" />
                    <span className="glass absolute left-5 top-5 grid size-11 place-items-center rounded-xl text-primary">
                      <service.icon className="size-5" />
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.copy}</p>
                    <Link
                      to="/services"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition group-hover:gap-3"
                    >
                      Learn More <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-pad relative overflow-hidden">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="bg-gradient-red absolute -left-4 -top-4 size-32 rounded-3xl opacity-30 blur-2xl" />
              <img
                src={mechanic}
                alt="Professional mechanic servicing a luxury car engine"
                loading="lazy"
                width={1200}
                height={1408}
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-luxe)]"
              />
              <div className="glass absolute -bottom-8 right-4 rounded-2xl px-6 py-5 sm:right-8">
                <p className="font-display text-3xl font-bold text-chrome">
                  <Counter to={15} suffix="+" />
                </p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Years in the workshop
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <span className="eyebrow">
              <span className="bg-gradient-red h-px w-10" />
              About Mumps Motor
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06]">
              Reliable automotive solutions, delivered honestly
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
            <Link to="/about" className="btn-red mt-9">
              Learn More
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TRUST POINTS */}
      <section className="section-pad relative bg-surface/50">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="bg-gradient-red h-px w-10" />
              Why Customers Trust Us
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06]">
              The details that keep drivers coming back
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <div className="luxe-card flex h-full items-start gap-4 p-6">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    <Handshake className="size-4" />
                  </span>
                  <p className="text-sm font-medium leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad relative overflow-hidden">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="bg-gradient-red h-px w-10" />
              Our Process
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06]">
              Four steps from quote to confident driving
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="hairline absolute left-0 right-0 top-8 hidden lg:block" />
            <div className="grid gap-8 lg:grid-cols-4">
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.1}>
                  <div className="relative">
                    <span className="bg-gradient-red relative z-10 grid size-16 place-items-center rounded-2xl text-white shadow-[var(--shadow-glow)]">
                      <item.icon className="size-6" />
                    </span>
                    <p className="mt-6 font-display text-5xl font-bold text-white/8">{item.step}</p>
                    <h3 className="-mt-6 font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="shell relative py-20 lg:py-28">
          <div className="luxe-card animated-border relative overflow-hidden px-8 py-16 text-center sm:px-16">
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
    </>
  );
}
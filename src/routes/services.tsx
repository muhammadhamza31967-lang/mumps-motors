import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Car, Check, Cog, Disc3, Gauge, Wrench } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { useQuote } from "@/components/QuoteModal";
import { logoUrl } from "@/components/brand/Logo";
import heroGarage from "@/assets/hero-garage.jpg";
import svcServicing from "@/assets/svc-servicing.jpg";
import svcBrakes from "@/assets/svc-brakes.jpg";
import svcSuspension from "@/assets/svc-suspension.jpg";
import svcFitting from "@/assets/svc-fitting.jpg";
import svcRebuild from "@/assets/svc-rebuild.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services | Car Service, Brake & Engine Repairs — Mumps Motors" },
      {
        name: "description",
        content:
          "Full servicing, brake repairs, suspension repair, engine fittings and engine rebuilds by professional mechanics at Mumps Motors.",
      },
      { property: "og:title", content: "Services | Mumps Motors Automotive Workshop" },
      {
        property: "og:description",
        content:
          "Explore our full range of vehicle maintenance, brake, suspension and engine services.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    icon: Gauge,
    image: svcServicing,
    title: "Full Servicing",
    intro:
      "Regular vehicle servicing is essential for maintaining performance, improving fuel efficiency and preventing costly repairs.",
    items: [
      "Engine Oil Change",
      "Oil Filter Replacement",
      "Fluid Checks",
      "Brake Inspection",
      "Battery Check",
      "General Vehicle Inspection",
      "Safety Inspection",
    ],
  },
  {
    icon: Disc3,
    image: svcBrakes,
    title: "Brakes & Repairs",
    intro:
      "Professional brake inspections, replacements and repairs for maximum driving safety.",
    items: [
      "Brake Pad Replacement",
      "Brake Disc Repairs",
      "Brake Fluid Check",
      "Brake Diagnostics",
      "Complete Brake Repairs",
    ],
  },
  {
    icon: Car,
    image: svcSuspension,
    title: "Suspension Work",
    intro:
      "Improve comfort, stability and handling with expert suspension diagnostics and repairs.",
    items: [
      "Shock Absorber Replacement",
      "Suspension Repairs",
      "Steering Inspection",
      "Bush Replacement",
      "Suspension Diagnostics",
    ],
  },
  {
    icon: Cog,
    image: svcFitting,
    title: "Engine Fittings",
    intro:
      "Professional engine fitting and replacement services completed with precision and care.",
    items: [
      "Engine Replacement",
      "Engine Installation",
      "Component Fitting",
      "Engine Diagnostics",
      "Performance Checks",
    ],
  },
  {
    icon: Wrench,
    image: svcRebuild,
    title: "Engine Rebuilds",
    intro:
      "Complete engine rebuilding solutions designed to restore performance and extend engine life.",
    items: [
      "Complete Engine Inspection",
      "Internal Component Replacement",
      "Cylinder Head Repairs",
      "Gasket Replacement",
      "Engine Reassembly",
      "Performance Testing",
    ],
  },
];

function Services() {
  const { open } = useQuote();

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroGarage}
          alt="Premium automotive workshop"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b0b0bf2_0%,#0b0b0bd9_55%,#0b0b0b_100%)]" />
        <img
          src={logoUrl}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-20 top-28 w-[42rem] max-w-none opacity-[0.05]"
        />
        <div className="shell relative pb-24 pt-44 lg:pb-32 lg:pt-52">
          <Reveal>
            <span className="eyebrow">
              <span className="bg-gradient-red h-px w-10" />
              Our Services
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.3rem,5.6vw,4.4rem)] font-bold leading-[1.03]">
              Precision <span className="text-chrome">Automotive Services</span> For Every Vehicle
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              From routine vehicle maintenance to complete engine rebuilds, every job is handled by
              qualified technicians using modern equipment and quality replacement parts.
            </p>
            <button onClick={open} className="btn-red mt-9">
              Request Quote
              <ArrowRight className="size-4" />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell space-y-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.05}>
              <article
                className={`luxe-card animated-border group grid gap-0 overflow-hidden lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative h-64 overflow-hidden lg:h-full lg:min-h-[24rem]">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0bcc] to-transparent" />
                </figure>
                <div className="p-8 lg:p-12">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary">
                    <service.icon className="size-5" />
                  </span>
                  <h2 className="mt-6 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-bold">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.intro}</p>
                  <h3 className="mt-8 text-[0.7rem] uppercase tracking-[0.24em] text-silver">
                    Includes
                  </h3>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button onClick={open} className="btn-ghost mt-9">
                    Book This Service
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
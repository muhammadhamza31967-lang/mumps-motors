import { Link } from "@tanstack/react-router";
import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
];

const services = [
  "Full Servicing",
  "Brakes & Repairs",
  "Suspension Work",
  "Engine Fittings",
  "Engine Rebuilds",
];

export function Footer() {
  return (
    <footer className="bg-gradient-night relative overflow-hidden border-t border-white/8">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]" />
      <div className="shell relative py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium automotive servicing, mechanical repairs and complete engine rebuilds —
              delivered with honest advice and workshop-grade precision.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid size-10 place-items-center rounded-full border border-white/12 text-muted-foreground transition hover:-translate-y-1 hover:border-primary/60 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-silver">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-silver">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="transition hover:text-primary">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-silver">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={site.phoneHref} className="hover:text-foreground">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {site.address}
              </li>
            </ul>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-7 flex items-center gap-2 rounded-full border border-white/12 bg-white/5 p-1.5"
            >
              <input
                type="email"
                placeholder="Newsletter email"
                aria-label="Newsletter email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground/70"
              />
              <button type="submit" className="btn-red !px-5 !py-2.5 !text-[0.65rem]">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-ghost !px-5 !py-2.5 !text-[0.65rem]"
          >
            <ArrowUp className="size-3.5" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
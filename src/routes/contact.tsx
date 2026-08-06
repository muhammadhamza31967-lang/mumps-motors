import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Navigation, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { buildWhatsAppUrl, serviceNames, site } from "@/lib/site";
import { logoUrl } from "@/components/brand/Logo";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Mumps Motors | Book Your Car Service" },
      {
        name: "description",
        content:
          "Contact Mumps Motors to book professional vehicle servicing, brake repairs, suspension repair or an engine rebuild. Fast WhatsApp booking.",
      },
      { property: "og:title", content: "Contact Mumps Motors | Book Your Car Service" },
      {
        property: "og:description",
        content: "Get in touch with our automotive workshop for a free, no-obligation quote.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const field =
  "w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/25";

function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "");
    const url = buildWhatsAppUrl("New Service Enquiry", [
      ["Full Name", get("name")],
      ["Phone Number", get("phone")],
      ["Email", get("email")],
      ["Vehicle Make", get("make")],
      ["Vehicle Model", get("model")],
      ["Service Required", get("service")],
      ["Preferred Booking Date", get("date")],
      ["Additional Information", get("notes")],
    ]);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div className="pointer-events-none absolute -left-40 top-40 size-[34rem] rounded-full bg-primary/12 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-accent/10 blur-[150px]" />
      <img
        src={logoUrl}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 w-[38rem] max-w-none opacity-[0.04]"
      />

      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="bg-gradient-red h-px w-10" />
            Contact Us
          </span>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.04]">
            Let&apos;s Get Your Vehicle <span className="text-chrome">Booked In</span>
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Send us your details and we&apos;ll come straight back to you on WhatsApp with advice and
            a tailored quote.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
                { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: `https://wa.me/${site.whatsapp}` },
                { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                { icon: MapPin, label: "Workshop", value: site.address },
              ].map((item) => (
                <div key={item.label} className="luxe-card flex items-start gap-4 p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block break-words font-medium hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="luxe-card overflow-hidden p-2">
                <div className="relative overflow-hidden rounded-[calc(var(--radius-3xl)-0.4rem)] border border-white/10 shadow-[var(--shadow-luxe)]">
                  <iframe
                    title={`Map showing ${site.name} at ${site.address}`}
                    src={site.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[22rem] w-full border-0 grayscale-[0.6] contrast-[1.05] invert-[0.92] hue-rotate-180 sm:h-[26rem]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
                </div>
                <div className="px-4 pb-4 pt-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                    Find Us
                  </p>
                  <p className="mt-1.5 text-sm font-medium">{site.address}</p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-book mt-5 w-full"
                  >
                    <Navigation className="size-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={handleSubmit} className="glass rounded-[2rem] p-7 sm:p-10">
              <h2 className="font-display text-2xl font-bold">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Submitting opens WhatsApp with your details pre-filled.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Full Name" className={field} />
                <input name="phone" required placeholder="Phone Number" className={field} />
                <input name="email" type="email" placeholder="Email" className={`${field} sm:col-span-2`} />
                <input name="make" required placeholder="Vehicle Make" className={field} />
                <input name="model" required placeholder="Vehicle Model" className={field} />
                <select name="service" required defaultValue="" className={`${field} sm:col-span-2`}>
                  <option value="" disabled>
                    Service Required
                  </option>
                  {serviceNames.map((service) => (
                    <option key={service} value={service} className="bg-surface">
                      {service}
                    </option>
                  ))}
                </select>
                <label className="sm:col-span-2 grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Preferred Booking Date
                  <input name="date" type="date" className={field} />
                </label>
                <textarea
                  name="notes"
                  rows={5}
                  placeholder="Additional Information"
                  className={`${field} sm:col-span-2 resize-none`}
                />
                <button type="submit" className="btn-red sm:col-span-2 w-full">
                  <Send className="size-4" />
                  Submit via WhatsApp
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
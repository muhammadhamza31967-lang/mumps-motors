import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useCallback, useState, type ChangeEvent, type FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { buildWhatsAppUrl, openWhatsApp, serviceNames, site } from "@/lib/site";
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

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  make: "",
  model: "",
  service: "",
  date: "",
  notes: "",
};

function Contact() {
  const [form, setForm] = useState(emptyForm);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const url = buildWhatsAppUrl("New Service Enquiry", [
        ["Full Name", form.name],
        ["Phone Number", form.phone],
        ["Email", form.email],
        ["Vehicle Make", form.make],
        ["Vehicle Model", form.model],
        ["Service Required", form.service],
        ["Preferred Booking Date", form.date],
        ["Additional Information", form.notes],
      ]);
      openWhatsApp(url);
    },
    [form],
  );

  return (
    <section className="relative overflow-hidden pb-14 pt-32 lg:pb-20 lg:pt-40">
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

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-4">
              <div className="luxe-card flex items-start gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <Phone className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                    Phone
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                    {site.phones.map((p) => (
                      <a key={p.href} href={p.href} className="font-medium hover:text-primary">
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: site.phone,
                    href: `https://wa.me/${site.whatsapp}`,
                  },
                  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                ].map((item) => (
                  <div key={item.label} className="luxe-card flex items-start gap-4 p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                      <item.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="mt-1 block break-words text-[0.92rem] leading-snug font-medium hover:text-primary sm:text-[0.85rem] lg:text-[0.9rem]"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="luxe-card flex items-start gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                    Workshop
                  </p>
                  <p className="mt-1 font-medium">{site.address}</p>
                </div>
              </div>

              <div className="luxe-card flex min-h-[18rem] flex-1 overflow-hidden p-2">
                <div className="relative w-full overflow-hidden rounded-[calc(var(--radius-3xl)-0.4rem)] border border-white/10 shadow-[var(--shadow-luxe)]">
                  <iframe
                    title={`Map showing ${site.name} at ${site.address}`}
                    src={site.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block size-full min-h-[18rem] border-0 grayscale-[0.6] contrast-[1.05] invert-[0.92] hue-rotate-180"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <form onSubmit={handleSubmit} className="glass flex h-full flex-col rounded-[2rem] p-7 sm:p-10">
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
                  Submit
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
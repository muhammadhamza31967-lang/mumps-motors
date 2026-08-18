export const site = {
  name: "Mumps Motors",
  legal: "Mumps Motor",
  tagline: "Professional Car Servicing & Mechanical Repairs",
  phone: "07835 745238",
  phoneHref: "tel:+447835745238",
  phoneAlt: "07511 166369",
  phoneAltHref: "tel:+447511166369",
  phones: [
    { label: "07835 745238", href: "tel:+447835745238" },
    { label: "07511 166369", href: "tel:+447511166369" },
  ],
  whatsapp: "447835745238",
  email: "info@mumpsmotors.com",
  address: "Unit 1, 3 Garden St, OL1 3UY, Oldham, United Kingdom",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Unit+1%2C+3+Garden+St%2C+OL1+3UY%2C+Oldham%2C+United+Kingdom",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Unit%201%2C%203%20Garden%20St%2C%20OL1%203UY%2C%20Oldham%2C%20United%20Kingdom&output=embed",
  hours: [
    { day: "Monday – Friday", time: "08:00 – 17:30" },
    { day: "Saturday", time: "08:00 – 13:00" },
    { day: "Sunday & Public Holidays", time: "Closed" },
  ],
};

export const serviceNames = [
  "Full Servicing",
  "Brakes & Repairs",
  "Suspension Work",
  "Engine Fittings",
  "Engine Rebuilds",
  "Other / Not Sure",
];

export type QuoteFields = Record<string, string>;

export function buildWhatsAppUrl(title: string, fields: [string, string][]) {
  const lines = [
    `*${title}*`,
    "",
    ...fields
      .filter(([, value]) => value && value.trim().length > 0)
      .map(([label, value]) => `*${label}:* ${value}`),
    "",
    `Sent via ${site.name} website`,
  ];
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// Popup blockers on plain localhost/dev often reject window.open from a submit
// handler; fall back to a same-tab navigation so submission never silently fails.
export function openWhatsApp(url: string) {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}

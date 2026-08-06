export const site = {
  name: "Mumps Motors",
  legal: "Mumps Motor",
  tagline: "Professional Car Servicing & Mechanical Repairs",
  phone: "+27 60 000 0000",
  phoneHref: "tel:+27600000000",
  whatsapp: "27600000000",
  email: "info@mumpsmotors.com",
  address: "Unit 4, Industrial Park, Johannesburg",
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
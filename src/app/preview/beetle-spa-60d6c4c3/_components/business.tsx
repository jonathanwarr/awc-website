import type { Metadata } from "next";

/* Facts shared by both Beetle Spa concepts. */

export const PHONE_DISPLAY = "604-985-0481";
export const PHONE_HREF = "tel:6049850481";
export const EMAIL = "beetlespa@hotmail.ca";
export const IMG = "/preview/beetle-spa";

/* Builds page metadata with Beetle Spa sharing details, so link previews
   never fall back to AWC's title or Open Graph image. */
export function previewMetadata(title: string, description: string): Metadata {
  const image = {
    url: `${IMG}/beetle-spa-car.jpg`,
    width: 889,
    height: 337,
    alt: "Classic cream Volkswagen Beetle with Beetle Spa lettering on the door",
  };
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "Beetle Spa",
      type: "website",
      locale: "en_CA",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const conceptMetadata = previewMetadata(
  "Volkswagen & Audi Repair in North Vancouver | Beetle Spa",
  "Family-owned Volkswagen and Audi repair in North Vancouver since 1991. Service, diagnostics, brakes and maintenance for North Shore drivers. Call 604-985-0481."
);

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Beetle Spa",
  url: "https://www.beetlespa.ca/",
  telephone: "+1-604-985-0481",
  email: EMAIL,
  foundingDate: "1991",
  address: {
    "@type": "PostalAddress",
    streetAddress: "246 E 1st St",
    addressLocality: "North Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "North Vancouver" },
    { "@type": "Place", name: "North Shore" },
  ],
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
      }}
    />
  );
}

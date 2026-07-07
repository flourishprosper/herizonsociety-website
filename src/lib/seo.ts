import type { Metadata } from "next";

const defaultSiteUrl = "https://herizonsociety.netlify.app";

export const siteConfig = {
  name: "Herizon Society",
  shortName: "Herizon",
  url: process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl,
  description:
    "Herizon Society is a confidence-building community for girls ages 12 to 18 built around mentorship, leadership, real-world experiences, and meaningful connection.",
  email: "hello@herizonsociety.com",
  city: "Glendora",
  region: "CA",
  country: "US",
  serviceArea: "San Gabriel Valley",
  audience: "Girls ages 12 to 18",
  keywords: [
    "girls confidence programs",
    "teen mentorship program",
    "leadership program for girls",
    "girls empowerment events",
    "teen girls community",
    "girls ages 12 to 18",
    "Herizon Society",
  ],
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

type PageSchemaInput = {
  title: string;
  description: string;
  path: string;
  type?: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/twitter-image")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  founder: [
    {
      "@type": "Person",
      name: "Ryan Guerra",
    },
    {
      "@type": "Person",
      name: "Rene Babich",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  areaServed: {
    "@type": "Place",
    name: siteConfig.serviceArea,
  },
  audience: {
    "@type": "PeopleAudience",
    audienceType: siteConfig.audience,
    suggestedMinAge: 12,
    suggestedMaxAge: 18,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  inLanguage: "en-US",
};

export function createWebPageSchema({
  title,
  description,
  path,
  type = "WebPage",
}: PageSchemaInput) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url,
    mainEntityOfPage: url,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

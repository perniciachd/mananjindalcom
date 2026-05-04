import { site } from "./site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.author.name,
    jobTitle: site.author.role,
    url: site.url,
    sameAs: [site.social.medium, site.social.linkedin, site.social.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.author.location,
      addressCountry: "IN",
    },
  };
}

export function articleJsonLd(args: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    author: { "@type": "Person", name: site.author.name, url: site.url },
    datePublished: args.datePublished,
    url: args.url,
  };
}

export function serviceJsonLd(args: {
  name: string;
  description: string;
  priceRange: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    provider: { "@type": "Person", name: site.author.name, url: site.url },
    areaServed: "Worldwide",
    priceRange: args.priceRange,
  };
}


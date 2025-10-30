// Site-wide content (Navigation, Footer, etc.)
// This file contains content that appears across multiple pages

import type { Navigation, Footer } from "./types"

export const navigation: Navigation = {
  menuItems: [
    { label: "Produkter", href: "/produkter" },
    { label: "Om oss", href: "/om" },
    { label: "Sparekalkulator", href: "/sparekalkulator" },
  ],
  contactButton: "Kontakt oss",
}

export const footer: Footer = {
  companyDescription:
    "Høykvalitets varmepumper distribuert av Varmepumpeservice AS - en av Norges ledende leverandører av varmepumper.",
  contact: {
    title: "Kontakt",
    phone: "+47 40 00 58 94",
    email: "firmapost@varmepumpeservice.no",
    address: "Mjåvannssløyfen 200, 4628 Kristiansand, Norge",
  },
  links: {
    title: "Lenker",
    items: [
      { label: "Produkter", href: "/produkter" },
      { label: "Om oss", href: "/om" },
      { label: "Sparekalkulator", href: "/sparekalkulator" },
      { label: "Personvern", href: "/personvern" },
    ],
  },
  copyright: "Varmepumpeservice AS. Alle rettigheter reservert.",
}

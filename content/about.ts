// About page content
// This file contains all content for the About Us page

import type { AboutPage } from "./types"

export const aboutPage: AboutPage = {
  hero: {
    title: "Kontakt oss",
    subtitle: "offisiell norsk importør av Cooper & Hunter",
  },
  history: {
    title: "Varmepumpeservice AS er offisiell norsk importør av Cooper & Hunter",
    paragraphs: [
      "Med over 20 års erfaring innen klimaanlegg og ventilasjon, har Cooper&Hunter vokst til å bli en ledende aktør i HVAC-markedet (Heating, Ventilation and Air Conditioning). Produkter under Cooper&Hunter-merket eksporteres til mer enn 50 land og regioner over hele verden. Siden selskapet begynte å engasjere seg i oversjøiske markeder, har Cooper&Hunter utviklet seg til et godt kjent merke med rask vekst i eksportvolumet, og legger til nye markeder hvert år.",
    ],
  },
  keyStats: {
    title: "Nøkkeltall",
    stats: [
      { value: "2006", label: "Etablert", icon: "Building2" },
      { value: "14", label: "Ansatte", icon: "Users" },
      { value: "265 mill.", label: "Omsetning 2024", icon: "TrendingUp" },
      { value: "250+", label: "Forhandlere i Norge", icon: "Award" },
    ],
  },
  brands: {
    title: "Våre merkevarer",
    items: [
      { name: "Cooper & Hunter" },
      { name: "Mitsubishi Electric" },
      { name: "Toshiba" },
      { name: "Panasonic" },
      { name: "Fujitsu" },
    ],
  },
  contact: {
    title: "Kontakt oss",
    subtitle: "Ta kontakt for mer informasjon om våre produkter eller finn din nærmeste forhandler",
    details: [
      {
        type: "address",
        title: "Adresse",
        content: "Mjåvannssløyfen 200, 4628 Kristiansand",
      },
      {
        type: "phone",
        title: "Telefon",
        content: "+47 40 00 58 94",
      },
      {
        type: "email",
        title: "E-post",
        content: "firmapost@varmepumpeservice.no",
      },
    ],
  },
}

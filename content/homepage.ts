// Homepage content
// This file contains all content specific to the homepage

import type { Homepage } from "./types"

export const homepage: Homepage = {
  hero: {
    title: "Svalt om sommeren. Lunt om vinteren.",
    description: "Deilig inneklima – hele året.",
    buttonText: "Se våre produkter",
  },
  intro: {
    text: "Med varmepumper fra Cooper & Hunter får du mer enn bare varme og kjøling – du får et inneklima som alltid spiller på lag med deg og dine behov.",
  },
  features: [
    { title: "Spar opptil 60% på strøm" },
    { title: "Fungerer ned til -30°C" },
    { title: "A+ til A+++" },
    { title: "Bluefin" },
  ],
  productsSection: {
    heading: "Våre varmepumper",
    description: "Utforsk vårt utvalg av høykvalitets varmepumper fra Cooper&Hunter",
    buttonText: "Les mer",
  },
  imageSection1: {
    title: "Ytelser du kan stole på",
    description: "kraftig effekt og høy energieffektivitet selv på de kaldeste dagene.",
  },
  imageSection2: {
    title: "Design som passer inn",
    description: "moderne, stilrene løsninger som glir sømløst inn i hjemmet.",
  },
  cta: {
    heading: "Klar for å spare penger på oppvarming?",
    description: "Kontakt oss i dag for å finne den perfekte varmepumpen for ditt hjem eller bedrift.",
    primaryButton: "Se alle produkter",
    secondaryButton: "Kontakt forhandler",
  },
}

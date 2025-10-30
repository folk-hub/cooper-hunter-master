// Products content
// This file contains all product data
// Each product can easily map to a CMS collection entry

import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "arctic",
    name: "Cooper&Hunter Arctic",
    description: "Høy effektivitet – SCOP 4.1",
    scop: "SCOP 4.1",
    features: ["Varmedrift ned til -25 C", "Integrert WiFi", "Energiklasse A+"],
    price: "Kontakt forhandler for pris",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-arctic-front-YMULIqS64lYQZCkVCAM9ESsdMBvtWl.jpg", // cooper-hunter-arctic-front.jpg (first image)
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-arctic-op-O1wLsI5hLg9eZOzXY5PcJf22rkEOaz.jpg", // cooper-hunter-arctic-op.jpg
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-arctic-uA2HhNwf55R49xtufT5aG5sZAMOG4B.jpg", // cooper-hunter-arctic.jpg
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-fjernkontroll-gqKNqaNB5aBirkKVz5roxr5JwHh0Wu.jpg", // cooper-hunter-fjernkontroll.jpg
    ],
    detailPage: {
      title: "Cooper&Hunter Arctic",
      subtitle: "Høy effektivitet – SCOP 4.1",
      description:
        "Cooper&Hunter Arctic er en høyeffektiv varmepumpe designet for de kaldeste klimaene. Med en SCOP på 4.1 og evnen til å varme ned til -25°C, er dette det perfekte valget for norske forhold.",
      backButton: "Tilbake til produkter",
      downloadButton: "Last ned produktark",
      downloadUrl: "/produktark/arctic-produktark.pdf",
      findDealerButton: "Finn forhandler",
      priceNote: "Pris eks. installasjon. Kontakt forhandler for komplett tilbud.",
      specifications: {
        title: "Tekniske spesifikasjoner",
        items: [
          { label: "SCOP", value: "4.1" },
          { label: "Energiklasse", value: "A+" },
          { label: "Varmekapasitet", value: "0.90 - 4.70 kW" },
          { label: "Kjølekapasitet", value: "0.90 - 4.40 kW" },
          { label: "Støynivå innedel", value: "21-38 dB(A)" },
          { label: "Støynivå utedel", value: "52 dB(A)" },
        ],
      },
      keyFeatures: {
        title: "Nøkkelfunksjoner",
        items: [
          {
            title: "Fabrikkgarantert varmekapasitet ned til -25 C",
            description: "Pålitelig oppvarming selv under ekstreme vinterforhold",
          },
          {
            title: "Integrert WiFi",
            description: "Styr varmepumpen fra mobilen din hvor som helst",
          },
          {
            title: "Energiklasse A+",
            description: "Energieffektivitet for lavest mulig strømforbruk",
          },
          {
            title: "Inverter teknologi",
            description: "Jevn temperatur og lavt energiforbruk med DC inverter kompressor",
          },
        ],
      },
    },
  },
  {
    id: "daytona",
    name: "Cooper&Hunter Daytona",
    description: "Høy effektivitet – SCOP 4.1",
    scop: "SCOP 4.1",
    features: ["varmedrift ned til -25", "Integrert WiFi", "Energiklasse A+"],
    price: "Kontakt forhandler for pris",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daytona-Grafitt-hvit-yc38JL8CrvJ3Txnfm9733jTs8D6wJZ.jpg", // Updated first carousel image to show both white and graphite variants
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daytona-Grafitt-w2KUWnj6gEro2sBIwKkxxzRh0Q0jru.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-daytona-side-BrX0v44v92BIMKgPbHyyn1v5wCIeCx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-daytona-under-ynEbnyUTQ2zgI06XbHdn5RFjzv3jBT.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-fjernkontroll-CFIysl6QUOjkgeM1WtVkCI1HZx0a6N.jpg",
    ],
    detailPage: {
      title: "Cooper&Hunter Daytona",
      subtitle: "høy effektivitet – SCOP 4.1",
      description:
        "Cooper&Hunter Daytona representerer toppen av varmepumpeteknologi med ledende effektivitet. Med SCOP 4.1 og avanserte funksjoner, gir Daytona deg optimal komfort og minimal strømregning.",
      backButton: "Tilbake til produkter",
      downloadButton: "Last ned produktark",
      downloadUrl: "/produktark/daytona-produktark.pdf",
      findDealerButton: "Finn forhandler",
      priceNote: "Pris eks. installasjon. Kontakt forhandler for komplett tilbud.",
      specifications: {
        title: "Tekniske spesifikasjoner",
        items: [
          { label: "SCOP", value: "4.1" },
          { label: "Energiklasse", value: "A+" },
          { label: "Varmekapasitet", value: "0.90 - 4.70 kW" },
          { label: "Kjølekapasitet", value: "0.90 - 4.40 kW" },
          { label: "Støynivå innedel", value: "21-38 dB(A)" },
          { label: "Støynivå utedel", value: "52 dB(A)" },
        ],
      },
      keyFeatures: {
        title: "Nøkkelfunksjoner",
        items: [
          {
            title: "Fabrikkgarantert varmekapasitet ned til -25 C",
            description: "Pålitelig oppvarming selv under ekstreme vinterforhold",
          },
          {
            title: "Integrert WiFi",
            description: "Styr varmepumpen fra mobilen din hvor som helst",
          },
          {
            title: "Energiklasse A+",
            description: "Ledende energieffektivitet for lavest mulig strømforbruk",
          },
          {
            title: "Premium design",
            description: "Elegant og moderne design som passer perfekt inn i ethvert hjem",
          },
        ],
      },
    },
  },
  // {
  //   id: "supreme",
  //   name: "Cooper&Hunter Supreme",
  //   description: "Høy effektivitet og oppvarming/kjøling Arktis/Arktis+",
  //   scop: "SCOP 5.1",
  //   features: ["varmedrift ned til -30", "Integrert Wifi", "Energiklasse A+++"],
  //   price: "Kontakt forhandler for pris",
  //   images: [
  //     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-supreme-i3uofuYUwt0RpL1naJXqTi6My2xLGW.jpg", // cooper-hunter-supreme.jpg - showing all four color variants
  //   ],
  //   buttonText: "Kommer i 2025",
  //   detailPage: {
  //     title: "Cooper&Hunter Supreme",
  //     subtitle: "Høy effektivitet og oppvarming/kjøling Arktis/Arktis+",
  //     description:
  //       "Cooper&Hunter Supreme tilbyr utmerket ytelse til en konkurransedyktig pris. Med fire stilfulle fargevarianter og solid effektivitet, er Supreme det perfekte valget for deg som ønsker kvalitet uten å gå på kompromiss.",
  //     backButton: "Tilbake til produkter",
  //     downloadButton: "Last ned produktark",
  //     findDealerButton: "Finn forhandler",
  //     priceNote: "Pris eks. installasjon. Kontakt forhandler for komplett tilbud.",
  //     specifications: {
  //       title: "Tekniske spesifikasjoner",
  //       items: [
  //         { label: "SCOP", value: "5.1" },
  //         { label: "Energiklasse", value: "A+++ SEER:8.5" },
  //         { label: "Varmekapasitet", value: "0.88 - 7.20 kW" },
  //         { label: "Kjølekapasitet", value: "0.85 - 5.00 kW" },
  //         { label: "Støynivå innedel", value: "20-46 dB(A)" },
  //         { label: "Støynivå utedel", value: "54 dB(A)" },
  //       ],
  //     },
  //     keyFeatures: {
  //       title: "Nøkkelfunksjoner",
  //       items: [
  //         {
  //           title: "Fabrikkgarantert ned til -30 C",
  //           description: "Effektiv oppvarming i de fleste norske klimaer",
  //         },
  //         {
  //           title: "Kjøling fabrikkgarantert ned til -18 C",
  //           description: "Holder deg kjølig selv på de varmeste sommerdagene",
  //         },
  //         {
  //           title: "Fire fargevarianter",
  //           description: "Velg mellom hvit, sølv, champagne eller svart for å matche ditt interiør",
  //         },
  //         {
  //           title: "Energiklasse A+++",
  //           description: "God energieffektivitet for lavere strømkostnader",
  //         },
  //       ],
  //     },
  //   },
  // },
]

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

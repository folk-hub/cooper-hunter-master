// Products content
// This file contains all product data
// Each product can easily map to a CMS collection entry

import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "arctic",
    name: "Cooper&Hunter Arctic 12",
    description: "Høy effektivitet – SCOP 4.1.\nAllrounderen – stabil ytelse, høy komfort og driftssikker varme.",
    scop: "SCOP 4.1",
    features: ["Varmedrift ned til -25 C", "Integrert WiFi", "Energiklasse A+"],
    price: "Veil. pris: kr 13 900,-*",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-arctic-front-YMULIqS64lYQZCkVCAM9ESsdMBvtWl.jpg", // cooper-hunter-arctic-front.jpg (first image)
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-arctic-op-O1wLsI5hLg9eZOzXY5PcJf22rkEOaz.jpg", // cooper-hunter-arctic-op.jpg
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-arctic-uA2HhNwf55R49xtufT5aG5sZAMOG4B.jpg", // cooper-hunter-arctic.jpg
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-fjernkontroll-gqKNqaNB5aBirkKVz5roxr5JwHh0Wu.jpg", // cooper-hunter-fjernkontroll.jpg
    ],
    detailPage: {
      title: "Cooper&Hunter Arctic 12",
      subtitle: "Høy effektivitet – SCOP 4.1",
      description:
        "Cooper&Hunter Arctic 12 er en høyeffektiv varmepumpe designet for de kaldeste klimaene. Med en SCOP på 4.1 og evnen til å varme ned til -25°C, er dette det perfekte valget for norske forhold.\nAllrounderen – stabil ytelse, høy komfort og driftssikker varme.",
      backButton: "Tilbake til produkter",
      downloadButton: "Last ned produktark",
      downloadUrl: "/produktark/arctic-produktark.pdf",
      findDealerButton: "Finn forhandler",
      priceNote: "*Priser er ikke inkludert montering. Monteringspris fra kr 6 000,-.",
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
            title: "+8°C vedlikeholdsvarme – perfekt for hytter",
            description: "Vedlikeholdsvarme-modus som holder stabil lav temperatur.",
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
    id: "arctic-18",
    name: "Cooper&Hunter Arctic 18",
    description: "Høy effektivitet – SCOP 4.2.\nAllrounderen – stabil ytelse, høy komfort og driftssikker varme.",
    scop: "SCOP 4.2",
    features: ["Varmedrift ned til -25 C", "Integrert WiFi", "Energiklasse A+"],
    price: "Veil. pris: kr 18 990,-*",
    images: ["/cp-arctic18.webp"],
    detailPage: {
      title: "Cooper&Hunter Arctic 18",
      subtitle: "høy effektivitet – SCOP 4.2",
      description:
        "Cooper&Hunter Arctic 18 representerer toppen av varmepumpeteknologi med ledende effektivitet. Med SCOP 4.2 og avanserte funksjoner, gir Arctic 18 deg optimal komfort og minimal strømregning.\nAllrounderen – stabil ytelse, høy komfort og driftssikker varme.",
      backButton: "Tilbake til produkter",
      downloadButton: "Last ned produktark",
      downloadUrl: "/produktark/arctic-produktark.pdf",
      findDealerButton: "Finn forhandler",
      priceNote: "*Priser er ikke inkludert montering. Monteringspris fra kr 6 000,-.",
      specifications: {
        title: "Tekniske spesifikasjoner",
        items: [
          { label: "SCOP", value: "4.2" },
          { label: "Energiklasse", value: "A+" },
          { label: "Varmekapasitet", value: "1.10 - 6.60 kW" },
          { label: "Kjølekapasitet", value: "1.00 - 6.10 kW" },
          { label: "Støynivå innedel", value: "24-45 dB(A)" },
          { label: "Støynivå utedel", value: "56 dB(A)" },
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
            title: "+8°C vedlikeholdsvarme – perfekt for hytter",
            description: "Vedlikeholdsvarme-modus som holder stabil lav temperatur.",
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
  {
    id: "arctic-24",
    name: "Cooper&Hunter Arctic 24",
    description: "Høy effektivitet – SCOP 4.2.\nAllrounderen – stabil ytelse, høy komfort og driftssikker varme.",
    scop: "SCOP 4.2",
    features: ["Varmedrift ned til -25 C", "Integrert WiFi", "Energiklasse A+"],
    price: "Veil. pris: kr 23 990,-*",
    images: ["/cp-arctic24.webp"],
    detailPage: {
      title: "Cooper&Hunter Arctic 24",
      subtitle: "høy effektivitet – SCOP 4.2",
      description:
        "Cooper&Hunter Arctic 24 representerer toppen av varmepumpeteknologi med ledende effektivitet. Med SCOP 4.2 og avanserte funksjoner, gir Arctic 24 deg optimal komfort og minimal strømregning.\nAllrounderen – stabil ytelse, høy komfort og driftssikker varme.",
      backButton: "Tilbake til produkter",
      downloadButton: "Last ned produktark",
      downloadUrl: "/produktark/arctic-produktark.pdf",
      findDealerButton: "Finn forhandler",
      priceNote: "*Priser er ikke inkludert montering. Monteringspris fra kr 6 000,-.",
      specifications: {
        title: "Tekniske spesifikasjoner",
        items: [
          { label: "SCOP", value: "4.2" },
          { label: "Energiklasse", value: "A+" },
          { label: "Varmekapasitet", value: "1.80 - 9.45 kW" },
          { label: "Kjølekapasitet", value: "2.00 - 8.85 kW" },
          { label: "Støynivå innedel", value: "27-47 dB(A)" },
          { label: "Støynivå utedel", value: "59 dB(A)" },
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
            title: "+8°C vedlikeholdsvarme – perfekt for hytter",
            description: "Vedlikeholdsvarme-modus som holder stabil lav temperatur.",
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
  {
    id: "daytona",
    name: "Cooper&Hunter Daytona 12",
    description: "Høy effektivitet – SCOP 4.1.\nDesignmodellen – interiørvennlig og effektiv.",
    scop: "SCOP 4.1",
    features: ["Varmedrift ned til -25 C", "Integrert WiFi", "Energiklasse A+"],
    price: "Veil. pris: kr 15 990,-*",
    images: [
      "/daytona-hero.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daytona-Grafitt-w2KUWnj6gEro2sBIwKkxxzRh0Q0jru.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-daytona-side-BrX0v44v92BIMKgPbHyyn1v5wCIeCx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-daytona-under-ynEbnyUTQ2zgI06XbHdn5RFjzv3jBT.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooper-hunter-fjernkontroll-CFIysl6QUOjkgeM1WtVkCI1HZx0a6N.jpg",
    ],
    detailPage: {
      title: "Cooper&Hunter Daytona 12",
      subtitle: "høy effektivitet – SCOP 4.1",
      description:
        "Cooper&Hunter Daytona 12 representerer toppen av varmepumpeteknologi med ledende effektivitet. Med SCOP 4.1 og avanserte funksjoner, gir Daytona 12 deg optimal komfort og minimal strømregning.\nDesignmodellen – interiørvennlig og effektiv.",
      backButton: "Tilbake til produkter",
      downloadButton: "Last ned produktark",
      downloadUrl: "/produktark/daytona-produktark.pdf",
      findDealerButton: "Finn forhandler",
      priceNote: "*Priser er ikke inkludert montering. Monteringspris fra kr 6 000,-.",
      specifications: {
        title: "Tekniske spesifikasjoner",
        items: [
          { label: "SCOP", value: "4.1" },
          { label: "Energiklasse", value: "A+" },
          { label: "Varmekapasitet", value: "0.90 - 4.70 kW" },
          { label: "Kjølekapasitet", value: "0.90 - 4.40 kW" },
          { label: "Støynivå innedel", value: "19-38 dB(A)" },
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
            title: "+8°C vedlikeholdsvarme – perfekt for hytter",
            description: "Vedlikeholdsvarme-modus som holder stabil lav temperatur.",
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
  {
    id: "supreme",
    name: "Cooper&Hunter Supreme 09",
    hidden: true,
    description: "Høyeste effektivitet – SCOP 5.1.\nToppmodellen – maksimal kraft, komfort og stabil varme.",
    scop: "SCOP 5.1",
    features: ["Varmedrift ned til -30°C", "Integrert WiFi", "Energiklasse A+++"],
    price: "Veil. pris: fra kr 17 990,-*",
    images: [
      "/supreme-hero.jpg",
      "/supreme-1.webp",
      "/supreme-2.webp",
      "/supreme-3.webp",
      "/supreme-4.webp",
      "/supreme-5.webp",
    ],
    detailPage: {
      title: "Cooper&Hunter Supreme 09",
      subtitle: "Høyeste effektivitet – SCOP 5.1",
      description:
        "Cooper&Hunter Supreme 09 er toppmodellen i sortimentet – en kraftig varmepumpe spesielt utviklet for nordisk klima. Med avansert to-trinns kompressor, SCOP på 5.1 og energiklasse A+++ gir den maksimal effekt, høyeste energieffektivitet og stabil varme selv ved ekstreme temperaturer ned til -30°C.\nNår komfort møter stillhet – med lydnivå helt ned til 18 dB(A).",
      backButton: "Tilbake til produkter",
      downloadButton: "Last ned produktark",
      downloadUrl: "/produktark/supreme-produktark.pdf",
      findDealerButton: "Finn forhandler",
      priceNote: "*Priser er ikke inkludert montering. Monteringspris fra kr 6 000,-.",
      specifications: {
        title: "Tekniske spesifikasjoner",
        items: [
          { label: "SCOP", value: "5.1" },
          { label: "Energiklasse", value: "A+++" },
          { label: "Varmekapasitet", value: "0.70 - 5.50 kW" },
          { label: "Kjølekapasitet", value: "0.85 - 5.00 kW" },
          { label: "Støynivå innedel", value: "18-44 dB(A)" },
          { label: "Støynivå utedel", value: "54 dB(A)" },
        ],
      },
      keyFeatures: {
        title: "Nøkkelfunksjoner",
        items: [
          {
            title: "Fabrikkgarantert varmekapasitet ned til -30°C",
            description: "Pålitelig oppvarming selv under de mest ekstreme vinterforhold",
          },
          {
            title: "Kjøling ned til -18°C og opp til +54°C",
            description: "Effektiv klimakontroll hele året, uansett utetemperatur",
          },
          {
            title: "Ekstra stillegående – ned til 18 dB(A)",
            description: "Avansert vifteteknologi og stillemodus for maksimal komfort",
          },
          {
            title: "Integrert WiFi",
            description: "Styr varmepumpen fra mobilen din hvor som helst via app",
          },
        ],
      },
    },
  },
  {
    id: "supreme-12",
    name: "Cooper&Hunter Supreme 12",
    description: "Høyeste effektivitet – SCOP 5.1.\nToppmodellen – maksimal kraft, komfort og stabil varme.",
    scop: "SCOP 5.1",
    features: ["Varmedrift ned til -30°C", "Integrert WiFi", "Energiklasse A+++"],
    price: "Veil. pris: kr 18 990,- (hvit) / kr 20 990,- (sort)*",
    images: [
      "/supreme-hero.jpg",
      "/supreme-1.webp",
      "/supreme-2.webp",
      "/supreme-3.webp",
      "/supreme-4.webp",
      "/supreme-5.webp",
    ],
    detailPage: {
      title: "Cooper&Hunter Supreme 12",
      subtitle: "Høyeste effektivitet – SCOP 5.1",
      description:
        "Cooper&Hunter Supreme 12 er toppmodellen i sortimentet – en kraftig varmepumpe spesielt utviklet for nordisk klima. Med avansert to-trinns kompressor, SCOP på 5.1 og energiklasse A+++ gir den maksimal effekt, høyeste energieffektivitet og stabil varme selv ved ekstreme temperaturer ned til -30°C.\nNår komfort møter stillhet – med lydnivå helt ned til 20 dB(A).",
      backButton: "Tilbake til produkter",
      downloadButton: "Last ned produktark",
      downloadUrl: "/produktark/supreme-produktark.pdf",
      findDealerButton: "Finn forhandler",
      priceNote: "*Priser er ikke inkludert montering. Monteringspris fra kr 6 000,-.",
      specifications: {
        title: "Tekniske spesifikasjoner",
        items: [
          { label: "SCOP", value: "5.1" },
          { label: "Energiklasse", value: "A+++" },
          { label: "Varmekapasitet", value: "0.88 - 7.20 kW" },
          { label: "Kjølekapasitet", value: "0.85 - 5.00 kW" },
          { label: "Støynivå innedel", value: "20-44 dB(A)" },
          { label: "Støynivå utedel", value: "54 dB(A)" },
        ],
      },
      keyFeatures: {
        title: "Nøkkelfunksjoner",
        items: [
          {
            title: "Fabrikkgarantert varmekapasitet ned til -30°C",
            description: "Pålitelig oppvarming selv under de mest ekstreme vinterforhold",
          },
          {
            title: "Kjøling ned til -18°C og opp til +54°C",
            description: "Effektiv klimakontroll hele året, uansett utetemperatur",
          },
          {
            title: "Ekstra stillegående – ned til 20 dB(A)",
            description: "Avansert vifteteknologi og stillemodus for maksimal komfort",
          },
          {
            title: "Integrert WiFi",
            description: "Styr varmepumpen fra mobilen din hvor som helst via app",
          },
        ],
      },
    },
  },
]

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

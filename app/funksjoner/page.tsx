import {
  Activity,
  Bot,
  Cable,
  Clock,
  Droplets,
  Fan,
  Filter,
  Flame,
  Gauge,
  KeyRound,
  Leaf,
  Lock,
  Moon,
  Power,
  RotateCw,
  Settings,
  Shield,
  Snowflake,
  Sparkles,
  Sun,
  Thermometer,
  ThermometerSnowflake,
  VolumeX,
  Wifi,
  Wind,
  Zap,
  Smartphone,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

type FeatureItem = {
  title: string
  description: string
  bullets?: string[]
  icon: typeof Activity
}

type FeatureSection = {
  title: string
  items: FeatureItem[]
}

const sections: FeatureSection[] = [
  {
    title: "TEKNOLOGISKE FUNKSJONER",
    items: [
      {
        title: "Inverter",
        description:
          "Denne teknologien forlenger levetiden til klimaanlegget med 30–50 % og gir en optimalisert 30 % mer energi enn On‑Off‑modeller. Inverterens driftsprinsipp er at kompressoren drives av et inverterkretsløp: vekselstrøm omformes til likestrøm, deretter til ønsket spenning og tilbake til vekselstrøm. Dette gir det mulig for kompressoren å kontinuerlig modulere effektutgangen.",
        icon: RotateCw,
      },
      {
        title: "To-trinns kompressor",
        description:
          "Designet til en to-trinns kompressor består av to kjølemediekompresjonsylindre. I den første sylinderen gjennomgår freon forkromprimering til 3,0–4,0 MPa, og i den andre sylinderen oppnås maksimal kompresjon. Når mengden freon fra utendørsenheten reduseres, åpnes en spesiell elektrisk ventil for å opprettholde stabil injeksjonstemperatur ved å tilføre manglende freondamp med middels trykk fra mellomkjøleren. Dette reduserer ekspansjonstap og trykktap i fordamperen og kompenserer kompressorkraften.",
        icon: Gauge,
      },
      {
        title: "LED display",
        description:
          "Praktisk LED‑display på innendørsenheten som viser gjeldende driftsmodus for klimaanlegget, temperatur og eventuelle systemfeil.",
        icon: Sun,
      },
      {
        title: "BlueFin",
        description:
          "Beskytter overflaten på varmeveksleren mot korrosjon som kan oppstå ved kontakt mellom metall og fuktighet eller aggressive kjemikalier i luft. Sikrer effektiv varmeoverføring og bidrar til at klimaanlegget fungerer effektivt ved høye temperaturer. Reduserer vannansamling på varmevekslerens overflate, noe som bidrar til å unngå oppbygging av smuss og mugg. Øker klimaanleggets levetid ved å forhindre skader fra korrosjon og andre påvirkninger.",
        icon: Shield,
      },
      {
        title: "Energieffektive kobberrør",
        description:
          "De energieffektive kobberrørene i varmeveksleren har en spesiell trapesformet innerlinje, som øker varmeoverflatearealet betydelig.",
        icon: Cable,
      },
      {
        title: "Vifte med flere hastigheter",
        description:
          "Gjør det mulig å justere luftstrømmen på forskjellige hastigheter etter behov, og forhindrer kalde trekk.",
        icon: Fan,
      },
      {
        title: "Crankcase-varmesystem",
        description:
          "Elektrisk oppvarming av kompressorens veivhus (slås på når kompressoren ikke går og utetemperaturen er < 5°C) øker enhetens driftstid og forhindrer at kondens akkumuleres i kompressoren når utetemperaturen er < 0°C, og hindrer at kondens fryser.",
        icon: ThermometerSnowflake,
      },
    ],
  },
  {
    title: "INTELLIGENTE FUNKSJONER",
    items: [
      {
        title: "I-Action-teknologi",
        description:
          "Denne teknologien er utviklet og med suksess anvendt i Cooper&Hunter inverterklimaanlegg. Den er basert på prinsippet om en endret rotasjonshastighet til elektromotoren. Takket være I‑Action bruker kompressoren kun den kapasiteten som trengs for effektiv drift av systemet. Dette senker starthastigheten og gir jevn og effektiv drift uten høye startstrømmer og unødvendig energiforbruk. Effektiv drift ved lavest rotasjonshastighet (1 Hz) gir energibesparelse for systemet (opptil 40 W/t) og opprettholder komfortabelt inneklima over et bredt temperaturområde.",
        bullets: [
          "Ultra‑lav kompressorhastighet (1 Hz)",
          "Økologisk kjølemiddel R32",
          "Automatisk spenningsadaptasjon (96–265 V)",
          "Moderne høyhastighetsprosessor",
          "Ekstremt lavt støynivå (opptil 18 dB)",
          "Pålitelige driftsegenskaper",
          "Presis temperaturkontroll (opptil ±0,5°C)",
          "Turbo‑modus",
          "Kontinuerlig drift i moduser fra maksimum til minimum",
        ],
        icon: Activity,
      },
      {
        title: "CH-AI teknologi",
        description:
          "CH‑AI‑teknologi tar hensyn til temperatur, værforhold, romareal, varmebelastning og andre faktorer for å analysere, simulere og tilpasse klimaanleggets parametere for ulike systemmoduser. Dette øker nivået av energisparing og komfort. Ved bruk av CH‑AI tilpasser klimaanlegget seg miljøet og forstår brukerens behov bedre, for eksempel ved jevn fordeling av kjøling eller varme i hele rommet.",
        icon: Bot,
      },
      {
        title: "Automatisk lys",
        description:
          "Den innendørs klimaanleggs‑enheten justerer automatisk lysstyrken på LED‑displayet avhengig av omgivelseslyset.",
        icon: Sun,
      },
      {
        title: "Selvdiagnose",
        description:
          "Selvdiagnosefunksjonen til klimaanlegget overvåker automatisk kvaliteten på driften. Den oppdager problemer og viser en feilkode på displayet, og gir et system med forholdsregler for å unngå negative konsekvenser. Dette sikrer en rettidig respons og opprettholder jevn funksjon.",
        icon: Activity,
      },
      {
        title: "Intelligent avriming",
        description:
          "Funksjon som reduserer avrimingstiden til utendørsenheten. Funksjonen kontrolleres automatisk og sikrer effektiv avrimingsprosess, reduserer energiforbruket og øker driftstiden til klimaanlegget.",
        icon: Snowflake,
      },
      {
        title: "Automatisk gjenstart",
        description:
          "Gir automatisk gjenstart av systemet etter strømbrudd. Ved plutselig strømbortfall vil klimaanlegget gå i sikkerhetsmodus. Auto Restart hjelper med å returnere klimaanlegget til forrige tilstand.",
        icon: Power,
      },
    ],
  },
  {
    title: "HELSE FUNKSJONER",
    items: [
      {
        title: "Eco Fresh-teknologi",
        description:
          "Dette er en intelligent elektrostatisk partikkelfanger som kan fange opp store urenheter, som støv, og forhindre at de kommer inn i enheten.",
        icon: Leaf,
      },
      {
        title: "CH‑7 Sky‑teknologi",
        description:
          "De unike teknologien for total luftrensing gjør det mulig å oppnå perfekt luftkvalitet i hjemmet. Det kombinerte filtersystemet består av syv typer filter som effektivt nøytraliserer en rekke patogener i romluften.",
        icon: Filter,
      },
      {
        title: "X‑fan‑funksjon",
        description:
          "Fjerner automatisk overflødig fuktighet fra innendørsenhetens varmeveksler og dryppanne etter at klimaanlegget har vært i drift i kjølemodus.",
        icon: Fan,
      },
      {
        title: "CH‑UV Cleaner‑teknologi",
        description:
          "UV‑lampen innebygd i innendørsenheten genererer ultrafiolett stråling som er i stand til å sterilisere effektivt mot virus og bakterier opp til 99 % (sertifisert effektivitet). Den avgir ikke ozon og er derfor trygg for mennesker. Bølgelengden for ultrafiolett stråling er 270–280 nm; den bakteriedrepende effekten av UV‑stråling i området 200–300 nm er allment anerkjent.",
        icon: Sparkles,
      },
      {
        title: "CH‑Smart Ion‑teknologi",
        description:
          "Dette desinfiserende filteret kombinerer adsorpsjon og sterilisering, slik at bakterier og virus ikke har noe sted å skjule seg, og innendørs luftkvalitet opprettholdes på riktig nivå. Selv bakterier på overflater av husholdningsartikler blir ødelagt. Bakterier, sopp, pollen og andre forurensninger, husstøvmidd og andre partikler i inneluften blir nøytralisert. Effektiviteten i å drepe bakterier er svært høy og overgår lignende systemer. Fjerner over 400 typer lukt.",
        icon: Zap,
      },
      {
        title: "Double Self‑Clean‑teknologi",
        description:
          "Dette er en teknologi som automatisk rengjør varmeveksleren i innendørsenheten for smuss. Over tid kan støv og bakterier bygge seg opp på varmeveksleren. Grundig rengjøring utføres i 4 trinn: ising, avising, vasking og tørking. Dette fjerner støv, smuss, kondens og olje. Teknologien kan nå en innetemperatur på 56°C. Den øker varmeoverføringen, eliminerer ubehagelig lukt, gjør det mulig å puste fritt og sparer penger på vedlikehold.",
        icon: RotateCw,
      },
      {
        title: "Fresh Air Kit‑enhet",
        description:
          "Klimaanlegg med mulighet for tilførsel av friskluft brukes til naturlig ventilasjon i rommet uten at friskluft går tapt. Fresh Air Kit‑modulen fungerer etter prinsippet om kunstig tilførsel av ventilasjon. Når luften passerer gjennom systemet, filtreres den av et HEPA‑filter, kjøles, og frisk luft tilføres rommet. Modulen tilfører ikke bare ren og frisk luft, men leder også brukt luft fra rommet ut.",
        icon: Wind,
      },
    ],
  },
  {
    title: "KONTROLL FUNKSJONER",
    items: [
      {
        title: "Wi‑Fi",
        description:
          "Kontroller klimaanlegget fra hvor som helst i verden. Med denne funksjonen kan du fjernstyre klimaet i hjemmet ditt når som helst på året ved å bruke telefonen eller nettbrettet.",
        icon: Wifi,
      },
      {
        title: "Fjernkontroll",
        description:
          "Fjernkontrollen er en intuitiv og praktisk enhet som sender kommandoer ved hjelp av infrarød stråling. Den kan brukes til å styre nesten alle moduser og funksjoner på klimaanlegget.",
        icon: Smartphone,
      },
      {
        title: "Låsing av fjernkontrollen",
        description:
          "For å hindre små barn i å leke med fjernkontrollen, har Cooper&Hunter utviklet en spesiell låsefunksjon for fjernkontrollen.",
        icon: Lock,
      },
      {
        title: "Daglig timer",
        description:
          "Dette er en funksjon på fjernkontrollen som lar deg sette klimaanlegget til å slå seg på og av automatisk på ønsket tidspunkt innen 24 timer.",
        icon: Clock,
      },
      {
        title: "Kablet kontroller",
        description:
          "Den har en tidsbasert programmerbar tidsplan på opptil to uker og leveres med en 8 meter ferdig ledning for enkel og rask installasjon. Den store skjermen og tastaturet gjør programmering enkelt og lar deg tilpasse tidsplanen etter komfort og livsstil.",
        icon: Cable,
      },
      {
        title: "Tørrkontakt",
        description:
          "Klimaanlegget starter når kunden setter inn nøkkelkortet og stopper automatisk når kortet fjernes, noe som sikrer at enheten slås av når folk forlater rommet. Etter at nøkkelkortet fjernes for å stoppe enheten, vil driftsstatusene bli lagret. Når nøkkelkortet settes inn igjen, går enheten i standby‑modus eller fortsetter driften i henhold til tidligere innstillinger.",
        icon: KeyRound,
      },
      {
        title: "Koblet til BMS",
        description:
          "De fleste Cooper&Hunter‑klimaanlegg, både split‑systemer og multi‑split‑systemer, kan styres av BMS‑system ved hjelp av Modbus RTU‑protokollen. Løsningen gir samtidig overvåking av enhetene i sanntid og gjør at anleggene enkelt kan kobles til de mest populære smart‑home‑systemene. Integrasjonen er enkel og krever ikke ekstra moduler, og bare innendørsenheten kobles til en kablet kontroller med et Modbus RTU‑grensesnitt.",
        icon: Settings,
      },
    ],
  },
  {
    title: "KOMFORT FUNKSJONER",
    items: [
      {
        title: "Kjølemodus",
        description: "Klimaanleggets driftsmodus er kjøling ved høy romtemperatur.",
        icon: Snowflake,
      },
      {
        title: "Varme‑modus",
        description: "Klimaanlegget opererer i varme‑modus ved lav romtemperatur.",
        icon: Thermometer,
      },
      {
        title: "Ventilasjonsmodus",
        description:
          "Ventilasjonsmodus i klimaanlegget sørger for å blande luften i rommet og fordele den over hele området. I denne modusen fungerer ikke kompressoren aktivt, kun viften.",
        icon: Wind,
      },
      {
        title: "Tørkemodus",
        description:
          "Tørkemodus er designet for å redusere fuktighetsnivået i rommet uten å endre temperaturen betydelig. I motsetning til kjølemodus, som samtidig reduserer både temperatur og fuktighet, fokuserer tørkemodus kun på å fjerne overflødig fuktighet fra luften.",
        icon: Droplets,
      },
      {
        title: "Fuktighetskontroll",
        description:
          "Fuktighetskontrollfunksjonen tar hensyn til temperatur, fuktighet og energieffektivitet og optimaliserer inneklima for mennesker og energibesparelse. Klimaanlegget velger det mest nøyaktige fuktighetsnivået, og gir optimal komfort med høyest mulig energieffektivitet. Driftsmodus: Kjølemodus 40%–80%, Tørkemodus 30%–70%.",
        icon: Droplets,
      },
      {
        title: "I‑Feel‑funksjon",
        description:
          "Funksjonen aktiveres ved å trykke på I‑FEEL‑knappen på fjernkontrollen. Når funksjonen er aktivert, måler NTC‑sensoren innebygd i fjernkontrollen temperaturen. Dette gjør det mulig å oppdage og justere temperaturen i området der fjernkontrollen befinner seg. Plasser fjernkontrollen nærmest deg, slik at klimaanlegget kan skape det mest komfortable miljøet.",
        icon: Thermometer,
      },
      {
        title: "Turbo‑modus",
        description:
          "I TURBO‑modus går klimaanlegget en periode etter oppstart med økt effekt. Dette gjør det mulig å nå ønsket komforttemperatur raskere. I TURBO‑modus går klimaanlegget med maksimal hastighet og lavt støynivå. Når ønsket temperatur er nådd, fortsetter klimaanlegget å operere i normalmodus.",
        icon: Zap,
      },
      {
        title: "Hot Start",
        description:
          "Denne teknologien forhindrer at kald luft blåses ut fra klimaanlegget når det starter. Klimaanlegget starter først når kompressoren har nådd arbeidstemperatur. Dette sikrer jevn og effektiv drift og garanterer sikker og langvarig bruk.",
        icon: Flame,
      },
      {
        title: "Horisontal sving",
        description:
          "Horisontal sving (eller «sving») er en klimaanleggsmodus der de horisontale lamellene i innendørsenheten beveger seg automatisk opp og ned for å skape en stor luftstrøm med bred dekning. Dette gjør det mulig å fordele den kjølige (eller oppvarmede) luften jevnt i hele rommet og unngå rettet luftstrøm mot personer.",
        icon: Wind,
      },
      {
        title: "Vertikal sving",
        description:
          "Vertikal sving (eller «sving») er en driftsmodus der en gruppe vertikale lameller på innendørsenheten beveger seg automatisk fra høyre til venstre, og skaper en stor luftstrøm med bred dekning. Jevn luftfordeling forhindrer trekk og ubehag, samtidig som oppvarming av rommet skjer raskere og mer jevnt.",
        icon: Wind,
      },
      {
        title: "+8°C Function",
        description:
          "Denne funksjonen gjør det mulig for klimaanlegget å opprettholde en temperatur på +8°C uten at rommet fryser, samtidig som strømforbruket holdes på et minimum. +8°C‑funksjonen er relevant i kaldt vær, for fritidshus og hytter uten sentralvarme, samt for midlertidig ubebodde rom.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Sleep Mode",
        description:
          "Sovemodus i klimaanlegget er en smart funksjon som justerer driften av enheten for å gjøre søvnen din så behagelig og økonomisk som mulig. I stedet for å opprettholde samme temperatur hele natten, endrer klimaanlegget temperaturen gradvis. I kjølemodus blir det gradvis litt varmere, og i varmepumpe‑modus litt kjøligere.",
        bullets: [
          "Cooper&Hunter‑klimaanlegget tilbyr 4 komfortable sovemoduser:",
          "Sound Sleep – klimaanlegget tilpasser seg biorytmen din.",
          "Easy Wake‑up – temperaturen justeres automatisk slik at du våkner oppfrisket og full av energi.",
          "Siesta – optimal temperatur for ettermiddagsslur.",
          "Personalized Settings – velg de innstillingene som passer best for din søvn.",
        ],
        icon: Moon,
      },
      {
        title: "Tørking av klær",
        description:
          "Ved bruk av tørkefunksjonen i klimaanlegget plasseres tørkestativet enkelt på gulvtrekkeren og slår på kontinuerlig tørkemodus. Fuktigheten som kondenseres fra tøyet, fjernes av klimaanlegget og opprettholder dermed normal fuktbalanse i rommet.",
        icon: Droplets,
      },
      {
        title: "Stillemodus",
        description:
          "I stillemodus er lydtrykknivået fra innendørsenheten opptil 19 dB(A), noe som tilsvarer lyden av en stille sommernatt. Utendørsenhetens stillemodus reduserer støynivået med opptil 40 dB(A) og sikrer ro for nattesøvn. Enheten opererer nesten umerkelig om natten, samtidig som optimal lufttemperatur opprettholdes.",
        icon: VolumeX,
      },
    ],
  },
]

export default function FunksjonerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-10 md:py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Funksjon register</h1>
              <p className="mt-4 text-lg text-black/80">
                Alle funksjoner samlet på ett sted – med forklaringer og definisjoner.
              </p>
            </div>
          </div>
        </section>

        {sections.map((section) => {
          const idMap: Record<string, string> = {
            "TEKNOLOGISKE FUNKSJONER": "teknologiske-funksjoner",
            "INTELLIGENTE FUNKSJONER": "intelligente-funksjoner",
            "HELSE FUNKSJONER": "helse-funksjoner",
            "KONTROLL FUNKSJONER": "kontroll-funksjoner",
            "KOMFORT FUNKSJONER": "komfort-funksjoner",
          }
          const sectionId = idMap[section.title]
          return (
            <section key={section.title} className="py-10 md:py-12" id={sectionId}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl">{section.title}</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {section.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <Card key={item.title} className="border-blue-900/10 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900/10 text-blue-900">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-base font-semibold text-blue-900">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            {item.bullets ? (
                              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                                {item.bullets.map((bullet) => (
                                  <li key={bullet} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900/60" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
          )
        })}
      </main>

      <SiteFooter />
    </div>
  )
}

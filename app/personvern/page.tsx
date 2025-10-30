import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PersonvernPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Personvernerklæring</h1>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Innledning</h2>
                <p>
                  Varmepumpeservice AS er opptatt av å beskytte personvernet ditt. Denne personvernerklæringen
                  beskriver hvordan vi samler inn, bruker og beskytter dine personopplysninger når du besøker
                  vår nettside eller bruker våre tjenester.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Behandlingsansvarlig</h2>
                <p>
                  <strong>Varmepumpeservice AS</strong>
                  <br />
                  Mjåvannssløyfen 200
                  <br />
                  4628 Kristiansand
                  <br />
                  E-post: firmapost@varmepumpeservice.no
                  <br />
                  Telefon: +47 40 00 58 94
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Hvilke opplysninger samler vi inn?</h2>
                <p>Vi kan samle inn følgende typer personopplysninger:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kontaktinformasjon (navn, e-postadresse, telefonnummer)</li>
                  <li>Adresseinformasjon når du ber om befaring eller tilbud</li>
                  <li>Informasjon du oppgir i kontaktskjemaer eller henvendelser</li>
                  <li>Teknisk informasjon (IP-adresse, nettlesertype, besøksdata via cookies og analyseverktøy)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Formål og rettslig grunnlag</h2>
                <p>Vi behandler personopplysninger for følgende formål:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Å behandle henvendelser og tilbud:</strong> Rettslig grunnlag er samtykke og
                    oppfyllelse av avtale.
                  </li>
                  <li>
                    <strong>Kundeadministrasjon:</strong> Rettslig grunnlag er oppfyllelse av avtale.
                  </li>
                  <li>
                    <strong>Forbedre nettsiden og brukeropplevelsen:</strong> Rettslig grunnlag er vår
                    legitime interesse i å forbedre tjenestene våre.
                  </li>
                  <li>
                    <strong>Markedsføring:</strong> Rettslig grunnlag er samtykke, som kan trekkes tilbake
                    når som helst.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Cookies og analyseverktøy</h2>
                <p>
                  Vi bruker Google Analytics og Google Tag Manager for å analysere bruken av nettsiden vår.
                  Disse verktøyene bruker cookies for å samle inn anonymisert informasjon om hvordan besøkende
                  bruker nettsiden. Dette hjelper oss med å forbedre brukeropplevelsen.
                </p>
                <p className="mt-4">
                  Du kan når som helst slette eller blokkere cookies via nettleserens innstillinger.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Utlevering til tredjeparter</h2>
                <p>
                  Vi deler ikke dine personopplysninger med tredjeparter, med mindre det er nødvendig for å
                  levere tjenesten (f.eks. installatører for befaring), eller hvis vi er juridisk forpliktet
                  til det.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Lagring av personopplysninger</h2>
                <p>
                  Vi lagrer personopplysningene dine bare så lenge det er nødvendig for å oppfylle formålene
                  beskrevet i denne erklæringen, eller i henhold til lovkrav.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Dine rettigheter</h2>
                <p>I henhold til personvernlovgivningen har du rett til å:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be om innsyn i hvilke personopplysninger vi har om deg</li>
                  <li>Be om retting av uriktige opplysninger</li>
                  <li>Be om sletting av dine personopplysninger</li>
                  <li>Be om begrensning av behandling</li>
                  <li>Protestere mot behandling av dine personopplysninger</li>
                  <li>Be om dataportabilitet (få overført dine opplysninger)</li>
                  <li>Trekke tilbake samtykke når som helst</li>
                </ul>
                <p className="mt-4">
                  For å utøve dine rettigheter, kontakt oss på{" "}
                  <a href="mailto:firmapost@varmepumpeservice.no" className="text-primary hover:underline">
                    firmapost@varmepumpeservice.no
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Sikkerhet</h2>
                <p>
                  Vi har implementert passende tekniske og organisatoriske tiltak for å beskytte
                  personopplysningene dine mot tap, misbruk og uautorisert tilgang.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Endringer i personvernerklæringen</h2>
                <p>
                  Vi kan oppdatere denne personvernerklæringen fra tid til annen. Eventuelle endringer vil bli
                  publisert på denne siden.
                </p>
                <p className="mt-4">
                  <strong>Sist oppdatert:</strong> {new Date().toLocaleDateString("nb-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Kontakt oss</h2>
                <p>
                  Hvis du har spørsmål om denne personvernerklæringen eller hvordan vi behandler
                  personopplysningene dine, kan du kontakte oss:
                </p>
                <p className="mt-4">
                  E-post:{" "}
                  <a href="mailto:firmapost@varmepumpeservice.no" className="text-primary hover:underline">
                    firmapost@varmepumpeservice.no
                  </a>
                  <br />
                  Telefon: +47 40 00 58 94
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

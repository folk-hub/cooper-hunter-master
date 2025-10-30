"use client"

import Script from "next/script"
import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SparekalkulatorClient() {
  useEffect(() => {
    const applyStyles = () => {
      const calculator = document.querySelector(".calconic-calculator")
      if (calculator) {
        const darkElements = calculator.querySelectorAll('[style*="background"]')
        darkElements.forEach((element: Element) => {
          const htmlElement = element as HTMLElement
          const bgColor = htmlElement.style.backgroundColor || htmlElement.style.background

          if (
            bgColor &&
            (bgColor.includes("rgb(51") ||
              bgColor.includes("rgb(68") ||
              bgColor.includes("rgb(85") ||
              bgColor.includes("rgb(33") ||
              bgColor.includes("rgb(45") ||
              bgColor.includes("#333") ||
              bgColor.includes("#444") ||
              bgColor.includes("#555"))
          ) {
            htmlElement.style.backgroundColor = "#1e3a8a"
            htmlElement.style.background = "#1e3a8a"
          }
        })
      }
    }

    applyStyles()
    const timer1 = setTimeout(applyStyles, 1000)
    const timer2 = setTimeout(applyStyles, 2000)
    const timer3 = setTimeout(applyStyles, 3000)

    const observer = new MutationObserver(applyStyles)
    const calculator = document.querySelector(".calconic-calculator")
    if (calculator) {
      observer.observe(calculator, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style"],
      })
    }

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 md:pb-2.5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Sparekalkulator</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Beregn hvor mye du kan spare på strømregningen med en Cooper&Hunter varmepumpe. Fyll inn dine
                opplysninger nedenfor for å få et estimat på dine besparelser.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="pb-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="calconic-calculator" data-calculatorid="647d8ce068eb6d0029bcc73b" />
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="pb-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Hvor mye man sparer ved å installere en varmepumpe vil alltid være individuelt, siden ulike husstander
                  har forskjellige behov. Besparelsen avhenger også av boligens størrelse, isolasjon, klimaet ute, hvor
                  høye strømprisene er og om modell og dimensjon på pumpen er optimal med tanke på din bolig.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Siden en varmepumpe som regel gir tre til fem ganger mer kW igjen med varme enn hva den bruker i
                  strøm, vil besparelsen ofte være svært god. Ved installasjon av varmepumpe som erstatning for
                  tradisjonell elektrisk oppvarming er det ikke uvanlig å spare mange kWh i året.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                  <p className="text-gray-800 leading-relaxed italic">
                    <strong>Gjennomsnitt strømforbruk hos en husholdning er 20.000 kWh pr. år.</strong> Opptil 60 % av
                    dette går til oppvarming, dvs. 12.000 kWh. Ved å installere varmepumpe vil man kunne spare opptil 60
                    % av oppvarmingskostnadene = 7.200 kWh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      <Script
        id="calconic-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() { 
              var qs,j,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="calconic_", b="https://cdn.calconic.com/static/js/"; 
              if(!gi.call(d,id)) { 
                j=ce.call(d,"script"); 
                j.id=id; 
                j.type="text/javascript"; 
                j.async=true; 
                j.dataset.calconic=true; 
                j.src=b+"calconic.min.js"; 
                q=gt.call(d,"script")[0]; 
                q.parentNode.insertBefore(j,q) 
              } 
            })();
          `,
        }}
      />
    </div>
  )
}

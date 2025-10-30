"use client"

import Script from "next/script"
import { useEffect } from "react"

export function SparekalkulatorContent() {
  useEffect(() => {
    const applyStyles = () => {
      const calculator = document.querySelector(".calconic-calculator")
      if (!calculator) return

      // Target all elements with dark backgrounds
      const allElements = calculator.querySelectorAll("*")
      allElements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement
        const computedStyle = window.getComputedStyle(htmlElement)
        const bgColor = computedStyle.backgroundColor

        // Check if background is dark (rgb values below 100)
        const rgbMatch = bgColor.match(/rgb$$(\d+),\s*(\d+),\s*(\d+)$$/)
        if (rgbMatch) {
          const r = Number.parseInt(rgbMatch[1])
          const g = Number.parseInt(rgbMatch[2])
          const b = Number.parseInt(rgbMatch[3])

          // If it's a dark color (all values below 100), change to blue-900
          if (r < 100 && g < 100 && b < 100 && (r > 0 || g > 0 || b > 0)) {
            htmlElement.style.setProperty("background-color", "#1e3a8a", "important")
            htmlElement.style.setProperty("background", "#1e3a8a", "important")
          }
        }
      })
    }

    // Apply styles multiple times as calculator loads dynamically
    const timers = [100, 500, 1000, 2000, 3000, 4000].map((delay) => setTimeout(applyStyles, delay))

    // Watch for changes in the calculator
    const observer = new MutationObserver(() => {
      setTimeout(applyStyles, 100)
    })

    const calculator = document.querySelector(".calconic-calculator")
    if (calculator) {
      observer.observe(calculator, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class"],
      })
    }

    return () => {
      timers.forEach(clearTimeout)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Calculator Section */}
      <section className="pb-0">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 md:p-8 md:px-0 px-0 md:pt-0">
              <div className="calconic-calculator" data-calculatorid="647d8ce068eb6d0029bcc73b" />
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="pb-0">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 md:p-8 px-0 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Hvor mye man sparer ved å installere en varmepumpe vil alltid være individuelt, siden ulike husstander
                har forskjellige behov. Besparelsen avhenger også av boligens størrelse, isolasjon, klimaet ute, hvor
                høye strømprisene er og om modell og dimensjon på pumpen er optimal med tanke på din bolig.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Siden en varmepumpe som regel gir tre til fem ganger mer kW igjen med varme enn hva den bruker i strøm,
                vil besparelsen ofte være svært god. Ved installasjon av varmepumpe som erstatning for tradisjonell
                elektrisk oppvarming er det ikke uvanlig å spare mange kWh i året.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed italic">
                  <strong>Gjennomsnitt strømforbruk hos en husholdning er 20.000 kWh pr. år.</strong> Opptil 60 % av
                  dette går til oppvarming, dvs. 12.000 kWh. Ved å installere varmepumpe vil man kunne spare opptil 60 %
                  av oppvarmingskostnadene = 7.200 kWh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .calconic-calculator [style*="background-color: rgb(51"],
        .calconic-calculator [style*="background-color: rgb(68"],
        .calconic-calculator [style*="background-color: rgb(85"],
        .calconic-calculator [style*="background-color: rgb(33"],
        .calconic-calculator [style*="background-color: rgb(45"],
        .calconic-calculator [style*="background: rgb(51"],
        .calconic-calculator [style*="background: rgb(68"],
        .calconic-calculator [style*="background: rgb(85"],
        .calconic-calculator [style*="background: rgb(33"],
        .calconic-calculator [style*="background: rgb(45"] {
          background-color: #1e3a8a !important;
          background: #1e3a8a !important;
        }
      `}</style>

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
    </>
  )
}

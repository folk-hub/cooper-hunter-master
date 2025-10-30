import type React from "react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Sparekalkulator - Cooper&Hunter",
  description: "Beregn hvor mye du kan spare med en Cooper&Hunter varmepumpe",
}

export default function SparekalkulatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="md:py-24 py-16 pb-0 md:pb-0">
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
        <section className="pb-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl p-6 md:p-8 bg-transparent shadow-none px-0 py-0">{children}</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

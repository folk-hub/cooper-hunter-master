"use client"

import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { siteContent } from "@/content"

export default function ProductsPage() {
  const handleDownload = (productId: string) => {
    const link = document.createElement("a")
    link.href = `/produktark/${productId}-produktark.pdf`
    link.download = `Cooper&Hunter ${productId.charAt(0).toUpperCase() + productId.slice(1)}-produktark.pdf`
    link.click()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Våre produkter</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Utforsk vårt komplette utvalg av Cooper&Hunter varmepumper. Alle modeller er testet for norske forhold
                og leveres med full garanti.
              </p>
            </div>

            <div className="space-y-24">
              {siteContent.products.map((product, index) => {
                const isEven = index % 2 === 0
                const productImage = Array.isArray(product.images) ? product.images[0] : product.image

                return (
                  <div
                    key={product.id}
                    className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${isEven ? "" : "md:grid-flow-dense"}`}
                  >
                    {/* Image */}
                    <div className={`${isEven ? "" : "md:col-start-2"}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                        <img
                          src={productImage || "/placeholder.svg"}
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? "" : "md:col-start-1 md:row-start-1"}`}>
                      <Badge variant="secondary" className="mb-4">
                        {product.scop}
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{product.name}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

                      {/* Key features */}
                      <ul className="space-y-3 mb-8">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-900 mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-4">
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                        >
                          <Link href={`/produkter/${product.id}`}>
                            Les mer
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>

                        {(product.id === "arctic" || product.id === "daytona") && (
                          <Button
                            size="lg"
                            className="bg-blue-900 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                            onClick={() => handleDownload(product.id)}
                          >
                            <Download className="mr-2 h-5 w-5" />
                            Last ned produktark
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

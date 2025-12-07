"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Wifi, Gauge, ThermometerSnowflake, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCarousel } from "@/components/product-carousel"
import { getProductById } from "@/content"
import { comfortCopy, performanceCopy, savingsCtaCopy } from "@/content/brandStory"

const iconMap = {
  ThermometerSnowflake,
  Wifi,
  Wind,
  Gauge,
}

export default function Arctic24Page() {
  const product = getProductById("arctic-24")

  if (!product) {
    return <div>Product not found</div>
  }

  const { detailPage } = product
  const ambientImages = ["/images/arctic-vinter.webp", "/images/arctic-kontor-sommer.webp", "/images/arctic-treningsrom.webp"]
  const ambientLabels = ["Soverommet", "Hjemmekontoret", "Treningsrommet"]

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/produktark/produktark_KIT-Arctic24.pdf"
    link.download = "Cooper&Hunter Arctic 24-produktark.pdf"
    link.click()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/produkter">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {detailPage.backButton}
              </Link>
            </Button>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {product.scop}
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{detailPage.title}</h1>
                  <p className="text-xl text-muted-foreground">{detailPage.subtitle}</p>
                </div>

                {product.images && <ProductCarousel images={product.images} alt={product.name} />}

                <div className="prose prose-gray max-w-none">
                  <p className="text-lg leading-relaxed">{detailPage.description}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    onClick={handleDownload}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {detailPage.downloadButton}
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link
                      href="https://www.varmepumpeservice.no/gratis-befaring"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {detailPage.findDealerButton}
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{detailPage.specifications.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {detailPage.specifications.items.map((spec, index) => (
                        <div key={index}>
                          <p className="text-muted-foreground">{spec.label}</p>
                          <p className="font-semibold">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{detailPage.keyFeatures.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {detailPage.keyFeatures.items.map((feature, index) => {
                        const iconName =
                          index === 0 ? "ThermometerSnowflake" : index === 1 ? "Wifi" : index === 2 ? "Wind" : "Gauge"
                        const Icon = iconMap[iconName as keyof typeof iconMap]
                        return (
                          <div key={index} className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{feature.title}</h4>
                              <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-primary-foreground bg-blue-900">
                  <CardContent className="pt-0">
                    <p className="text-2xl font-bold mb-2">{product.price}</p>
                    <p className="text-sm opacity-90">{detailPage.priceNote}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-16">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl h-[320px] md:h-[420px]">
              <Image
                src="/images/arctic-vinter.webp"
                alt={`${product.name} i vinterdrift`}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 py-10 md:px-16 md:py-12 max-w-2xl space-y-3 text-white">
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">{performanceCopy.eyebrow}</p>
                  <p className="text-2xl font-bold leading-tight md:text-3xl">{performanceCopy.headline}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-4 md:space-y-5">
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">{comfortCopy.heading}</h2>
                {comfortCopy.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg bg-white">
                <ProductCarousel images={ambientImages} alt={`${product.name} miljøbilder`} fit="cover" captions={ambientLabels} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl font-semibold leading-tight md:text-3xl">{savingsCtaCopy.title}</h3>
              <p className="text-lg text-white/90">{savingsCtaCopy.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-blue-900 transition-all duration-200 hover:scale-[1.02] hover:bg-white"
              >
                <Link href="https://www.varmepumpeservice.no/gratis-befaring" target="_blank" rel="noopener noreferrer">
                  {savingsCtaCopy.primaryCta}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white hover:text-blue-900"
                onClick={handleDownload}
              >
                {savingsCtaCopy.secondaryCta}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

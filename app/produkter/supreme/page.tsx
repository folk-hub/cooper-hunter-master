import Link from "next/link"
import { ArrowLeft, Download, Wifi, Zap, ThermometerSnowflake, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCarousel } from "@/components/product-carousel"
import { getProductById } from "@/content"

const iconMap = {
  ThermometerSnowflake,
  Sun,
  Zap,
  Wifi,
}

export default function SupremePage() {
  const product = getProductById("supreme")

  if (!product) {
    return <div>Product not found</div>
  }

  const { detailPage } = product

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
                  <Button size="lg" className="transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    <Download className="mr-2 h-4 w-4" />
                    {detailPage.downloadButton}
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/om">{detailPage.findDealerButton}</Link>
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
                          index === 0 ? "ThermometerSnowflake" : index === 1 ? "Sun" : index === 2 ? "Zap" : "Wifi"
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
      </main>

      <SiteFooter />
    </div>
  )
}

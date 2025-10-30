import Link from "next/link"
import { ArrowRight, Snowflake, Zap, Shield, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCarousel } from "@/components/product-carousel"
import { siteContent } from "@/content"

export default function HomePage() {
  const { homepage, products } = siteContent

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/design-mode/c-huntersofa.webp"
              alt="Cooper&Hunter varmepumpe i moderne stue"
              className="object-cover w-full h-full"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-transparent" />
          </div>

          {/* Content */}
          <div className="container relative z-10 text-center text-white py-20 px-6 md:px-0">
            <h1 className="font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-balance text-black text-center px-0 text-5xl">
              {homepage.hero.title}
            </h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-pretty opacity-90 text-black text-center sm:text-4xl">
              {homepage.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button className="bg-blue-900 text-white hover:bg-blue-700" size="lg" variant="secondary" asChild>
                <Link href="/produkter">{homepage.hero.buttonText}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background md:py-16">
          <div className="container">
            <p className="md:text-2xl text-center max-w-4xl mx-auto leading-relaxed text-blue-900 text-lg">
              {homepage.intro.text}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-transparent py-0 md:py-0 mb-0">
          <div className="max-w-7xl bg-blue-50 rounded-2xl mx-4 sm:mx-6 lg:mx-auto my-0 py-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
              <Card className="border-none shadow-none bg-transparent p-0 my-5">
                <CardHeader className="p-0 my-2.5">
                  <TrendingDown className="h-7 w-7 md:h-9 md:w-9 text-blue-900 mx-auto mb-0" />
                  <CardTitle className="text-center text-sm text-blue-900">{homepage.features[0].title}</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-none bg-transparent text-sm p-0 my-5">
                <CardHeader className="text-center p-0 my-2.5">
                  <Snowflake className="h-7 w-7 md:h-9 md:w-9 text-blue-900 mx-auto mb-0" />
                  <CardTitle className="text-center text-blue-900 text-sm">{homepage.features[1].title}</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-none bg-transparent p-0 my-5 mt-5">
                <CardHeader className="p-0 my-2.5">
                  <Zap className="h-7 w-7 md:h-9 md:w-9 text-blue-900 mx-auto mb-0" />
                  <CardTitle className="text-center text-sm text-blue-900">{homepage.features[2].title}</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-none bg-transparent p-0 my-5 mt-5">
                <CardHeader className="p-0 my-2.5">
                  <Shield className="h-7 w-7 md:h-9 md:w-9 text-blue-900 mx-auto mb-0" />
                  <CardTitle className="text-center text-sm text-blue-900">{homepage.features[3].title}</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="md:py-0 my-0 mb-0 py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 mb-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{homepage.productsSection.heading}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{homepage.productsSection.description}</p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow p-0 relative">
                  <Badge variant="secondary" className="absolute top-4 left-4 z-10">
                    {product.scop}
                  </Badge>
                  {product.images ? (
                    <ProductCarousel images={product.images} alt={product.name} />
                  ) : (
                    <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-lg font-semibold">{product.price}</p>
                  </CardContent>
                  <CardFooter className="pb-6">
                    <Button asChild className="w-full bg-blue-900 hover:bg-blue-700">
                      <Link href={`/produkter/${product.id}`}>
                        {product.buttonText || homepage.productsSection.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-0 md:py-20">
          <div className="container px-4 sm:px-6 mb-8">
            <div className="relative overflow-hidden rounded-2xl min-h-[400px] md:min-h-[500px] flex items-center justify-center">
              <img
                src="/images/design-mode/2025.01.01.jpg"
                alt="Perfekt inneklima"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.23)]" />
              <div className="relative z-10 text-center text-white py-12 px-6">
                <p className="text-sm md:text-base uppercase tracking-wider opacity-90 mb-1">
                  {homepage.imageSection1.title}
                </p>
                <h2 className="text-2xl md:text-5xl font-bold text-balance text-white px-2.5">
                  {homepage.imageSection1.description}
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-16 md:py-24 text-primary-foreground bg-blue-900">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{homepage.cta.heading}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{homepage.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/produkter">{homepage.cta.primaryButton}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="https://www.varmepumpeservice.no/gratis-befaring" target="_blank" rel="noopener noreferrer">
                  {homepage.cta.secondaryButton}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-20">
          <div className="container px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl min-h-[400px] md:min-h-[500px] flex items-center justify-center">
              <img
                src="/images/design-mode/cooper-hunter-design.webp"
                alt="Dokumentert effekt"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)]" />
              <div className="relative z-10 text-center text-white py-12 px-6">
                <p className="text-sm md:text-base uppercase tracking-wider opacity-90 mb-1">
                  {homepage.imageSection2.title}
                </p>
                <h2 className="text-2xl md:text-5xl font-bold text-balance text-white px-2.5">
                  {homepage.imageSection2.description}
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Three-column image cards section */}
      </main>

      <SiteFooter />
    </div>
  )
}

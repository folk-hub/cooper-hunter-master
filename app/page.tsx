import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Snowflake, Zap, Shield, TrendingDown, Sparkles, Fan, Filter, Wifi, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCarousel } from "@/components/product-carousel"
import { RoomCarousel } from "@/components/room-carousel"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
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
            <Image
              src="/images/design-mode/c-huntersofa.webp"
              alt="Cooper&Hunter varmepumpe i moderne stue"
              fill
              priority
              sizes="100vw"
              className="object-cover"
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

        <section className="py-10 md:py-12 bg-background">
          <AnimateOnScroll>
            <div className="container">
              <p className="md:text-2xl text-left md:text-center max-w-4xl mx-auto leading-relaxed text-blue-900 text-lg">
                {homepage.intro.text}
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        {/* Features Section */}
        <section className="bg-transparent py-10 md:py-12">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
        </section>

        {/* Room inspiration Section */}
        <section className="py-10 md:py-12">
          <div className="container px-4 sm:px-6">
            <AnimateOnScroll>
              <div className="text-left md:text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Passer perfekt i flere rom og på hytta
                </h2>
                <p className="text-lg text-muted-foreground">
                  Cooper &amp; Hunter varmepumper gir komfort der du trenger det: stue, hjemmekontor, treningsrom,
                  soverom eller fritidsbolig. Stilrent design og stille drift gjør dem enkle å plassere.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <RoomCarousel
                items={[
                  { src: "/images/arctic-kontor-sommer.webp", alt: "Hjemmekontor med varmepumpe", label: "Hjemmekontoret" },
                  { src: "/images/daytona-soverom-sommer.webp", alt: "Soverom med varmepumpe", label: "Soverommet" },
                  { src: "/images/daytona-skandinavisk-sommer.webp", alt: "Stue i skandinavisk stil med varmepumpe", label: "Stuen" },
                  { src: "/images/treningsrom-daytona.webp", alt: "Moderne treningsrom med varmepumpe", label: "Hjemmegym" },
                  { src: "/images/daytona-vinter-hytte.webp", alt: "Hytte med varmepumpe om vinteren", label: "Hytta" },
                ]}
              />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-10 md:py-12">
          <div className="container px-4 sm:px-6 mt-20 mb-8">
            <AnimateOnScroll>
              <div className="text-left md:text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{homepage.productsSection.heading}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{homepage.productsSection.description}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow p-0 relative">
                  <Badge variant="secondary" className="absolute top-4 left-4 z-10">
                    {product.scop}
                  </Badge>
                  {product.images ? (
                    <ProductCarousel images={product.images} alt={product.name} fit="cover" />
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    {(() => {
                      const [lead, quote] = product.description.split("\n")
                      return (
                        <CardDescription>
                          <span>{lead}</span>
                          {quote ? (
                            <span className="mt-2 block border-l-4 border-blue-900/30 pl-3 italic text-blue-900/80">
                              “{quote}”
                            </span>
                          ) : null}
                        </CardDescription>
                      )
                    })()}
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
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-10 md:py-12">
          <AnimateOnScroll>
            <div className="container px-4 sm:px-6 mb-8">
              <div className="relative overflow-hidden rounded-2xl min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/daytona-soverom-vinter.webp"
                  alt="Perfekt inneklima"
                  fill
                  sizes="100vw"
                  className="object-cover"
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
          </AnimateOnScroll>
        </section>

        <section className="py-10 md:py-12">
          <AnimateOnScroll>
            <div className="container px-4 sm:px-6">
              <div className="rounded-3xl border border-blue-900/10 bg-white/70 px-6 py-8 shadow-sm md:px-10 md:py-10">
                <div className="mx-auto max-w-3xl text-left md:text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Smartere inneklima</h2>
                  <p className="mt-3 text-lg text-muted-foreground">
                    Teknologi, komfort og driftssikkerhet som jobber sammen i én helhet.
                  </p>
                </div>

                <div className="mt-10 space-y-10">
                <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
                  <div className="flex justify-center md:justify-start">
                    <p className="inline-flex items-center gap-2 rounded-full bg-blue-900/10 px-4 py-1 text-sm font-semibold text-blue-900">
                      Renere luft
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {homepage.airCareSection.bullets.map((item, index) => {
                      const icons = [Sparkles, Fan, Filter]
                      const Icon = icons[index] ?? Sparkles
                      return (
                        <Link key={item} href="/funksjoner#helse-funksjoner" className="block">
                          <Card className="border-blue-900/10 shadow-none transition hover:bg-blue-900/5">
                            <CardContent className="p-4 text-center">
                              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/10 text-blue-900">
                                <Icon className="h-5 w-5" />
                              </div>
                              <p className="text-sm font-medium text-blue-900">{item}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
                  <div className="flex justify-center md:justify-start">
                    <p className="inline-flex items-center gap-2 rounded-full bg-blue-900/10 px-4 py-1 text-sm font-semibold text-blue-900">
                      Smart styring
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {homepage.smartControlSection.bullets.map((item, index) => {
                      const icons = [Wifi, Clock]
                      const Icon = icons[index] ?? Wifi
                      return (
                        <Link key={item} href="/funksjoner#kontroll-funksjoner" className="block">
                          <Card className="border-blue-900/10 shadow-none transition hover:bg-blue-900/5">
                            <CardContent className="p-4 text-center">
                              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/10 text-blue-900">
                                <Icon className="h-5 w-5" />
                              </div>
                              <p className="text-sm font-medium text-blue-900">{item}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
                  <div className="flex justify-center md:justify-start">
                    <p className="inline-flex items-center gap-2 rounded-full bg-blue-900/10 px-4 py-1 text-sm font-semibold text-blue-900">
                      Ytelser
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {homepage.performanceSection.bullets.map((item, index) => {
                      const icons = [Zap, Shield, Snowflake]
                      const Icon = icons[index] ?? Zap
                      const [title, body] = item.split("|")
                      return (
                        <Link key={item} href="/funksjoner#teknologiske-funksjoner" className="block">
                          <Card className="border-blue-900/10 shadow-none transition hover:bg-blue-900/5">
                            <CardContent className="p-4 text-center">
                              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/10 text-blue-900">
                                <Icon className="h-5 w-5" />
                              </div>
                              <p className="text-sm font-semibold text-blue-900">{title}</p>
                              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

                <div className="mt-10 flex justify-center md:justify-start">
                  <Link
                    href="/funksjoner"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700"
                  >
                    Se alle funksjoner
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="py-10 md:py-12">
          <AnimateOnScroll>
            <div className="container px-4 sm:px-6">
              <div className="rounded-3xl border border-blue-900/10 bg-blue-900/5 px-6 py-10 md:px-10 md:py-12">
                <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                  <div className="space-y-4 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-900/60">Prosjekt for</p>
                    <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                      SAMFUNNSANSVAR
                      <br />
                      &ldquo;VI REDDER PLANETEN&rdquo;
                    </h2>
                    <p className="text-base text-muted-foreground">
                      Høsten 2019 kunngjorde det globale klimamerket Cooper&Hunter starten på gjennomføringen av det
                      langsiktige prosjektet &ldquo;Vi redder planeten&rdquo;. Prosjektet omfatter alle land der klimaanlegg selges.
                      Cooper&Hunter selger klimaanlegg i mer enn 45 land, inkludert Ukraina.
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-[320px] rounded-2xl bg-white/80 p-6 shadow-sm">
                      <Image
                        src="/images/Logo_R32.png"
                        alt="Cooper&Hunter R32 logo"
                        width={320}
                        height={240}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-10 md:py-12 text-primary-foreground bg-blue-900">
          <AnimateOnScroll>
            <div className="container text-left md:text-center">
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
          </AnimateOnScroll>
        </section>

        <section className="py-10 md:py-12">
          <AnimateOnScroll>
            <div className="container px-4 sm:px-6">
              <div className="relative overflow-hidden rounded-2xl min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/yoga.webp"
                  alt="Dokumentert effekt"
                  fill
                  sizes="100vw"
                  className="object-cover"
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
          </AnimateOnScroll>
        </section>

        {/* Three-column image cards section */}
      </main>

      <SiteFooter />
    </div>
  )
}

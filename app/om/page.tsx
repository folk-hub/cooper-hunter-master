import { Building2, Users, TrendingUp, Award, MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { aboutPage } from "@/content"

const iconMap = {
  Building2,
  Users,
  TrendingUp,
  Award,
  MapPin,
  Phone,
  Mail,
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-transparent">
        {/* Hero Section */}

        {/* Contact Section */}
        <section className="bg-muted/30 md:py-10 text-left py-10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 ml-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-left">
                {aboutPage.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground text-left">{aboutPage.contact.subtitle}</p>
            </div>

            <Card>
              <CardContent className="pt-2.5">
                <div className="space-y-6">
                  {aboutPage.contact.details.map((detail, index) => {
                    const Icon =
                      iconMap[
                        detail.type === "address"
                          ? "MapPin"
                          : detail.type === "phone"
                            ? "Phone"
                            : ("Mail" as keyof typeof iconMap)
                      ]
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{detail.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line">{detail.content}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <section className="md:py-8 py-10">
          <div className="container bg-transparent">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="space-y-6">
                <div className="prose prose-gray max-w-none">
                  <h2 className="text-3xl font-bold tracking-tight mb-4">{aboutPage.history.title}</h2>
                  {aboutPage.history.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/images/design-mode/Skandinavisk-sommer.webp"
                    alt="Cooper & Hunter varmepumpe i moderne skandinavisk stue med utsikt over norsk natur"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

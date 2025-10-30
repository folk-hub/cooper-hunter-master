import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { siteContent } from "@/content"

export function SiteFooter() {
  const { footer } = siteContent

  return (
    <footer className="border-t bg-slate-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/design-mode/cooper-hunter-logo.webp"
                alt="Cooper&Hunter"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{footer.companyDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.contact.title}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{footer.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{footer.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{footer.contact.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.links.title}</h3>
            <nav className="flex flex-col gap-2 text-sm">
              {footer.links.items.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

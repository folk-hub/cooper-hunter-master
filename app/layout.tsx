import type React from "react"
import type { Metadata } from "next"

import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

// Fonter: Roboto ligger nå i prosjektet (via @fontsource/roboto) i stedet for å hentes
// fra Google Fonts under bygging. Det gjør at byggingen på Netlify ikke er avhengig av Google.
// Vektene under er de samme som før: 300, 400, 500 og 700.
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

export const metadata: Metadata = {
  title: "Cooper&Hunter Varmepumper | Varmepumpeservice AS",
  description:
    "Høykvalitets varmepumper fra Cooper&Hunter. Lav kostnad, høy klasse. Distribuert av Varmepumpeservice AS - en av Norges ledende leverandører.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang="no">
      <head>
        {/* Google Tag Manager (production only) - GTM handles Cookiebot */}
        {isProduction && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PSC7HGP8');
              `,
            }}
          />
        )}
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) (production only) */}
        {isProduction && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PSC7HGP8"
              height="0"
              width="0"
              style={{display: 'none', visibility: 'hidden'}}
            />
          </noscript>
        )}

        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}

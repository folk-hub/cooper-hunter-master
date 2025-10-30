import type React from "react"
import type { Metadata } from "next"

import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

import { Roboto, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Cooper&Hunter Varmepumper | Varmepumpeservice AS",
  description:
    "Høykvalitets varmepumper fra Cooper&Hunter. Lav kostnad, høy klasse. Distribuert av Varmepumpeservice AS - en av Norges ledende leverandører.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{__html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSC7HGP8');
        `}} />

        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KCVJGV33QE"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KCVJGV33QE');
        `}} />
      </head>
      <body className={`${roboto.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{__html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSC7HGP8"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}} />

        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}

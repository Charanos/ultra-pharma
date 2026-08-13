import "./globals.css";
import type { Metadata } from "next";
import { Source_Serif_4, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/structure/site-header";
import { SiteFooter } from "@/components/structure/site-footer";
import { MotionProvider } from "@/components/motion/motion-provider";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/content/site";

/** Weight ceiling 500, no italics, per `03 §3`. */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-source-serif",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-inter-tight",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ultra Pharma · Regulatory affairs and market access, Kenya",
    template: "%s · Ultra Pharma",
  },
  description:
    "Registration, compliance and health technology assessment for healthcare products in Kenya and East Africa. From Pharmacy and Poisons Board approval to SHA reimbursement.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_KE",
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSerif.variable} ${interTight.variable} ${plexMono.variable}`}
    >
      <head>
        {/*
          Runs before paint. Only then does CSS hide the pre-animation state, so
          a visitor without scripting, or with reduced motion set, sees the page
          at its end state rather than a blank one.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-ready')}}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <MotionProvider />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}

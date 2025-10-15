import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/navigation";
import { Varela_Round, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";

// Varela Round as fallback font (Google Fonts)
const varelaRound = Varela_Round({
  subsets: ["latin"],
  variable: "--font-varela-round",
  display: "swap",
  weight: "400",
});

// Montserrat as secondary for titles/links/headers
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ultra Pharma - Leading Pharmaceutical Innovation",
  description:
    "Driving healthcare innovation across Kenya and Africa with trusted regulatory expertise, streamlined compliance, and tailored market access solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${varelaRound.variable} ${montserrat.variable} antialiased scroll-smooth`}
        style={{
          fontFamily:
            "Helvetica Neue, Helvetica, var(--font-varela-round), Arial, sans-serif",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <Navigation />
          {children}

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

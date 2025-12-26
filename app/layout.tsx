import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/providers";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import LoadingScreen from "@/components/loading-screen";
import siteContent from "@/data/site-content.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const holiday = localFont({
  src: "./fonts/HolidayFree.otf",
  variable: "--font-holiday",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.url || "https://martinquero.com"),
  title: {
    default: siteContent.meta.siteTitle,
    template: `%s | ${siteContent.meta.author}`,
  },
  description: siteContent.meta.siteDescription,
  keywords: siteContent.meta.keywords,
  authors: [{ name: siteContent.meta.author }],
  openGraph: {
    type: "website",
    locale: siteContent.meta.locale,
    url: "https://martinquero.com",
    title: siteContent.meta.siteTitle,
    description: siteContent.meta.siteDescription,
    images: [siteContent.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE", // TODO: Replace with actual code
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.meta.author,
  url: "https://martinquero.com",
  image: "https://martinquero.com/og-image.jpg",
  sameAs: [siteContent.footer.social.linkedin, siteContent.hero.whatsappLink],
  jobTitle: "Doctor en Ciencias Veterinarias & Coach Ontológico",
  worksFor: {
    "@type": "Organization",
    name: "Martín Quero - Desarrollo Personal Aplicado",
  },
  description: siteContent.meta.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${caveat.variable} ${holiday.variable} antialiased bg-warm-white dark:bg-[#0F172A]`}
      >
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <LoadingScreen />
          <SmoothScroll />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

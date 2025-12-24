import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/providers";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

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
  metadataBase: new URL("https://martinquero.com"),
  title: {
    default:
      "Martín Quero | Coach Ontológico para Equipos Científicos y de Salud",
    template: "%s | Martín Quero",
  },
  description:
    "Doctor en Ciencias y Coach Ontológico especializado en equipos técnicos, científicos y de salud. Gestión del estrés, liderazgo y comunicación en contextos críticos.",
  keywords: [
    "Coach Ontológico",
    "Coaching para científicos",
    "Gestión del estrés",
    "Burnout investigadores",
    "Liderazgo equipos técnicos",
    "Comunicación veterinaria",
    "Coach Mendoza",
  ],
  authors: [{ name: "Martín Quero" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://martinquero.com",
    title: "Martín Quero - Coach Ontológico Especializado",
    description:
      "Acompaño a profesionales y equipos de salud, ciencia e innovación a gestionar el estrés y liderar sin agotarse.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <SmoothScroll />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

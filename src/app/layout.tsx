import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppWrapper from "@/components/WhatsAppWrapper";
import Footer from "@/components/sections/Footer";
import LazyMotionProvider from "@/components/LazyMotionProvider";

// ─── Fontes via next/font (zero requisição ao Google em runtime) ──────────────
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

// ─── Metadata SEO ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Viviane Luiz Macedo | Compliance e Advocacia Empresarial",
    template: "%s | Viviane Luiz Macedo Advocacia",
  },
  description:
    "Advocacia Empresarial especializada em Compliance estratégico. Mitigue riscos, impulsione a governança corporativa e garanta integridade regulatória. Fale conosco!",
  keywords: [
    "advocacia empresarial",
    "compliance",
    "governança corporativa",
    "direito tributário",
    "gestão de riscos",
    "contratos empresariais",
    "advogada São Paulo",
    "Viviane Luiz Macedo",
  ],
  authors: [
    { name: "Viviane Luiz Macedo", url: "https://www.advocaciaviviane.com.br" },
  ],
  metadataBase: new URL("https://www.advocaciaviviane.com.br"),
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  themeColor: "#FFBF76",
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
  openGraph: {
    title: "Viviane Luiz Macedo | Compliance e Advocacia Empresarial",
    description:
      "Advocacia Empresarial especializada em Compliance estratégico. Mitigue riscos, impulsione a governança corporativa e garanta integridade regulatória. Fale conosco!",
    url: "https://www.advocaciaviviane.com.br",
    siteName: "Viviane Luiz Macedo Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Viviane Luiz Macedo - Compliance e Advocacia Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viviane Luiz Macedo | Compliance e Advocacia Empresarial",
    description:
      "Compliance estratégico e integridade regulatória para sua empresa.",
    images: ["/og-image.jpg"],
  },
};

// ─── Schema.org ───────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Viviane Luiz Macedo Advocacia",
  description:
    "Compliance estratégico e advocacia empresarial. Especialistas em governança corporativa, contratos, direito tributário e gestão de riscos.",
  url: "https://www.advocaciaviviane.com.br",
  telephone: "+5511996669191",
  email: "vivianemacedoadv@adv.oabsp.org.br",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  founder: {
    "@type": "Person",
    name: "Viviane Luiz Macedo",
    jobTitle: "Advogada e CEO",
    description:
      "Advogada desde 2008, com +15 anos de experiência em compliance corporativo e governança.",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  serviceType: [
    "Compliance Empresarial",
    "Governança Corporativa",
    "Direito Tributário",
    "Engenharia Contratual",
    "Gestão de Crise",
  ],
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://api.whatsapp.com" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LazyMotionProvider>
          <Header />
          {children}
          <WhatsAppWrapper />
          <Footer />
        </LazyMotionProvider>
      </body>
    </html>
  );
}

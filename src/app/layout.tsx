import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsApp from "@/components/WhatsApp";



export const metadata: Metadata = {
  title: 'Viviane Luiz Macedo | Compliance e Advocacia Empresarial',
  description: 'Advocacia Empresarial especializada em Compliance estratégico. Mitigue riscos, impulsione a governança corporativa e garanta integridade regulatória. Fale conosco!',
  
  // Define a URL base para não precisar repetir o domínio em todas as imagens
  metadataBase: new URL('https://www.advocaciaviviane.com.br'), 

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Viviane Luiz Macedo | Compliance e Advocacia Empresarial',
    description: 'Advocacia Empresarial especializada em Compliance estratégico. Mitigue riscos, impulsione a governança corporativa e garanta integridade regulatória. Fale conosco!',
    url: 'https://www.advocaciaviviane.com.br',
    siteName: 'Viviane Luiz Macedo Advocacia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/LogoLink.svg', // Recomendado colocar a imagem na pasta public/
        width: 1200,
        height: 630,
        alt: 'Viviane Luiz Macedo - Compliance e Advocacia Empresarial',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Viviane Luiz Macedo | Compliance e Advocacia Empresarial',
    description: 'Compliance estratégico e integridade regulatória para sua empresa.',
    images: ['/LogoLink.svg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

import FirstSection from "@/components/sections/FirstSection";
import SecondSection from "@/components/sections/SecondSection";
import ThirdSection from "@/components/sections/ThirdSection";

import { Metadata } from "next";



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

export default function Home() {
  return (
    <div className="">
      <main className="">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </main>
    </div>
  );
}

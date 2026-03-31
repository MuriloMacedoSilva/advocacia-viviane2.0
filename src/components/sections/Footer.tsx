"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bg-footer.svg" // Substitua pelo nome correto da sua imagem de fundo
        alt=""
        fill
        className="object-cover -z-10"
      />
      
      {/* Overlay para garantir contraste */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-[6%] lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna 1: Logo e Slogan */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Image 
              src="/LogoHeader.svg" 
              alt="Viviane Luiz Macedo" 
              width={220} 
              height={80} 
              className="brightness-0 invert" // Deixa a logo branca se ela for escura
            />
            <p className="font-poppins text-white/70 text-[14px] max-w-sm leading-relaxed">
              Consultoria jurídica e Compliance de alta performance. 
              Blindando operações e potencializando lucros através da estratégia legal.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className="flex flex-col gap-6">
            <h4 className="font-Montserrat text-brand text-[16px] font-bold uppercase tracking-widest">
              Contato
            </h4>
            <div className="flex flex-col gap-3 font-poppins text-[14px] text-white/80">
              <a href="mailto:vivianemacedoadv@adv.oabsp.org.br" className="hover:text-brand transition-colors">
                vivianemacedoadv@adv.oabsp.org.br
              </a>
              <a href="tel:11996669191" className="hover:text-brand transition-colors">
                (11) 99666-9191
              </a>
            </div>
          </div>

          {/* Coluna 3: Links e Redes */}
          <div className="flex flex-col gap-6">
            <h4 className="font-Montserrat text-brand text-[16px] font-bold uppercase tracking-widest">
              Institucional
            </h4>
            <div className="grid grid-cols-1 gap-3 font-poppins text-[14px] text-white/80">
              <a href="#" className="hover:text-brand transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-brand transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-brand transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Linha Inferior: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-[12px] text-white/40 text-center">
            © {currentYear} Advocacia Viviane Luiz Macedo. Todos os direitos reservados.
          </p>
          <p className="font-poppins text-[12px] text-white/40 uppercase tracking-tighter">
            Developed by Murilo Macedo
          </p>
        </div>
      </div>
    </footer>
  );
}
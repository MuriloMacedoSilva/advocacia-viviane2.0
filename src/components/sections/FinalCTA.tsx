"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function FinalCTA() {
  // Variantes com efeito de escala (Zoom Out suave)
  const zoomInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Ease personalizado (mais elegante)
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Background com Gradiente Escuro Radial (efeito luxo) */}
      
      <Image 
      src="/back4.svg"
      alt="complience"
      fill
      className="object-cover -z-1"/>

      <motion.div
        variants={zoomInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-[90%] max-w-4xl flex flex-col items-center text-center"
      >
        {/* Título Principal */}
        <motion.h2 
          variants={childVariants}
          className="font-Montserrat text-white font-bold text-[32px] md:text-[56px] leading-tight mb-8"
        >
          Para empresas que não aceitam <br /> 
          o risco como variável inevitável.
        </motion.h2>

        {/* Subtexto */}
        <motion.p 
          variants={childVariants}
          className="font-poppins text-white/70 text-[16px] md:text-[18px] max-w-2xl mb-12 leading-relaxed"
        >
          A advocacia moderna não vive nos tribunais, mas na estratégia que evita que você chegue até eles. Proteja sua operação com quem domina a complexidade de mercados internacionais.
        </motion.p>

        {/* Botão com Brilho Pulsante */}
        <motion.div variants={childVariants} className="relative group">
          {/* Brilho ao redor do botão */}
          <div className="absolute -inset-1 bg-brand blur-md opacity-20 group-hover:opacity-50 transition duration-500"></div>
          
          <a
            href="#"
            className="relative bg-brand px-10 py-5 text-gray-950 font-Montserrat font-bold text-[14px] md:text-[16px] uppercase tracking-widest transition-all duration-300 hover:bg-orange-200 hover:scale-105 inline-block"
          >
            Agendar reunião estratégica
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
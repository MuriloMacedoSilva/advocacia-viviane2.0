"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CLOUDINARY_CEO_IMAGE = "https://res.cloudinary.com/dhtjefgr3/image/upload/q_auto/f_auto/v1775862452/Viviane_1_uywjqa.jpg";

export default function CEOSection() {
  return (
    <section className="w-full bg-white py-32 lg:py-48 flex justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-[90%] max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        {/* Foto da CEO */}
        <motion.div
          variants={imageVariants}
          className="relative w-full lg:w-1/2 aspect-4/5 md:aspect-square lg:aspect-4/5"
        >
          <div className="absolute inset-0 border-2 border-brand translate-x-4 translate-y-4 -z-10 hidden md:block" />
          {/* ✅ loading="lazy" — está no final da página, lejos do fold */}
          {/* Foto desktop — esconde no mobile */}
          <Image
            src={CLOUDINARY_CEO_IMAGE}
            alt="Viviane Luiz Macedo - Advogada e CEO"
            fill
            className="hidden md:block object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />

          {/* Foto mobile — esconde no desktop */}
          <Image
            src={CLOUDINARY_CEO_IMAGE}
            alt="Viviane Luiz Macedo - Advogada e CEO"
            fill
            className="hidden md:block object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />

          {/* Foto mobile — esconde no desktop */}
          <Image
            src={CLOUDINARY_CEO_IMAGE}
            alt="Viviane Luiz Macedo - Advogada e CEO"
            fill
            className="block md:hidden object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute bottom-8 left-8">
            <h3 className="font-Montserrat text-white text-[22px] md:text-[28px] font-bold leading-none">
              VIVIANE LUIZ MACEDO.
            </h3>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          variants={textVariants}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <h2 className="font-Montserrat text-[32px] md:text-[42px] font-medium text-black leading-tight">
            Conheça nossa CEO
          </h2>
          <div className="space-y-6">
            <p className="font-poppins text-[15px] text-gray-700 leading-relaxed">
              Advogada desde 2008, com ampla vivência corporativa em compliance
              e governança, liderou projetos, implementou controles internos e
              conduziu auditorias. Segue expandindo sua atuação em assessoria
              preventiva a médias e grandes empresas, apoiada por um forte
              networking em compliance e expertise em gestão de riscos, revisão
              de contratos complexos, auditoria interna, comunicação persuasiva
              e treinamentos técnicos.
            </p>
            <p className="font-poppins text-[15px] text-gray-700 leading-relaxed border-l-4 border-brand2 pl-6 italic">
              A Viviane Luiz Macedo Advocacia nasce de uma experiência de 15
              anos em ambientes corporativos. Desde 2018, oferecendo serviços
              especializados na gestão de escritórios de advocacia, prestando
              assessoria preventiva a empresas de todos os portes, amparada por
              uma sólida rede de parcerias. Com técnica apurada e sensibilidade
              social, capta clientes e alianças comprometidos com a
              transparência e a ética organizacional.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

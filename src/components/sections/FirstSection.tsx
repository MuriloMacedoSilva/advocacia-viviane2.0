"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion"; // Adicione Variants aqui

export default function FirstSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Assine as constantes com o tipo Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative w-full h-screen xl:h-auto 2xl:h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        poster="/background1.svg"
        autoPlay
        loop
        muted
        playsInline
        className="absolute -z-2 min-w-full min-h-full object-cover"
      >
        <source src="/background.webm" type="video/webm" />
        <source src="/seu_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-1 bg-black/50"></div>

      {/* Container Principal Animado */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center w-[95%] xl:w-[71%] pt-29 xl:pt-0 gap-6 xl:gap-10 2xl:gap-15 md:gap-12 mt-30 lg:mt-26 mb-50"
      >
        {/* Badge superior */}
        <motion.div variants={itemVariants} className="border border-brand p-1.5 rounded-full font-semibold max-w-125 xl:mb-6.5 bg-brand/5 backdrop-blur-sm">
          <p className="text-brand font-Montserrat xl:text-[12px] text-[9px] text-center tracking-widest">
            BLINDAGEM JURÍDICA E COMPLIANCE ESTRATÉGICO
          </p>
        </motion.div>

        {/* Título */}
        <motion.h1 variants={itemVariants} className="text-white font-Montserrat font-bold text-[39px] leading-11 xl:text-[64px] text-center xl:leading-18 mb-4 xl:mb-0">
          A invisibilidade do risco é o <span className="text-brand">maior passivo</span> do seu negócio.
        </motion.h1>

        {/* Descrição */}
        <motion.p variants={itemVariants} className="text-white font-poppins font-normal text-[14px] xl:text-[17px] text-center w-[90%] xl:w-[80%] opacity-90">
          Transformamos contingências legais e atritos de consumo em ativos de
          fidelização. Unimos o rigor do Compliance à inteligência de negócios
          para proteger sua margem e consolidar sua reputação global.
        </motion.p>

        {/* Botões */}
        <motion.div variants={itemVariants} className="xl:w-[80%] w-full flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5511996669191&text&type=phone_number&app_absent=0"
            target="blank"
            className="bg-brand border border-brand flex items-center justify-center p-3 text-gray-900 w-[90%] md:w-[50%] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand/20 text-[14px] xl:text-[16px] font-bold h-14"
          >
            Solicitar Diagnóstico de Vulnerabilidade
          </a>
          <a
            href="#"
            className="bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center p-3 text-white w-[90%] md:w-[50%] transition-all duration-300 hover:bg-white/20 text-[14px] xl:text-[16px] h-14"
          >
            Nos acompanhe nas redes
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
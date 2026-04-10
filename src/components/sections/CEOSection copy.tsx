"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, Variants, animate } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

function AnimatedStat({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [started, to]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <p className="font-Montserrat text-brand font-bold text-[32px] leading-none">
        {value}{suffix}
      </p>
      <p className="font-poppins text-gray-500 text-[12px] text-center leading-snug max-w-[100px]">
        {label}
      </p>
    </div>
  );
}

export default function CEOSection() {
  return (
    <section className="w-full bg-white py-24 xl:py-32 flex justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="w-[90%] max-w-7xl flex flex-col lg:flex-row items-center gap-14 lg:gap-24"
      >
        {/* Foto — clip-path reveal */}
        <motion.div
          className="relative w-full lg:w-1/2 aspect-4/5 md:aspect-square lg:aspect-4/5 flex-shrink-0"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Moldura decorativa deslocada */}
          <div className="absolute inset-0 border border-brand translate-x-5 translate-y-5 hidden md:block" aria-hidden="true" />

          {/* Foto desktop */}
          <Image
            src="/Viviane-1.webp"
            alt="Viviane Luiz Macedo - Advogada e CEO"
            fill
            className="hidden md:block object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          {/* Foto mobile */}
          <Image
            src="/Viviane.webp"
            alt="Viviane Luiz Macedo - Advogada e CEO"
            fill
            className="block md:hidden object-cover"
            loading="lazy"
          />

          {/* Overlay nome */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 to-transparent flex items-end pb-6 px-6">
            <motion.h3
              className="font-Montserrat text-white text-[20px] md:text-[26px] font-bold leading-none tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              VIVIANE LUIZ MACEDO
            </motion.h3>
          </div>

          {/* Stats flutuantes */}
          <motion.div
            className="absolute -right-6 top-12 bg-white border border-gray-100 shadow-md px-5 py-4 hidden lg:flex flex-col gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
          >
            <AnimatedStat to={15} suffix="+" label="Anos de experiência" />
            <div className="border-t border-gray-100" />
            <AnimatedStat to={200} suffix="+" label="Empresas atendidas" />
          </motion.div>
        </motion.div>

        {/* Texto */}
        <motion.div
          variants={textVariants}
          className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          {/* Label */}
          <motion.p
            variants={textVariants}
            className="font-Montserrat text-[12px] font-medium uppercase tracking-[0.25em] text-brand2"
          >
            Sobre a fundadora
          </motion.p>

          <motion.h2
            variants={textVariants}
            className="font-Montserrat text-[34px] md:text-[46px] font-medium text-black leading-[1.1]"
          >
            Conheça nossa CEO
          </motion.h2>

          <div className="space-y-6">
            <motion.p
              variants={textVariants}
              className="font-poppins text-[16px] text-gray-600 leading-relaxed"
            >
              Advogada desde 2008, com ampla vivência corporativa em compliance
              e governança, liderou projetos, implementou controles internos e
              conduziu auditorias. Segue expandindo sua atuação em assessoria
              preventiva a médias e grandes empresas, apoiada por um forte
              networking em compliance e expertise em gestão de riscos.
            </motion.p>

            <motion.blockquote
              variants={textVariants}
              className="font-poppins text-[16px] text-gray-700 leading-relaxed border-l-4 border-brand2 pl-6 italic"
            >
              A Viviane Luiz Macedo Advocacia nasce de uma experiência de 15
              anos em ambientes corporativos. Com técnica apurada e
              sensibilidade social, capta clientes e alianças comprometidos com
              a transparência e a ética organizacional.
            </motion.blockquote>
          </div>

          {/* Stats mobile */}
          <motion.div
            variants={textVariants}
            className="flex lg:hidden gap-8 pt-4"
          >
            <AnimatedStat to={15} suffix="+" label="Anos de experiência" />
            <AnimatedStat to={200} suffix="+" label="Empresas atendidas" />
            <AnimatedStat to={2018} suffix="" label="Desde" />
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={textVariants}
            href="https://api.whatsapp.com/send/?phone=%2B5511996669191&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 w-fit border border-gray-200 px-7 py-4 font-poppins text-[14px] text-gray-800 hover:border-brand hover:text-brand transition-all duration-300 group overflow-hidden"
            whileHover={{ x: 4 }}
          >
            <span>Falar com a Viviane</span>
            <motion.span
              className="text-brand"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

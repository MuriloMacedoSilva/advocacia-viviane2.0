"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CLOUDINARY_IMAGE = "https://res.cloudinary.com/dhtjefgr3/image/upload/q_auto/f_auto/v1775830550/energySolar_gofeao.svg";

export default function SecondSection() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center px-[10%] md:px-[25%] gap-37 lg:gap-20 py-60 lg:py-80 pb-40 md:pb-60 lg:pb-80 overflow-hidden z-10">
      {/* ✅ loading="lazy" — está abaixo do fold, não precisa carregar cedo */}
      <Image
        src={CLOUDINARY_IMAGE}
        alt=""
        fill
        className="object-cover z-0"
        loading="lazy"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center justify-center gap-35"
      >
        <motion.h2
          variants={itemVariants}
          className="text-center relative font-Montserrat font-semibold text-black text-[32px] px-1 leading-8"
        >
          Expertise chancelada por grandes players globais.
        </motion.h2>

        <motion.h3
          variants={itemVariants}
          className="font-poppins relative font-semibold text-black w-[85%] md:w-full text-[13px] md:text-[21px] justify-center border-x-4 border-brand2 px-13 md:h-20 flex items-center text-center"
        >
          Grande player na área de energia solar global
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className="text-center relative font-poppins font-normal text-black text-[15px]"
        >
          Responsáveis pela engenharia jurídica e gestão de compliance de
          operações transcontinentais, convertendo crises de consumo em índices
          de retenção superiores à média do mercado.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col relative items-center gap-3"
        >
          <h2 className="text-center text-brand font-medium font-Montserrat text-[32px]">
            "O que você não vê está corroendo seu lucro."
          </h2>
          <div className="flex items-center gap-3 w-[80%] md:w-[40%]">
            <div className="border border-brand2 w-[60%]" />
            <div className="border border-brand2 w-[10%]" />
            <div className="border border-brand2 w-[30%]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

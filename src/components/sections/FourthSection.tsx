"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FifthSection from "./FifthSection";

const CLOUDINARY_FOURTH = "https://res.cloudinary.com/dhtjefgr3/image/upload/q_auto/f_auto/v1775830488/bg-services_spg5lz.svg";

export default function FourthSection() {
  return (
    <section className="relative flex flex-col md:px-[9%] overflow-hidden">
      {/* ✅ loading="lazy" e aria-hidden para imagem decorativa de fundo */}
      <Image
        src={CLOUDINARY_FOURTH}
        alt=""
        fill
        className="w-full object-cover -z-10"
        loading="lazy"
        aria-hidden="true"
      />

      <div className="w-full relative z-10 h-160 lg:h-87.5 flex items-center justify-start py-20">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-Montserrat text-white font-medium text-[27px] md:text-[36px] w-full lg:w-[70%] border-l-5 pl-8 border-brand leading-tight"
        >
          "Não remediamos processos; <br />
          <span className="text-brand">Prevenimos</span> a falência da confiança."
        </motion.h2>
      </div>

      <FifthSection />
    </section>
  );
}

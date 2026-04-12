"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface SectionData {
  id: number;
  topic: string;
  tag: string;
  title: string;
  text: string;
  button: string;
  image: string;
}

const sectionsData: SectionData[] = [
  {
    id: 1,
    topic: "01. Erosão de Marca",
    tag: "Risco",
    title: "Um cliente insatisfeito é um detrator viral.",
    text: "A reputação se constrói lentamente e desmorona em segundos quando o compliance falha na ponta da entrega.",
    button: "Entender",
    image: "/phone.webp",
  },
  {
    id: 2,
    topic: "02. Vazamento de Receita",
    tag: "Custo",
    title: "O CAC é desperdiçado quando o compliance falha.",
    text: "Cada cliente adquirido representa investimento. Quando o alinhamento legal falha, esse investimento vira perda irreversível.",
    button: "Mitigar",
    image: "/tower.webp",
  },
  {
    id: 3,
    topic: "03. Insegurança Regulatória",
    tag: "Sanção",
    title: "Multas são interrupções de fluxo de caixa.",
    text: "Não remediamos processos; prevenimos a falência da confiança. Multas e sanções não são apenas custos, são interrupções que comprometem a operação.",
    button: "Blindar",
    image: "/pig.svg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function AnimatedCard({ section }: { section: SectionData }) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="border-t w-full border-gray-300 flex flex-col lg:flex-row items-center px-[6%] lg:px-30 pt-32 md:pt-36 pb-10 md:pb-12 overflow-hidden"
    >
      <div className="flex flex-col gap-4 items-start w-full lg:w-[60%]">
        <motion.p
          variants={itemVariants}
          className="mb-10 font-poppins text-[13px] text-black font-light tracking-wide"
        >
          {section.topic}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="font-poppins text-brand2 text-[18px] font-normal"
        >
          {section.tag}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="font-Montserrat font-medium text-[34px] md:text-[42px] md:leading-14 text-gray-950"
        >
          {section.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-poppins font-normal text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          {section.text}
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="https://api.whatsapp.com/send/?phone=%2B5511996669191&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blues w-[85%] md:w-[50%] flex items-center justify-center p-3 cursor-pointer border border-blues mt-10 font-poppins text-[15px] font-normal hover:bg-gray-600 duration-200 transition-all hover:scale-[1.03]"
        >
          {section.button}
        </motion.a>
      </div>

      {/* ✅ loading="lazy" — estas imagens estão sempre abaixo do fold */}
      <motion.div
        variants={itemVariants}
        className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-12 lg:mt-0"
      >
        <Image
          src={section.image}
          width={500}
          height={500}
          alt={`Ilustração para ${section.title}`}
          className="w-full h-auto max-w-sm lg:max-w-none"
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
}

export default function ThirdSection() {
  return (
    <section className="bg-white -mt-32 lg:-mt-48 pt-32 lg:pt-40 pb-16 lg:py-24">
      {sectionsData.map((section) => (
        <AnimatedCard key={section.id} section={section} />
      ))}
    </section>
  );
}

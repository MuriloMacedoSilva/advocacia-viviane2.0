"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Card {
  id: number;
  tag: string;
  title: string;
  text: string;
  button: string;
  image: string;
}

const cards: Card[] = [
  {
    id: 1,
    tag: "Tributária",
    title: "Engenharia contratual e tributária.",
    text: "Estruturação de contratos resilientes e otimização da carga tributária para maximizar o EBITDA.",
    button: "Aprofundar",
    image: "/card1.svg",
  },
  {
    id: 2,
    tag: "Governança",
    title: "Compliance 360 & governança.",
    text: "Alinhamento integral às normas regulatórias e mitigação preventiva de riscos estatutários.",
    button: "Explorar",
    image: "/cared2.svg",
  },
  {
    id: 3,
    tag: "Recuperação",
    title: "Gestão de crise e recuperação de clientes.",
    text: "Metodologia exclusiva que converte reclamações críticas em casos de fidelização e recompra.",
    button: "Investigar",
    image: "/card3.svg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FifthSection() {
  return (
    <section className="w-full py-20 flex items-center relative justify-center">
      <div className="flex flex-col w-full px-3.5 xl:px-0 gap-19">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col w-full xl:w-[75%] items-start"
        >
          <p className="font-Montserrat text-[14px] font-medium uppercase tracking-widest text-brand">
            Soluções
          </p>
          <h2 className="font-Montserrat text-[40px] md:text-[48px] text-white font-medium">
            Nossas áreas de atuação.
          </h2>
          <p className="font-poppins font-normal text-[16px] text-white/80 max-w-2xl">
            Proteção integral contra riscos legais e operacionais. Soluções
            jurídicas estruturadas para proteger a operação e alavancar
            resultados financeiros.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col xl:flex-row gap-8 items-stretch justify-around w-full"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="flex flex-col bg-white/5 backdrop-blur-md border border-white/20 w-full xl:w-1/3 shadow-2xl hover:shadow-brand/10 transition-shadow duration-500"
            >
              <div className="flex flex-col gap-3 p-8 grow">
                <p className="font-Montserrat text-brand2 text-[12px] font-bold uppercase tracking-wider">
                  {card.tag}
                </p>
                <h3 className="font-Montserrat text-[24px] font-semibold text-white leading-tight min-h-15">
                  {card.title}
                </h3>
                <p className="font-poppins text-[15px] text-white font-normal leading-relaxed">
                  {card.text}
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B5511996669191&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-Montserrat font-bold text-[13px] text-brand mt-4 flex items-center gap-2 hover:gap-4 transition-all"
                >
                  {card.button.toUpperCase()} <span>→</span>
                </a>
              </div>

              {/* ✅ loading="lazy" — cards ficam bem abaixo do fold */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={card.image}
                  fill
                  alt={card.title}
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, Variants } from "framer-motion";

interface ProtocolStep {
  id: string;
  title: string;
  text: string;
}

const steps: ProtocolStep[] = [
  {
    id: "01",
    title: "Auditoria de gargalos.",
    text: "Identificamos onde o desalinhamento legal está gerando perda de clientes e impacto no caixa.",
  },
  {
    id: "02",
    title: "Blindagem operacional.",
    text: "Ajuste de processos internos e termos de uso sob a ótica do Direito Empresarial Moderno.",
  },
  {
    id: "03",
    title: "Fidelização assistida.",
    text: "Intervenção direta em conflitos de alto impacto, preservando o LTV (Lifetime Value) da empresa.",
  },
];

export default function ProtocolSection() {
  // Variantes para manter o padrão das seções anteriores
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-32 lg:py-48 bg-white flex justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-[90%] xl:w-[80%] flex flex-col items-center"
      >
        {/* Cabeçalho da Seção */}
        <motion.div variants={itemVariants} className="text-center mb-16 md:mb-24">
          <h2 className="font-Montserrat text-[28px] md:text-[42px] font-medium text-black leading-tight">
            Protocolo de conversão: <br />
            <span className="text-brand2">Do passivo ao lucro.</span>
          </h2>
        </motion.div>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="flex flex-col items-start group"
            >
              {/* Número e Linha */}
              <div className="flex items-end gap-2 mb-6">
                <span className="font-Montserrat text-[42px] font-bold text-gray-200 leading-none group-hover:text-brand2 transition-colors duration-500">
                  {step.id}
                </span>
                <div className="w-12 h-[2px] bg-brand2 mb-2"></div>
              </div>

              {/* Texto */}
              <h3 className="font-Montserrat text-[18px] md:text-[20px] font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="font-poppins text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
import Image from "next/image";

export default function FirstSection() {
  return (
    <section className="relative w-full 2xl:h-[80vh] flex flex-col items-center justify-start">
      <Image
        src="/background1.svg"
        alt="background"
        fill
        className="object-cover -z-10 rounded-b-4xl"
      />

      <div className="flex flex-col items-start xl:items-center justify-center w-[90%] xl:w-[71%] gap-12 xl:gap-10 2xl:gap-15 md:gap-12 mt-29 mb-50">
        <div className="border border-brand p-1.5 rounded-full font-semibold max-w-125 xl:mb-6.5">
          <p className="text-brand font-Montserrat xl:text-[12px] text-[11px] text-center">
            BLINDAGEM JURÍDICA E COMPLIENCE ESTRATÉGICO
          </p>
        </div>
        <h1 className="text-white font-Montserrat font-bold text-[49px] leading-12 xl:text-[64px] xl:text-center xl:leading-18">
          A invisibilidade do risco é o maior passivo do seu negócio.
        </h1>
        <p className="text-white font-poppins font-normal text-[16px] xl:text-[18px] xl:text-center w-[80%]">
          Transformamos contingências legais e atritos de consumo em ativos de
          fidelização. Unimos o rigor do Compliance à inteligência de negócios
          para proteger sua margem e consolidar sua reputação global.
        </p>
        <div className="xl:w-[80%] w-full flex flex-col md:flex-row items-center justify-start gap-3  xl:justify-center">
          <a
            href=""
            className="bg-brand border border-brand flex items-center justify-center p-3 text-gray-900 w-full md:w-[50%] transition-colors duration-300 hover:bg-orange-200 shadow-sm shadow-amber-200/70 text-[16px] h-12"
          >
            Solicitar Diagnóstico de Vulnerabilidade
          </a>
          <a
            href=""
            className="bg-white/10 backdrop-blur-md border border-brand flex items-center justify-center p-3 text-white w-full md:w-[50%] transition-colors duration-300 hover:bg-orange-200 shadow-sm shadow-amber-200/70 hover:text-gray-900 text-[16px] h-12"
          >
            Nos acompanhe nas redes
          </a>
        </div>
      </div>
    </section>
  );
}

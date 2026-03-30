"use client";

import { useEffect, useRef } from "react";

export default function FirstSection() {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error("Autoplay bloqueado pelo Opera:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen xl:h-auto 2xl:h-[80vh] flex flex-col items-center  xl:pt-0 justify-center">
      <video
      ref={videoRef}
      poster="/background1.svg"
      autoPlay 
      loop 
      muted 
      onCanPlay={(e) => (e.currentTarget.muted = true)}
      playsInline
      className="absolute -z-2 min-w-full min-h-full object-cover">
        <source src="/background.webm" type="video/webm" />
        <source src="/seu_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-1 bg-black/40"></div>

      <div className="flex flex-col items-center xl:items-center justify-center w-[95%] xl:w-[71%] pt-29 xl:pt-0 gap-6 xl:gap-10 2xl:gap-15 md:gap-12 mt-30 lg:mt-26 mb-50">
        <div className="border border-brand p-1.5 rounded-full font-semibold max-w-125 xl:mb-6.5">
          <p className="text-brand font-Montserrat xl:text-[12px] text-[9px] text-center">
            BLINDAGEM JURÍDICA E COMPLIENCE ESTRATÉGICO
          </p>
        </div>
        <h1 className="text-white font-Montserrat font-bold text-[39px] leading-11 xl:text-[64px] text-center xl:leading-18 mb-4 xl:mb-0">
          A invisibilidade do risco é o maior passivo do seu negócio.
        </h1>
        <p className="text-white font-poppins font-normal text-[14px] xl:text-[17px] text-center w-[90%] xl:w-[80%]">
          Transformamos contingências legais e atritos de consumo em ativos de
          fidelização. Unimos o rigor do Compliance à inteligência de negócios
          para proteger sua margem e consolidar sua reputação global.
        </p>
        <div className="xl:w-[80%] w-full flex flex-col md:flex-row items-center justify-start gap-3  xl:justify-center">
          <a
            href=""
            className="bg-brand border border-brand flex items-center justify-center p-3 text-gray-900 w-[90%] md:w-[50%] transition-colors duration-300 hover:bg-orange-200 shadow-sm shadow-amber-200/70 text-[14px] xl:text-[16px] h-12"
          >
            Solicitar Diagnóstico de Vulnerabilidade
          </a>
          <a
            href=""
            className="bg-white/10 backdrop-blur-md border border-brand flex items-center justify-center p-3 text-white w-[90%] md:w-[50%] transition-colors duration-300 hover:bg-orange-200 shadow-sm shadow-amber-200/70 hover:text-gray-900 text-[14px] xl:text-[16px] h-12"
          >
            Nos acompanhe nas redes
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

import { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CLOUDINARY_VIDEO_URL = "https://res.cloudinary.com/dhtjefgr3/video/upload/q_auto:best/v1775830202/7318604-hd_1366_658_30fps_jumbhw.mp4";
const CLOUDINARY_POSTER = "https://res.cloudinary.com/dhtjefgr3/image/upload/q_auto,f_auto/v1775830189/background1-1";

const LOCAL_VIDEO_WEBM = "/backgroundBreake2.webm";
const LOCAL_VIDEO_MP4 = "/backgroundBreake2mp.mp4";

export default function FirstSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(true);

  useEffect(() => {
    const video = document.createElement('video');
    const canPlayMp4 = video.canPlayType('video/mp4');
    const canPlayWebm = video.canPlayType('video/webm');
    const supportsVideo = canPlayMp4 === 'probably' || canPlayMp4 === 'maybe' || 
                          canPlayWebm === 'probably' || canPlayWebm === 'maybe';
    const prefersReducedData = window.matchMedia?.('(prefers-reduced-data: reduce)')?.matches || false;

    if (supportsVideo && !prefersReducedData) {
      setVideoFailed(false);
      return;
    }

    const currentVideo = videoRef.current;
    if (!currentVideo) return;

    const handleError = () => setVideoFailed(true);
    const timeout = setTimeout(() => setVideoFailed(true), 5000);

    currentVideo.addEventListener('error', handleError);

    return () => {
      currentVideo.removeEventListener('error', handleError);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative w-full h-[115vh] xl:h-[125vh] 2xl:h-[135vh] flex flex-col items-center justify-center overflow-hidden">
      {videoFailed ? (
        <Image
          src={CLOUDINARY_POSTER}
          alt=""
          fill
          className="absolute inset-0 object-cover -z-2"
          priority
          aria-hidden="true"
        />
      ) : (
        <video
          ref={videoRef}
          poster={CLOUDINARY_POSTER}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover -z-2"
        >
          <source src={CLOUDINARY_VIDEO_URL} type="video/mp4" />
          <source src={LOCAL_VIDEO_MP4} type="video/mp4" />
          <source src={LOCAL_VIDEO_WEBM} type="video/webm" />
        </video>
      )}

      {/* Overlay escuro */}
      <div className="absolute inset-0 -z-1 bg-black/15" />

      {/* Container Principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center w-[93%] xl:w-[60%] pt-29 xl:pt-0 gap-8 md:gap-8 xl:gap-6 2xl:gap-10 mt-24 md:mt-28 lg:mt-40 mb-50"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="border border-brand p-1.5 rounded-full font-semibold max-w-125 xl:mb-6.5 bg-brand/5 backdrop-blur-sm"
        >
          <p className="text-brand font-Montserrat xl:text-[10px] text-[8px] md:text-[9px] text-center tracking-widest">
            BLINDAGEM JURÍDICA E COMPLIANCE ESTRATÉGICO
          </p>
        </motion.div>

        {/* Título — é o LCP textual, sem necessidade de priority adicional */}
        <motion.h1
          variants={itemVariants}
          className="text-white font-Montserrat font-bold text-[38px] leading-9 xl:text-[54px] text-center xl:leading-15 mb-2 xl:mb-0"
        >
          A invisibilidade do risco é o{" "}
          <span className="text-brand">maior passivo</span> do seu negócio.
        </motion.h1>

        {/* Descrição */}
        <motion.p
          variants={itemVariants}
          className="text-white font-poppins font-normal text-[14px] xl:text-[15px] text-center w-[90%] xl:w-[80%] opacity-90"
        >
          Transformamos contingências legais e atritos de consumo em ativos de
          fidelização. Unimos o rigor do Compliance à inteligência de negócios
          para proteger sua margem e consolidar sua reputação global.
        </motion.p>

        {/* Botões */}
        <motion.div
          variants={itemVariants}
          className="xl:w-[80%] w-full flex flex-col md:flex-row items-center justify-center gap-2"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5511996669191&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand border border-brand flex items-center justify-center p-3 text-gray-900 w-[90%] md:w-[50%] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand/20 text-[15px] xl:text-[14px] font-bold h-14"
          >
            Solicitar Diagnóstico de Vulnerabilidade
          </a>
          <a
            href="https://www.linkedin.com/in/viviane-luiz-macedobr/"
            target="blank"
            className="bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center p-3 text-white w-[90%] md:w-[50%] transition-all duration-300 hover:bg-white/20 text-[15px] xl:text-[14px] h-14"
          >
            Nos acompanhe nas redes
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
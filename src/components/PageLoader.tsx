"use client";

import { useState, useEffect } from "react";
import Loading from "@/app/loading"; // Importa o seu loading.tsx atual

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Esta função será chamada quando TUDO (incluindo imagens) carregar
    const handleLoad = () => {
      setIsReady(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Timer de segurança: se em 10s não carregar, libera o site
    const timer = setTimeout(() => setIsReady(true), 10000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!isReady && <Loading />}
      <div
        className={isReady ? "opacity-100" : "opacity-0"}
        style={{ transition: "opacity 0.5s" }}
      >
        {children}
      </div>
    </>
  );
}

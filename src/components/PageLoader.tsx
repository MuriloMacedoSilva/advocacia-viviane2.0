"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleLoad = () => setIsReady(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    const timer = setTimeout(() => setIsReady(true), 10000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  // Antes de montar no cliente, renderiza os filhos normalmente (SSR)
  if (!mounted) return <>{children}</>;

  return (
    <>
      {!isReady && <Loading />}
      <div style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.5s" }}>
        {children}
      </div>
    </>
  );
}
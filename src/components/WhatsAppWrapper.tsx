"use client";

import dynamic from "next/dynamic";

const WhatsApp = dynamic(() => import("@/components/WhatsApp"), {
  ssr: false,
  loading: () => <div className="w-[50px] h-[50px]" />,
});

export default function WhatsAppWrapper() {
  return <WhatsApp />;
}
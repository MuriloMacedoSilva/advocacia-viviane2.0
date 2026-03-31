import Image from "next/image";

export default function WhatsApp() {
  return (
    <section className="right-0 flex items-center justify-end z-30 bg-transparent fixed bottom-0 px-3.5 py-2">
      <a
        href="https://api.whatsapp.com/send/?phone=%2B5511996669191&text&type=phone_number&app_absent=0"
        target="blank"
      >
        <Image
          src="/LogoWhas.svg"
          alt="WhattsIcon"
          width={50}
          height={50}
          className="cursor-pointer hover:scale-120 duration-100"
        />
      </a>
    </section>
  );
}

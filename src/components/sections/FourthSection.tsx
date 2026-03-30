import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="relative">
      <Image
        src="/background2.svg"
        alt=""
        fill
        className="w-full relative object-cover"
      />

      <div className="w-full relative z-10 h-87.5 flex items-center justify-start md:pl-[10%]">
        <h2 className="font-Montserrat text-white font-medium text-[27px] md:text-[36px] w-full lg:w-[60%] h-40 flex items-center justify-center flex-col border-l-5 pl-8 border-brand">
          "Não remediamos processos; Previnimos a falência da confiança."
        </h2>
      </div>
    </section>
  );
}

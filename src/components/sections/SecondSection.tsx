import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center px-[10%] md:px-[25%] gap-37 lg:gap-20 py-40 bg-linear-to-b from-white to-gray-100 ">

      <Image
      src="/solarEnergy.svg"
      alt=""
      fill
      className="object-cover" />

      <h2 className="text-center relative font-Montserrat font-semibold text-black text-[36px] px-1 leading-9">
        Expertise chancelada por grandes players globais.
      </h2>

      <h3 className="font-poppins relative font-semibold text-black w-[85%] md:w-full text-[14px] md:text-[23px] justify-center  border-x-4 border-brand2 px-13 md:h-20 flex items-center text-center">
        Grande player na área de energia solar global
      </h3>

      <p className="text-center relative font-poppins font-normal text-black text-[16px]">
        Responsáveis pela engenharia jurídica e gestão de complience de
        operações transcontinentais, convertendo crises de copnsumo em índices
        de retenção superiores à média do mercado.
      </p>

      <div className="flex flex-col relative items-center gap-3">
        <h2 className=" text-center text-brand font-medium font-Montserrat text-[36px]">
          "O que você não vê está corroendo seu lucro."
        </h2>
        <div className="flex items-center gap-3 w-[40%]">
          <div className="border border-brand2 w-[60%]"></div>
          <div className="border border-brand2 w-[10%]"></div>
          <div className="border border-brand2 w-[20%]"></div>
        </div>
      </div>
    </section>
  );
}

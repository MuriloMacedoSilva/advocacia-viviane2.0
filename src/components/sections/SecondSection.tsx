



export default function SecondSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-[10%] md:px-[25%] gap-20 py-20 bg-linear-to-b from-white to-gray-100 ">
            <h2 className="text-center font-Montserrat font-semibold text-black text-[32px] md:text-[36px] px-1 leading-9">
                Expertise chancelada por grandes players globais.
            </h2>

            <h3 className="font-poppins font-semibold text-black w-[85%] md:w-full text-[14px] md:text-[23px] justify-center  border-x-4 border-brand2 px-13 md:h-20 flex items-center text-center">Grande player na área de energia solar global</h3>

            <p className="text-center font-poppins font-normal text-gray-900 text-[16px]">Responsáveis pela engenharia jurídica e gestão de complience de operações transcontinentais, convertendo  crises de copnsumo em índices de retenção superiores à média do mercado.</p>

            <div className="flex flex-col items-center gap-3">
                <h2 className=" text-center text-brand2 font-medium font-Montserrat text-[29px] md:text-[36px]">
                    "O que você não vê está corroendo seu lucro."
                </h2>
                <div className="flex items-center gap-3 w-[40%]">
                    <div className="border border-brand2 w-[60%]"></div>
                    <div className="border border-brand2 w-[10%]"></div>
                    <div className="border border-brand2 w-[20%]"></div>
                </div>
            </div>
        </section>
    ) 
}
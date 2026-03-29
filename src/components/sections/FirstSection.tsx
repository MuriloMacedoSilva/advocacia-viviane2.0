import Image from "next/image";

export default function FirstSection() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center pb-18">
            <Image 
                src="/background1.svg"
                alt="background" 
                fill 
                className="object-cover -z-10 rounded-b-4xl" 
            />

            <div className="flex flex-col items-start md:items-center justify-center w-[90%] md:w-[70%] gap-6 md:gap-8 2xl:gap-15 md:mt-49 lg:mt-29 mt-28">
                <div className="border border-brand p-1.5 rounded-full font-semibold max-w-125 lg:mb-6.5">
                    <p className="text-brand font-Montserrat md:text-[12px] text-[7px] text-center">BLINDAGEM JURÍDICA E COMPLIENCE ESTRATÉGICO</p>
                </div>
                <h1 className="text-white font-Montserrat font-bold text-[46px] leading-12 md:text-[64px] md:text-center md:leading-18">
                    A invisibilidade do risco é o maior passivo do seu negócio.
                </h1>
                <p className="text-white font-poppins font-normal text-[13px] md:text-[18px] md:text-center w-[80%]">Transformamos contingências legais e atritos de consumo em ativos de fidelização. Unimos o rigor do Compliance à inteligência de negócios para proteger sua margem e consolidar sua reputação global.</p>
                <div className="md:w-[80%] w-full flex items-center justify-start gap-3  md:justify-center">
                    <a href="" className="bg-brand border border-brand flex items-center justify-center p-3 text-gray-900 w-[45%] transition-colors duration-300 hover:bg-orange-200 shadow-sm shadow-amber-200/70 text-[12px] md:text-[14px] h-12">Solicitar Diagnóstico de Vulnerabilidade</a>
                    <a href="" className="bg-white/10 backdrop-blur-md border border-brand flex items-center justify-center p-3 text-white w-[45%] transition-colors duration-300 hover:bg-orange-200 shadow-sm shadow-amber-200/70 hover:text-gray-900 text-[12px] md:text-[14px] h-12">Nos acompanhe nas redes</a>
                </div>
            </div>

        </section>
    )
}
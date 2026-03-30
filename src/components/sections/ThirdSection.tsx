import Image from "next/image";


interface Section {
    id: number;
    topic: string;
    tag: string;
    title: string;
    text: string;
    button: string;
    image: string;
}

const sections:Section[] = [
    {
        id: 1,
        topic: "01. Erosão de Marca",
        tag: "Risco",
        title: "Um cliente insatisfeito é um detrator viral.",
        text: "A reputação se constrói lentamente e desmorona em segundos quando o complience falaha na ponta da entrega.",
        button: "Entender",
        image: "/phone.svg"
    },
    {
        id: 2,
        topic: "02. Vazamento de Receita",
        tag: "Custo",
        title: "O CAC é desperdiçado quando o complience falha.",
        text: "Cada cliente adquirido representa investimento. Quando o alinhamento legal falha, esse investimento vira perda irreversível.",
        button: "Mitigar",
        image: "/tower.svg"
    },
    {
        id: 3,
        topic: "03. Insegurança Regulatória",
        tag: "Sanção",
        title: "Multas são interrupções de fluxo de caixa.",
        text: "Não remediamos processos; previnimos a falência da confiança. Multas e sanções não são apenas custos, são interrupções que comprometer a operação.",
        button: "Blindar",
        image: "/pig.svg"
    }
]

export default function ThirdSection() {
    return (
        <section>
            {sections.map((Section) => (
                <section key={Section.id} className="border-t w-full border-gray-300 flex flex-col-reverse lg:flex-row items-center px-[6%] lg:px-30 py-10 md:py-5">
                    <div className="flex flex-col gap-4 items-start">
                        <p className="mb-20 font-poppins text-[14px] text-black font-light">{Section.topic}</p>
                        <p className="font-poppins text-brand2 text-[20px] font-normal">{Section.tag}</p>
                        <h2 className="font-Montserrat font-medium text-[38px] md:text-[48px] md:leading-15">{Section.title}</h2>
                        <p className="font-poppins font-normal text-[16px] text-gray-700 mt-4">{Section.text}</p>
                        <a href="" className="text-white bg-blues w-[55%] flex items-center justify-center p-2 cursor-pointer border border-blues mt-10 font-poppins text-[16px] font-normal hover:bg-gray-600 duration-200 transition-colors">{Section.button}</a>
                    </div>
                    <Image
                    src={Section.image}
                    width={700}
                    height={700}
                    alt=""
                    className="" />
                </section>
            ))}
        </section>
    )
}
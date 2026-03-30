import Image from "next/image";

interface Card {
  id: number;
  tag: string;
  title: string;
  text: string;
  button: string;
  image: string;
}

export default function FifthSection() {
  const cards: Card[] = [
    {
      id: 1,
      tag: "Tributária",
      title: "Engenharia contratual e tributária.",
      text: "Estruturação de contratos resilientes e otimização da carga tributária para maximizar o EBITDA.",
      button: "Aprofundar",
      image: "/card1.svg",
    },
    {
      id: 2,
      tag: "Tributária",
      title: "Engenharia contratual e tributária.",
      text: "Estruturação de contratos resilientes e otimização da carga tributária para maximizar o EBITDA.",
      button: "Aprofundar",
      image: "/card1.svg",
    },
    {
      id: 3,
      tag: "Tributária",
      title: "Engenharia contratual e tributária.",
      text: "Estruturação de contratos resilientes e otimização da carga tributária para maximizar o EBITDA.",
      button: "Aprofundar",
      image: "/card1.svg",
    },
  ];

  return (
    <section className="w-full py-20 flex items-center relative justify-center">
      <div className="flex flex-col w-full px-3.5 xl:px-0 gap-19">
        <div className="flex flex-col w-full xl:w-[75%] items-start">
          <p className="font-Montserrat text-[14px] text-white font-medium">Soluções</p>
          <h2 className="font-Montserrat text-[48px] text-white font-medium">Nossas áreas de atuação.</h2>
          <p className="font-poppins font-normal text-[16px] text-white">
            Proteção integral contra riscos legais e operacionais, Soluções
            jurídicas estruturadas para proteger a operação e alavancar
            resultados financeiros.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-center justify-around w-full">
          {cards.map((Card) => (
            <div key={Card.id} className="flex flex-col bg-white w-[80%] xl:w-full">
              <div className="flex flex-col gap-3 p-4">
              <p className="font-Montserrat text-black text-[14px] font-medium">{Card.tag}</p>
              <h3 className="font-Montserrat text-[42px] font-normal text-start mb-11 leading-13">{Card.title}</h3>
              <p className="font-poppins text-[16px] text-gray-800 font-normal text-start">{Card.text}</p>
              <a href="" className="font-Montserrat font-medium text-[14px] text-start ">{Card.button}</a>
              </div>
              <div className="relative w-full h-40 mt-9">
                <Image
                  src={Card.image}
                  fill
                  alt=""
                  className="w-full object-cover relative"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

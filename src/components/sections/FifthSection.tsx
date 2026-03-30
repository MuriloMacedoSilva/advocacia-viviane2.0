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
      tag: "",
      title: "",
      text: "",
      button: "",
      image: "",
    },
  ];

  return (
    <section className="w-full py-3.5 flex flex-col items-start justify-center gap-3">
      <div>
        <div className="flex flex-col gap-4 items-start">
          <p>Soluções</p>
          <h2>Nossas áreas de atuação.</h2>
          <p>
            Proteção integral contra riscos legais e operacionais, Soluções
            jurídicas estruturadas para proteger a operação e alavancar
            resultados financeiros.
          </p>
        </div>
        <div>
          {cards.map((Card) => (
            <div key={Card.id}>
              <p>{Card.tag}</p>
              <h3>{Card.title}</h3>
              <p>{Card.text}</p>
              <a href="">{Card.button}</a>
              <div>
                <Image
                  src={Card.image}
                  width={29}
                  height={90}
                  alt=""
                  className=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

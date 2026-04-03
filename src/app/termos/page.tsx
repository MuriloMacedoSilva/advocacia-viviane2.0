import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site da Viviane Luiz Macedo Advocacia.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  const ultimaAtualizacao = "03 de abril de 2026";

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Cabeçalho */}
        <div className="mb-12">
          <p className="font-poppins text-[13px] text-gray-400 uppercase tracking-widest mb-2">
            Viviane Luiz Macedo Advocacia
          </p>
          <h1 className="font-Montserrat text-[36px] md:text-[48px] font-bold text-gray-950 leading-tight mb-4">
            Termos de Uso
          </h1>
          <p className="font-poppins text-[14px] text-gray-500">
            Última atualização: {ultimaAtualizacao}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="font-poppins text-[16px] text-gray-700 leading-relaxed space-y-10">

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              1. Aceitação dos termos
            </h2>
            <p>
              Ao acessar e utilizar este site, você concorda com os presentes
              Termos de Uso. Caso não concorde com qualquer disposição aqui
              prevista, recomendamos que interrompa o uso do site imediatamente.
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              2. Finalidade do site
            </h2>
            <p>
              Este site tem finalidade exclusivamente <strong>institucional e
              informativa</strong>. Seu objetivo é apresentar os serviços prestados
              pela <strong>Viviane Luiz Macedo Advocacia</strong> e facilitar o
              contato de potenciais clientes com o escritório.
            </p>
            <p className="mt-3">
              <strong>O conteúdo disponibilizado neste site não constitui
              consultoria jurídica</strong> e não deve ser interpretado como tal.
              Para obter orientação jurídica, entre em contato diretamente com o
              escritório.
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              3. Propriedade intelectual
            </h2>
            <p>
              Todo o conteúdo deste site — incluindo textos, imagens, logotipos,
              identidade visual, vídeos e código-fonte — é de propriedade exclusiva
              da Viviane Luiz Macedo Advocacia ou está devidamente licenciado para
              uso pelo escritório.
            </p>
            <p className="mt-3">
              É vedada a reprodução, distribuição, modificação ou uso comercial de
              qualquer conteúdo deste site sem autorização prévia e expressa por
              escrito.
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              4. Limitação de responsabilidade
            </h2>
            <p>
              A Viviane Luiz Macedo Advocacia não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Decisões tomadas com base no conteúdo informativo publicado neste
                site, sem consulta jurídica formal.
              </li>
              <li>
                Indisponibilidade temporária do site por questões técnicas,
                manutenção ou fatores externos.
              </li>
              <li>
                Conteúdo de sites de terceiros acessados por links presentes neste
                site.
              </li>
              <li>
                Danos causados por vírus, malware ou outros elementos nocivos
                transmitidos por terceiros.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              5. Links externos
            </h2>
            <p>
              Este site pode conter links para sites de terceiros, como WhatsApp,
              Instagram e LinkedIn. Esses links são fornecidos por conveniência
              e não implicam endosso ou responsabilidade sobre o conteúdo das
              páginas externas.
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              6. Conduta do usuário
            </h2>
            <p>Ao utilizar este site, você se compromete a:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Não utilizar o site para fins ilícitos ou prejudiciais.</li>
              <li>
                Não tentar acessar áreas restritas ou interferir no funcionamento
                do site.
              </li>
              <li>
                Não reproduzir ou distribuir conteúdo do site sem autorização.
              </li>
              <li>
                Não utilizar mecanismos automatizados (bots, scrapers) para extrair
                dados do site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              7. Publicidade e anúncios
            </h2>
            <p>
              Este site pode ser promovido por meio de anúncios pagos em plataformas
              como Google Ads e Meta Ads. A origem do seu acesso pode ser registrada
              para fins de análise de desempenho das campanhas, conforme descrito
              em nossa{" "}
              <a href="/privacidade" className="text-brand underline">
                Política de Privacidade
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              8. Legislação aplicável
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras, em especial
              o Código Civil, o Marco Civil da Internet (Lei nº 12.965/2014) e a
              Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>
            <p className="mt-3">
              Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer
              controvérsias decorrentes destes Termos, com renúncia expressa a
              qualquer outro foro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              9. Alterações nos termos
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
              momento. As alterações entram em vigor imediatamente após a publicação
              nesta página. O uso contínuo do site após qualquer alteração implica
              aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              10. Contato
            </h2>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato:
            </p>
            <ul className="list-none mt-3 space-y-1">
              <li>
                <strong>E-mail:</strong>{" "}
                <a
                  href="mailto:vivianemacedoadv@adv.oabsp.org.br"
                  className="text-brand underline"
                >
                  vivianemacedoadv@adv.oabsp.org.br
                </a>
              </li>
              <li>
                <strong>Telefone:</strong>{" "}
                <a href="tel:11996669191" className="text-brand underline">
                  (11) 99666-9191
                </a>
              </li>
            </ul>
          </section>

          {/* Rodapé da página */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <a
              href="/"
              className="font-Montserrat text-[14px] font-semibold text-brand hover:underline"
            >
              ← Voltar ao site
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}

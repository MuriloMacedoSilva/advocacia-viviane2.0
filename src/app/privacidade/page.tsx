import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Viviane Luiz Macedo Advocacia.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
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
            Política de Privacidade
          </h1>
          <p className="font-poppins text-[14px] text-gray-500">
            Última atualização: {ultimaAtualizacao}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="font-poppins text-[16px] text-gray-700 leading-relaxed space-y-10">

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              1. Quem somos
            </h2>
            <p>
              A <strong>Viviane Luiz Macedo Advocacia</strong> é um escritório de
              advocacia especializado em compliance estratégico e direito empresarial,
              com sede em São Paulo/SP. Este site tem finalidade institucional e
              informativa, sendo operado por Murilo Macedo em nome do escritório.
            </p>
            <p className="mt-3">
              Para dúvidas sobre esta política, entre em contato pelo e-mail:{" "}
              <a
                href="mailto:vivianemacedoadv@adv.oabsp.org.br"
                className="text-brand underline"
              >
                vivianemacedoadv@adv.oabsp.org.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              2. Quais dados coletamos
            </h2>
            <p>Coletamos os seguintes tipos de dados ao navegar neste site:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Dados de navegação:</strong> páginas visitadas, tempo de
                permanência, dispositivo utilizado, sistema operacional e navegador.
              </li>
              <li>
                <strong>Dados de localização aproximada:</strong> país, estado e
                cidade com base no endereço IP (não coletamos localização GPS
                precisa).
              </li>
              <li>
                <strong>Origem do acesso:</strong> se você veio de um anúncio
                (Google Ads, Meta Ads) ou de uma rede social (Instagram, LinkedIn),
                registramos essa informação para medir a eficácia das campanhas.
              </li>
              <li>
                <strong>Dados de contato via WhatsApp:</strong> ao clicar no botão
                de WhatsApp, você é redirecionado para o aplicativo. Os dados
                compartilhados nessa conversa são tratados conforme a política de
                privacidade do WhatsApp/Meta.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              3. Como coletamos esses dados
            </h2>
            <p>
              Utilizamos o <strong>Google Analytics</strong> para coletar dados de
              navegação, localização aproximada e origem do acesso. O Google Analytics
              usa cookies e tecnologias similares para identificar visitas únicas e
              padrões de uso.
            </p>
            <p className="mt-3">
              Os dados coletados pelo Google Analytics são processados e armazenados
              pelo Google LLC, conforme sua{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              4. Para que usamos seus dados
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Entender como os visitantes encontram e usam o site.</li>
              <li>Medir o desempenho de campanhas publicitárias.</li>
              <li>Melhorar o conteúdo e a experiência de navegação.</li>
              <li>Identificar quais regiões do Brasil têm maior interesse nos serviços.</li>
            </ul>
            <p className="mt-3">
              <strong>Não vendemos, alugamos ou compartilhamos seus dados pessoais
              com terceiros</strong> para fins comerciais próprios.
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              5. Base legal (LGPD)
            </h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
              o tratamento dos dados de navegação se baseia no{" "}
              <strong>legítimo interesse</strong> do escritório em compreender e
              melhorar sua presença digital, e no <strong>consentimento</strong> do
              usuário ao continuar navegando no site após ser informado sobre o uso
              de cookies.
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              6. Cookies
            </h2>
            <p>
              Este site utiliza cookies para funcionamento do Google Analytics.
              Você pode desativar os cookies diretamente nas configurações do seu
              navegador ou instalar a extensão{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                Google Analytics Opt-out
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              7. Seus direitos
            </h2>
            <p>Conforme a LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Confirmar se tratamos dados seus.</li>
              <li>Solicitar acesso aos dados coletados.</li>
              <li>Solicitar a correção de dados incompletos ou incorretos.</li>
              <li>Solicitar a exclusão dos dados tratados com base no consentimento.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, entre em contato pelo e-mail:{" "}
              <a
                href="mailto:vivianemacedoadv@adv.oabsp.org.br"
                className="text-brand underline"
              >
                vivianemacedoadv@adv.oabsp.org.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-Montserrat text-[22px] font-semibold text-gray-950 mb-3">
              8. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta política periodicamente. A data de última
              atualização sempre será indicada no topo desta página. Recomendamos
              que você a revise periodicamente.
            </p>
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


import ThirdSection from "@/components/sections/ThirdSection";
import FourthSection from "@/components/sections/FourthSection";
import ProtocolSection from "@/components/sections/ProtocolSection";
import FinalCTA from "@/components/sections/FinalCTA";
import CEOSection from "@/components/sections/CEOSection";
import Footer from "@/components/sections/Footer";

// Essas duas carregam normalmente (estão no topo da página)
import FirstSection from "@/components/sections/FirstSection";
import SecondSection from "@/components/sections/SecondSection";

// ✅ Metadata removida daqui — já está no layout.tsx (evita duplicação)
// O layout.tsx já exporta a metadata completa com title template,
// então não precisa repetir aqui. Se quiser uma metadata específica
// para a home, pode adicionar assim:
//
// export const metadata: Metadata = {
//   title: "Home", // Vai virar "Home | Viviane Luiz Macedo Advocacia"
// };

export default function Home() {
  return (
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <ProtocolSection />
        <FinalCTA />
        <CEOSection />
      </main>
  );
}

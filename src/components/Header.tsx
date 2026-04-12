import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins", // O nome deve ser igual ao do CSS
});

export default function Header() {
  return (
    <header className="w-full md:h-28 absolute top-0 left-0 flex items-center justify-between xl:px-18 px-5 z-10">
      <Image
        src="/LogoHeader.svg"
        width={300}
        height={100}
        alt="logo"
        className="z-20 w-40 md:w-48 lg:w-52"
      />

      <a
        href="https://api.whatsapp.com/send/?phone=%2B5511996669191&text&type=phone_number&app_absent=0"
        target="blank"
        className="bg-brand hidden w-40 h-[44%] rounded-full md:flex items-center justify-center transition-colors duration-300 hover:bg-orange-200 shadow-sm shadow-amber-200/70"
      >
          <p className="text-gray-800 text-[13px] font-poppins">
          Agendar Reunião
        </p>
      </a>
    </header>
  );
}

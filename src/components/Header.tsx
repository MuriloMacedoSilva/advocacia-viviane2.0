import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-poppins" // O nome deve ser igual ao do CSS
});

export default function Header() {
    return (
        <header className="w-full h-22 absolute top-0 left-0 flex items-center justify-between px-[6%]   z-10">                             
            <Image
                src="/LogoHeader.svg"                                       
                width={300}
                height={100}
                alt="logo"
                className="z-20"
            />

            <a href=""
            className="bg-brand hidden w-42 h-[52%] rounded-full md:flex items-center justify-center transition-colors duration-300 hover:bg-orange-200 shadow-sm shadow-amber-200/70">
                <p className="text-gray-800 text-[14px] font-poppins">Agendar Reunião</p>
            </a>
        </header>
    )
}


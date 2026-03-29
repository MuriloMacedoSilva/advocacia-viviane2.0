import Image from "next/image"


export default function WhatsApp() {
    return (
        <section className="right-0 flex items-center justify-end z-30 bg-transparent fixed bottom-0 px-3.5 py-2">
            <Image 
                src="/LogoWhas.svg"
                alt="WhattsIcon"
                width={50}
                height={50}
                className="cursor-pointer hover:scale-120 duration-100"
            />
        </section>
    )
}
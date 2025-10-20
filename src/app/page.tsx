import "./globals.css";
import { Arizonia, Montserrat } from "next/font/google";

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-arizonia",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export default function HomePage() {
  return (
    <main
      className={`${arizonia.variable} flex items-center justify-between px-0 py-0 bg-[#faf9f7] border-b border-[#2E2E2E]`}
    >
      {/* Bagian kiri: Teks */}
      <div className="px-20 max-w-[900px]">
        <h1 className="text-[96px] font-bold font-[Poppins] leading-[1.1] text-[#1a1a1a]">
          Feel{" "}
          <span
            className="text-[#c4a962] italic font-[Arizonia] text-[110px] leading-none font-normal"
            style={{ textShadow: "4px 6px 0px rgba(0,0,0,0.2)" }}
          >
            Light
          </span>
          <br />
          Move Freely.
        </h1>

        <p
          className={`${montserrat.className} text-[32px] font-medium text-gray-700 mt-6 leading-relaxed`}
        >
          Experience the freedom of comfort. <br />
          A premium lightweight tee designed 
          to move with your lifestyle.
        </p>


        <button className={`${montserrat.className} mt-8 bg-[#1a1a1a] text-[32px] text-white px-16 py-3 rounded-full text-lg font-medium hover:bg-[#333] transition`}>
          Shop Now &nbsp; &gt;
        </button>
      </div>

      {/* Bagian kanan: Foto */}
      <div className="relative w-[1200px] h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/image1.svg')`, 
            clipPath: "ellipse(100% 100% at 100% 50%)", 
          }}
        ></div>
      </div>
    </main>
  );
}

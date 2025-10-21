import "./globals.css";
import { Arizonia, Montserrat, Anton_SC, Antic_Didone, Anonymous_Pro, Anybody} from "next/font/google";

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-arizonia",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

const anton = Anton_SC({
  subsets: ["latin"],
  weight: "400",
});

const antic = Antic_Didone({
  subsets: ["latin"],
  weight: "400",
});

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const anybody = Anybody({ 
  subsets: ['latin'], 
  weight: '200' 
}); 

export default function HomePage() {
  return (
    <>
      {/*Section 1*/}
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
            A premium lightweight tee designed to move with your lifestyle.
          </p>

          <button
            className={`${montserrat.className} mt-8 bg-[#1a1a1a] text-[32px] text-white px-16 py-3 rounded-full text-lg font-medium hover:bg-[#333] transition`}
          >
            Shop Now &nbsp; &gt;
          </button>
        </div>

        {/* Bagian kanan: Foto */}
        <div className="relative w-[1200px] h-[700px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/main.svg')`,
              clipPath: "ellipse(100% 100% at 100% 50%)",
            }}
          ></div>
        </div>
      </main>

      <div className="w-full py-[20px] bg-[#faf9f7]" />
      
      {/* Section 2 */}
      <section className={`${anonymousPro.className} bg-[#faf9f7] border-t border-b border-[#2E2E2E] py-20 px-20`}>
        {/* Judul */}
        <div className="text-left mb-12">
          <h2
            className={`${anton.className} text-[80px] text-[#1a1a1a] leading-tight`}
          >
            Designed for Movement. <br /> Made for Comfort.
          </h2>
          <p
            className={`${antic.className} text-[40px] text-gray-700 mt-6 leading-relaxed max-w-[1200px] text-left`}
          >
            The AeroTee Light Series is crafted with ultra-soft, breathable <br />
            cotton to keep you cool and comfortable all day long.
          </p>

        </div>

        {/*Card Container*/}
        <div className="flex flex-col items-center">
          {/*Gambar*/}
          <div className="flex justify-center gap-10 mb-10">
          {/* Card 1 */}
          <div className="w-[561px] h-[719px] bg-[#faf9f7] rounded-[36px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] 
                          transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_16x_20px_rgba(0,0,0,0.15)]">
            <div className="relative w-full h-full">
              <img
                src="/shirt1.svg"
                alt="FeatherSoft Fabric"
                className="w-full h-full object-cover rounded-[24px]"
              />
              <span className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1 rounded-full">
                NEW
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[561px] h-[719px] bg-[#faf9f7] rounded-[32px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] 
                          transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_16px_20px_rgba(0,0,0,0.15)]">
            <div className="relative w-full h-full">
              <img
                src="/shirt2.svg"
                alt="Anti-Shrink & Easy Care"
                className="w-full h-full object-cover rounded-[24px]"
              />
              <span className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1 rounded-full">
                NEW
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[561px] h-[719px] bg-[#faf9f7] rounded-[32px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] 
                          transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_16px_20px_rgba(0,0,0,0.15)]">
            <div className="relative w-full h-full">
              <img
                src="/shirt3.svg"
                alt="Unisex Fit"
                className="w-full h-full object-cover rounded-[24px]"
              />
              <span className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1 rounded-full">
                NEW
              </span>
            </div>
          </div>
        </div>

          {/*Deskripsi*/}
          <div className="flex justify-center gap-10 mt-10">
          {/* Deskripsi 1 */}
          <div className="w-[561px] text-left">
            <h3 className="font-[Anonymous_Pro] text-[40px] text-[#1a1a1a]">
              FeatherSoft Fabric
            </h3>
            <p className="font-[Anonymous_Pro] text-[32px] text-gray-700 leading-snug">
              Lightweight, breathable <br /> cotton for maximum comfort
            </p>
          </div>

          {/* Deskripsi 2 */}
          <div className="w-[561px] text-left">
            <h3 className="font-[Anonymous_Pro] text-[40px] text-[#1a1a1a]">
              Anti-Shrink & Easy Care
            </h3>
            <p className="font-[Anonymous_Pro] text-[32px] text-gray-700 leading-snug">
              Durable and simple to <br /> maintain
            </p>
          </div>

          {/* Deskripsi 3 */}
          <div className="w-[561px] text-left">
            <h3 className="font-[Anonymous_Pro] text-[40px] text-[#1a1a1a]">
              Unisex Fit
            </h3>
            <p className="font-[Anonymous_Pro] text-[32px] text-gray-700 leading-snug">
              Clean silhouette that <br /> flatters every body type
            </p>
          </div>
        </div>
        </div>
      </section>

      <div className="w-full py-[20px] bg-[#faf9f7]" />
      
    </>
  );
}

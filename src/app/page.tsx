import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import {
  Arizonia,
  Montserrat,
  Anton_SC,
  Antic_Didone,
  Anonymous_Pro,
  Anybody,
  Antonio,
  Noto_Sans,
} from "next/font/google";

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
  subsets: ["latin"],
  weight: "200",
});

const antonio = Antonio({
  subsets: ["latin"],
  weight: "200",
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HomePage() {
  return (
    <>
      {/* Section 1 */}
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

          <Link href="/shop">
            <button
              className={`${montserrat.className} mt-8 bg-[#1a1a1a] text-[32px] text-white px-16 py-3 rounded-full text-lg font-medium hover:bg-[#333] transition`}
            >
              Shop Now &nbsp; &gt;
            </button>
          </Link>
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
      <section
        className={`${anonymousPro.className} bg-[#faf9f7] border-t border-b border-[#2E2E2E] py-20 px-20`}
      >
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

        {/* Card Container */}
        <div className="flex flex-col items-center">
          {/* Gambar */}
          <div className="flex justify-center gap-10 mb-10">
            {/* Card 1 */}
            <div className="w-[561px] h-[719px] bg-[#faf9f7] rounded-[36px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_16x_20px_rgba(0,0,0,0.15)]">
              <div className="relative w-full h-full">
                <Image
                  src="/shirt1.svg"
                  alt="FeatherSoft Fabric"
                  fill
                  className="object-cover rounded-[24px]"
                />
                <span className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1 rounded-full">
                  NEW
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[561px] h-[719px] bg-[#faf9f7] rounded-[32px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_16px_20px_rgba(0,0,0,0.15)]">
              <div className="relative w-full h-full">
                <Image
                  src="/shirt2.svg"
                  alt="Anti-Shrink & Easy Care"
                  fill
                  className="object-cover rounded-[24px]"
                />
                <span className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1 rounded-full">
                  NEW
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[561px] h-[719px] bg-[#faf9f7] rounded-[32px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_16px_20px_rgba(0,0,0,0.15)]">
              <div className="relative w-full h-full">
                <Image
                  src="/shirt3.svg"
                  alt="Unisex Fit"
                  fill
                  className="object-cover rounded-[24px]"
                />
                <span className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1 rounded-full">
                  NEW
                </span>
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="flex justify-center gap-10 mt-10">
            <div className="w-[561px] text-left">
              <h3 className="font-[Anonymous_Pro] text-[40px] text-[#1a1a1a]">
                FeatherSoft Fabric
              </h3>
              <p className="font-[Anonymous_Pro] text-[32px] text-gray-700 leading-snug">
                Lightweight, breathable <br /> cotton for maximum comfort
              </p>
            </div>

            <div className="w-[561px] text-left">
              <h3 className="font-[Anonymous_Pro] text-[40px] text-[#1a1a1a]">
                Anti-Shrink & Easy Care
              </h3>
              <p className="font-[Anonymous_Pro] text-[32px] text-gray-700 leading-snug">
                Durable and simple to <br /> maintain
              </p>
            </div>

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

      {/* Section 3 */}
      <section className="relative flex justify-between items-center bg-[#1a1a1a] text-white py-20 px-24 overflow-hidden border-t border-[#2E2E2E]">
        <Image
          src="/Vector.svg"
          alt="decorative vector"
          width={1600}
          height={1600}
          className="absolute right-0 top-0 w-[1600px] opacity-40 pointer-events-none select-none z-50"
        />

        {/* Kiri: Teks */}
        <div className="max-w-[1000px] space-y-8">
          <h2 className="font-[Anton] text-[74px] leading-[1.05] tracking-wide uppercase">
            Minimal Style,
            <br />
            <span className="pl-24 block">Maximum Comfort.</span>
          </h2>

          <p className="font-[anybody] text-[32px] text-gray-300 leading-relaxed">
            Crafted with ultra-soft, breathable cotton, the <br /> AeroTee Light
            Series keeps you cool, light, and <br /> unrestricted throughout
            your day. Its minimalist <br /> silhouette makes it effortless to
            wear from morning <br /> errands to late-night hangouts.
          </p>

          <div className="font-[Antonio] flex items-center gap-6">
            <span className="text-[64px] font-semibold">$89</span>
            <span className="text-[64px] text-gray-500 line-through">$109</span>
          </div>

          <Link href="/shop">
            <button className="mt-6 bg-white font-[Montserrat] text-[#1a1a1a] text-[32px] px-16 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
              Shop Now &nbsp; &gt;
            </button>
          </Link>
        </div>

        {/* Kanan: Foto Card Utama */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-[756px] h-[919px] rounded-2xl overflow-hidden bg-[#f4efe9] shadow-2xl">
            <Image
              src="/model1.svg"
              alt="Minimal Style Outfit"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex justify-center gap-6">
            {["Look 1", "Look 2", "Look 3", "Look 4"].map((alt, i) => (
              <div
                key={i}
                className="relative w-[175px] h-[218px] rounded-2xl overflow-hidden bg-[#f4efe9] shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <Image
                  src="/model1.svg"
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full py-[20px] bg-[#faf9f7]" />

      {/* Section Partner */}
      <section className="relative flex flex-col items-center justify-center bg-[#faf9f7] text-[#1a1a1a] py-20 px-10 space-y-10 border-t border-[#2E2E2E]">
        <div className="text-center space-y-12">
          <Image src="/logo.svg" alt="Brand Logo" width={33} height={28} className="mx-auto" />
          <p className="font-[NotoSans] text-[29px] text-gray-700">
            Where minimalist design meets everyday ease.
          </p>
        </div>

        <div className="text-[26px]">×</div>

        <div className="flex items-center justify-center gap-16 flex-wrap">
          {[
            "/boutique.svg",
            "/oco.svg",
            "/mangentle.svg",
            "/flowstudio.svg",
            "/ox.svg",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Partner ${i + 1}`}
              width={183}
              height={36}
              className="opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>

      {/* Last Section */}
      <section className="bg-[#faf9f7] flex justify-center items-center py-20 border-t border-[#E6E6E6]">
        <p className="font-[Anybody] text-[35px] text-gray-800 tracking-wide text-center">
          Worn by Thousands. Loved by Everyone.
        </p>
      </section>
    </>
  );
}

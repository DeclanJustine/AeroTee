import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "AeroTee",
  description: "Your fashion starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/*Navbar*/}
        <nav className="flex justify-start border-b border-[#2E2E2E] bg-[#faf9f7] py-6 px-12">
          <ul className="flex gap-16 text-[36px] tracking-wider font-[Aboreto]">
            <li>
              <a href="/" 
              className="hover:underline hover:underline-offset-4" 
              style={{ textDecorationThickness: '2px' }}>
              HOME
              </a>
            </li>
            <li>
              <a href="/" 
              className="hover:underline hover:underline-offset-4" 
              style={{ textDecorationThickness: '2px' }}>
              PAGES
              </a>
            </li>
            <li>
              <a href="/" 
              className="hover:underline hover:underline-offset-4" 
              style={{ textDecorationThickness: '2px' }}>
              SHOP
              </a>
            </li>
            <li>
              <a href="/" 
              className="hover:underline hover:underline-offset-4" 
              style={{ textDecorationThickness: '2px' }}>
              ABOUT
              </a>
            </li>
          </ul>
        </nav>
        {/* Konten halaman */}
        {children}
      </body>
    </html>
  );
}

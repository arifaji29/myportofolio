// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google"; // [1] Impor Quicksand
import "./globals.css";
import 'aos/dist/aos.css';

import { AOSInitializer } from '@/components/AOSInitializer';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/ThemeProvider";
import ParticlesBg from "@/components/ParticlesBg";

// Konfigurasi Font Inter untuk Heading/Umum
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Konfigurasi Font Quicksand untuk Paragraf/Deskripsi
const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Arif's - Web Portfolio",
  description: "Portofolio web pribadi dibuat dengan Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning> 
      {/* [2] Gabungkan kedua variabel font ke dalam className body */}
      <body className={`${inter.variable} ${quicksand.variable} font-sans`} style={{ position: "relative" }}>
        <Providers>
          <div style={{ 
            position: "fixed", 
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, 
            pointerEvents: "none" 
          }}>
            <ParticlesBg />
          </div>

          <AOSInitializer /> 
          <Navbar />
          
          <main style={{ position: "relative", zIndex: 1 }}>
            {children}
          </main>
          
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
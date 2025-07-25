// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';

// Impor komponen yang dibutuhkan
import { AOSInitializer } from '@/components/AOSInitializer';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/ThemeProvider"; // <-- 1. Impor ThemeProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arif's - Web Portfolio",
  description: "Portofolio web pribadi dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Tambahkan suppressHydrationWarning dan ubah bahasa
    <html lang="id" suppressHydrationWarning> 
      <body className={inter.className}>
        {/* 3. Bungkus semua konten dengan Providers */}
        <Providers>
          <AOSInitializer /> 
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
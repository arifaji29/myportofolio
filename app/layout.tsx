// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Impor Navbar dan Footer
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[Nama Anda] - Web Portfolio",
  description: "Portofolio web pribadi dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Letakkan Navbar di sini */}
        <main>
          {children} {/* {children} akan berisi page.tsx */}
        </main>
        <Footer /> {/* Letakkan Footer di sini */}
      </body>
    </html>
  );
}
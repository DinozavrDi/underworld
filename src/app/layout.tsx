import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Глубокий мир",
  description: "Нырните в глубину новых ощущений",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className=" flex flex-col bg-gradient-to-r from-[#e8f8ff] to-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

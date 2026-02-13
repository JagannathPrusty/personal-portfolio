import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jagannath Prusty | Developer Portfolio",
  description: "Modern interactive developer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#111827] text-gray-100 antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Background Glow Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
        </div>

        {/* Main Content */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

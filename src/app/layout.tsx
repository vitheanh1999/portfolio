import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Vi The Anh - Developer Portfolio",
  description: "Modern portfolio of a Fullstack Developer specializing in large-scale data scraping, system architecture, and AI tool integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <Header />
        <div className="relative flex flex-col min-h-screen pt-14">
           {children}
        </div>
      </body>
    </html>
  );
}

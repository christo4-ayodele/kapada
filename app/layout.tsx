import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kapada Integrated Services Limited",
  description:
    "Freight Forwarding, Industrial Embroidery Making, Plastic Recycling, Tractor Hiring Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-fun-green-100 min-h-screen", fontSans.variable)}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

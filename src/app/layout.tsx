import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eulogius Kurdeo Hesay | Portfolio",
  description: "Portfolio Eulogius Kurdeo Hesay, Informatics graduate interested in web development, backend development, and database development.",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="id">
      <body 
      className={`${dmSans.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

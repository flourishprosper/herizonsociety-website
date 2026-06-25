import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HERizon Society — Igniting Confidence in Girls",
  description:
    "HERizon Society empowers young girls through mindset training, fitness, and self-defence. Conferences, workshops, and community programs for girls ages 8–13.",
  keywords: [
    "girls empowerment",
    "confidence programs for girls",
    "girls workshops",
    "self defence for girls",
    "mindset training",
    "HERizon Society",
  ],
  openGraph: {
    title: "HERizon Society — Igniting Confidence in Girls",
    description:
      "HERizon Society empowers young girls through mindset training, fitness, and self-defence.",
    url: "https://herizonsociety.com",
    siteName: "HERizon Society",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

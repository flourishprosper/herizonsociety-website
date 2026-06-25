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
  title: "Herizon Society — A Community for Girls 12–18",
  description:
    "Herizon Society is a community for girls ages 12–18 designed to build confidence, inspire leadership, and expand what's possible through mentorship, real-world experiences, and meaningful connections.",
  keywords: [
    "girls community ages 12-18",
    "teen girls empowerment",
    "girls leadership programs",
    "mentorship for teen girls",
    "girls confidence community",
    "Herizon Society",
  ],
  openGraph: {
    title: "Herizon Society — A Community for Girls 12–18",
    description:
      "A community for girls ages 12–18 built on confidence, leadership, and meaningful connection.",
    url: "https://herizonsociety.com",
    siteName: "Herizon Society",
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

import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse Memecoin — Fun landing with buy steps tokenomics",
  description: "MemePulse — a playful memecoin landing page with easy buy steps, transparent tokenomics, and a friendly, community-first vibe that invites playful crypto fun.",
  keywords: ["memecoin","memecoin landing","buy memecoin","tokenomics","web3","crypto community","landing page","crypto meme","digital currency","community-first"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MemePulse Memecoin — Fun landing with buy steps tokenomics",
    description: "MemePulse — a playful memecoin landing page with easy buy steps, transparent tokenomics, and a friendly, community-first vibe that invites playful crypto fun.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1758886380600-ba8945f5.jpg",
      width: 1200,
      height: 630,
      alt: "MemePulse Memecoin hero image"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse Memecoin — Fun landing with buy steps tokenomics",
    description: "MemePulse — a playful memecoin landing page with easy buy steps, transparent tokenomics, and a friendly, community-first vibe that invites playful crypto fun.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1758886380600-ba8945f5.jpg"]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
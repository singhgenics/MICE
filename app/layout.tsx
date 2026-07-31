import type { Metadata } from "next";
import { Geist, Geist_Mono, Bitter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontier Tourism, MICE Retreats in Northeast India and Southeast Asia",
    template: "%s, Frontier Tourism",
  },
  description:
    "Frontier Tourism is the dedicated MICE division of The Traveller Co., separate from leisure travel. Two retreat programs, Northeast India and Southeast Asia, built for corporate offsites, incentive trips, and executive meets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bitter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-text-on-paper">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

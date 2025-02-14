import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DMsans = localFont({
  src: "./fonts/DMSans.ttf",
  variable: "--font-DMSans",
  weight: "100 300 900",
})

export const metadata: Metadata = {
  title: "Agob Synergy - Empowering Progress Across Industries",
  description: "Agob Synergy provides innovative solutions across multiple industries, including real estate, construction, agriculture, and more. Our commitment to quality, sustainability, and cutting-edge technology ensures top-tier services that drive growth, efficiency, and lasting impact. Explore our diverse offerings and discover how we empower businesses and communities to thrive.",
  keywords: [
    "Agob Synergy",
    "multi-industry enterprise",
    "innovative solutions",
    "real estate development",
    "construction services",
    "agriculture solutions",
    "agro-allied business",
    "electrical merchandising",
    "hospitality services",
    "food production",
    "automobile spare parts",
    "car hire",
    "logistics",
    "supermarket retail",
    "finance and investment",
    "sustainable growth",
    "cutting-edge technology",
    "strategic expertise",
    "community development"
  ],
  openGraph: {
    title: "Agob Synergy - Empowering Progress Across Industries",
    description: "Agob Synergy provides innovative solutions across multiple industries, including real estate, construction, agriculture, and more. Our commitment to quality, sustainability, and cutting-edge technology ensures top-tier services that drive growth, efficiency, and lasting impact. Explore our diverse offerings and discover how we empower businesses and communities to thrive.",
    url: "https://agob-synergy.vercel.app/",
    siteName: "Agob Synergy",
    images: [
      {
        url: "/agob-logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DMsans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

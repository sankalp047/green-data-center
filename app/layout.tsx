import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: { icon: "/logo.png", apple: "/logo.png" },
  title: "The Green Data Center | Sustainable AI Infrastructure",
  description:
    "Power-secured, land-controlled, execution-ready infrastructure for the next generation of AI and enterprise workloads. 700+ MW pipeline across US and India.",
  keywords: "data center, green energy, AI infrastructure, hyperscale, colocation",
  openGraph: {
    title: "The Green Data Center",
    description: "Multi-State | Grid + Natural Gas Hybrid | 700+ MW Pipeline",
    url: "https://thegreendatacenter.com",
    siteName: "The Green Data Center",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}

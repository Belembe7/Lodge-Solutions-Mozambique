import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lsmcompanyp.co.mz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "LSM | Lodge Solutions Mozambique, Energia & Construção Sustentável",
    template: "%s | LSM Lodge Solutions Mozambique",
  },
  description:
    "LSM Lodge Solutions Mozambique. Energia solar, engenharia e construção sustentável em Inhambane.",
  keywords: [
    "LSM",
    "Lodge Solutions Mozambique",
    "energia solar",
    "Moçambique",
    "Inhambane",
    "painéis solares",
    "baterias",
    "construção sustentável",
    "off grid",
  ],
  authors: [{ name: "Lodge Solutions Mozambique" }],
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: siteUrl,
    siteName: "LSM Lodge Solutions Mozambique",
    title: "LSM | Lodge Solutions Mozambique",
    description:
      "Innovative Energy & Construction Solutions for Sustainable Living.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "LSM, Energia Solar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LSM | Lodge Solutions Mozambique",
    description:
      "Innovative Energy & Construction Solutions for Sustainable Living.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/logo-lsm-free.png",
    apple: "/images/logo-lsm-free.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-dark-gray antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

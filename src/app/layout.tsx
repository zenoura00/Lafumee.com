import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";

export const metadata: Metadata = {
  title: {
    default: "La Fumee | Premium Shisha & Cocktail Bar in Nürnberg",
    template: "%s | La Fumee",
  },
  description:
    "Erleben Sie exklusive Shisha-Kultur und erstklassige Cocktails in einzigartiger Atmosphäre. Premium Tabak, Signature Cocktails und regelmäßige Events in Nürnberg.",
  keywords: [
    "Shisha Bar Nürnberg",
    "Cocktail Bar Nürnberg",
    "La Fumee",
    "Premium Shisha",
    "Lounge Nürnberg",
    "Events Nürnberg",
    "DJ Nights",
    "Wasserpfeife",
    "Bar Nürnberg",
  ],
  authors: [{ name: "La Fumee" }],
  creator: "La Fumee",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://lafumee.com",
    siteName: "La Fumee",
    title: "La Fumee | Premium Shisha & Cocktail Bar in Nürnberg",
    description:
      "Erleben Sie exklusive Shisha-Kultur und erstklassige Cocktails in einzigartiger Atmosphäre.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Fumee - Shisha & Cocktail Bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Fumee | Premium Shisha & Cocktail Bar in Nürnberg",
    description:
      "Erleben Sie exklusive Shisha-Kultur und erstklassige Cocktails in einzigartiger Atmosphäre.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

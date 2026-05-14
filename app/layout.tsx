import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BilanIA : Bilan de Compétences par Intelligence Artificielle",
  description:
    "Réalisez un bilan de compétences gratuit propulsé par l'IA. Découvrez les métiers du numérique qui vous correspondent et les formations CPF adaptées à votre profil.",
  keywords: [
    "bilan de compétences",
    "intelligence artificielle",
    "reconversion professionnelle",
    "métiers du numérique",
    "formation CPF",
    "orientation professionnelle",
    "IA",
  ],
  openGraph: {
    title: "BilanIA : Votre Bilan de Compétences par IA",
    description:
      "Découvrez les métiers du numérique qui vous correspondent. Test gratuit en 5 minutes.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

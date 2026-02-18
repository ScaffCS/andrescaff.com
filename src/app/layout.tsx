import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "André Scaff — Product Leader, Mentor & Builder",
  description:
    "Product leader, mentor e builder. 9+ anos em tecnologia, 7+ em produto, 250+ startups mentoreadas. Ajudo fundadores e empresas a pensar junto e construir na prática.",
  metadataBase: new URL("https://andrescaff.com"),
  openGraph: {
    title: "André Scaff — Product Leader, Mentor & Builder",
    description:
      "Product leader, mentor e builder. Ajudo fundadores e empresas a pensar junto e construir na prática.",
    url: "https://andrescaff.com",
    siteName: "André Scaff",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "André Scaff — Product Leader, Mentor & Builder",
    description:
      "Product leader, mentor e builder. Ajudo fundadores e empresas a pensar junto e construir na prática.",
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
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

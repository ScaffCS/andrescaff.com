import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora, Caveat } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TranslationProvider } from "@/lib/translation-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "André Scaff — Product Manager",
  description:
    "Staff Product Manager at Loadsmart. 9 years in tech, 7 in product. Based in Blumenau, Brazil.",
  metadataBase: new URL("https://andrescaff.com"),
  openGraph: {
    title: "André Scaff — Product Manager",
    description:
      "Staff Product Manager at Loadsmart. 9 years in tech, 7 in product. Based in Blumenau, Brazil.",
    url: "https://andrescaff.com",
    siteName: "André Scaff",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "André Scaff — Product Manager",
    description:
      "Staff Product Manager at Loadsmart. 9 years in tech, 7 in product. Based in Blumenau, Brazil.",
  },
  icons: {
    icon: "/icon.svg",
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
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable} ${caveat.variable} antialiased`}
      >
        <TranslationProvider>
          <Header />
          <main className="pt-[73px]">{children}</main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}

// noinspection HtmlRequiredTitleElement

import { notFound } from "next/navigation";
import "./globals.css";
import {
  Inter as FontSans,
  Red_Hat_Display as FontDisplay,
  JetBrains_Mono,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { unstable_setRequestLocale } from 'next-intl/server';

import Header from "./Header";
import Footer from "./Footer";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { locales } from "@/i18n";

type RootLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Elytra Linux",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "A Linux distribution built for AI development and agent frameworks. Pre-configured with essential AI tools and development environments.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: "--font-mono"
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!locales.includes(locale as any)) notFound();
  
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-[#0A0F1E] font-sans antialiased mx-auto px-4 xl:px-0",
          fontSans.variable,
          fontDisplay.variable,
          jetbrains.variable
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

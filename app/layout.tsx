import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

export const ibmPlexSansBold = localFont({
  src: "../public/fonts/ibmplexsans-bold-webfont.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-ibmplexsans-bold",
});

export const ibmPlexSansBoldItalic = localFont({
  src: "../public/fonts/ibmplexsans-bolditalic-webfont.woff2",
  weight: "700",
  style: "italic",
  display: "swap",
  variable: "--font-ibmplexsans-bold-italic",
});

export const metadata: Metadata = {
  title: "CoffeeShop Finder",
  description: "Find coffee shops around you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          ibmPlexSansBold.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

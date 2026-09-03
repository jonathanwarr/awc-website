import type { Metadata } from "next";
import { Newsreader, Lato } from "next/font/google";
import "@/lib/fontawesome";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const title = "AWC — Scale Customer Success to Meet Sales";
const description =
  "AWC helps B2B SaaS startups scale customer success to meet growing sales: onboarding, customer success operations and AI enablement, from sales to success to renewal.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amwarr.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "AWC",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      className={`${newsreader.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

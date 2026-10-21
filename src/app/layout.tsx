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

const title = "AWC | Friendly AI help for local businesses";
const description =
  "AWC helps local businesses get comfortable with AI and use it to cut the busywork. Straight answers in plain English, including where AI won't help.";

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

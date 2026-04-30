import type { Metadata } from "next";
import { Lora, Lato } from "next/font/google";
import "@/lib/fontawesome";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const title = "AWC — AI Solutions for Small Business";
const description =
  "Cut the busywork. We help small businesses build practical AI tools that give your team back their time.";

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
      className={`${lora.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

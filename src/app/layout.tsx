import type { Metadata } from "next";
import { Lora, Lexend } from "next/font/google";
import "@/lib/fontawesome";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AWC — AI Consulting That Works",
  description:
    "AI coaching and strategic assessments for individuals, teams, and organizations. 700+ implementations. Process-first. Outcome-focused.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

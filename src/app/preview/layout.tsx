import type { Metadata } from "next";
import "./preview.css";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

/* Pass-through layout: preview pages bring their own header, footer and fonts. */
export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

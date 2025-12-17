import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOP BNPL - 80s Style",
  description: "Memphis Design Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

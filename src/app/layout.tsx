import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed to Inter
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Best practice for font loading
});

export const metadata: Metadata = {
  title: "Elev8 Fitness - Let Your Fitness Journey Begin",
  description: "A premium fitness app experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}

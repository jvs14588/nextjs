import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = localFont({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Filebase metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#file-based-metadata
export const metadata: Metadata = {
  title: "Hello Next.js 👋",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${GeistMono.className} antialiased`}
      >
        <h1 className="text-3xl">ROOT LAYOUT</h1>
        {children}
      </body>
    </html>
  );
}

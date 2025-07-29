import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "GymCreators - Complete gym inrichting zonder omkijken",
  description: "Van eerste schets tot laatste schroef. Jij focust op je gym, wij doen de rest. Complete gym inrichting zonder omkijken.",
  keywords: "gym inrichting, fitness apparatuur, gym design, sportschool inrichting, fitness aannemer",
  openGraph: {
    title: "GymCreators - Complete gym inrichting zonder omkijken",
    description: "Van eerste schets tot laatste schroef. Jij focust op je gym, wij doen de rest.",
    type: "website",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase bg-black`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Kristopher Bartolome | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in Ruby on Rails and React, with experience building AI-powered developer tools, scalable REST APIs, and cloud-native applications.",
  openGraph: {
    title: "Ryan Kristopher Bartolome | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Ruby on Rails, React, and AI-powered tooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
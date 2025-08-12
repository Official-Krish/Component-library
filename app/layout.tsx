import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Container from "@/components/Container";
import Appbar from "@/components/Appbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/lib/providers";
import SearchModal from "@/components/SearchModal";
import { unstable_ViewTransition as ViewTransition } from 'react'

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "UI Components Library",
  description: "A library of reusable UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransition>
      <html lang="en">
        <body
          className={`${geistSans.variable} antialiased`}
        >
          <Providers>
            <Container>
              <Appbar />
              {children}
              <Footer/>
            </Container>
            <SearchModal />
          </Providers>
        </body>
      </html>
    </ViewTransition>
  );
}

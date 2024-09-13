import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from '@next/font/google';
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "MetaVault",
  description: "Secured crypto wallet",
};


const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${dmSans.className}`} lang="en">
      <body className="p-6 lg:p-12 h-screen">
        <Providers>
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

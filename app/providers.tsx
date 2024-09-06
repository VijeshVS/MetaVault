"use client"
import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@/components/theme-provider"

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>
  <RecoilRoot>
  <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
  {children}
  </ThemeProvider>
  </RecoilRoot>
  </>;
};

export default Providers;

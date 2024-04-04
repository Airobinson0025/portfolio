import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SmoothScroll from "@/components/providers/smooth-scroll";
import { Toaster } from "@/components/ui/toaster";
SmoothScroll

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaron Robinson Portfolio",
  description: "Aaron Robinson's web development portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SmoothScroll>
            {children}
            </SmoothScroll>
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}

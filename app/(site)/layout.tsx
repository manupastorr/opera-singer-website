import { MotionProvider } from "@/components/providers/motion-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ToasterProvider from "@/providers/ToasterProvider";
import type { Metadata } from "next";
import { Hind_Madurai } from "next/font/google";
import "../globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const hindMadurai = Hind_Madurai({
  weight: "300",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Taryn Knerr",
  description: "Opera Singer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col overflow-y-auto overflow-x-hidden bg-background",
          hindMadurai.className,
        )}
      >
        <ToasterProvider />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
        >
          <MotionProvider>
            <Navbar />
            {children}
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { BrandProvider } from "@/context/BrandContext";
import { TriggerProvider } from "@/context/TriggerContext";
// import SmoothScroll from "@/components/section/SmoothScroller";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Social Chance",
  description: "whether you are here to create or collaborate this is where it all starts.creator and brand connects a space for authentic collaboration and impactful ugc content",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BrandProvider>
          <TriggerProvider>
            {/* <SmoothScroll> */}
              {children}
            {/* </SmoothScroll> */}
          </TriggerProvider>
        </BrandProvider>
        <Toaster />
      </body>
    </html>
  );
}

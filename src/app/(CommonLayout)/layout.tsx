import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { VideoPlayerProvider } from "@/context/VideoPlayContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Social Chance",
  description: "whether you are here to create or collaborate this is where it all starts.creator and brand connects a space for authentic collaboration and impactful ugc content",
};


export default function CommonLayout({children}: Readonly<{children: React.ReactNode}>) {
  
  return (
    <VideoPlayerProvider>
      <Navbar />
      {children}
      <Footer />
    </VideoPlayerProvider>
  );
}

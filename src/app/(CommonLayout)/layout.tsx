import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { VideoPlayerProvider } from "@/context/VideoPlayContext";


export default function CommonLayout({children}: Readonly<{children: React.ReactNode}>) {
  
  return (
    <VideoPlayerProvider>
      <Navbar />
      {children}
      <Footer />
    </VideoPlayerProvider>
  );
}

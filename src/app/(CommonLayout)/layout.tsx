import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";


export default function CommonLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

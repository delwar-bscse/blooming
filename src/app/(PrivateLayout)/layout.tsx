import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";


export default function BrandFormLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="bg-[#FDFCFA]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

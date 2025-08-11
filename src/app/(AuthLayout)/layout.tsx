
import formBg from "@/assets/common/formBackground.png";

export default function BrandFormLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-blue-100 h-screen box-border overflow-hidden bg-cover bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${formBg.src})` }} >
      <div className="w-full max-w-[700px] mx-auto flex items-center justify-center overflow-y-auto">

        {children}
      </div>
    </div>
  )
}
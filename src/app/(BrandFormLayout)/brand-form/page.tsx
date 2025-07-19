"use client"

import formBg from "@/assets/common/formBackground.png";
import BrandInfo from "@/components/form/brandForm/BrandInfo";
import BrandSocial from "@/components/form/brandForm/BrandSocial";
import CharacteristicCreator from "@/components/form/brandForm/CharacteristicCreator";
import ContentInfo from "@/components/form/brandForm/ContentInfo";
import ContentInformation from "@/components/form/brandForm/ContentInformation";
import DoDont from "@/components/form/brandForm/DoDont";
import FinalMessage from "@/components/form/brandForm/FinalMessage";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function BrandForm() {
  const [formStep, setFormStep] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const step = searchParams.get('step');
    setFormStep(parseInt(step || '1'));
  }, [pathname, searchParams]);

  const handleStep = (step: number) => {
    router.replace(`/brand-form?step=${step.toString()}`);
  };

  const activeStepStyle = (idx: number) => `w-12 h-4 rounded-full transition-all duration-300 cursor-pointer ${formStep === idx + 1 ? "bg-yellow-400 scale-x-110" : "bg-gray-300 hover:bg-yellow-300 hover:scale-x-120"}`

  return (
    <>
      <div className="bg-blue-100 min-h-screen box-border overflow-y-scroll bg-cover bg-no-repeat flex flex-col justify-center scrollbar-hide py-16" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="space-y-12">
          {formStep === 1 && <BrandInfo handleStep={handleStep} />}
          {formStep === 2 && <BrandSocial handleStep={handleStep} />}
          {formStep === 3 && <ContentInfo handleStep={handleStep} />}
          {formStep === 4 && <CharacteristicCreator handleStep={handleStep} />}
          {formStep === 5 && <DoDont handleStep={handleStep} />}
          {formStep === 6 && <ContentInformation handleStep={handleStep} />}
          {formStep === 7 && <FinalMessage />}
          <div className="w-full max-w-[700px] bg-[#56515166] rounded-xl mx-auto flex items-center justify-center gap-4 h-10 py-1 px-3">
            {[...Array(7)].map((_, idx) => (
              <div
                onClick={() => handleStep(idx + 1)}
                key={idx}
                className={activeStepStyle(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

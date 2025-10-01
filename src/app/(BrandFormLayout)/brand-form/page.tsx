"use client"

import formBg from "@/assets/common/formBackground.png";
import BrandInfo from "@/components/form/brandForm/BrandInfo";
import BrandSocial from "@/components/form/brandForm/BrandSocial";
import CharacteristicCreator from "@/components/form/brandForm/CharacteristicCreator";
import ContentInfo from "@/components/form/brandForm/ContentInfo";
import ContentInformation from "@/components/form/brandForm/ContentInformation";
import FinalMessage from "@/components/form/brandForm/FinalMessage";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

function BrandFormSuspense() {
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

  const activeStepStyle = (idx: number) => `h-4 w-10 rounded-full transition-all duration-300 cursor-pointer ${formStep === idx + 1 ? "bg-yellow-400 scale-x-110" : "bg-gray-300 hover:bg-yellow-300 hover:scale-x-120"}`

  return (
    <>
      <div className="bg-blue-100 min-h-screen box-border overflow-y-scroll bg-cover bg-no-repeat flex flex-col justify-center scrollbar-hide py-16" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="space-y-8">
          {formStep === 1 && <BrandInfo handleStep={handleStep} />}
          {formStep === 2 && <BrandSocial handleStep={handleStep} />}
          {formStep === 3 && <ContentInfo handleStep={handleStep} />}
          {formStep === 4 && <CharacteristicCreator handleStep={handleStep} />}
          {formStep === 5 && <ContentInformation handleStep={handleStep} />}
          {formStep === 6 && <FinalMessage />}
          <div className="w-full px-2">
            <div className="w-full max-w-[588px] flex justify-center items-center bg-[#56515166] rounded-xl mx-auto  gap-2 md:gap-4 h-10 py-2 px-2">
              {[...Array(6)].map((_, idx) => (
                <div
                  onClick={() => handleStep(idx + 1)}
                  key={idx}
                  className={activeStepStyle(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BrandForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrandFormSuspense />
    </Suspense>
  );
}

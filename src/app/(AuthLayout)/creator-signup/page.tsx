"use client"
import { Toaster } from "sonner";

import formBg from "@/assets/common/formBackground.png";
import Signup01 from "@/components/form/signupForm/Signup01";
import Signup02 from "@/components/form/signupForm/Signup02";
import Signup03 from "@/components/form/signupForm/Signup03";
import Signup04 from "@/components/form/signupForm/Signup04";
import Signup05 from "@/components/form/signupForm/Signup05";
import Signup06 from "@/components/form/signupForm/Signup06";
import Signup07 from "@/components/form/signupForm/Signup07";
import { CreatorProvider } from "@/context/CreatorContext";
import { useState } from "react";
import Signup08 from "@/components/form/signupForm/Signup08";

export default function CreatorSignup() {
  const [formStep, setFormStep] = useState(1);

  const handleStep = (step: number) => {
    setFormStep(step);
  };

  const activeStepStyle = (idx: number) => `w-12 h-4 rounded-full transition-all duration-300 cursor-pointer ${formStep === idx + 1 ? "bg-yellow-400 scale-x-110" : "bg-gray-300 hover:bg-yellow-300 hover:scale-x-120"}`

  return (
    <CreatorProvider >
      <div className="bg-blue-100 min-h-screen box-border overflow-y-scroll bg-cover bg-no-repeat flex flex-col justify-center scrollbar-hide py-16" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="space-y-8">
          {formStep === 1 && <Signup01 handleStep={handleStep} />}
          {formStep === 2 && <Signup02 handleStep={handleStep} />}
          {formStep === 3 && <Signup03 handleStep={handleStep} />}
          {formStep === 4 && <Signup04 handleStep={handleStep} />}
          {formStep === 5 && <Signup05 handleStep={handleStep} />}
          {formStep === 6 && <Signup06 handleStep={handleStep} />}
          {formStep === 7 && <Signup07 handleStep={handleStep} />}
          {formStep === 8 && <Signup08 />}
          <div className="w-full px-2">
            <div className="w-full max-w-[588px] bg-[#56515166] rounded-xl mx-auto flex items-center justify-center gap-4 h-10 py-1 px-3">
              {[...Array(8)].map((_, idx) => (
                <div
                  onClick={() => handleStep(idx + 1)}
                  key={idx}
                  className={activeStepStyle(idx)}
                />
              ))}
            </div>
          </div>

          <Toaster />
        </div>
      </div>
    </CreatorProvider>
  );
}

"use client"

import formBg from "@/assets/common/formBackground.png";
import BrandInfo from "@/components/form/brandForm/BrandInfo";
import BrandSocial from "@/components/form/brandForm/BrandSocial";
import { useState } from "react";

export default function BrandForm() {
  const [formStep, setFormStep] = useState(1);

  const handleStep = (step: number) => {
    setFormStep(step);
  };

  return (
      <div className="bg-blue-100 h-screen box-border overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="h-full overflow-y-auto">
          {formStep === 1 && <BrandInfo handleStep={handleStep}/>}
          {formStep === 2 && <BrandSocial  handleStep={handleStep}/>}
        </div>
      </div>
  );
}

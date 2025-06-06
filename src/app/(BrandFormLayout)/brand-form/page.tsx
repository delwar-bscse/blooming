"use client"

import formBg from "@/assets/common/formBackground.png";
import BrandInfo from "@/components/form/brandForm/BrandInfo";
import BrandSocial from "@/components/form/brandForm/BrandSocial";
import CharacteristicCreator from "@/components/form/brandForm/CharacteristicCreator";
import ContentInfo from "@/components/form/brandForm/ContentInfo";
import ContentInformation from "@/components/form/brandForm/ContentInformation";
import DoDont from "@/components/form/brandForm/DoDont";
import FinalMessage from "@/components/form/brandForm/FinalMessage";
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
          {formStep === 3 && <ContentInfo  handleStep={handleStep}/>}
          {formStep === 4 && <CharacteristicCreator  handleStep={handleStep}/>}
          {formStep === 5 && <DoDont  handleStep={handleStep}/>}
          {formStep === 6 && <ContentInformation  handleStep={handleStep}/>}
          {formStep === 7 && <FinalMessage />}
        </div>
      </div>
  );
}

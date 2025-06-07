"use client"

import formBg from "@/assets/common/formBackground.png";
import Signup01 from "@/components/form/signupForm/Signup01";
import Signup02 from "@/components/form/signupForm/Signup02";
import Signup03 from "@/components/form/signupForm/Signup03";
import Signup04 from "@/components/form/signupForm/Signup04";
import Signup05 from "@/components/form/signupForm/Signup05";
import Signup06 from "@/components/form/signupForm/Signup06";
import Signup07 from "@/components/form/signupForm/Signup07";
import { useState } from "react";

export default function CreatorSignup() {
  const [formStep, setFormStep] = useState(1);

  const handleStep = (step: number) => {
    setFormStep(step);
  };

  return (
      <div className="bg-blue-100 h-screen box-border overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="h-full overflow-y-auto">
          {formStep === 1 && <Signup01 handleStep={handleStep}/>}
          {formStep === 2 && <Signup02 handleStep={handleStep}/>}
          {formStep === 3 && <Signup03 handleStep={handleStep}/>}
          {formStep === 4 && <Signup04 handleStep={handleStep}/>}
          {formStep === 5 && <Signup05 handleStep={handleStep}/>}
          {formStep === 6 && <Signup06 handleStep={handleStep}/>}
          {formStep === 7 && <Signup07 />}
        </div>
      </div>
  );
}



import formBg from "@/assets/common/formBackground.png";
import BrandSignupOtp from "@/components/form/authForm/BrandSignupOtp";
// import VerifyOtp from "@/components/form/authForm/VerifyOtp";

export default function CreatorSignup() {

  return (
      <div className="bg-blue-100 h-screen box-border overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="h-full overflow-y-auto">
          <BrandSignupOtp />
        </div>
      </div>
  );
}

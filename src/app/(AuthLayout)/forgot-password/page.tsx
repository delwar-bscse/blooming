

import formBg from "@/assets/common/formBackground.png";
import ForgotPassword from "@/components/form/authForm/ForgotPassword";

export default function CreatorSignup() {

  return (
      <div className="bg-blue-100 h-screen flex justify-center items-center box-border overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="h-full w-full flex justify-center items-center overflow-y-auto">
          <ForgotPassword />
        </div>
      </div>
  );
}

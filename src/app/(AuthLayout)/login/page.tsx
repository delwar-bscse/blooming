

import formBg from "@/assets/common/formBackground.png";
import SignIn from "@/components/form/authForm/SignIn";

export default function CreatorSignup() {

  return (
      <div className="bg-blue-100 h-screen box-border overflow-hidden bg-cover bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="w-full flex items-center justify-center overflow-y-auto">
          <SignIn />
        </div>
      </div>
  );
}

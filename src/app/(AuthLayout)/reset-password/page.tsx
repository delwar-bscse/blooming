

import formBg from "@/assets/common/formBackground.png";
import ResetPassword from "@/components/form/authForm/ResetPassword";

export default function CreatorSignup() {

  return (
      <div className="bg-blue-100 h-screen box-border overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="h-full overflow-y-auto">
          <ResetPassword />
        </div>
      </div>
  );
}

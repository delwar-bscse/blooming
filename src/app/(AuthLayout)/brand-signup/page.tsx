

import formBg from "@/assets/common/formBackground.png";
import SignUp from "@/components/form/brandForm/SignUp";

export default function CreatorSignup() {

  return (
      <div className="bg-blue-100 h-screen box-border overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url(${formBg.src})` }} >
        <div className="h-full overflow-y-auto">
          <SignUp />
        </div>
      </div>
  );
}

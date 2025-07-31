
import { Button } from "@/components/ui/button";
import { useCreator } from "@/context/CreatorContext";
import { myFetch } from "@/utils/myFetch";
import { useRouter } from "next/navigation";
import { toast } from "sonner";




{/* ---------------------------- Sign Up Form ---------------------------- */ }
const Signup08 = () => {
  const router = useRouter();
  const { creatorForm, setCreatorForm } = useCreator();

  const handleCreateAccount = async () => {
    toast.loading("Creating creator account...", { id: "creator-account-loading" });

    // console.log("Creator Form Data size:", creatorForm?.length || 0);
    // console.log("Creator Form Data:", creatorForm);

    const formData = new FormData();

    Object.entries(creatorForm).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formData.append(key, item));
      } else if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    const res = await myFetch("/creator/create-creator", {
      method: "POST",
      body: formData,
    });

    // console.log("Response from server:", res);

    toast.dismiss("creator-account-loading");

    if (res?.success) {
      toast.success("Creator account created successfully!", { id: "creator-account-success" });
      setCreatorForm({}); // Clear the form after successful creation
      router.push("/");
    } else {
      toast.error( "Failed to create creator account.", { id: "creator-account-error" });
      // console.error("Error creating creator account:", res);
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">If everythin ok then click submit</h2>
        <Button onClick={handleCreateAccount} variant="customWhite" size="llg" className="w-full ">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Signup08;

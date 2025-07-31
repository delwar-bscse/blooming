import { useBrand } from "@/context/BrandContext";
import { myFetch } from "@/utils/myFetch";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
// import Link from "next/link";

{/* ---------------------------- Sign Up Form ---------------------------- */ }
const FinalMessage = () => {
  const router = useRouter();
  const { brandForm } = useBrand();
  const [isPackage, setIsPackage] = useState<boolean>(false);

  console.log("brandForm", brandForm);

  // const packageId = "685d5063aff4a5828e9355d6"

  useEffect(() => {
    const checkPackage = async () => {
      const res = await myFetch("/subscription/existe", {
        method: "GET",
        cache: "no-cache"
      });
      // console.log(res);
      if (res.success && res.data === "true") {
        setIsPackage(true);
      }
    }
    checkPackage();
  }, []);

  const brandInfo = {
    name: brandForm?.brandName,
    email: brandForm?.brandEmail,
    phone: brandForm?.phoneNumber,
    productName: brandForm?.productName,
    productLink: brandForm?.productLink,
    productType: brandForm?.productType,
  };

  const brandSocial = {
    tiktokHandle: brandForm?.tiktokHandle,
    tiktokLink: brandForm?.tiktokLink,
    instragramHandle: brandForm?.instagramHandle,
    instragramLink: brandForm?.instagramLink,
    websiteLink: brandForm?.websiteUrl,
  };

  const contentInfo = {
    additionalFormate: brandForm?.additionFormats,
    videoDuration: brandForm?.videoDuration,
    platForm: brandForm?.platform,
    usageType: brandForm?.usageType,
    adHookOrCtaRequest: brandForm?.hookCta,
    exampleVideoLink: brandForm?.videoLink,
  };

  const characteristicInfo = {
    ageRange: brandForm?.ageRange,
    gender: brandForm?.gender,
    location: brandForm?.location,
    language: brandForm?.languages,
    script: brandForm?.script,
  };

  const doAndDonts = {
    anyWordsNotToUse: brandForm?.anyWordsNotToUse,
    anySpecificWordsUse: brandForm?.anySpecificWordsUse,
    howToPronouncebrandName: brandForm?.howToPronouncebrandName,
    anySpecialRequest: brandForm?.anySpecialRequest,
    expressDelivery: brandForm?.expressDelivery,
  };

  const lastContentInfo = {
    textOverlay: brandForm?.textOverlay,
    captions: brandForm?.captions,
    music: brandForm?.music,
    extraHook: brandForm?.extraHook,
    extraCta: brandForm?.extraCta,
    videoType: brandForm?.kindOfVideo,
    additionalPerson: brandForm?.additionalPerson,
    offSiteAttraction: brandForm?.offSiteAttraction,
    goalOfProject: brandForm?.projectGoal,
    tergetAudience: brandForm?.targetAudience,
  };

  const ugcPhoto = brandForm?.ugcPhotos
  const packageId = brandForm?.packageId
  const takeVideoCount = brandForm?.takeVideoCount



  const handleSubmit = async () => {
    // const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
    console.log("Submitted Data:", brandForm);
    const formData = new FormData();
    formData.append("packageId", packageId);
    formData.append("brandInfo", JSON.stringify(brandInfo));
    formData.append("brandSocial", JSON.stringify(brandSocial));
    formData.append("contentInfo", JSON.stringify(contentInfo));
    formData.append("characteristicInfo", JSON.stringify(characteristicInfo));
    formData.append("doAndDonts", JSON.stringify(doAndDonts));
    formData.append("lastContentInfo", JSON.stringify(lastContentInfo));
    formData.append("ugcPhoto", ugcPhoto);
    if (takeVideoCount) formData.append("takeVideoCount", takeVideoCount)


    toast.loading("Loading...", { id: "loading" });
    const res = await myFetch("/hire-creator/create", {
      method: "POST",
      body: formData
    })
    console.log("Response from server:", res);

    if (res?.success) {
      toast.success(res?.message || "Order created successfully!", { id: "loading" });
      // console.log(res?.data?.url);
      if (res?.data?.url) {
        window.location.href = res?.data?.url;
      } else {
        setTimeout(() => {
          router.push("/");
        }, 1000)
      }
    } else {
      toast.error(res?.message || "Something went wrong!", { id: "loading" });
      setTimeout(() => {
        router.push("/");
      }, 3000)
    }
  }



  return (
    <div className="w-full max-w-[600px] mx-auto px-2 h-full flex text-center justify-center items-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        {/* <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Make a Payment</h2> */}
        {packageId && <button onClick={handleSubmit} className="bg-white cursor-pointer text-[#565151] font-semibold py-2 px-8 rounded-md">
          Continue
        </button>}
        {!packageId && isPackage === true && <Link href="/service?isPackage=true" className="bg-white cursor-pointer text-[#565151] font-semibold py-2 px-8 rounded-md">
          Select Package Or Subscription
        </Link>}
        {!packageId && isPackage === false && <Link href="/service?isPackage=false" className="bg-white cursor-pointer text-[#565151] font-semibold py-2 px-8 rounded-md">
          Purchase Package Or Subscription
        </Link>}
        { }
      </div>
    </div>
  );
};

export default FinalMessage;

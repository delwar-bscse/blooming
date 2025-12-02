/* eslint-disable react-hooks/exhaustive-deps */

import { useBrand } from "@/context/BrandContext";
import { myFetch } from "@/utils/myFetch";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import cardPayment from "@/assets/common/cardPayment.png";
import paypalPayment from "@/assets/common/paypalPayment.png";
import { useEffect, useState } from "react";

{/* ---------------------------- Sign Up Form ---------------------------- */ }
const FinalMessage = () => {
  const router = useRouter();
  const { brandForm } = useBrand();
  const [paymentMethod, setPaymentMethod] = useState<string>("card");

  const payload = {
    method: "card",
    packageId: brandForm?.packageId,

    brandInfo: {
      name: brandForm?.name,
      email: brandForm?.email,
      phone: brandForm?.phone,
      websiteUrl: brandForm?.websiteUrl,
      productName: "It should remove",
      brandPronounceName: brandForm?.brandPronounceName,
      isScript: brandForm?.isScript,
      isVideoCaption: brandForm?.isVideoCaption
    },

    brandSocial: {
      tiktokHandle: brandForm?.tiktokHandle,
      tiktokLink: brandForm?.tiktokLink,
      instragramHandle: brandForm?.instragramHandle ?? brandForm?.instagramHandle,
      instragramLink: brandForm?.instragramLink ?? brandForm?.instagramLink,
      othersSocialLink: brandForm?.othersSocialLink
    },

    videoInfo: {
      productName: brandForm?.videoProductName ?? brandForm?.productName,
      productLink: brandForm?.productLink,
      productType: brandForm?.productType,
      videoType: brandForm?.videoType,
      videoLink: brandForm?.videoLink,
      videoLanguage: brandForm?.videoLanguage,
      specificWordsOrFeatures: brandForm?.specificWordsOrFeatures,
      specificWordsNotToUse: brandForm?.specificWordsNotToUse,
      projectGoal: brandForm?.projectGoal
    },

    characteristicInfo: {
      gender: brandForm?.gender,
      ageRange: brandForm?.ageRange,
      creatorLocation: brandForm?.creatorLocation,
      anySpecialRequest: brandForm?.anySpecialRequest,
      targetAudience: brandForm?.targetAudience,
      targetAudienceAgeGroup: brandForm?.targetAudienceAgeGroup,
      productSolveForThem: brandForm?.productSolveForThem,
      topPerformingAdsLast30Days: brandForm?.topPerformingAdsLast30Days
    },

    addOns: {
      isExtraHook: brandForm?.isExtraHook,
      isExtraCta: brandForm?.isExtraCta,
      isRowFootagePerConcept: brandForm?.isRowFootagePerConcept,
      isOffSiteFilming: brandForm?.isOffSiteFilming,
      isUgc5Photos: brandForm?.isUgc5Photos,
      isExpressDelivery: brandForm?.isExpressDelivery,
      isFilmingEssentials: brandForm?.isFilmingEssentials,
      isAdditionalPerson: brandForm?.isAdditionalPerson
    }
  };

  useEffect(() => {
    payload.method = paymentMethod;
  }, [paymentMethod]);



  const handleSubmit = async () => {


    toast.loading("Loading...", { id: "loading" });
    const res = await myFetch("/hire-creator/create", {
      method: "POST",
      body: payload,
    })
    console.log("order res", res);

    if (res?.success) {
      toast.success(res?.message || "Order created successfully!", { id: "loading" });
      if (res?.data?.url) {
        window.location.href = res?.data?.url;
      } else {
        setTimeout(() => {
          router.push("/");
        }, 1000)
      }
    } else {
      toast.error(res?.message || "Something went wrong!", { id: "loading" });
      // setTimeout(() => {
      //   router.push("/");
      // }, 3000)
    }
  }




  return (
    <div className="w-full max-w-[540px] mx-auto px-2 h-full flex text-center justify-center items-center">
      <div className="bg-white px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        <p className="text-lg md:text-xl font-bold text-left text-gray-700">Please Select Payment Option And Continue</p>
        <div className="flex flex-col items-start gap-2 mt-4">
          <span className="font-semibold text-left text-gray-600">Cards</span>
          <div onClick={() => setPaymentMethod("card")} className={`${paymentMethod === "card" ? "bg-gray-100 border-gray-200" : "border-gray-50"} w-full flex justify-start items-center border   shadow rounded-sm py-1 px-2 cursor-pointer transition-colors duration-200`}>
            <Image src={cardPayment} alt="cardPayment" width={400} height={100} className="h-[40px] w-fit object-contain"/>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 mt-4">
          <span className="font-semibold text-left text-gray-600">Pay With Another Payment Method Paypal</span>
          <div onClick={() => setPaymentMethod("paypal")} className={`${paymentMethod === "paypal" ? "bg-gray-100 border-gray-200" : "border-gray-50"} w-full flex justify-start items-center border   shadow rounded-sm py-1 px-2 cursor-pointer transition-colors duration-200`}>
            <Image src={paypalPayment} alt="cardPayment" width={400} height={100} className="h-[40px] w-fit object-contain"/>
          </div>
        </div>
        <button onClick={() => handleSubmit()} className="mt-8 block text-center py-2 px-2 w-full rounded-sm shadow border border-gray-100 cursor-pointer text-gray-700 hover:text-gray-500 font-semibold transition-all duration-500">Continue</button>
      </div>
    </div>
  );
};

export default FinalMessage;

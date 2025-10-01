/* eslint-disable @typescript-eslint/no-explicit-any */

import { useBrand } from "@/context/BrandContext";
import { myFetch } from "@/utils/myFetch";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { useForm } from "react-hook-form";

{/* ---------------------------- Sign Up Form ---------------------------- */ }
const FinalMessage = () => {
  const router = useRouter();
  const { brandForm } = useBrand();


  const defaultValues = {
    selectPaymentOption: ""
  };

  const form = useForm({
    defaultValues,
    mode: "onChange",
  });

  console.log("brandForm", brandForm);

  const payload = {
    method: "card",
    packageId: brandForm?.packageId,

    brandInfo: {
      name: brandForm?.name,
      email: brandForm?.email,
      phone: brandForm?.phone,
      websiteUrl: brandForm?.websiteUrl,
      productName: brandForm?.productName,
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



  const handleSubmit = async () => {
    console.log("Submitted Data:", payload);


    toast.loading("Loading...", { id: "loading" });
    const res = await myFetch("/hire-creator/create", {
      method: "POST",
      body: payload,
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

  async function onSubmit(data: any) {

    console.log("Submitted Data:", data);
    if (!data.selectPaymentOption) {
      toast.error("Please select a payment option");
      return;
    } else {
      payload.method = data.selectPaymentOption;
      console.log(`You have selected ${data.selectPaymentOption}`);
      toast.success(`You have selected ${data.selectPaymentOption}`);
      handleSubmit();
    }
  }



  return (
    <div className="w-full max-w-[600px] mx-auto px-2 h-full flex text-center justify-center items-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="selectPaymentOption"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-xl text-gray-100">Select a payment option and continue</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex justify-center gap-6 py-8"
                    >
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="paypal" className="text-white" />
                        </FormControl>
                        <FormLabel className="font-bold text-4xl text-gray-50 cursor-pointer">
                          PayPal
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="card" className="text-white w-4 h-4" />
                        </FormControl>
                        <FormLabel className="font-bold text-4xl text-gray-50 cursor-pointer">
                          Card
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button type="submit" className="bg-white cursor-pointer text-[#565151] font-semibold py-2 px-8 rounded-md">
              Continue
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FinalMessage;

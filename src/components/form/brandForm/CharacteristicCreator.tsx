"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useBrand } from "@/context/BrandContext";
// import toast, { Toaster } from 'react-hot-toast';

// Schema
const contactUsFormSchema = z.object({
  gender: z.string(),
  ageRange: z.string(),
  creatorLocation: z.string(),
  anySpecialRequest: z.string(),
  targetAudience: z.string(),
  targetAudienceAgeGroup: z.string(),
  productSolveForThem: z.string(),
  topPerformingAdsLast30Days: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  gender: "",
  ageRange: "18-25",
  creatorLocation: "",
  anySpecialRequest: "",
  targetAudience: "yes",
  targetAudienceAgeGroup: "",
  productSolveForThem: "",
  topPerformingAdsLast30Days: "",
};

  // "characteristicInfo": {
  //   "gender": "Unisex",
  //   "ageRange": "18-45",
  //   "creatorLocation": "New York",
  //   "anySpecialRequest": "No",
  //   "targetAudience": "Young Adults",
  //   "targetAudienceAgeGroup": "18-35",
  //   "productSolveForThem": "Convenience and Style",
  //   "topPerformingAdsLast30Days": "Brand X"
  // },

{/* ---------------------------- Sign Up Form ---------------------------- */ }
const CharacteristicCreator = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const { brandForm, setBrandForm } = useBrand();
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: brandForm || defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactUsFormValues) {
    // toast.success("Message send successfully!");
    // console.log("Submitted Data:", data);
    setBrandForm((prev) => ({
      ...prev, ...data,
    }));
    handleStep(5);
  }

  return (
    <div className="w-full max-w-[600px] mx-auto px-2 flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Characteristic Of The Creator</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Creator Gender</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="ageRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Age Range</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="18-25">18-25</SelectItem>
                      <SelectItem value="25-35">25-35</SelectItem>
                      <SelectItem value="35-45">35-45</SelectItem>
                      <SelectItem value="45-55">45-55</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />



            {/* Brand Name */}
            <FormField
              control={form.control}
              name="creatorLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Location Of The Creator</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="anySpecialRequest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Any Special Request</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Scripting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Target Audience</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="targetAudienceAgeGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Target Audience Age Group</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="18-25">18-25</SelectItem>
                      <SelectItem value="25-35">25-35</SelectItem>
                      <SelectItem value="35-45">35-45</SelectItem>
                      <SelectItem value="45-55">45-55</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

                        
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="productSolveForThem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">What Does Your Product Solve For Them ?</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Scripting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                        
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="topPerformingAdsLast30Days"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Share 2-3 Link Of Your Top Performing Ads From Last 30 Days</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Scripting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           

            {/* Submit */}
            <Button variant="customWhite" type="submit" size="llg" className="w-full h-9 mt-2">
              Next
            </Button>
          </form>
        </Form>

        {/* <Toaster  position="top-right" reverseOrder={false}/> */}

      </div>
    </div>
  );
};

export default CharacteristicCreator;

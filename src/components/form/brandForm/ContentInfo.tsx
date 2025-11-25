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
  productName: z.string(),
  productLink: z.string(),
  productType: z.string(),
  videoType: z.string(),
  videoLink: z.string(),
  videoLanguage: z.string(),
  specificWordsOrFeatures: z.string(),
  specificWordsNotToUse: z.string(),
  projectGoal: z.string()
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  productName: "",
  productLink: "",
  productType: "",
  videoType: "",
  videoLink: "",
  videoLanguage: "",
  specificWordsOrFeatures: "",
  specificWordsNotToUse: "",
  projectGoal: "",
};
// "videoInfo": {
//   "productName": "Product Video",
//   "productLink": "https://www.brand.com/product",
//   "productType": "Physical",
//   "videoType": "Promo",
//   "videoLink": "https://www.brand.com/video",
//   "videoLanguage": "English",
//   "specificWordsOrFeatures": "New, Affordable, Durable",
//   "specificWordsNotToUse": "Cheap, Low quality",
//   "projectGoal": "Increase brand awareness"
// },

{/* ---------------------------- Sign Up Form ---------------------------- */ }
const ContentInfo = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const { brandForm, setBrandForm } = useBrand();
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: brandForm || defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactUsFormValues) {
    setBrandForm((prev) => ({
      ...prev, ...data,
    }));
    handleStep(4);
  }

  return (
    <div className="w-full max-w-[540px] mx-auto px-2 flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Video Info</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Product Name</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="(E.G. Stories, Photos, Horizontal/Vertical versions)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="productLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Product Link</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter product link" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Product Type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Physical">Physical</SelectItem>
                      <SelectItem value="Digital">Digital</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="videoType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Video Type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select video type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Unboxing">Unboxing</SelectItem>
                      <SelectItem value="Skit">Skit</SelectItem>
                      <SelectItem value="Green Screen">Green Screen</SelectItem>
                      <SelectItem value="Voice Over">Voice Over</SelectItem>
                      <SelectItem value="Taking To Camera">Taking To Camera</SelectItem>
                      <SelectItem value="Life Style">Life Style</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="videoLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Example Video Link</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="(Reference Or Inspiration)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="videoLanguage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Video Language</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            {/* Brand Name */}
            <FormField
              control={form.control}
              name="specificWordsOrFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Any Specific Words Or Features To Use</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="specificWordsNotToUse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Any Specific Words Not To Use</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="projectGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Goal Of The Projects</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type here..." {...field} />
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

export default ContentInfo;

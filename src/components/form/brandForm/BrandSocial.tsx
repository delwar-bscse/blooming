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
import { useBrand } from "@/context/BrandContext";
// import toast, { Toaster } from 'react-hot-toast';

// Schema
const contactUsFormSchema = z.object({
  instagramLink: z.string(),
  instagramHandle: z.string(),
  tiktokHandle: z.string(),
  tiktokLink: z.string(),
  othersSocialLink: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  instagramLink: "",
  instagramHandle: "",
  tiktokHandle: "",
  tiktokLink: "",
  othersSocialLink: "",
};

{/* ---------------------------- Sign Up Form ---------------------------- */ }
const BrandSocial = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const {  brandForm, setBrandForm } = useBrand();
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: brandForm || defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactUsFormValues) {
    // console.log("Submitted Data:", data);
    setBrandForm((prev) => ({
      ...prev, ...data,
    }));
    handleStep(3);
  }

  return (
    <div className="w-full max-w-[600px] mx-auto px-2 flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Brand Social</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="instagramLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Instagram Link</FormLabel>
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
              name="instagramHandle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Instagram Handle</FormLabel>
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
              name="tiktokLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Tik Tok Link</FormLabel>
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
              name="tiktokHandle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Tik Tok Handle</FormLabel>
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
              name="othersSocialLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Other Socials</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type..." {...field} />
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

export default BrandSocial;

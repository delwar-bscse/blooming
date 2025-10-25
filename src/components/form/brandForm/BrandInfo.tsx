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
import { useState } from "react";
// import { useEffect } from "react";
// import toast, { Toaster } from 'react-hot-toast';

// Schema
const contactUsFormSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string(),
  // productName: z.string(),
  websiteUrl: z.string(),
  brandPronounceName: z.string(),
  isScript: z.string().optional(),
  isVideoCaption: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  name: "",
  email: "",
  phone: "",
  websiteUrl: "",
  // productName: "",
  brandPronounceName: "",
  isScript: "",
  isVideoCaption: "",
};

{/* ---------------------------- Sign Up Form ---------------------------- */ }
const BrandInfo = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const { brandForm, setBrandForm } = useBrand();
  const [isScriptHave, setIsScriptHave] = useState<boolean>(false);

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: brandForm || defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactUsFormValues) {
    setBrandForm((prev) => ({
      ...prev, ...data
    }));
    handleStep(2);
  }

  return (
    <div className="w-full max-w-[600px] mx-auto px-2 flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Brand Info</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Brand Name</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter brand name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Brand Email</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter brand email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Phone Number(Country Code)</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="websiteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Website URL</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter website url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            {/* <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Product Name</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="brandPronounceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">How To Pronounce Your Brand Name</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            
            <p className="text-white text-left text-lg pt-1">Will You Provide Script ?</p>
            <Select value={isScriptHave ? "yes" : "no"} onValueChange={(val) => {
              setIsScriptHave(val === "yes" ? true : false);
            }} >
              <FormControl>
                <SelectTrigger variant="borderwhite" className="w-full">
                  <SelectValue placeholder={"Select Yes/No"} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>

            {/* Brand Name */}
            {isScriptHave && <FormField
              control={form.control}
              name="isScript"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter Script Link" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />}


            {/* Brand Name */}
            <FormField
              control={form.control}
              defaultValue={brandForm.isVideoCaption || "yes"}
              name="isVideoCaption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Caption On Video ?</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select Yes/No" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
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

export default BrandInfo;

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
  anyWordsNotToUse: z.string(),
  anySpecificWordsUse: z.string(),
  howToPronouncebrandName: z.string(),
  anySpecialRequest: z.string(),
  expressDelivery: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  anyWordsNotToUse: "18-25",
  anySpecificWordsUse: "",
  howToPronouncebrandName: "",
  anySpecialRequest: "",
  expressDelivery: "yes",
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const DoDont = ({ handleStep }: { handleStep: (step: number) => void }) => {
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
    handleStep(6);
  }

  return (
    <div className="w-full max-w-[600px] mx-auto px-2 flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Do And Donts</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="anyWordsNotToUse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Any Words Not To Use</FormLabel>
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
              name="anySpecificWordsUse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Any Specific Words To Use</FormLabel>
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
              name="howToPronouncebrandName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">How To Pronounce The Brand Name</FormLabel>
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
              name="expressDelivery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Express Delivery</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Yes" />
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

export default DoDont;

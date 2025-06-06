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
// import toast, { Toaster } from 'react-hot-toast';

// Schema
const contactUsFormSchema = z.object({
  niche: z.string(),
  Languages: z.string(),
  profession: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  niche: "",
  Languages: "",
  profession: "",
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const Signup03 = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactUsFormValues) {
    // toast.success("Message send successfully!");
    console.log("Submitted Data:", data);
    handleStep(4);
  }

  return (
    <div className="w-full max-w-[700px] mx-auto flex text-center justify-center py-20 px-2">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Step Three</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Brand Name */}
            <FormField
              control={form.control}
              name="niche"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Niche (E.G. Beauty, Lifestyle, Fitness)</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select Niche" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Fitness">Fitness & Health</SelectItem>
                      <SelectItem value="Beauty & Skin Care">Beauty & Skin Care</SelectItem>
                      <SelectItem value="Fashion">Fashion</SelectItem>
                      <SelectItem value="Home Decor">Home Decor</SelectItem>
                      <SelectItem value="Gardening">Gardening</SelectItem>
                      <SelectItem value="Food & Drink">Food & Drink</SelectItem>
                      <SelectItem value="Travel">Travel</SelectItem>
                      <SelectItem value="Family & Parenting">Family & Parenting</SelectItem>
                      <SelectItem value="Gaming">Gaming</SelectItem>
                      <SelectItem value="Pets & Animals">Pets & Animals</SelectItem>
                      <SelectItem value="Tech & Gadgets">Tech & Gadgets</SelectItem>
                      <SelectItem value="Business Money">Business Money</SelectItem>
                      <SelectItem value="Digital Products">Digital Products</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="Languages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Languages Spoken</FormLabel>
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
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Job/Profession</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button variant="customWhite" type="submit" size="llg" className="w-full">
              Next
            </Button>
          </form>
        </Form>

        {/* <Toaster  position="top-right" reverseOrder={false}/> */}

      </div>
    </div>
  );
};

export default Signup03;

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
  ageRange: z.string(),
  gender: z.string(),
  location: z.string(),
  languages: z.string(),
  script: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  ageRange: "18-25",
  gender: "",
  location: "",
  languages: "",
  script: "yes",
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
    // toast.success("Message send successfully!");
    // console.log("Submitted Data:", data);
    setBrandForm((prev) => ({
      ...prev, ...data,
    }));
    handleStep(6);
  }

  return (
    <div className="w-full max-w-[700px] mx-auto flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Do And Donts</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

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
                        <SelectValue placeholder="(E.G., 15s, 30s, 60s)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="18-25">18-25</SelectItem>
                      <SelectItem value="26-35">26-35</SelectItem>
                      <SelectItem value="36-45">36-45</SelectItem>
                      <SelectItem value="46-55">46-55</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Gender Preference (If Any)</FormLabel>
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
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Location - Based Creator Requirement</FormLabel>
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
              name="languages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Languages Requirement</FormLabel>
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
              name="script"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Will you provide a script ?</FormLabel>
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

export default DoDont;

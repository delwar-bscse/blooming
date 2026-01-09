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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCreator } from "@/context/CreatorContext";
// import toast, { Toaster } from 'react-hot-toast';

// Schema
const contactUsFormSchema = z.object({
  gender: z.string(),
  ethnicity: z.string(),
  bodyType: z.string(),
  hairType: z.string(),
  skinType: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  gender: "",
  ethnicity: "",
  bodyType: "",
  hairType: "",
  skinType: "",
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const Signup04 = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const { creatorForm, setCreatorForm } = useCreator();
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: creatorForm || defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactUsFormValues) {
    setCreatorForm((prev) => ({
      ...prev, ...data
    }))
    handleStep(5);
  }

  return (
    <div className="w-full max-w-[600px] mx-auto flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Step Four</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Gender</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="ethnicity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Ethnicity</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select Ethnicity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="European">European</SelectItem>
                      <SelectItem value="Western">Western</SelectItem>
                      <SelectItem value="African">African</SelectItem>
                      <SelectItem value="Middle Eastern">Middle Eastern</SelectItem>
                      <SelectItem value="Asian">Asian</SelectItem>
                      <SelectItem value="Hispanic">Hispanic</SelectItem>
                      <SelectItem value="Latino">Latino</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="bodyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Body Type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select Body Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Slim">Slim</SelectItem>
                      <SelectItem value="Fit">Fit</SelectItem>
                      <SelectItem value="Plus Size">Plus Size</SelectItem>
                      <SelectItem value="Athletic">Athletic</SelectItem>
                      <SelectItem value="Curvy">Curvy</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="hairType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Hair Type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select Hair Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Straight">Straight</SelectItem>
                      <SelectItem value="Curly">Curly</SelectItem>
                      <SelectItem value="Long">Long</SelectItem>
                      <SelectItem value="Short">Short</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="skinType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Skin Type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select Skin Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Oily">Oily</SelectItem>
                      <SelectItem value="Dry">Dry</SelectItem>
                      <SelectItem value="Acne Prone">Acne Prone</SelectItem>
                      <SelectItem value="Combination">Combination</SelectItem>
                      <SelectItem value="Sensitive">Sensitive</SelectItem>
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

export default Signup04;

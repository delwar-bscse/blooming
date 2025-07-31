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
import { useBrand } from "@/context/BrandContext";

// Schema
const contactUsFormSchema = z.object({
  textOverlay: z.string(),
  captions: z.string(),
  music: z.string(),
  extraHook: z.string(),
  extraCta: z.string(),
  kindOfVideo: z.string(),
  additionalPerson: z.string(),
  offSiteAttraction: z.string(),
  projectGoal: z.string(),
  targetAudience: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  textOverlay: "",
  captions: "",
  music: "",
  extraHook: "",
  extraCta: "",
  kindOfVideo: "",
  additionalPerson: "",
  offSiteAttraction: "",
  projectGoal: "",
  targetAudience: "",
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const ContentInformation = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const { brandForm, setBrandForm } = useBrand();
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: brandForm || defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactUsFormValues) {
    // toast.success("Form submitted successfully!");
    // console.log("Submitted Data:", data);
    setBrandForm((prev) => ({
      ...prev, ...data
    }));
    handleStep(7);
  }

  return (
    <div className="w-full max-w-[600px] mx-auto px-2 flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-2xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Content Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="textOverlay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Text Overlay (If Yes, Font Name?)</FormLabel>
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
              name="captions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Captions (If yes, Template or Font)</FormLabel>
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
              name="music"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Music</FormLabel>
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
              name="extraHook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Extra Hook</FormLabel>
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
              name="extraCta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Extra CTA</FormLabel>
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
              name="kindOfVideo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">What Kind of Video</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select One" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="unboxing">Unboxing</SelectItem>
                      <SelectItem value="skit">Skit</SelectItem>
                      <SelectItem value="greenScreen">Green Screen</SelectItem>
                      <SelectItem value="voiceOver">Voice Over</SelectItem>
                      <SelectItem value="takingToCamera">Taking To Camera</SelectItem>
                      <SelectItem value="lifeStyle">Life Style</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
                       
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="additionalPerson"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Additional Person In The video ?</FormLabel>
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
              name="offSiteAttraction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Off Site Attraction</FormLabel>
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
              name="projectGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Goal Of Project</FormLabel>
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
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Target audience</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           

            {/* Submit */}
            <Button variant="customWhite" type="submit" size="llg" className="w-full h-9 mt-2">
              Confirm
            </Button>
          </form>
        </Form>

        {/* <Toaster  position="top-right" reverseOrder={false}/> */}

      </div>
    </div>
  );
};

export default ContentInformation;

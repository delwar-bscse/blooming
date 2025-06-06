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
  additionFormats: z.string(),
  videoDuration: z.string(),
  platform: z.string(),
  usageType: z.string(),
  hookCta: z.string(),
  videoLink: z.string(),
  ugcPhotos: z
    .any()
    .refine(
      (file) =>
        file instanceof File && file.type.startsWith("image/"),
      "Please upload a valid image file"
    ),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  additionFormats: "",
  videoDuration: "",
  platform: "",
  usageType: "",
  hookCta: "",
  videoLink: "",
  ugcPhotos: undefined,
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const ContentInfo = ({ handleStep }: { handleStep: (step: number) => void }) => {
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
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Content Info</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="additionFormats"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Addition Formats</FormLabel>
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
              name="videoDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Video Duration</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="(E.G., 15s, 30s, 60s)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="15s">15s</SelectItem>
                      <SelectItem value="30s">30s</SelectItem>
                      <SelectItem value="60s">60s</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Platform</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select a platform" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="youtubeshorts">YouTube Shorts</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="usageType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Usage Type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select usage type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="organic">Organic</SelectItem>
                      <SelectItem value="paid">Paid Ad</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="hookCta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Ad Hook Or CTA Requests</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="(Optional - Leave Blank if not applicable)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="hookCta"
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
              name="ugcPhotos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">UGC Photo</FormLabel>
                  <FormControl>
                    <Input
                      variant="borderwhite"
                      type="file"
                      accept="image/*"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
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

export default ContentInfo;

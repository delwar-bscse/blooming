/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useCreator } from "@/context/CreatorContext";
// import toast, { Toaster } from 'react-hot-toast';

// Schema
const contactUsFormSchema = z.object({
  ugcExampleVideo: z
    .any()
    .refine(
      (files) =>
        Array.isArray(files) &&
        files.length > 0 &&
        files.length <= 6 &&
        files.every((file) => file instanceof File && file.type.startsWith("video/")),
      "Please upload up to 6 valid video files"
    ),
  introductionvideo: z
    .any()
    .refine(
      (file) =>
        file instanceof File && file.type.startsWith("video/"),
      "Please upload a valid video file"
    ),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  introductionvideo: [],
  ugcExampleVideo: [],
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const Signup06 = ({ handleStep }: { handleStep: (step: number) => void }) => {
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
    handleStep(7);
  }

  return (
    <div className="w-full max-w-[600px] mx-auto flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Step Six</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="ugcExampleVideo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">UGC Example Videos (Upload Only 6 videos)</FormLabel>
                  <FormControl>
                      <div>
                        <Input
                        variant="borderwhiteVideo"
                        type="file"
                        accept="video/mp4,.mp4"
                        multiple
                        onChange={(e) => {
                          const files = Array.from(e.target.files ?? []);
                          field.onChange(files);
                        }}
                      />
                      <div className="flex flex-wrap space-x-4 text-gray-700">{creatorForm?.ugcExampleVideo?.map((file: any, index: number) => <p className="" key={index}>{file.name}</p>)}</div>
                      </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="introductionvideo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Introduction Video (Upload Only 1 video 30 seconds)</FormLabel>
                  <FormControl>
                      <div>
                        <Input
                        variant="borderwhiteVideo"
                        type="file"
                        accept="video/mp4,.mp4"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                      <div className="text-gray-700">{creatorForm?.introductionvideo?.name}</div>
                      </div>
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

export default Signup06;

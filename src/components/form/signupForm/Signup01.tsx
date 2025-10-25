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
import { useEffect, useState } from "react";
import Image from "next/image";
import profileInputIcon from "@/assets/common/ProfileInputIcon.png";
import bgImage from "@/assets/common/formBackground.png";
import { useCreator } from "@/context/CreatorContext";

// Schema
const contactUsFormSchema = z.object({
  profile: z
    .any()
    .refine(
      (file) => file instanceof File && file.type.startsWith("image/"),
      "Please upload a valid image file"
    )
    .optional(),
  fullName: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
  dateOfBirth: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  password: "",
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const Signup01 = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const { creatorForm, setCreatorForm } = useCreator();
  const [imgUrl, setImgUrl] = useState<string | null>(null);


  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: creatorForm || defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactUsFormValues) {
    setCreatorForm((prev) => ({
      ...prev, ...data,
    }));
    handleStep(2);
  }

  const handleImgUrl = (file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImgUrl(url);
      return () => URL.revokeObjectURL(url); // Clean up
    } else {
      setImgUrl(null);
    }
  }
  useEffect(() => {
    // Set the initial image URL if profile is already set
    if (creatorForm.profile) {
      handleImgUrl(creatorForm.profile);
    }
  }, [creatorForm.profile]);

  return (
    <div className="w-full max-w-[600px] mx-auto flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Creator Sign Up</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

            {/* Profile Image */}
            <FormField
              control={form.control}
              name="profile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div>
                      <Input
                        id="profileImgCtrl"
                        type="file"
                        accept="image/*"
                        variant="inputHidden"
                        onChange={e => {
                          field.onChange(e.target.files?.[0]);
                          handleImgUrl(e.target.files?.[0] ?? null);
                        }}
                      />
                      <div className="relative inline-block">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-3 border-white bg-gray-300">
                          <Image
                            src={imgUrl || bgImage} // Use a placeholder image if imgUrl is null
                            alt="content image"
                            className="object-fill w-full h-full"
                            width={328}
                            height={328}
                            unoptimized
                          />
                        </div>

                        <Image
                          onClick={() => document.getElementById("profileImgCtrl")?.click()}
                          src={profileInputIcon}
                          alt="Upload Icon"
                          className="absolute bottom-2 right-1 w-8 h-8 z-10 cursor-pointer hover:scale-110 transition-all duration-300"
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Full Name</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter full name" {...field} />
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
                  <FormLabel className="text-white text-lg">Email</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Enter email" {...field} />
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
                  <FormLabel className="text-white text-lg">Phone Number</FormLabel>
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Password</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="Type password..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Date of Birth</FormLabel>
                  <FormControl>
                    <Input variant="borderwhite" placeholder="01.01.2001" {...field} />
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

export default Signup01;

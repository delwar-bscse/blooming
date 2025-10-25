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
import { useEffect } from "react";
import { myFetch } from "@/utils/myFetch";
import { toast } from "sonner";
// import toast, { Toaster } from 'react-hot-toast';

// Schema
const contactUsFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string(),
  dob: z.string().optional(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  fullName: "",
  email: "",
  phoneNumber: "",
};

const ProfileInfoChange = () => {
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

   async function onSubmit(data: ContactUsFormValues) {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("phone", data.phoneNumber);

    const response = await myFetch("/users/update-my-profile", {
      method: "PATCH",
      body: formData,
    });
    
    if (response?.success) {
      // toast.success("Profile updated successfully!");
      toast.success(response?.message || "Profile updated successfully!");
    } else {
      // toast.error("Failed to update profile. Please try again.");
      toast.error(response?.error || "Error updating profile");
    }
  }

  useEffect(() => {
    async function getUserData() {
      const response = await myFetch("/users/my-profile", {
        method: "GET",
      });
      
      form.reset({
        fullName: response?.data?.fullName || "",
        email: response?.data?.email || "",
        phoneNumber: response?.data?.phone || "",
      }); // Reset form with user data
    }
    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="w-full max-w-[700px] mx-auto flex text-center justify-center">
      <div className="bg-white shadow px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600 text-lg">Full Name</FormLabel>
                  <FormControl>
                    <Input variant="borderblack" placeholder="Enter full name" {...field} />
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
                  <FormLabel className="text-gray-600 text-lg">Email</FormLabel>
                  <FormControl>
                    <Input disabled variant="borderblack" placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600 text-lg">Phone Number</FormLabel>
                  <FormControl>
                    <Input maxLength={16} variant="borderblack" placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" variant="customYellow" size="llg" className="w-full">
              Save
            </Button>
          </form>
        </Form>

        {/* <Toaster  position="top-right" reverseOrder={false}/> */}

      </div>
    </div>
  )
}

export default ProfileInfoChange;
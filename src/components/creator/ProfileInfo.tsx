"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import toast, { Toaster } from 'react-hot-toast';

// Schema
const contactUsFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string(),
  dob: z.string(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  fullName: "Shamim Nadir",
  email: "shamimnadir@blooming.com",
  phoneNumber: "+8801712345678",
};

const ProfileInfo = () => {
    const form = useForm<ContactUsFormValues>({
      resolver: zodResolver(contactUsFormSchema),
      defaultValues,
      mode: "onChange",
    });
  
    function onSubmit(data: ContactUsFormValues) {
      // toast.success("Message send successfully!");
      console.log("Submitted Data:", data);
    }


  return (
    <div className="w-full max-w-[700px] mx-auto flex text-center justify-center py-20">
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
                    <Input variant="borderblack" placeholder="Enter email" {...field} />
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
                    <Input variant="borderblack" placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            {/* <Button variant="customWhite" type="submit" size="llg" className="w-full">
              Next
            </Button> */}
          </form>
        </Form>

        {/* <Toaster  position="top-right" reverseOrder={false}/> */}

      </div>
    </div>
  )
}

export default ProfileInfo;
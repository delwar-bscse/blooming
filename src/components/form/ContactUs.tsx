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
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea"
import { BsTelephoneOutbound } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { myFetch } from "@/utils/myFetch";

// Schema
const contactUsFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().min(2, "Full name must be at least 2 characters."),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  fullName: "",
  email: "",
  phoneNumber: "",
  message: "",
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const ContactUs = () => {
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactUsFormValues) {
    toast.loading("Sending message...",{id:"contactus"});
    const res = await myFetch("/contact-us/create-contact",{
      method: "POST",
      body: data
    })
    if(res.success){
      // console.log("Contact Us Response from server:", res);
      toast.success(res.message || "Message send successfully!",{id:"contactus"});
    }else{
      toast.error(res.message || "Something went wrong!",{id:"contactus"});
    }
  }

  return (
    <div className="w-full max-w-[1000px] mx-auto flex flex-col-reverse sm:flex-row text-center justify-center gap-2 md:gap-4 lg:gap-8 py-20 px-2">
      <div className="bg-[#E9EDF2] p-6 py-20 basis-[40%] rounded-md">
        <h2 className="text-2xl font-semibold mb-6 pb-3 border-b-4 border-white">Need More Help?</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <BsTelephoneOutbound className="text-sm text-gray-600" />
            </span>
            <span className="text-gray-700">0133327633</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <CiMail className="text-sm text-gray-600" />
            </span>
            <span className="text-gray-700">shamimnader@gmail.com</span>
          </li>
        </ul>
      </div>

      <div className="bg-[#E9EDF2] px-2 sm:px-4 md:px-8 py-6 md:py-8 basis-[60%] rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input variant="borderblack" placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input variant="borderblack" placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input variant="borderblack" placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Full Name */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea variant="borderblack" placeholder="Enter your message" {...field} className="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button variant="customYellow" type="submit" size="xl" className="">
              Send Message
            </Button>
          </form>
        </Form>
      </div>

      {/* <Toaster  position="top-right" reverseOrder={false}/> */}

    </div>
  );
};

export default ContactUs;

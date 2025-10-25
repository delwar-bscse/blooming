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
// import { BsTelephoneOutbound } from "react-icons/bs";
// import { CiMail } from "react-icons/ci";
import { myFetch } from "@/utils/myFetch";
import { contactFollowUs } from "@/constants/footerDatas";

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
    toast.loading("Sending message...", { id: "contactus" });
    const res = await myFetch("/contact-us/create-contact", {
      method: "POST",
      body: data
    })
    if (res.success) {
      toast.success("Message send successfully!", { id: "contactus" });
    } else {
      toast.error(res.message || "Something went wrong!", { id: "contactus" });
    }
  }

  return (
    <div className="w-full max-w-[1000px] mx-auto flex flex-col sm:flex-row text-center justify-center gap-2 md:gap-4 lg:gap-8 py-20 px-2">
      <div className=" flex-1 rounded-md flex flex-col justify-start items-center gap-8">
        <p className="font-semibold text-3xl md:text-5xl text-gray-700 text-center pt-8">Social Media</p>
        <ul className="flex flex-col gap-2">
          {contactFollowUs?.map((item, index) => (
            <li key={index} className="cursor-pointer bg-white p-2 rounded-full  hover:scale-110 transform-transition transition-all duration-200">
              <a href={item?.url} target="_blank" rel="noopener noreferrer" className="text-gray-800 text-8xl">
                {item?.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[3px] h-[640px] bg-gray-500 text-gray-800 hidden md:block"/>

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

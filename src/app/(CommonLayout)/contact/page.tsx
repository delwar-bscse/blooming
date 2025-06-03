"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";

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

// Schema
const signUpFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  msg: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
});

// Type
type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultValues: Partial<SignUpFormValues> = {
  fullName: "",
  email: "",
  phoneNumber: "",
  msg: "",
};
{/* ---------------------------- Sign Up Form ---------------------------- */}
const SignUpForm = () => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: SignUpFormValues) {
    toast("Message send successfully!");
    console.log("Submitted Data:", data);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">

      <div className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Contact Us</h2>
      </div>

      <div className="w-[92%] sm:w-[96%] md:w-full max-w-[800px] py-8 md:py-16 px-4 sm:px-24 bg-secondary rounded-lg shadow-md mb-20 mx-4">
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
                    <div className="relative">
                      <BiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                      <Input placeholder="Enter your full name" {...field} className="pl-10" />
                    </div>
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
                    <div className="relative">
                      <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                      <Input placeholder="Enter your email address" {...field} className="pl-10" />
                    </div>
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
                    <div className="relative">
                      <FiPhoneCall className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                      <Input placeholder="Enter your phone number" {...field} className="pl-10" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Full Name */}
            <FormField
              control={form.control}
              name="msg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-[10px] transform text-gray-500 text-xl" />
                      <Textarea placeholder="Enter your message" {...field} className="pl-10 bg-white h-24" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full text-base md:text-lg">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
      
    </div>
  );
};

export default SignUpForm;

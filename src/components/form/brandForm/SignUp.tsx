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
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import profileInputIcon from "@/assets/common/ProfileInputIcon.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { myFetch } from "@/utils/myFetch";
import { toast } from "sonner";
// import { routeModule } from "next/dist/build/templates/pages";
import { useRouter } from "next/navigation";

// Schema
const contactUsFormSchema = z
  .object({
    profileImg: z
      .any()
      .optional()
      .refine(
        (file) => file instanceof File && file.type.startsWith("image/"),
        "Please upload a valid image file"
      ),
    name: z.string(),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  async function onSubmit(data: ContactUsFormValues) {

    const res = await myFetch("/users/create", {
      method: "POST",
      body: {
        fullName: data.name,
        email: data.email,
        password: data.password,
        role: "user",
      },
    });

    if (res.success) {
      toast.success(`res.message || "Check your email!"`);
      localStorage.setItem("createUserToken", JSON.stringify(res?.data?.createUserToken));
      router.push("/brand-signup-otp");
    } else {
      toast.error(res.message || "Something went wrong!");
    }

  }

  const handleImgUrl = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImgUrl(null);
    }
  };

  return (
    <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12 text-center">Sign Up</h2>

      {isMounted && (
        <div className="flex items-center justify-center">
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-3 border-white bg-gray-300">
              {imgUrl ? (
                <Image
                  src={imgUrl}
                  alt="content image"
                  className="object-cover w-full h-full"
                  width={128}
                  height={128}
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
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
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* Profile Image */}
          <FormField
            control={form.control}
            name="profileImg"
            render={({ field }) => (
              <FormItem>
                <FormControl>
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-lg">Name</FormLabel>
                <FormControl>
                  <Input variant="borderwhite" placeholder="Enter Your Name" {...field} />
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
                <FormLabel className="text-white text-lg">Email</FormLabel>
                <FormControl>
                  <Input variant="borderwhite" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-lg">New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      variant="borderwhite"
                      placeholder="Enter password"
                      className="pr-10"
                      {...field}
                    />
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-100 hover:text-gray-200 z-10"
                      onClick={() => setShowPassword(prev => !prev)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-lg">Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      variant="borderwhite"
                      placeholder="Enter confirm password"
                      className="pr-10"
                      {...field}
                    />
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-100 hover:text-gray-200 z-10"
                      onClick={() => setShowConfirmPassword(prev => !prev)}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox */}
          <div className="flex items-center mb-4 text-white space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 leading-tight"
              required
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a
                target="_blank"
                href="/terms-and-condition"
                className="text-[#21419F] hover:text-blue-800 font-bold transition"
              >
                Terms & Condition
              </a>
              <span> and </span>
              <a
                target="_blank"
                href="/privacy-policy"
                className="text-[#21419F] hover:text-blue-800 font-bold transition"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <Button variant="customWhite" type="submit" size="llg" className="w-full">
            Sign Up
          </Button>

          <Link href="/login" className="w-full relative -top-2 text-center text-gray-100 hover:text-gray-200 font-semibold">
            Already Have An Account?
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;

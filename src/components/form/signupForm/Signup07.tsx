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
// import { useRouter } from "next/navigation";
import { useCreator } from "@/context/CreatorContext";

// Schema
const contactUsFormSchema = z.object({
  bankType: z.string(),
  accountHolderName: z.string(),
  bankName: z.string(),
  iban: z.string(),
  swiftCode: z.string(),
  accountNumber: z.string(),
  paypalEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;

const defaultValues: Partial<ContactUsFormValues> = {
  bankType: "",
  accountHolderName: "",
  bankName: "",
  iban: "",
  swiftCode: "",
  accountNumber: "",
  paypalEmail: "",
};
{/* ---------------------------- Sign Up Form ---------------------------- */ }
const Signup07 = ({ handleStep }: { handleStep: (step: number) => void }) => {
  const { creatorForm, setCreatorForm } = useCreator();
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: creatorForm || defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactUsFormValues) {

    setCreatorForm((prev) => ({
      ...prev, ...data
    }))
    handleStep(8);
  }

  return (
    <div className="w-full max-w-[600px] mx-auto flex text-center justify-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Step Seven</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Brand Name */}
            <FormField
              control={form.control}
              name="bankType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Bank Type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger variant="borderwhite" className="w-full">
                        <SelectValue placeholder="Select a bank" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Pay Pal">Pay Pal</SelectItem>
                      <SelectItem value="Moor Ventures">Moor Ventures</SelectItem>
                      <SelectItem value="Moor Industries">Moor Industries</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand Name */}
            <FormField
              control={form.control}
              name="accountHolderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Full Name of The Account Holder</FormLabel>
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
              name="bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Bank Name</FormLabel>
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
              name="iban"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">IBAN</FormLabel>
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
              name="swiftCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">SWIFT/BIC Code</FormLabel>
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
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Account Number (If IBAN Not Used)</FormLabel>
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
              name="paypalEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">PayPal Email</FormLabel>
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

      </div>
    </div>
  );
};

export default Signup07;

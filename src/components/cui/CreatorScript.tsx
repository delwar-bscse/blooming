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
import { myFetch } from "@/utils/myFetch";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";


// Schema
const contactUsFormSchema = z.object({
  details: z.string()
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;


{/* ---------------------------- Package Form ---------------------------- */ }
const CreatorScript = () => {



  const defaultValues: Partial<ContactUsFormValues> = {
    // image: null,
  };

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });


  async function onSubmit(data: ContactUsFormValues) {
    toast.loading("Uploading blog...", { id: "upload" });
    // toast.success("Message send successfully!");
    console.log("Submitted Data:", data);

    const formData = new FormData();
    formData.append("details", data.details);


    const res = await myFetch("/blog/create-blog", {
      method: "POST",
      body: formData,
    });
    console.log("Blog Response:", res);
    if (res.success) {
      toast.success("Blog uploaded successfully!", { id: "upload" });
      form.reset();
    } else {
      toast.error(res.message || "Upload failed!", { id: "upload" });
      // console.error("Upload failed:", res.message);
    }


  }

  return (
    <div className="w-full max-w-[1200px] mx-auto flex text-center justify-center pb-10 px-2">
      <div className="bg-white px-2 sm:px-4 md:px-8 py-2 md:py-4 w-full rounded-4xl customShadow">



        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/*  */}
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-lg">Add script if you want to take revision</FormLabel>
                  <FormControl>
                    <Textarea variant="blackBorder" placeholder="Start typing here......" {...field} className="h-100" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />



            {/* Submit */}
            <div className="flex justify-center gap-4">
              <Button variant="customYellow" type="submit" size="llg" className="w-32">
                Revision
              </Button>
              <Button variant="customYellow" type="submit" size="llg" className="w-32">
                Done
              </Button>
            </div>
          </form>
        </Form>

      </div>
    </div>
  );
};

export default CreatorScript;

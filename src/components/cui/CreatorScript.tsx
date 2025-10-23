/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


// Schema
const contactUsFormSchema = z.object({
  details: z.string().optional(),
});

// Type
type ContactUsFormValues = z.infer<typeof contactUsFormSchema>;


{/* ---------------------------- Package Form ---------------------------- */ }
const CreatorScript = () => {
  const [status, setStatus] = useState<string>("");
  const [revisionCount, setRevisionCount] = useState<number>(0);
  const params = useParams()
  const id = params["id"]



  const defaultValues: Partial<ContactUsFormValues> = {
    details: "",
  };

  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const getScript = async () => {
    const res = await myFetch(`/hire-creator/${id}`, { method: 'GET' });
    console.log("Fetch Script Response:", res)

    if (res.success) {
      // console.log(res?.data?.status)
      setStatus(res?.data?.status)
      setRevisionCount(res?.data?.revisionCount || 0)
      form.reset({
        details: res?.data?.isScript
      })
      if (res?.data?.uploadedFiles?.length === 0) {
        // toast.success("No videos found!",)
      } else {
        // toast.success("Videos fetched successfully!",)
      }
    } else {
      // toast.error(res.message || "Fetching failed!",)
    }
  }

  useEffect(() => {
    getScript()
  }, [])


  async function onSubmit(data: ContactUsFormValues) {

    console.log("Take Revision Data:", data);
    toast.loading("loading...", { id: "revision" });
    // console.log(data)
    // const formData = new FormData();
    // formData.append("revisionText", data.details || "");

    const res = await myFetch(`/hire-creator/revision/${id}?status=revision`, {
      method: "PATCH",
      body: {
        revisionText: data.details
      },
    });

    // console.log("Take Revision Response:", res);
    if (res.success) {
      toast.success(res.message || "Take Revision successfully!", { id: "revision" });
      getScript()
    } else {
      toast.error(res.message || "Take Revision failed!", { id: "revision" });
    }
  }

  const approveScript = async () => {
    console.log("Script Approved");
    // toast.loading("Updating status...", { id: "done" });

    // const res = await myFetch(`/hire-creator/revision/${id}?status=delivered`, {
    //   method: "PATCH",
    // });
    // console.log(res);
    // if (res.success) {
    //   getScript()
    //   document.getElementById("openAppReview")?.click()
    // } else {
    //   toast.error(res.message || "Failed!");
    // }
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto flex text-center justify-center pb-10 px-2">
      <div className="bg-white px-2 sm:px-4 md:px-8 py-3 md:py-4 w-full rounded-xl customShadow">
        {/* <p className='text-2xl font-semibold py-4'>Status: {status}</p> */}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/*  */}
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-lg flex items-center justify-between">
                    <span>Order Status: {status}</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea readOnly variant="blackBorder" placeholder="Nothing Admin write here" {...field} className="min-h-50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            {true && <div className="flex justify-center gap-4">
              {(revisionCount > 0) && <Button variant="customYellow" type="submit" size="llg" className="w-32">
                Decline
              </Button>}
              <Button type="button" onClick={() => approveScript()} variant="customYellow" size="llg" className="w-32">
                Approved
              </Button>
            </div>}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatorScript;

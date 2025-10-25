/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import { myFetch } from "@/utils/myFetch";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


{/* ---------------------------- Package Form ---------------------------- */ }
const CreatorScript = () => {
  const [status, setStatus] = useState<string>("");
  const [scriptText, setScriptText] = useState<string>("");
  const [scriptStatus, setScriptStatus] = useState<string>("");
  const params = useParams()
  const id = params["id"]

  const getScript = async () => {
    const res = await myFetch(`/hire-creator/${id}`, { method: 'GET' });

    if (res.success) {
      setScriptText(res?.data?.isScript)
      setStatus(res?.data?.status)
      setScriptStatus(res?.data?.scriptStatus)
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


  const approveDeclineScript = async (status: string) => {

    const res = await myFetch(`/hire-creator/addApprovedCancelIsScript/${id}`, {
      method: "PATCH",
      body: {
        status: status
      }
    });
    
    if (res.success) {
      getScript()
      document.getElementById("openAppReview")?.click()
    } else {
      toast.error(res.message || "Failed!");
    }
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto flex text-center justify-center pb-10 px-2">
      <div className="bg-white px-2 sm:px-4 md:px-8 py-3 md:py-4 w-full rounded-xl customShadow">

        <div>
          <p className='text-2xl font-semibold py-4 text-left'>Status: {status}</p>
          <Textarea readOnly value={scriptText} variant="blackBorder" placeholder="Nothing Admin write here" className="min-h-50" />
        </div>

        {/* Submit */}
        {(scriptStatus === "script_requiest") && <div className="flex justify-center gap-4 pt-4">
          <Button type="button" onClick={() => approveDeclineScript("cancel")} variant="customYellow" size="llg" className="w-32">
            Decline
          </Button>
          <Button type="button" onClick={() => approveDeclineScript("accept")} variant="customYellow" size="llg" className="w-32">
            Approved
          </Button>
        </div>}
      </div >
    </div >
  );
};

export default CreatorScript;

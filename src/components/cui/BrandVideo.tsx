/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react'
import { myFetch } from '@/utils/myFetch'
import { toast } from 'sonner'
import { useParams } from 'next/navigation'
import download from 'downloadjs'
import { Button } from '../ui/button'
import { CustomModal } from './CustomModal'
import AppReview from './AppReview'

const BrandVideo = () => {
  const [status, setStatus] = useState<string>("");
  const [awsVideoUrls, setAwsVideoUrls] = useState<any[]>([])
  const [revisionCount, setRevisionCount] = useState<number>(0);
  const [isForward, setIsForward] = useState<boolean>(false);
  const params = useParams()
  const id = params["id"]

  const getAwsVideosUrls = async () => {
    toast.loading("Fetching uploaded videos...", { id: "fetch" })
    const res = await myFetch(`/hire-creator/all-videos-by-hirecreator/${id}`, { method: 'GET' });

    if (res.success) {
      if (res?.data?.allVideos?.length <= 0) {
        toast.success("No videos found!", { id: "fetch" })
      } else {
        toast.success("Videos fetched successfully!", { id: "fetch" })
      }

      setAwsVideoUrls(res?.data?.allVideos || []);
      setRevisionCount(res?.data?.revisionCount || 0);
      setIsForward(res?.data?.isForward || false);
      setStatus(res?.data?.status || "");
    } else {
      toast.error(res.message || "Fetching failed!", { id: "fetch" })
    }
  }

  const handleDownload = async (videoLink: string, filename: string) => {
    try {
      toast.loading("Downloading video...", { id: "download" })

      const response = await fetch(videoLink)
      if (!response.ok) throw new Error("Network error")

      // const blob = await response.blob()
      // download(blob, filename, "video/mp4")
      const blob = await response.blob()
      download(blob, filename, "video/mp4")

      toast.success("Download started!", { id: "download" })
    } catch (error) {
      console.error("Download error:", error)
      toast.error("Download failed!", { id: "download" })
    }
  }

  useEffect(() => {
    getAwsVideosUrls()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRevisionOrDone = async (status: string) => {
    const res = await myFetch(`/hire-creator/revision/${id}?status=${status}`, {
      method: "PATCH",
    });
    
    if (res.success) {
      toast.success("Revision Requested Successfully!");
      setIsForward(false);
      setRevisionCount(revisionCount - 1)
      if (status === "delivered") {
        document.getElementById("openAppReview")?.click()
      }
    } else {
      toast.error(res.message || "Failed to take revision!");
    }
  }

  return (
    <div className='px-2 max-w-[1200px] mx-auto mb-2'>
      <div className='bg-white p-4 rounded-lg shadow-md min-h-120'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isForward && awsVideoUrls?.map((singleVideo: any) => (
            <div key={singleVideo?._id} className='relative border p-3 rounded-lg shadow-sm'>
              <div className='w-full h-[200px]'>
                <video
                  width="480"
                  height="320"
                  controls
                  className='h-full w-full object-cover rounded'
                >
                  <source src={singleVideo?.url} type="video/mp4" />
                </video>
              </div>

              <div className="mt-2 text-sm text-gray-800 break-all">
                <p>ID: {singleVideo?.key}</p>
              </div>

              <button
                onClick={() => handleDownload(singleVideo.url, `${singleVideo.key}.mp4`)}
                className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
              >
                Download Video
              </button>
            </div>
          ))}
        </div>
        {awsVideoUrls?.length > 0 && isForward && <div className="flex justify-center gap-4 py-6">
          {revisionCount > 0 && <Button onClick={() => handleRevisionOrDone("revision")} variant="customYellow" type="submit" size="llg" className="w-32">
            Revision
          </Button>}
          {status !== "delivered" && <Button type="button" onClick={() => handleRevisionOrDone("delivered")} variant="customYellow" size="llg" className="w-32">
            Done
          </Button>}
        </div>}
      </div>

      {/* App Review Modal - Button hidden */}
      <CustomModal trigger={<Button id="openAppReview" variant="customYellow" type="button" size="llg" className="w-32 mt-4 hidden">Give Review</Button>} title="">
        <AppReview />
      </CustomModal>
    </div>
  )
}

export default BrandVideo

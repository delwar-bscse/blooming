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
  const [awsVideoUrls, setAwsVideoUrls] = useState<any[]>([])
  const params = useParams()
  const id = params["id"]

  const getAwsVideosUrls = async () => {
    toast.loading("Fetching uploaded videos...", { id: "fetch" })
    const res = await myFetch(`/hire-creator/${id}`, { method: 'GET' });
    // console.log("Fetch Uploaded Videos Response:", res)

    if (res.success) {
      setAwsVideoUrls(res?.data?.uploadedFiles)
      if (res?.data?.uploadedFiles?.length === 0) {
        toast.success("No videos found!", { id: "fetch" })
      } else {
        toast.success("Videos fetched successfully!", { id: "fetch" })
      }
    } else {
      toast.error(res.message || "Fetching failed!", { id: "fetch" })
    }
  }

  const handleDownload = async (videoLink: string, filename: string) => {
    console.log("Downloading:", videoLink, filename)
    try {
      toast.loading("Downloading video...", { id: "download" })

      const response = await fetch(videoLink)
      if (!response.ok) throw new Error("Network error")

      // const blob = await response.blob()
      // download(blob, filename, "video/mp4")
      const blob = await response.blob()
      download(blob, filename, "video/mp4")

      toast.success("Download started!", { id: "download" })
      // console.log("Downloading:", filename)
    } catch (error) {
      console.error("Download error:", error)
      toast.error("Download failed!", { id: "download" })
    }
  }

  useEffect(() => {
    getAwsVideosUrls()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDone = async () => {
    console.log("Done Order");
    // toast.loading("Updating status...", { id: "done" });

    // const res = await myFetch(`/hire-creator/revision/${id}?status=delivered`, {
    //   method: "PATCH",
    // });
    // console.log(res);
    if (true) {
      document.getElementById("openAppReview")?.click()
    } else {
      // toast.error(res.message || "Failed!");
    }
  }

  return (
    <div className='px-2 max-w-[1200px] mx-auto mb-8'>
      <div className='bg-white p-4 rounded-lg shadow-md min-h-200'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16">
          {awsVideoUrls?.map((singleVideo: any) => (
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
        {true && <div className="flex justify-center gap-4">
          {true && <Button variant="customYellow" type="submit" size="llg" className="w-32">
            Revision
          </Button>}
          <Button type="button" onClick={() => handleDone()} variant="customYellow" size="llg" className="w-32">
            Done
          </Button>
        </div>}
      </div>

      

        {/* App Review Modal - Button hidden */}
        <CustomModal trigger={<Button id="openAppReview" variant="customYellow" type="button" size="llg" className="w-32 mt-4 hidden">Done 2</Button>} title="">
          <AppReview />
        </CustomModal>
    </div>
  )
}

export default BrandVideo

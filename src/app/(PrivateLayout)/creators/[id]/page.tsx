/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation';
import { IoArrowBackSharp } from "react-icons/io5";
import { toast } from 'sonner';
import { myFetch } from '@/utils/myFetch';

const CreatorDetails = () => {
  const [creator, setCreator] = React.useState<any>(null);
  const router = useRouter();
  const params = useParams();
  const creatorId = params["id"];



  const getAdminApprovedCreators = async () => {
    const res = await myFetch(`/assign-task-creator/single/video/${creatorId}`);

    if (res?.data) {
      setCreator(res?.data?.creatorId);
    } else {
      toast.error(res?.message || "Failed to get videos!", { id: "fetchAgreedCreators" });
    }
  }
  useEffect(() => {
    getAdminApprovedCreators();
  }, []);



  const handleBack = () => {
    router.back();
  }
  return (
    <div className='maxWidth min-h-screen'>
      <div onClick={handleBack} className='flex items-center gap-2 py-3'>
        <IoArrowBackSharp className='size-6 text-gray-600' />
        <p className='cursor-pointer text-gray-700 font-bold text-2xl'>Go Back</p>
      </div>
      <div className="p-6 my-8 w-full max-w-[1000px] mx-auto bg-white shadow-md">

        {/* UGC Example Videos */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">UGC Example Videos</h2>
          <div className="flex flex-wrap gap-8">
            {creator?.ugcExampleVideo?.map((video: Record<string, any>, index: number) => (
              // <VideoViewCard key={`ugc-${index}`} videoUrl={video?.url} />
              <div key={index} className="bg-gray-200 w-60 h-40 aspect-video flex items-center justify-center">
                <video width="480" height="320" controls className='h-full'>
                  <source src={video?.url ?? ""} type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction Example Videos */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Introduction Example Videos</h2>
          {creator?.introductionvideo && <div className="bg-gray-200 w-60 h-40 aspect-video flex items-center justify-center">
            <video width="480" height="320" controls className='h-full'>
              <source src={creator?.introductionvideo ?? ""} type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default CreatorDetails
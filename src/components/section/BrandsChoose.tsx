/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Title from '../shared/Title'
import { myFetch } from '@/utils/myFetch'
import VideoView from '../cui/ViewVideo';

export const selectOptions = ["Beauty And Skincare", , "Travel And Hotel", "Food And Beverage", "Teach And Digital Products", "Health And Fitness", "Fashion And Lifestyle"];

const BrandsChoose = async () => {


  const res = await myFetch(`/upload-video`, {
    method: "GET",
  });

  const videoDatas = res?.data
    ?.filter((section: Record<string, unknown>) => selectOptions.includes(section.category as string));

  // console.log("Video Data:", videoDatas);


  return (
    <div>

      <div className=''>
        {videoDatas?.map((item: Record<string, any>, index: number) => (
          <div key={index} className='max-w-[1000px] mx-auto xl:sticky xl:top-40 bg-white p-4 rounded-md xl:border-2 customShadow mt-10'>
            <div className=''>
              <Title title={item.category as string} />
            </div>
            <div className="scroll-container" style={{ overflowX: 'auto', scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}>
                <div className='flex justify-around h-[400px]'>
                  {item?.videos?.slice(0, 4)?.map((item: Record<string, unknown>, index: number) => (
                    <div key={index} className="">
                      <VideoView videoUrl={item.url as string} videoId={`video-${item.key as string}`} />
                    </div>
                  ))}
                </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandsChoose


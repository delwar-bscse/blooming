import React from 'react'
import CustomButton from '../ui/CustomButton'
import SingleReview from '../shared/SingleReview'
import { reviewDatas } from '@/constants/reviewDatas'
// import mobileFrame from "@/assets/common/frame.png"
// import Image from 'next/image'

const BloomSection = () => {
  return (
    <section>
      {/* <div>
        <div  className='relative w-[200px] h-[400px] mx-auto flex items-center justify-center overflow-hidden bg-white'>
          <Image
            src={mobileFrame}
            alt="mobileFrame"
            width={200}
            height={500}
            className='w-full h-full object-fit'
          />
        </div>
      </div> */}
      <div className='maxWidth '>
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 pb-4'>&quot;They Bloomed With Us. You Can Too!&quot;</h2>
          <p className='text-gray-600'>Join the growing list of brands thriving with custom UGC content.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16'>
          {reviewDatas?.slice(0,3)?.map((review) => (
            <SingleReview key={review?.id} review={review}/>
          ))}
        </div>
        <div className='max-w-[200px] mx-auto py-8'>
          <CustomButton text="View Portfolio" url="#" />
        </div>
      </div>
    </section>
  )
}

export default BloomSection
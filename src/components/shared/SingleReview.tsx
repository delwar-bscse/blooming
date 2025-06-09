import React from 'react'
import reviewImg from "@/assets/common/reviews/review01.png"
import Image from 'next/image'
import { reviewDataType } from '@/types/types'

const SingleReview = ({review}:{review:reviewDataType}) => {
  return (
    <>
      <div id='review' className='border-[2px] border-gray-400 rounded-lg shadow-lg relative flex flex-col items-center justify-center mt-[90px] bg-white'>
        <div id='reviewImage' className='absolute -top-[75px] mx-auto w-[150px] h-[150px] rounded-full overflow-hidden transition-transform duration-500 ease-in-out'>
          <Image 
          src={review?.image || reviewImg}
          alt="Review Image"
          className="w-full h-auto rounded-lg shadow-lg"
          width={200}
          height={200}
        />
        </div>
        <p className='rounded-lg bg-white text-gray-700 pt-[90px] pb-8 max-w-[300px] text-center'>{review?.txt}</p>
      </div>
    </>
  )
}

export default SingleReview
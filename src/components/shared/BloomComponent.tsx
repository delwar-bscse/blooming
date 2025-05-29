import { reviewDatas } from '@/constants/reviewDatas'
import React from 'react'
import SingleReview from './SingleReview'

const BloomComponent = ({ min, max }: { min?: number, max?: number }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16'>
      {reviewDatas?.slice(min, max)?.map((review) => (
        <SingleReview key={review?.id} review={review} />
      ))}
    </div>
  )
}

export default BloomComponent
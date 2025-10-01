"use client"
import React, { useEffect } from 'react'
import SingleReview from './SingleReview'
import { myFetch } from '@/utils/myFetch';
import { reviewDataType } from '@/types/types';

const BloomComponent = ({ min, max }: { min?: number, max?: number }) => {
  const [bloomDatas, setBloomDatas] = React.useState<reviewDataType[]>([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const res = await myFetch("/ugc-content", {
        method: "GET",
      });
      setBloomDatas(res?.data || []);
    };
    getBlogPosts();
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16'>
      {bloomDatas?.slice(min, max)?.map((review) => (
        <SingleReview key={review?._id} review={review} />
      ))}
    </div>
  )
}

export default BloomComponent
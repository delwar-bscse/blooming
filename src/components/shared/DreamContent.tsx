"use client"

import { dreamContentDatas } from '@/constants/dreamContentDatas'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '@/assets/common/new/1.json'

const DreamContent = () => {
  return (
    <div>
      <div className='max-w-[1000px] mx-auto px-4 md:px-12'>
        <div className='flex flex-col items-center gap-2 py-10'>
          <h2 className='inline-block p-2 sm:px-8 sm:py-3 rounded-md text-2xl md:text-3xl xl:text-4xl font-semibold text-gray-800 bg-[#F6F2EA]'>only 3 steps to get your dream content</h2>
          <p>Collaborating with us is quick and hassle-free with only 3 steps</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {dreamContentDatas?.map((item) => (
            <div key={item.id} className='space-y-4'>
              {/* <Image src={item.image} alt={item.title} width={300} height={300} /> */}
              <Lottie
                animationData={item?.image || animationData}
                className="w-full h-auto object-cover"
                loop
                autoplay
              />
              <div className='flex items-center gap-2 capitalize'>
                <span className='h-10 w-10 font-bold flex items-center justify-center text-gray-800 rounded-full bg-[#EBE2D1]'>{item.id}</span>
                <h3 className="text-[#6D715F] text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-[#6D715F] capitalize">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DreamContent
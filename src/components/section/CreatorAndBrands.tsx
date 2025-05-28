import Image from 'next/image'
import React from 'react'
import mapImage from "@/assets/common/map.png"
import { counterDatas } from '@/constants/counterDatas'
import { counterDataType } from '@/types/types'

const CreatorAndBrands = () => {
  return (
    <section>
      <div className='maxWidth'>
        <div>
          <h2 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-gray-700 pb-4 capitalize'>trusted by 600+ leading creators and brands</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px] mx-auto py-8'>
            {counterDatas?.map((counter:counterDataType) => (
              <div key={counter?.id} className={`flex flex-col items-center justify-center gap-1 rounded-md py-6`} style={{backgroundColor: counter?.bgColor}}>
                <p className='text-2xl font-bold text-gray-700'>{counter?.number}</p>
                <p className='text-gray-600'>{counter?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <Image src={mapImage} alt="creator and brands" />
        </div>
      </div>
    </section>
  )
}

export default CreatorAndBrands
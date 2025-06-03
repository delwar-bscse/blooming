import { whyChoseUsDatas } from '@/constants/whyChoseUsDatas'
import { whyChoseUsType } from '@/types/types'
import React from 'react'
import SingleChooseUs from './SingleChooseUs'
import Title from './Title'

const WhyChooseUs = () => {
  return (
    <div className='relative'>
      <div className='sticky top-40'>
        <Title title="Why Choose Us" />
      </div>
      <div className='relative maxWidth'>
        {whyChoseUsDatas?.map((item:whyChoseUsType)=>(
          <div key={item.id} className='sticky top-68 w-full bg-white border-2 h-[300px] px-4 lg:px-8 flex flex-col items-center justify-center rounded-md mt-20'>
            <SingleChooseUs item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
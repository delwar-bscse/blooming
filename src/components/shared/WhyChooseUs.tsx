import { whyChoseUsDatas } from '@/constants/whyChoseUsDatas'
import { whyChoseUsType } from '@/types/types'
import React from 'react'
import SingleChooseUs from './SingleChooseUs'
import Title from './Title'

const WhyChooseUs = () => {
  return (
    <div>
      <Title title="Why Choose Us" />
      <div className='maxWidth space-y-10'>
        {whyChoseUsDatas?.map((item:whyChoseUsType)=>(
          <div key={item.id} className='sticky top-40 w-full bg-white shadow-md'>
            <SingleChooseUs item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
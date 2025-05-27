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
          <SingleChooseUs key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
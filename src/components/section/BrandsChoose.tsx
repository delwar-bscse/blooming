import { brandChooseDatas } from '@/constants/brandChooseData'
import React from 'react'
import Title from '../shared/Title'
import Image from 'next/image'

const BrandsChoose = () => {
  return (
    <div>

      <div className='space-y-10'>
        {brandChooseDatas?.map((item, index) => (
          <div key={index} className='maxWidth xl:sticky xl:top-40 bg-white p-4 rounded-md xl:border-2 xl:shadow'>
            <div className=''>
              <Title title={item.title} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16 xl:gap-8 px-1 md:px-4 lg:px-8 xl:px-16'>
              {item?.content?.map((item, index) => (
                <div key={index}>
                  <Image src={item?.img} alt="content image" width={500} height={500} className='object-cover w-full' />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandsChoose
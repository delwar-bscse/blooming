import { brandChooseDatas } from '@/constants/brandChooseData'
import React from 'react'
import Title from '../shared/Title'
import Image from 'next/image'

const BrandsChoose = () => {
  return (
    <div>

      <div className='space-y-10'>
        {brandChooseDatas?.map((item, index) => (
          <div key={index} className='maxWidth xl:sticky xl:top-40 bg-white p-4 rounded-md xl:border-2 customShadow'>
            <div className=''>
              <Title title={item.title} />
            </div>
            <div className="scroll-container" style={{ overflowX: 'auto', scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}>
              <div className='flex justify-around h-[300px]'>
                {item?.content?.map((item, index) => (
                  <div key={index} className="">
                    <Image src={item?.img} alt="content image" width={500} height={500} className='object-cover w-full' />
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandsChoose
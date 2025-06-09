import { whyChoseUsType } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const SingleChooseUs = ({item}:{item:whyChoseUsType}) => {
  return (
    <div id="singleChooseUs" className={`flex flex-col-reverse  ${item.id % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center justify-between gap-10`}>
      <div className='sm:basis-[70%] space-y-4'>
        <h3 className='text-xl lg:text-2xl font-semibold'>{item.title}</h3>
        <p className='text-gray-500 lg:text-lg'>{item.description}</p>
      </div>
      <div className={`sm:basis-[30%] flex justify-center items-center`}>
        <Image id="singleChooseUsImg" src={item.image} alt={item.title} width={250} height={250} className='transition-transform duration-500 ease-in-out'/>
      </div>
    </div>
  )
}

export default SingleChooseUs
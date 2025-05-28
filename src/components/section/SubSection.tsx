import Image from 'next/image'
import React from 'react'
import subImage from "@/assets/common/subscription.png";
import {subDatas} from "@/constants/subDatas"

const SubSection = () => {
  return (
    <div className=''>
      <div className='max-w-[1000px] w-full  mx-auto flex border-2 border-gray-400 rounded-md gap-4 p-4 bg-white'>
        <div className='border-2 border-gray-400 w-80 h-[400px] overflow-hidden rounded-md'>
          <Image src={subImage} alt="Video Analysis" width={400} height={500} className=''/>
        </div>
        <div className='grow border-2 border-gray-400 rounded-md'>
          <div className='border-b-2 border-gray-400 p-4'>
            <h2 className='text-2xl font-bold'>{subDatas?.title}</h2>
            <p className='text-gray-600'>{subDatas?.des}</p>
          </div>
          <ul className='p-4 space-y-1'>
            {subDatas?.features?.map((feature,index) => (
              <li key={index} className='list-disc list-inside text-gray-700'>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubSection
import { packageData } from '@/constants/packageData'
import Image from 'next/image'
import React from 'react'
import { LiaCheckCircle } from "react-icons/lia";

const PackageSection = () => {

  const bgColor = ["#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4"];
  return (
    <div className='py-20'>
      <div className='maxWidth'>
        <div className='space-y-4 pb-10'>
          <h1 className='text-3xl dm:text-5xl lg:text-6xl font-bold text-center text-[#333333] capitalize'>our service</h1>
          <p className='text-center text-[#333333] text-lg font-semibold'>we offer 4 packages and a monthly services. you can purchase now or book a call.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {packageData?.map((item) => (
            <div key={item.id} style={{ backgroundColor: bgColor[item.id - 1] }} className='p-4 lg:p-6 rounded-4xl shadow-lg'>
              <div className='border-6 border-[#FFECAC] rounded-t-4xl overflow-hidden mb-4 h-[360px]'>
                <Image src={item?.image} alt={item?.title} className='object-cover h-full'/>
              </div>
              <h2 className='text-2xl font-bold text-center'>{item?.title}</h2>
              <h2 className='text-2xl font-bold text-center'>{`${item?.videos}x videos`}</h2>
              <p className='text-center text-sm text-gray-600'>{item?.des}</p>
              <ul className='mt-4 space-y-3'>
                {item?.features?.map((feature, index) => (
                  <li key={index} className='flex items-center gap-2 text-gray-700'>
                    <LiaCheckCircle className='text-xl'/>
                    <span className='text-sm text-gray-500'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackageSection
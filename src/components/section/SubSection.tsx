"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { IPackage } from './PackageSection';
import { myFetch } from '@/utils/myFetch';
import { formatImagePath } from '@/utils/formatImagePath';

const SubSection = () => {
  const [packageDatas, setPackageDatas] = React.useState<IPackage>({} as IPackage);

  useEffect(() => {
    const getPost = async () => {
      const res = await myFetch(`/package/subscription-packages`, {
        method: "GET",
      })
      if (res.success) {
        setPackageDatas(res.data[0])
        console.log(res.data)
      }

    }
    getPost();
  }, [])
  return (
    <div className='px-2 flex justify-center items-center'>
      <div id='subscription' className='flex flex-col md:flex-row border-2 border-gray-400 rounded-md gap-4 p-4 bg-white'>
        <div className='border-2 border-gray-400 rounded-md w-full sm:max-w-80 h-full overflow-hidden'>
          <Image id='subImage' src={formatImagePath(packageDatas?.image ?? "")} alt="Video Analysis" width={500} height={500} className='object-cover transition-transform duration-500 ease-in-out' />
        </div>
        <div className='relative grow border-2 border-gray-400 rounded-md'>
          <div className='border-b-2 border-gray-400 p-4'>
            <h2 className='text-2xl font-bold'>{packageDatas?.title}</h2>
            <p className='text-gray-600'>{packageDatas?.subtitle}</p>
          </div>
          <ul className='p-4 space-y-1'>
            {packageDatas?.benefits?.map((feature, index) => (
              <li key={index} className='list-disc list-inside text-gray-700'>{feature}</li>
            ))}
          </ul>
          <div className='absolute right-4 bottom-6'>
            <Button variant="customYellow" className='w-full mt-8 h-12'>Purchase Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubSection
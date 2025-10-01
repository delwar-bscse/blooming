"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { IPackage } from './PackageSection';
import { myFetch } from '@/utils/myFetch';
import { formatImagePath } from '@/utils/formatImagePath';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

const SubSection = () => {
  const [packageDatas, setPackageDatas] = useState<IPackage[]>([] as IPackage[]);
  const searchParams = useSearchParams();
  const isPackage = searchParams.get("isPackage");
  const myPackage = searchParams.get("myPackage");

  useEffect(() => {

    const getPost = async () => {
      const res = await myFetch(`/package/subscription-packages`, {
        method: "GET",
      })
      // console.log(res);
      if (res.success) {
        setPackageDatas(res?.data)
        // console.log(res.data)
      }
    }
    getPost();
  }, [isPackage, myPackage])


  const handlePurchasePackage = async (packageId: string) => {
    console.log("packageId", packageId);
    toast.success("Admin will contact you as soon as possible!")
  }

  return (
    <div className='px-2 flex justify-center items-center py-28 bg-[#D9E2CF]'>
      <div>
        {packageDatas?.map((item, index)=> (
          <div key={index}  id='subscription' className='flex flex-col md:flex-row border-2 border-gray-400 rounded-md gap-4 p-4 bg-white customShadow3'>
          <div className='border-2 border-gray-400 rounded-md w-full sm:max-w-80 h-full overflow-hidden'>
            <Image id='subImage' src={formatImagePath(item?.image ?? "")} alt="Video Analysis" width={500} height={500} className='object-cover transition-transform duration-500 ease-in-out' />
          </div>
          <div className='relative grow border-2 border-gray-400 rounded-md'>
            <div className='border-b-2 border-gray-400 p-4'>
              <h2 className='text-2xl font-bold'>{item?.title}</h2>
              <p className='text-gray-600'>{item?.subtitle}</p>
            </div>
            <ul className='p-4 space-y-1'>
              {item?.benefits?.map((feature, index) => (
                <li key={index} className='list-disc list-inside text-gray-700'>{feature}</li>
              ))}
            </ul>
            <div className='flex items-center justify-end mt-4 px-4'>
              <div className='pb-4'>
                <Button onClick={() => handlePurchasePackage(item?._id)} className='w-full h-12' variant="customYellow">Purchase Now</Button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default SubSection
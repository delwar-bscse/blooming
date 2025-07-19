"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { IPackage } from './PackageSection';
import { myFetch } from '@/utils/myFetch';
import { formatImagePath } from '@/utils/formatImagePath';
import { useBrand } from '@/context/BrandContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

const SubSection = () => {
  const router = useRouter();
  const { setBrandForm } = useBrand();
  const [packageDatas, setPackageDatas] = useState<IPackage>({} as IPackage);
  // const [packageDatas, setPackageDatas] = useState<IPackage[]>([]);
  const searchParams = useSearchParams();
  const isPackage = searchParams.get("isPackage");

  useEffect(() => {
    const url = isPackage === "true" ? `/subscription` : `/package/subscription-packages`;
    const getPost = async () => {
      const res = await myFetch(`${url}`, {
        method: "GET",
      })
      if (res.success) {
        if (isPackage === "true") {
          const tempArray = res?.data as Record<string, unknown>[] || [];
          const filteredData = tempArray.map((item: Record<string, unknown>) => item?.packageId);
          setPackageDatas(filteredData[0] as IPackage)
        } else {
          setPackageDatas(res.data[0])
          // console.log(res.data)
        }
        // console.log(res.data)
      }

    }
    getPost();
  }, [isPackage])

  const handleSelectPackage = (packageId: string) => {
    setBrandForm((prev) => ({
      ...prev,
      packageId
    }))
    router.back();
  }

  const handlePurchasePackage = async (packageId: string) => {
    const res = await myFetch("/hire-creator/createPackagePurchase", {
      method: "POST",
      body: {
        packageId
      }
    });
    // console.log(res);
    if (res.success) {
      window.location.href = res?.data?.url
    } else {
      toast.error(res.message || "Something went wrong!")
    }
  }


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
            {(isPackage === "true") && <Button onClick={() => handleSelectPackage(packageDatas?._id)} className='w-full mt-4 h-12' variant="customYellow">Select</Button>}
            {(isPackage === "false") && <Button onClick={() => handleSelectPackage(packageDatas?._id)} className='w-full mt-4 h-12' variant="customYellow">Select</Button>}
            {(isPackage === null) && <Button onClick={() => handlePurchasePackage(packageDatas?._id)} className='w-full mt-4 h-12' variant="customYellow">Purchase Now</Button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubSection
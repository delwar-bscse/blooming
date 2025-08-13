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
import { Input } from '../ui/input';

const SubSection = () => {
  const router = useRouter();
  const [subscriptionId, setSubscriptionId] = useState<string>("");
  const [takeVideoCount, setTakeVideoCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);
  const { setBrandForm } = useBrand();
  const [packageDatas, setPackageDatas] = useState<IPackage>({} as IPackage);
  // const [packageDatas, setPackageDatas] = useState<IPackage[]>([]);
  const searchParams = useSearchParams();
  const isPackage = searchParams.get("isPackage");
  const myPackage = searchParams.get("myPackage");

  useEffect(() => {
    let url: string = "";
    if (myPackage === "true") {
      url = `/subscription?all=subscription`;
    } else if (isPackage === "true") {
      url = `/subscription?running=subscription`;
    } else {
      url = `/package/subscription-packages`;
    }

    const getPost = async () => {
      const res = await myFetch(`${url}`, {
        method: "GET",
      })
      // console.log(res);
      if (res.success) {
        if (myPackage === "true") {
          // const tempArray = res?.data as Record<string, unknown>[] || [];
          // const filteredData = tempArray.map((item: Record<string, unknown>) => item?.packageId);
          setPackageDatas(res?.data[0]?.packageId)
          setSubscriptionId(res?.data[0]?._id)
          setLimit(res?.data[0]?.videoCount - res?.data[0]?.takeVideoCount)
        } else if (isPackage === "true") {
          // const tempArray = res?.data as Record<string, unknown>[] || [];
          // const filteredData = tempArray.map((item: Record<string, unknown>) => item?.packageId);
          setPackageDatas(res?.data?.packageId)
          setSubscriptionId(res?.data?._id)
          setLimit(res?.data?.videoCount - res?.data?.takeVideoCount)
        } else {
          setPackageDatas(res?.data[0] as IPackage)
          // console.log(res.data)
        }
        // console.log(res.data)
      }

    }
    getPost();
  }, [isPackage, myPackage])

  const handleSelectPackage = (packageId: string) => {
    if (myPackage !== "true" && isPackage !== null && takeVideoCount <= 0) {
      return toast.error("Please enter take video count")
    }

    if (takeVideoCount > limit) {
      return toast.error("You have not enough limit")
    }

    setBrandForm((prev) => ({
      ...prev,
      packageId,
      ...(takeVideoCount > 0 ? { takeVideoCount } : {})
    }))
    router.back();
  }

  const handlePurchasePackage = async (packageId: string) => {
    const res = await myFetch("/hire-creator/createPackagePurchase", {
      method: "POST",
      cache: "no-cache",
      body: {
        packageId
      }
    });
    // console.log(res);
    if (res.success && res?.data?.url) {
      window.location.href = res?.data?.url
    } else {
      toast.error(res.message || "Something went wrong!")
    }
  }

  const handleRenewPackage = async (packageId: string) => {
    const res = await myFetch(`/payment/reniew-paypal-payment/${packageId}`, {
      method: "POST",
      cache: "no-cache",
    });
    // console.log(res);
    if (res.success && res?.data?.url) {
      window.location.href = res?.data?.url
    } else {
      toast.error(res.message || "Something went wrong!")
    }
  }

  if (packageDatas?.title === undefined || packageDatas?.title === null) return (
    <div className='py-32'>
      <div className='maxWidth'>
        <h1 className='text-xl dm:text-5xl font-bold text-center text-[#333333] capitalize py-4'>No Subscription Found</h1>
      </div>
    </div>
  )

  return (
    <div className='px-2 flex justify-center items-center py-28 bg-[#D9E2CF]'>
      {packageDatas?.title && <div id='subscription' className='flex flex-col md:flex-row border-2 border-gray-400 rounded-md gap-4 p-4 bg-white customShadow3'>
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
          <div className='flex items-center justify-between mt-4 px-4'>
            <div className='flex-1'>
              {isPackage !== null && <div className='flex items-center gap-2'>
                <p className='text-gray-600 flex-1 font-semibold'>Limit: {limit}</p>
              </div>}
            </div>
            <div className='flex-1'>
              {(myPackage !== "true" && isPackage !== null) && <div className='flex items-center gap-2'>
                {/* <p className='text-gray-600 flex-1'>Limit: {limit}</p> */}
                <Input type="number" min={1} placeholder='Enter Video Amount' onChange={(e) => setTakeVideoCount(parseInt(e.target.value))} /></div>}
            </div>
            <div className=''>
              {(myPackage === "true" && isPackage === "true") && <Button onClick={() => handleRenewPackage(subscriptionId)} className='w-full h-12' variant="customYellow">Renew Now</Button>}
              {(myPackage !== "true" && isPackage === "true") && <Button onClick={() => handleSelectPackage(packageDatas?._id)} className='w-full h-12' variant="customYellow">Select</Button>}
              {(myPackage !== "true" && isPackage === "false") && <Button onClick={() => handleSelectPackage(packageDatas?._id)} className='w-full h-12' variant="customYellow">Select</Button>}
              {(isPackage === null) && <Button onClick={() => handlePurchasePackage(packageDatas?._id)} className='w-full h-12' variant="customYellow">Purchase Now</Button>}
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default SubSection
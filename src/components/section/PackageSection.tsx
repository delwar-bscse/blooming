"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { myFetch } from '@/utils/myFetch';
import { formatImagePath } from '@/utils/formatImagePath';
import { useRouter, useSearchParams } from 'next/navigation';
import { useBrand } from '@/context/BrandContext';
import { toast } from 'sonner';
import { FaCircle } from "react-icons/fa";
import { Courgette } from 'next/font/google';

const courgette = Courgette({
  subsets: ['latin'],
  weight: '400', // Courgette has only one weight
  display: 'swap',
});

export interface IPackage {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  benefits: string[];
  type: "one_time" | "subscription"; // assuming "type" is an enum
  videoCount: number;
  isDeleted: boolean;
  createdAt: string; // or `Date` if parsed
  updatedAt: string; // or `Date` if parsed
}

// const bgColor = ["#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4", "#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4"];

const PackageSection = () => {
  const router = useRouter();
  const { setBrandForm } = useBrand();
  const [packageDatas, setPackageDatas] = useState<IPackage[]>([]);
  const searchParams = useSearchParams();
  const isPackage = searchParams.get("isPackage");
  const myPackage = searchParams.get("myPackage");

  useEffect(() => {
    const url = isPackage === "true" ? `/subscription?running=package` : `/package/packages`;
    const getPost = async () => {
      const res = await myFetch(`${url}`, {
        method: "GET",
      })
      if (res.success) {
        if (isPackage === "true") {
          const tempArray = res?.data as Record<string, unknown>[] || [];
          const filteredData = tempArray.map((item: Record<string, unknown>) => item?.packageId);
          setPackageDatas(filteredData as IPackage[])
        } else {
          setPackageDatas(res.data as IPackage[])
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
    <div className='py-20 bg-[#FFECAC]/50'>
      <div className='maxWidth'>
        {!isPackage ? <div className='space-y-4 pb-20'>
          <h1 className={`${courgette.className} text-3xl dm:text-5xl lg:text-8xl font-semibold text-center text-[#333333] capitalize text-shadow`} style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)' }}>our service</h1>
          <p className='text-center text-[#333333] text-lg font-semibold'>we offer packages and a monthly services. you can purchase now or book a call.</p>
        </div> : <div>
          <h1 className='text-3xl dm:text-5xl font-bold text-center text-[#333333] capitalize py-8 courgette-regular'>My Package & Subscription</h1>
        </div>}

        {packageDatas?.length === 0 ? <div className='py-32'>
          <div className='maxWidth'>
            <h1 className='text-xl dm:text-5xl font-bold text-center text-[#333333] capitalize py-4'>No Package Found</h1>
          </div>
        </div> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {packageDatas?.map((item) => (
            <div id='package' key={item._id} className='p-4 lg:p-6 rounded-2xl customShadow4 flex flex-col bg-white'>
              <div className='rounded-t-2xl overflow-hidden mb-4 h-[260px]'>
                <Image id='packageImg' src={formatImagePath(item?.image)} width={500} height={500} alt={item?.title} className='object-cover h-full transition-transform duration-500 ease-in-out' />
              </div>
              <div className='flex-1 flex flex-col'>
                <div className='space-y-3'>
                  <div>
                    <h2 className='text-xl font-semibold text-center'>{item?.title}</h2>
                    <h2 className='text-xl font-semibold text-center'>{`${item?.videoCount}x videos`}</h2>
                  </div>
                  <p className='text-center text-sm text-gray-400'>{item?.subtitle}</p>
                </div>
                <ul className='mt-4 space-y-1'>
                  {item?.benefits?.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2 text-gray-700'>
                      <FaCircle className='text-gray-500 text-[7px]' />
                      <span className='text-sm text-gray-500'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className='flex-1 flex flex-col justify-end'>
                  {(myPackage !== "true" && isPackage === "true") && <Button onClick={() => handleSelectPackage(item?._id)} className='w-full mt-4' variant="customYellow">Select</Button>}
                  {(myPackage !== "true" && isPackage === "false") && <Button onClick={() => handleSelectPackage(item?._id)} className='w-full mt-4' variant="customYellow">Select</Button>}
                  {(isPackage === null) && <Button onClick={() => handlePurchasePackage(item?._id)} className='w-full mt-4' variant="customYellow">Purchase Now</Button>}
                </div>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </div>
  )
}

export default PackageSection
"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { LiaCheckCircle } from "react-icons/lia";
import { Button } from "@/components/ui/button"
import { myFetch } from '@/utils/myFetch';
import { formatImagePath } from '@/utils/formatImagePath';

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

const bgColor = ["#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4", "#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4"];
const PackageSection = () => {
  const [packageDatas, setPackageDatas] = React.useState<IPackage[]>([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await myFetch(`/package/packages`, {
        method: "GET",
      })
      if (res.success) {
        setPackageDatas(res.data)
        // console.log(res.data)
      }

    }
    getPost();
  }, [])



  return (
    <div className='pt-2 pb-32'>
      <div className='maxWidth'>
        <div className='space-y-4 pb-10'>
          <h1 className='text-3xl dm:text-5xl lg:text-6xl font-bold text-center text-[#333333] capitalize'>our service</h1>
          <p className='text-center text-[#333333] text-lg font-semibold'>we offer 4 packages and a monthly services. you can purchase now or book a call.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {packageDatas?.map((item, index: number) => (
            <div id='package' key={item._id} style={{ backgroundColor: bgColor[index] }} className='p-4 lg:p-6 rounded-4xl shadow-lg flex flex-col'>
              <div className='border-6 border-[#FFECAC] rounded-t-4xl overflow-hidden mb-4 h-[300px]'>
                <Image id='packageImg' src={formatImagePath(item?.image)} width={500} height={500} alt={item?.title} className='object-cover h-full transition-transform duration-500 ease-in-out' />
              </div>
              <div className='flex-1 flex flex-col'>
                <h2 className='text-2xl font-bold text-center'>{item?.title}</h2>
                <h2 className='text-2xl font-bold text-center'>{`${item?.videoCount}x videos`}</h2>
                <p className='text-center text-sm text-gray-600'>{item?.subtitle}</p>
                <ul className='mt-4 space-y-3'>
                  {item?.benefits?.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2 text-gray-700'>
                      <LiaCheckCircle className='text-xl' />
                      <span className='text-sm text-gray-500'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className='flex-1 flex flex-col justify-end'>
                  <Button variant="customYellow" className='w-full mt-8 h-12'>Purchase Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackageSection
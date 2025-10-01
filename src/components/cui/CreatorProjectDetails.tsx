/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { myFetch } from '@/utils/myFetch';
import { useParams } from 'next/navigation';
import { TOrdersData } from '@/types/orderDataTypes';




const BrandProjectDetails = () => {
  const [orderDetails, setOrderDetails] = useState<TOrdersData>({} as TOrdersData);
  const params = useParams();
  const id = params["id"];


  const getOrderDetails = async () => {

    toast.loading("Order Details Fetching...", { id: "fetch" });
    const res = await myFetch(`/hire-creator/${id}`, {
      method: "GET",
    });
    console.log(res?.data);

    if (res?.data) {
      toast.success("Order Details fetched successfully!", { id: "fetch" });
      setOrderDetails(res?.data);
    } else {
      toast.error(res?.message || "Order Details Fetching failed!", { id: "fetch" });
    }
  }

  useEffect(() => {
    getOrderDetails();
    // console.log(orderDetails)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className='max-w-[900px] mx-auto space-y-5 pb-16'>
      <div className='bg-white rounded-2xl p-8'>
        {orderDetails?.brandInfo && <SubComponent title="Brand Info" list={orderDetails.brandInfo} />}
      </div>
      <div className='bg-white rounded-2xl p-8'>
        <SubComponent title="Brand Social" list={orderDetails.brandSocial} />
      </div>
      <div className='bg-white rounded-2xl p-8'>
        <SubComponent title="Video Info" list={orderDetails.videoInfo} />
      </div>
      <div className='bg-white rounded-2xl p-8'>
        <SubComponent title="Characteristics Of The Creator" list={orderDetails.characteristicInfo} />
      </div>
      <div className='bg-white rounded-2xl p-8'>
        <SubComponent title="Add Ons" list={orderDetails.addOns} />
      </div>
    </div>
  )
}

const SubComponent = ({ title, list }: { title: string; list: any }) => {
  if (!list || typeof list !== "object") {
    return null;
  }

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <ul className='space-y-1.5'>
        {Object.entries(list)?.map(([key, value], index) => {
          if (key === "_id") return null;
          return <li key={index} className="list-disc list-inside pl-4 text-gray-600">
            <span className="font-semibold text-gray-700 text-lg capitalize">{key ?? ""}:</span><br />
            <span className="pl-6">{String(value)}</span>
          </li>
        })}
      </ul>
    </div>
  );
};


export default BrandProjectDetails
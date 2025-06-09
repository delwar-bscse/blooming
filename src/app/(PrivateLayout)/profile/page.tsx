"use client"

import { OrderHistory } from '@/components/creator/OrderHistory';
import ProfileInfo from '@/components/creator/ProfileInfo';
import SettingInfo from '@/components/creator/SettingInfo';
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import profileInputIcon from "@/assets/common/ProfileInputIcon.png";

const Profile = () => {
  const [step, setStep] = useState(1);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);


  const handleImgUrl = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImgUrl(null);
    }
  };

  const handleStyle = (number?: number) => {
    return `font-bold text-gray-600 border-b-4 pb-2 border-b-gray-300 hover:border-b-gray-500 pr-6 md:pr-20 text-xl cursor-pointer ${step === number ? 'border-b-gray-600 text-gray-800' : ''}`
  }


  return (
    <div className='pb-20'>
      <div className='bg-[#FFF2C7] h-48 relative w-full' />
      <div className='maxWidth'>
        <div>
          {isMounted && (
            <div className="relative -top-20 left-0 inline-block">
              <div className="w-40 h-40 mx-auto rounded-lg overflow-hidden border-3 border-gray-300 bg-gray-300">
                {imgUrl ? (
                  <Image
                    src={imgUrl}
                    alt="content image"
                    className="object-cover w-full h-full"
                    width={128}
                    height={128}
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <Image
                onClick={() => document.getElementById("profileImgCtrl")?.click()}
                src={profileInputIcon}
                alt="Upload Icon"
                className="absolute -bottom-2 -right-2 w-8 h-8 z-10 cursor-pointer hover:scale-110 transition-all duration-300"
                width={32}
                height={32}
              />
              <Input
                id="profileImgCtrl"
                type="file"
                accept="image/*"
                variant="inputHidden"
                onChange={e => {
                  handleImgUrl(e.target.files?.[0] ?? null);
                }}
              />
            </div>
          )}
        </div>
        <div>
          <div>
            <ul className='flex relative z-10'>
              <li onClick={() => setStep(1)} className={`${handleStyle(1)}`}>Profile</li>
              <li onClick={() => setStep(2)} className={`${handleStyle(2)}`}>Order</li>
              <li onClick={() => setStep(3)} className={`${handleStyle(3)}`}>Setting</li>
            </ul>
            <div className='border-b-4 border-b-gray-300 relative -top-1 w-full' />
          </div>
          {step === 1 && <ProfileInfo />}
          {step === 2 && <OrderHistory />}
          {step === 3 && <SettingInfo />}
        </div>
      </div>
    </div>
  )
}

export default Profile
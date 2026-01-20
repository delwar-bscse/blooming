/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { OrderHistory } from '@/components/creator/OrderHistory';
import ProfileInfo from '@/components/creator/ProfileInfo';
import SettingInfo from '@/components/creator/SettingInfo';
import React, { useEffect, useState, Suspense } from 'react'
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import profileInputIcon from "@/assets/common/ProfileInputIcon.png";
import { myFetch } from '@/utils/myFetch';
import CustomStep from '@/components/cui/CustomStep';
import { StepDataType } from '@/types/types';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingSpinner from '@/components/cui/LoadingSpinner';
import { formatImagePath } from '../../../utils/formatImagePath';


const stepDatas: StepDataType[] = [
  {
    id: 1,
    title: "Profile",
    label: "profile",
  },
  {
    id: 2,
    title: "Order",
    label: "order",
  },
  {
    id: 3,
    title: "Setting",
    label: "setting",
  },
];
const stepDatas2: StepDataType[] = [
  {
    id: 1,
    title: "Profile",
    label: "profile",
  },
  {
    id: 2,
    title: "Setting",
    label: "setting",
  },
];

// Move the main component logic to a separate component
const ProfileContent = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  async function getUserData() {

    const response = await myFetch("/users/my-profile", {
      method: "GET",
      tags: ["user"],
      cache: "no-cache",
    });

    console.log("My profile : ", response?.data)

    if (response?.data?.profile) {
      setUser(response?.data);
      setImgUrl(formatImagePath(response?.data?.profile ?? ""));
    }
  }

  useEffect(() => {
    getUserData();
  }, [pathname, step]);

  const handleImgUrl = async (file: File) => {
    if (file && file !== null && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append("profile", file);
      const response = await myFetch("/users/update-my-profile", {
        method: "PATCH",
        body: formData,
      });
      if (response?.success) {
        // await getUserData();
        window.location.reload();
      }
    }
  };

  return (
    <div className='pb-10'>
      <div className='bg-[#FFF2C7] h-48 relative w-full' />
      <div className='maxWidth'>
        <div className="relative -top-24 left-0 inline-block">
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
              handleImgUrl(e.target.files?.[0] as File);
            }}
          />
        </div>

        <div>
          <CustomStep stepDatas={user?.role === "user" ? stepDatas : stepDatas2} />
          <Suspense fallback={<LoadingSpinner />}>
            {step === "profile" && <ProfileInfo />}
            {(user?.role === "user" && step === "order") && <OrderHistory />}
            {step === "setting" && <SettingInfo />}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

// Main exported component with Suspense boundary
const Profile = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProfileContent />
    </Suspense>
  )
}

export default Profile
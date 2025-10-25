/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react'
import { VscLock } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import ProfileInfoChange from './ProfileInfoChange';
import ChangePassword from './ChangePassword';
import { useRouter } from 'next/navigation';
import { deleteCookie } from "cookies-next/client";
import { toast } from 'sonner';
import { MdOutlineDashboard } from "react-icons/md";
import { myFetch } from '@/utils/myFetch';

const profileSidebar = [
  {
    id: 1,
    title: "Edit Profile",
    icon: <FaRegUser className='text-gray-700 text-xl' />,
  },
  {
    id: 2,
    title: "Change Password",
    icon: <VscLock className='text-gray-700 text-xl' />,
  },
  {
    id: 3,
    title: "Logout",
    icon: <RiLogoutBoxRLine className='text-gray-700 text-xl' />,
  }

];

const SettingInfo = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [user, setUser] = useState<any>(null);

  const role = ["creator", "admin"];


  const handleOnClick = (id: number) => {
    if (id === 3) {
      deleteCookie("bloom_brand_accessToken");
      toast.success("Logout Success");
      router.push("/");
    } else {
      setStep(id);
    }

  }
  useEffect(() => {
    const getUser = async () => {
      const response = await myFetch("/users/my-profile", {
        method: "GET",
        tags: ["user"]
      });
      
      setUser(response?.data);
    };
    getUser();
  }, []);

  return (
    <div className='flex flex-col md:flex-row gap-8 py-8'>
      <div>
        <ul className='flex flex-col gap-4'>
          {profileSidebar?.map((item) => (
            <li onClick={() => handleOnClick(item.id)} key={item.id} className={`w-[220px] flex items-center gap-2 py-2 cursor-pointer  hover:bg-[#FFECAC] rounded-sm px-3 shadow ${item.id === step ? "bg-[#FFECAC]" : "bg-white"}`}>
              <span>
                {item.icon}
              </span>
              <span className='text-lg font-semibold text-gray-600'>{item.title}</span>
            </li>
          ))}
          {role?.includes(user?.role) && (
            <li>
              <a href="https://www.dashboard.thesocialchance.com" target="_blank" className={`w-[220px] flex items-center gap-2 py-2 cursor-pointer  hover:bg-[#FFECAC] rounded-sm px-3 shadow `}>
                <span>
                  <MdOutlineDashboard className='text-gray-700 text-xl' />
                </span>
                <span className='text-lg font-semibold text-gray-600'>Dashboard</span>
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className='w-full'>
        {step === 1 && <ProfileInfoChange />}
        {step === 2 && <ChangePassword />}
      </div>

    </div>
  )
}

export default SettingInfo
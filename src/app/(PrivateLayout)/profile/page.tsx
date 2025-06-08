"use client"

import {OrderHistory} from '@/components/creator/OrderHistory';
import ProfileInfo from '@/components/creator/ProfileInfo';
import SettingInfo from '@/components/creator/SettingInfo';
import React, { useState } from 'react'

const Profile = () => {
  const [step, setStep] = useState(1);

  const handleStyle = (number?: number) => {
    return `font-bold text-gray-600 border-b-4 pb-2 border-b-gray-300 hover:border-b-gray-500 pr-6 md:pr-20 text-xl cursor-pointer ${step === number ? 'border-b-gray-600 text-gray-800' : ''}`
  }

  return (
    <div className='maxWidth py-20'>
      <div></div>
      <div>
        <div>
          <ul className='flex relative z-10'>
            <li onClick={() => setStep(1)} className={`${handleStyle(1)}`}>Profile</li>
            <li onClick={() => setStep(2)} className={`${handleStyle(2)}`}>Order</li>
            <li onClick={() => setStep(3)} className={`${handleStyle(3)}`}>Setting</li>
          </ul>
          <div className='border-b-4 border-b-gray-300 relative -top-1 w-full'/>
        </div>
        {step === 1 && <ProfileInfo />}
        {step === 2 && <OrderHistory />}
        {step === 3 && <SettingInfo />}
      </div>
    </div>
  )
}

export default Profile
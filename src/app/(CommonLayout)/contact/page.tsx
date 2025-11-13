
import ContactUs from '@/components/form/ContactUs'
import Image from 'next/image'
import React from 'react'
// import haveQuestion from "@/assets/common/haveQuestions.png";
import type { Metadata } from 'next'
import { myFetch } from '@/utils/myFetch';
import contactusImg from "@/assets/common/contactus.png"


export const metadata: Metadata = {
  title: 'Contact Us - The Social Chance',
  description: "CONTACT US VIA THE FORM BELOW & WE'LL GET BACK TO YOUR AS SOON AS WE CAN.",
}

const Contact = async () => {
  await myFetch(`/upload-video?category=Contact Us`, {
    method: "GET",
  });

  return (
    <div>
      <div>
        <div className=''>
          <Image src={contactusImg} alt="contact image" width={1900} height={500} className='w-full h-auto object-cover' />
        </div>
        <div className='flex items-center justify-center pt-10' style={{ minHeight: "calc(100vh - 680px)" }}>
          <p className={`font-semibold text-lg md:text-3xl text-gray-700 text-center leading-12`}>CONTACT US VIA THE FORM BELOW & <br />WE&apos;LL GET BACK TO YOUR AS SOON AS WE CAN.</p>
        </div>
      </div>
      <div className='pt-10'>
        <ContactUs />
      </div>
    </div>
  )
}

export default Contact
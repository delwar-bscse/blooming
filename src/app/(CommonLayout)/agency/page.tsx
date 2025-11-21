import BloomSection from '@/components/section/BloomSection'
import CustomButton from '@/components/ui/CustomButton'
import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import agencyImg1 from "@/assets/common/agency1.png"
// import agencyImg2 from "@/assets/common/agency2.jpg"
import agencyImg2 from "@/assets/common/agency002.jpg"
import agencyImg3 from "@/assets/common/agency003.jpg"
import { myFetch } from '@/utils/myFetch'
import VideoViewWithoutFrame from '@/components/cui/VideoViewWithoutFrame'

export const metadata: Metadata = {
  title: 'Agency - The Social Chance',
  description: "Your Agency. Our Creators. Seamless UGC Delivery. From First-Time Projects to Full-Funnel Campaigns&quot;' des='See the quality and versatility our creative team brings to the table We’re kicking off the foundation of our The Social Chance brands marketing funnel laying the groundwork for a high-impact campaign, executed in three streamlined steps for maximum efficiency and results. Subtle & StrategicWe fill the gaps your agency doesn’t have. When your clients have hyper-specific creator needs, we step in quietly but powerfully sourcing the perfect match from our vetted network and handling the details from start to finish."
}

const Agency = async () => {
  const res = await myFetch(`/upload-video?category=Warm And collaboration`, {
    method: "GET",
  })

  return (
    <div>
      {/* Section 01  AgencyHero*/}
      <div className='flex items-center' style={{ minHeight: "calc(100vh - 60px)" }}>
        <div className='w-full max-w-[1400px] px-4 mx-auto flex items-center justify-center'>
          <div className=' flex flex-col-reverse sm:flex-row sm:justify-between py-20'>
            <div className='sm:basis-[50%] space-y-3'>
              <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-font01 lg:leading-12'>Your Agency. Our Creators. Seamless UGC Delivery.</h2>
              <p className=' md:text-xl text-font02'>Let us handle the content so you can focus on growing your clients.</p>
              <div className='max-w-[200px] pt-8'>
                <CustomButton text="Contact Us" url='/contact' />
              </div>
            </div>
            <div className='sm:basis-[50%] h-full flex items-center justify-end'>
              <div className='flex justify-center w-full gap-8'>
                <div className=''>
                  <Image src={agencyImg3} alt="content image" className='relative -bottom-10 w-60 h-80 object-cover' />
                </div>
                <div className=''>
                  <Image src={agencyImg1} alt="content image" className='relative bottom-20 w-72 h-100 object-cover' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 02 Video */}
      <div>
        <BloomSection title='&quot;From First-Time Projects to Full-Funnel Campaigns&quot;' des='See the quality and versatility our creative team brings to the table' />
      </div>

      {/* Section 03 */}
      <div className='maxWidth flex flex-col-reverse lg:flex-row justify-between items-center py-20 gap-4'>
        <div className='w-full md:basis-[50%] space-y-3'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800'>Warm & Collaborative</h2>
          <h3 className='text-lg md:text-xl xl:text-2xl font-bold text-gray-800'>Unique client needs? We’re built for that. </h3>
          <p className='text-gray-600'>Whether it’s a hyper-targeted audience or a mainstream campaign, our team handles the heavy lifting. We’ll find the right creators, manage contracts, and deliver content that fits  seamlessly and reliably.</p>
          <div className='max-w-[200px] pt-8'>
            <CustomButton text="Contact Us" url='/contact' />
          </div>
        </div>
        <div className='w-full md:basis-[50%] flex flex-col sm:flex-row items-center lg:justify-end gap-8'>
          <Image src={agencyImg2} alt="content image" className='w-full max-w-[182px] h-[340px] md:relative md:top-10 object-cover' />
          <VideoViewWithoutFrame videoUrl={res?.data?.videos[0]?.url as string ?? ""} videoId='video100' />
        </div>
      </div>

      {/* Section 04 */}
      <div className='maxWidth flex flex-col-reverse sm:flex-row justify-between items-center py-20 gap-4'>
        <div className='basis-[50%] space-y-3'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800'>Subtle & Strategic</h2>
          <h3 className='text-lg md:text-xl xl:text-2xl font-bold text-gray-800'>We Fill The Gaps Your Agency Needs</h3>
          <p className='text-gray-600'>When your clients have hyper-specific creator needs, we step in quietly but powerfully sourcing the perfect match from our vetted network and handling the details from start to finish.</p>
          <div className='max-w-[200px] pt-8'>
            <CustomButton text="Contact Us" url='/contact' />
          </div>
        </div>
        <div className='w-full md:basis-[50%] flex flex-col sm:flex-row items-center lg:justify-end gap-8'>
          <Image src={agencyImg3} alt="content image" className='w-full max-w-[182px] h-[340px] md:relative md:top-10 object-cover' />
          <VideoViewWithoutFrame  videoUrl={res?.data?.videos[1]?.url as string ?? ""} videoId='video101' />
        </div>
      </div>
    </div>
  )
}

export default Agency
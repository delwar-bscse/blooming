import BloomSection from '@/components/section/BloomSection'
import CustomButton from '@/components/ui/CustomButton'
import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import agencyImg1 from "@/assets/common/agency1.png"
import agencyImg2 from "@/assets/common/agency2.jpg"

export const metadata: Metadata = {
  title: 'Agency - The Social Chance',
}

const Agency = () => {
  return (
    <div>
      {/* Section 01 */}
      <div className='flex items-center' style={{ height: "calc(100vh - 60px)" }}>
        <div className='w-full max-w-[1400px] mx-auto flex items-center justify-center'>
          <div className=' flex flex-col-reverse sm:flex-row sm:justify-between py-20'>
            <div className='basis-[50%] space-y-3'>
              <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-font01 lg:leading-12'>Your Agency. Our Creators. Seamless UGC Delivery.</h2>
              <p className=' md:text-xl text-font02'>&quot;We’re kicking off the foundation of our The Social Chance brands marketing funnel — laying the groundwork for a high-impact campaign, executed in three streamlined steps for maximum efficiency and results.&quot;</p>
              <div className='max-w-[200px] pt-8'>
                <CustomButton text="Contact Us" url='/contact' />
              </div>
            </div>
            <div className='h-full flex items-center'>
              <div className='flex items-center justify-center w-130 h-130 relative bg-no-repeat bg-cover' style={{ backgroundImage: `url(${agencyImg2.src})` }}>
                <Image src={agencyImg1} alt="content image" className='w-100 h-100 absolute right-40 object-cover' />
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Section 01 */}
      <div>
        <BloomSection title='&quot;From First-Time Projects to Full-Funnel Campaigns&quot;' des='See the quality and versatility our creative team brings to the table' />
      </div>
      {/* Section 01 */}
      <div className='maxWidth flex flex-col-reverse sm:flex-row justify-between items-center py-20'>
        <div className='basis-[60%] space-y-3'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800'>Warm & CollaborativeUnique client needs? We’re built for that. </h2>
          <p className='text-gray-600'>Whether it’s a hyper-targeted audience or a mainstream campaign, our team handles the heavy lifting. We’ll find the right creators, manage contracts, and deliver content that fits  seamlessly and reliably.</p>
          <div className='max-w-[200px] pt-8'>
            <CustomButton text="Contact Us" url='/contact' />
          </div>
        </div>
        <div className='relative'>
          <Image src={agencyImg1} alt="content image" className='w-100 h-100 absolute right-40 object-cover' />
          <Image src={agencyImg1} alt="content image" className='w-100 h-100 absolute right-40 object-cover' />
        </div>
      </div>
      {/* Section 01 */}
      <div className='maxWidth flex flex-col-reverse sm:flex-row justify-between items-center py-20'>
        <div className='basis-[60%] space-y-3'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800'>Subtle & StrategicWe fill the gaps your agency doesn’t have</h2>
          <p className='text-gray-600'>When your clients have hyper-specific creator needs, we step in quietly but powerfully — sourcing the perfect match from our vetted network and handling the details from start to finish.</p>
          <div className='max-w-[200px] pt-8'>
            <CustomButton text="Contact Us" url='/contact' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Agency
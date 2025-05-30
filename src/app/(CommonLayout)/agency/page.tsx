import BloomSection from '@/components/section/BloomSection'
import CustomButton from '@/components/ui/CustomButton'
import React from 'react'

const Agency = () => {
  return (
    <div>
      <div className='maxWidth flex flex-col-reverse sm:flex-row justify-between items-center py-20'>
        <div className='basis-[60%] space-y-3'>
          <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-font01 lg:leading-16'>Your Agency. Our Creators. Seamless UGC Delivery.</h2>
          <p className=' md:text-xl text-font02'>&quot;We’re kicking off the foundation of our blooming brands marketing funnel — laying the groundwork for a high-impact campaign, executed in three streamlined steps for maximum efficiency and results.&quot;</p>
          <div className='max-w-[200px] pt-8'>
            <CustomButton text="Contact Us" />
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <BloomSection title='&quot;From First-Time Projects to Full-Funnel Campaigns&quot;' des='See the quality and versatility our creative team brings to the table' />
      </div>
      <div className='maxWidth flex flex-col-reverse sm:flex-row justify-between items-center py-20'>
        <div className='basis-[60%] space-y-3'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800'>Warm & CollaborativeUnique client needs? We’re built for that. </h2>
          <p className='text-gray-600'>Whether it’s a hyper-targeted audience or a mainstream campaign, our team handles the heavy lifting. We’ll find the right creators, manage contracts, and deliver content that fits  seamlessly and reliably.</p>
          <div className='max-w-[200px] pt-8'>
            <CustomButton text="Contact Us" />
          </div>
        </div>
        <div></div>
      </div>
      <div className='maxWidth flex flex-col-reverse sm:flex-row justify-between items-center py-20'>
        <div className='basis-[60%] space-y-3'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800'>Subtle & StrategicWe fill the gaps your agency doesn’t have</h2>
          <p className='text-gray-600'>When your clients have hyper-specific creator needs, we step in quietly but powerfully — sourcing the perfect match from our vetted network and handling the details from start to finish.</p>
          <div className='max-w-[200px] pt-8'>
            <CustomButton text="Contact Us" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Agency
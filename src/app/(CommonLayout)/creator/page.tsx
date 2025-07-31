import CustomButton from '@/components/ui/CustomButton'
// import Image from 'next/image'
import React from 'react';
// import butterfly from "@/assets/common/butterfly.png"
import ContactUsTelephone from '@/components/shared/ContactUsTelephone';
import SingleChooseUs from '@/components/shared/SingleChooseUs';
import { turnCreativityDatas } from '@/constants/turnCreativity';
import { whyChoseUsType } from '@/types/types';
import Title from '@/components/shared/Title';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Creator - The Social Chance',
}

const Creator = () => {
  return (
    <div>
      <div className='flex items-center justify-center bg-[#F6F2EA]' style={{ height: "calc(100vh - 100px)"}}>
        <div className='relative w-full bg-[#F6F2EA] py-28 space-y-12'>
          <div className='relative z-10 flex flex-col justify-center items-center gap-3'>
            <h2 className='text-2xl md:text-3xl xl:text-5xl font-bold text-font01 text-center'>Want to become</h2>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-font01 text-center'>Blooming brands creator partner?</h2>
            <p className=' text-sm text-center max-w-[800px] text-font02'>&quot;We’re kicking off the foundation of our blooming brands marketing funnel — laying the groundwork for a high-impact campaign, executed in three streamlined steps for maximum efficiency and results.&quot;</p>
          </div>
          <div className='w-full max-w-[200px] mx-auto'>
            <CustomButton text="Apply As Creators" url="/creator-signup" />
          </div>
          {/* <Image src={butterfly} alt="butterfly" width={100} height={100} className='absolute top-10 left-10' />
          <Image src={butterfly} alt="butterfly" width={100} height={100} className='absolute bottom-10 right-10' /> */}
        </div>
      </div>
      <div className='py-28'>
        <div className='block md:sticky md:top-40'>
          <Title title="Turn Your Creativity Into Consistent Paid Work" />
        </div>
        <div className='maxWidth'>
          {turnCreativityDatas?.map((item: whyChoseUsType) => (
            <div key={item.id} className='sticky top-32 md:top-68 w-full bg-white border-2 h-[520px] md:h-[300px] px-4 lg:px-8 flex flex-col items-center justify-center rounded-md mt-20 customShadow'>
              <SingleChooseUs item={item} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <ContactUsTelephone title="Join Our Creator Network Today" des="Get paid to create content you love, for brands you'll love even more" btn="Sign Up as Creator" url='/creator-signup' />
      </div>
    </div>
  )
}

export default Creator
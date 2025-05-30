import CustomButton from '@/components/ui/CustomButton'
import Image from 'next/image'
import React from 'react';
import butterfly from "@/assets/common/butterfly.png"
import ContactUsTelephone from '@/components/shared/ContactUsTelephone';
import SingleChooseUs from '@/components/shared/SingleChooseUs';
import { turnCreativityDatas } from '@/constants/turnCreativity';
import { whyChoseUsType } from '@/types/types';
import Title from '@/components/shared/Title';

const Creator = () => {
  return (
    <div>
      <div></div>
      <div className='relative bg-[#F6F2EA] py-20 space-y-12'>
        <div className='relative z-10 flex flex-col justify-center items-center gap-3'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-font01'>Want to become</h2>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-font01'>Blooming brands creator partner?</h2>
          <p className=' text-sm text-center max-w-[800px] text-font02'>&quot;We’re kicking off the foundation of our blooming brands marketing funnel — laying the groundwork for a high-impact campaign, executed in three streamlined steps for maximum efficiency and results.&quot;</p>
        </div>
        <div className='w-full max-w-[200px] mx-auto'>
          <CustomButton text="Apply As Creators" />
        </div>
        <Image src={butterfly} alt="butterfly" width={100} height={100} className='absolute top-10 left-10' />
        <Image src={butterfly} alt="butterfly" width={100} height={100} className='absolute bottom-10 right-10' />
      </div>
      <div className='py-20'>
        <Title title="Turn Your Creativity Into Consistent Paid Work" />
        <div className='maxWidth space-y-10'>
          {turnCreativityDatas?.map((item: whyChoseUsType) => (
            <SingleChooseUs key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <ContactUsTelephone title="Join Our Creator Network Today" des="Get paid to create content you love, for brands you'll love even more" btn="Sign Up as Creator" />
      </div>
    </div>
  )
}

export default Creator
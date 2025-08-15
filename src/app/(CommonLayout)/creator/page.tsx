"use client"
import CustomButton from '@/components/ui/CustomButton'
// import Image from 'next/image'
import React from 'react';
// import butterfly from "@/assets/common/butterfly.png"
import ContactUsTelephone from '@/components/shared/ContactUsTelephone';
import SingleChooseUs from '@/components/shared/SingleChooseUs';
import { turnCreativityDatas } from '@/constants/turnCreativity';
import { whyChoseUsType } from '@/types/types';
import Title from '@/components/shared/Title';
// import type { Metadata } from 'next'
import { motion } from "framer-motion"
import { TypingAnimation } from "@/components/magicui/typing-animation";

// export const metadata: Metadata = {
//   title: 'Creator - The Social Chance',
// }

const Creator = () => {
  return (
    <div>
      <div className='flex items-center justify-center bg-[#F6F2EA]/50' style={{ height: "calc(100vh - 80px)" }}>
        <div className='relative w-full py-28 space-y-12'>
          <div className='relative z-10 flex flex-col justify-center items-center gap-3'>
              <TypingAnimation
                className='text-2xl md:text-3xl xl:text-6xl font-bold text-[#6D715F] capitalize'
                style={{ textShadow: '2px 2px 6px rgba(1, 1, 0, 0.1)' }}
                duration={100}
              >
                want to become
              </TypingAnimation>
            <TypingAnimation
              className='text-2xl md:text-3xl xl:text-6xl font-bold text-[#6D715F] capitalize'
              style={{ textShadow: '2px 2px 6px rgba(1, 1, 0, 0.1)' }}
              delay={2400} duration={100}
            >
              a creator partner with &quot;the social chance&quot; ?
            </TypingAnimation>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 7 }}
              viewport={{ once: false }}
              className=' text-sm lg:text-xl text-center max-w-[1000px] text-font02 pt-4'>&quot;We’re kicking off the foundation of our The Social Chance brands marketing funnel — laying the groundwork for a high-impact campaign, executed in three streamlined steps for maximum efficiency and results.&quot;</motion.p>
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
          <Title title="Turn Your Creativity Into Consistent Paid Work" className="text-center" />
        </div>
        <div className='w-full md:sticky md:top-68'>
          <div className='max-w-[1000px] mx-auto px-4'>
            {turnCreativityDatas?.map((item: whyChoseUsType) => (
              <div key={item.id} className='sticky top-32 md:top-68 w-full bg-white border-2 h-[520px] md:h-[300px] px-4 lg:px-8 flex flex-col items-center justify-center rounded-md mt-20 customShadow'>
                <SingleChooseUs item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <ContactUsTelephone title="Join Our Creator Network Today" des="Get paid to create content you love, for brands you'll love even more" btn="Sign Up as Creator" url='/creator-signup' />
      </div>
    </div>
  )
}

export default Creator
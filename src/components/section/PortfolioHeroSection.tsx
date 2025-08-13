"use client"
import Image from 'next/image'
import React from 'react'
import portfolioImg from "@/assets/common/portfolioImage2.jpg"
import { motion } from "framer-motion"
import { TypingAnimation } from "@/components/magicui/typing-animation";

const PortfolioHeroSection = () => {
  return (
    <div className='flex flex-col bg-[#FFECAC]/50 pb-20' style={{ height: 'calc(100vh - 80px)' }}>
      <div className='w-full h-[170px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[800px] overflow-hidden'>
        <Image src={portfolioImg} alt="Subscription" height={800} width={1900} className="object-cover w-full h-[800px]" />
      </div>
      <div className='flex-1 flex flex-col justify-center gap-6 maxWidth py-10'>
        {/* <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 pb-4 text-shadow-2xl text-shadow-black'
          style={{ textShadow: '4px 4px 8px rgba(2, 2, 0, 0.4)' }}
        >Our Portfolio</h2> */}
        <TypingAnimation className='text-gray-900 text-3xl md:text-5xl font-bold' startOnView={true} duration={100}
          style={{ textShadow: '4px 4px 8px rgba(1, 1, 0, 0.3)' }}
        >
          Our Portfolio
        </TypingAnimation>
        {/* <p className='text-gray-800 text-xl md:text-2xl font-semibold'>&quot;Real Brands. Real Results. Your Brand Could Be Next.&quot;</p>
        <p className='text-gray-600 text-sm'>Watch, read, and imagine what we can do for you.</p> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          viewport={{ once: false }}
          className='text-[#545454] max-w-[650px] space-y-3'>
          <p className='text-gray-800 text-xl md:text-2xl font-semibold'>&quot;Real Brands. Real Results. Your Brand Could Be Next.&quot; Watch, read, and imagine what we can do for you.</p>
          {/* <p className='text-gray-600 text-sm'>Watch, read, and imagine what we can do for you.</p> */}
        </motion.div>
      </div>
    </div>
  )
}

export default PortfolioHeroSection
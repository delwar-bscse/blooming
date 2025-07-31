import Image from 'next/image'
import React from 'react'
import portfolioImg from "@/assets/common/portfolioImage2.jpg"

const PortfolioHeroSection = () => {
  return (
    <div className='flex flex-col bg-[#FFECAC]/50 pb-20' style={{ height: 'calc(100vh - 88px)' }}>
      <div className='w-full h-[170px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[800px] overflow-hidden'>
        <Image src={portfolioImg} alt="Subscription" height={800} width={1900} className="object-cover w-full h-[800px]" />
      </div>
      <div className='flex-1 flex flex-col justify-center maxWidth py-10'>
        <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 pb-4'>Our Portfolio</h2>
        <p className='text-gray-800 text-xl md:text-2xl font-semibold'>&quot;Real Brands. Real Results. Your Brand Could Be Next.&quot;</p>
        <p className='text-gray-600 text-sm'>Watch, read, and imagine what we can do for you.</p>
      </div>
    </div>
  )
}

export default PortfolioHeroSection
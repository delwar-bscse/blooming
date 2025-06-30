import Image from 'next/image'
import React from 'react'
import portfolioImg from "@/assets/common/portfolioImage.png"

const PortfolioHeroSection = () => {
  return (
    <div className='bg-[#F9F6F1] pb-20'>
      <div className='w-full h-[170px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden'>
        <Image src={portfolioImg} alt="Subscription" height={500} width={2000} className="object-cover w-full" />
      </div>
      <div className='maxWidth py-20'>
        <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 pb-4'>Our Portfolio</h2>
        <p className='text-gray-800 text-xl md:text-2xl font-semibold'>&quot;Real Brands. Real Results. Your Brand Could Be Next.&quot;</p>
        <p className='text-gray-600 text-sm'>Watch, read, and imagine what we can do for you.</p>
      </div>
    </div>
  )
}

export default PortfolioHeroSection
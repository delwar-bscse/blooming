
import BloomSectionPortfolio from '@/components/section/BloomSectionPortfolio'
// import BrandsChoose from '@/components/section/BrandsChoose'
import PortfolioHeroSection from '@/components/section/PortfolioHeroSection'
import ContactUsTelephone from '@/components/shared/ContactUsTelephone'
import NewBarandLooking from '@/components/shared/NewBarandLooking'
import React from 'react'
import type { Metadata } from 'next'
import BrandsChooseSlider from '@/components/section/BrandsChooseSlider'
 
export const metadata: Metadata = {
  title: 'Portfolio - The Social Chance',
  description: "They Bloomed With Us. You Can Too! Join the growing list of brands thriving with custom UGC content. New brand looking to be seen? Established brand ready to reignite the spark? No worries! we're here to make it all work for you."
}

const Protfolio = () => {
  return (
    <div>
      <div className=''>
        <PortfolioHeroSection />
      </div>
      <div className='py-20'>
        <BloomSectionPortfolio title='&quot;They Bloomed With Us. You Can Too!&quot;' des='Join the growing list of brands thriving with custom UGC content.' />
      </div>
      <div className='bg-[#D9E2CF] py-20'>
        {/* <BrandsChoose /> */}
        <BrandsChooseSlider />
      </div>
      <div className='py-20'>
        <NewBarandLooking />
      </div>
      <div className='pt-20'>
        <ContactUsTelephone title="Let’s find the best fit for your goals  no pressure, just a chat." />
      </div>
    </div>
  )
}

export default Protfolio
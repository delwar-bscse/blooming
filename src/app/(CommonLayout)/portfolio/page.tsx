
import BloomSectionPortfolio from '@/components/section/BloomSectionPortfolio'
import BrandsChoose from '@/components/section/BrandsChoose'
import PortfolioHeroSection from '@/components/section/PortfolioHeroSection'
import ContactUsTelephone from '@/components/shared/ContactUsTelephone'
import NewBarandLooking from '@/components/shared/NewBarandLooking'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Portfolio - The Social Chance',
  description: '&quot;They Bloomed With Us. You Can Too!&quot, Join the growing list of brands thriving with custom UGC content. Let’s find the best fit for your goals  no pressure, just a chat.'
}

const Protfolio = () => {
  return (
    <div>
      <div>
        <PortfolioHeroSection />
      </div>
      <div className='py-20'>
        <BloomSectionPortfolio title='&quot;They Bloomed With Us. You Can Too!&quot;' des='Join the growing list of brands thriving with custom UGC content.' />
      </div>
      <div>
        <BrandsChoose />
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
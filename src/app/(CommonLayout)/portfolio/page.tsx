
import BloomSectionPortfolio from '@/components/section/BloomSectionPortfolio'
import PortfolioHeroSection from '@/components/section/PortfolioHeroSection'
import ContactUsTelephone from '@/components/shared/ContactUsTelephone'
import NewBarandLooking from '@/components/shared/NewBarandLooking'
import React from 'react'

const Protfolio = () => {
  return (
    <div>
      <div>
        <PortfolioHeroSection />
      </div>
      <div className='py-20'>
        <BloomSectionPortfolio title='&quot;They Bloomed With Us. You Can Too!&quot;' des='Join the growing list of brands thriving with custom UGC content.' />
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
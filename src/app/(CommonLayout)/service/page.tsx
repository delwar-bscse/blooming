import PackageSection from '@/components/section/PackageSection'
import SubSection from '@/components/section/SubSection'
import ContactUsTelephone from '@/components/shared/ContactUsTelephone'
import React from 'react'

const Service = () => {
  return (
    <div className=''>
      <div>
        <PackageSection />
      </div>
      <div className='py-20 bg-[#D9E2CF]'>
        <SubSection />
      </div>
      <div>
        <ContactUsTelephone title='Let’s find the best fit for your goals no pressure, just a chat."'/>
      </div>
    </div>
  )
}

export default Service
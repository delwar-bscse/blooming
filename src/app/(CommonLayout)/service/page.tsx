import PackageSection from '@/components/section/PackageSection'
import SubSection from '@/components/section/SubSection'
import ContactUsTelephone from '@/components/shared/ContactUsTelephone'
import React, { Suspense } from 'react'

const Service = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <PackageSection />
      </div>
      <div className='py-28 bg-[#D9E2CF]'>
        <SubSection />
      </div>
      <div>
        <ContactUsTelephone title='Let’s find the best fit for your goals no pressure, just a chat."'/>
      </div>
    </Suspense>
  )
}

export default Service
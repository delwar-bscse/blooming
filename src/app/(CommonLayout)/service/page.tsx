import PackageSection from '@/components/section/PackageSection'
import SubSection from '@/components/section/SubSection'
import ContactUsTelephone from '@/components/shared/ContactUsTelephone'
import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { myFetch } from '@/utils/myFetch'
 
// export const metadata: Metadata = {
//   title: 'Service - The Social Chance',
// }

export async function generateMetadata(): Promise<Metadata> {
 
  const resPackages = await myFetch(`/package/packages`, {
        method: "GET",
      });

  const resSubscriptions = await myFetch(`/package/subscription-packages`, {
        method: "GET",
      });

  const packages = JSON.stringify(resPackages?.data);
  const subscriptions = JSON.stringify(resSubscriptions?.data);
 
  return {
    title: 'Blog - The Social Chance',
    description: `Packages: ${packages}, Subscriptions: ${subscriptions}`,
  }
}


const Service = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <PackageSection />
      </div>
      <>
        <SubSection />
      </>
      <div>
        <ContactUsTelephone title='Let’s find the best fit for your goals no pressure, just a chat."'/>
      </div>
    </Suspense>
  )
}

export default Service
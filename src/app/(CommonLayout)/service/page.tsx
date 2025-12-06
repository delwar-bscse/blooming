/* eslint-disable @typescript-eslint/no-explicit-any */
import PackageSection from '@/components/section/PackageSection'
// import SubSection from '@/components/section/SubSection'
import ContactUsTelephone from '@/components/shared/ContactUsTelephone'
import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { myFetch } from '@/utils/myFetch'

export async function generateMetadata(): Promise<Metadata> {

  const resPackages = await myFetch(`/package/packages`, {
    method: "GET",
  });

  let formatedData = "";
  resPackages?.data?.forEach((item: any) => { 
    formatedData += item?.title + " " + item?.subtitle + " " + item?.type + " ";
    // return { title: item?.title, subtitle: item?.subtitle, type: item?.type } 
  });

  // const services = JSON.stringify(formatedData);

  return {
    title: 'Service - The Social Chance',
    description: formatedData,
  }
}


const Service = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <PackageSection />
      </div>
      {/* <>
        <SubSection />
      </> */}
      <div>
        <ContactUsTelephone title='Let’s find the best fit for your goals no pressure, just a chat."' />
      </div>
    </Suspense>
  )
}

export default Service
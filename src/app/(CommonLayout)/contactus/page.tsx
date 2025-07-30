
import ContactUs2 from '@/components/form/ContactUs2'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact Us - The Social Chance',
}

const Contact = () => {
  return (
    <div>
      <ContactUs2 />
    </div>
  )
}

export default Contact
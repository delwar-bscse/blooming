import Image from 'next/image'
import React from 'react'
import contactUsTelephone from '@/assets/common/freeCall.png' // Adjust the path as necessary
import Link from 'next/link'

const ContactUsTelephone = ({ title, des, btn = "Contact Us", url="/contact" }: { title: string, des?: string, btn?: string, url?: string }) => {
  return (
    <div id="contactUsTelephone" className='bg-[#FFF7DD]'  style={{ minHeight: "calc(50vh - 0px)" }}>
      <div className='maxWidth flex flex-col-reverse sm:flex-row justify-between items-center gap-10 py-20'>
        <div className='sm:basis-[60%] flex flex-col items-center gap-16'>
          <div className='space-y-4'>
            <p className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-500 text-center'>{title}</p>
            {des && <p className='md:text-xl lg:text-2xl font-semibold text-gray-500 text-center'>{des}</p>}
          </div>
          <Link href={url} className='bg-[#B7C6D5] customShadow hover:bg-opacity-80 cursor-pointer text-gray-800 py-2 px-8 rounded-md font-semibold'>{btn}</Link>
        </div>
        <div className='sm:basis-[40%]'>
          <Image
            id="contactUsTelephoneImg"
            src={contactUsTelephone}
            alt="Contact Us Telephone"
            width={200}
            height={200}
            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUsTelephone
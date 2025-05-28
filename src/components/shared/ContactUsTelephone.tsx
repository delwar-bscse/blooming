import Image from 'next/image'
import React from 'react'
import contactUsTelephone from '@/assets/common/freeCall.png' // Adjust the path as necessary

const ContactUsTelephone = ({title}:{title:string}) => {
  return (
    <div className='bg-[#FFF7DD]'>
      <div className='maxWidth flex flex-col-reverse sm:flex-row justify-between items-center gap-10 p-10'>
        <div className='sm:basis-[60%] flex flex-col items-center gap-16'>
          <p className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-500 text-center'>{title}</p>
          <button className='bg-[#B7C6D5] hover:bg-opacity-80 cursor-pointer text-gray-800 py-2 px-8 rounded-md font-semibold'>Contact Us</button>
        </div>
        <div className='sm:basis-[40%]'>
          <Image
            src={contactUsTelephone}
            alt="Contact Us Telephone"
            width={200}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUsTelephone
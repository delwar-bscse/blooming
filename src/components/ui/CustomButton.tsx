import Link from 'next/link'
import React from 'react'

const CustomButton = ({text, url="#"}:{text:string, url?:string}) => {
  return (
    <Link href={url} className='bg-[#FFECAC] hover:bg-[rgb(255,231,152)] block text-center py-2 px-2 w-full rounded-md shadow-sm cursor-pointer text-gray-700 hover:text-gray-500 font-semibold transition-all duration-500'>{text}</Link>
  )
}

export default CustomButton
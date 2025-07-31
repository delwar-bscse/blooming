"use client"

import Image from 'next/image'
import React from 'react'
import mapImage from "@/assets/common/map.jpg"
import { counterDatas } from '@/constants/counterDatas'
import { counterDataType } from '@/types/types'
import { motion } from "framer-motion"

const CreatorAndBrands = () => {
  return (
    <section>
      <div className='space-y-8 py-10'>
        <div className='maxWidth space-y-8'>
          <h2 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-gray-700 pb-4 capitalize'>trusted by 600+ leading creators and brands</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[600px] mx-auto py-6'>
            {counterDatas?.map((counter: counterDataType) => (
              <div key={counter?.id} className={`flex flex-col items-center justify-center gap-1 rounded-md py-6 transition-all hover:scale-105 duration-500 customShadow`} style={{ backgroundColor: counter?.bgColor }}>
                <p className='text-xl font-bold text-gray-700'>{counter?.number}</p>
                <p className='text-gray-600 text-sm'>{counter?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Image src={mapImage} width={1200} height={600} alt="creator and brands" className='w-full h-auto mx-auto'/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CreatorAndBrands
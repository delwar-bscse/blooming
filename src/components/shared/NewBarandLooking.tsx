"use client"

import Image from 'next/image'
import React from 'react'
import video_analysis from '@/assets/common/video_analysis.png'
import { motion } from "framer-motion"

const NewBarandLooking = () => {
  return (
    <div>
      <div className='maxWidth grid grid-cols-1-reverse sm:grid-cols-2 items-center justify-between gap-20'>
        <div>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 pb-4'>New brand looking to be seen ?</h2>
          <p className='text-gray-600'>&quot;New brand looking to be seen? Established brand ready to reignite the spark?No worries! we&apos;re here to make it all work for you.&quot;</p>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1,  }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: false }}
            className='mt-12'
          >
          <Image src={video_analysis} alt="video analysis"  />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1,  }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            viewport={{ once: false }}
            className=''
          >
          <Image src={video_analysis} alt="video analysis"  />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1,  }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: false }}
            className='mt-12'
          >
          <Image src={video_analysis} alt="video analysis"  />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NewBarandLooking
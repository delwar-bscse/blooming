"use client"

import Image from 'next/image'
import React from 'react'
// import video_analysis from '@/assets/common/video_analysis.png'
import video_analysis1 from '@/assets/common/video_analysis1.jpeg'
import video_analysis2 from '@/assets/common/video_analysis2.jpeg'
import video_analysis3 from '@/assets/common/video_analysis3.jpeg'
import { motion } from "framer-motion"

const NewBarandLooking = () => {
  return (
    <div>
      <div className='maxWidth grid grid-cols-1-reverse sm:grid-cols-2 items-center justify-between gap-20'>
        <div>
          <h2 className='text-lg md:text-xl xl:text-2xl text-gray-700 font-bold pb-4 capitalize'>New brand looking to be seen?<br />Established brand ready to reignite the spark?<br />No worries! we&apos;re here to make it all work for you.</h2>
          {/* <p className='text-gray-600 uppercase'></p> */}
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false }}
            className='mt-12 relative flex flex-col items-center'
          >
            <Image src={video_analysis1} alt="video analysis" />
            <div
              className="absolute -bottom-10 w-[90%] h-8 mx-auto mt-4 bg-gray-400 rounded-b-full blur-md shadow opacity-70"
              style={{
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                transform: 'scaleY(0.3)'
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false }}
            className='relative flex flex-col items-center'
          >
            <Image src={video_analysis2} alt="video analysis" />
            <div
              className="absolute -bottom-0 w-[90%] h-8 mx-auto mt-4 bg-gray-400 rounded-b-full blur-md shadow opacity-70"
              style={{
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                transform: 'scaleY(0.3)'
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false }}
            className='mt-12 relative flex flex-col items-center'
          >
            <Image src={video_analysis3} alt="video analysis" />
            <div
              className="absolute -bottom-10 w-[90%] h-8 mx-auto mt-4 bg-gray-400 rounded-b-full blur-md shadow opacity-70"
              style={{
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                transform: 'scaleY(0.3)'
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NewBarandLooking
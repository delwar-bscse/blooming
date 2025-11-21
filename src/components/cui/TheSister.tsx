"use client"

import React from 'react'
import { motion } from "framer-motion"
import aboutImg1 from "@/assets/common/about01.png"
import Image from 'next/image'

const TheSister = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: false }}
      className='min-h-screen'>
      <div className='maxWidth flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-24 py-10 lg:pt-28'>
        <div className='basis-[60%] space-y-6' >
          <p className='text-2xl md:text-3xl xl:text-4xl font-bold'>The Sisters Behind The Social Chance</p>
          <p className='lg:leading-8 text-gray-500 text-base font-normal'>Shamim and Fareshta Nader, sisters, creatives, and co-founders of <span className='font-bold text-gray-700'>THE SOCIAL CHANCE</span> ugc agency. With degrees in architecture and a deep rooted love for creativity, we realized after university that the corporate world wasn’t for us. We wanted to build something of our own, something that gave us freedom, purpose, and a way to stay creative every single day.That’s how <span className='font-bold text-gray-700'>THE SOCIAL CHANCE</span> ugc agency was born. <span className='bg-yellow-300 px-1 text-gray-700'>As ex UGC</span> creators ourselves, we understand both sides of the UGC world, the brand expectations and the creator experience. Our mission is to build a UGC agency that empowers UGC creators with real opportunities, and helps brands connect through authentic, scroll stopping content.We’re not just a UGC agency, we’re a creative Chance for brands and UGC creators alike. Welcome to <span className='font-bold text-gray-700'>The Social Chance</span> UGC agency.</p>
        </div>
        <div className='hover:scale-102 transition-transform duration-500 ease-in-out w-full md:basis-[40%]'>
          <Image src={aboutImg1} alt="The Social Chance Brands" className='' />
        </div>
      </div>
    </motion.div>
  )
}

export default TheSister
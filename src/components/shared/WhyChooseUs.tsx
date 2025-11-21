"use client"
import { whyChoseUsDatas } from '@/constants/whyChoseUsDatas'
import { whyChoseUsType } from '@/types/types'
import React from 'react'
import SingleChooseUs from './SingleChooseUs'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules'

const WhyChooseUs = () => {
  return (
    <div className='space-y-14 px-2'>
      <div className=''>
        <Title title="Why Choose Us ?" className='xl:text-5xl text-center'/>
      </div>
      {/* <div className='relative maxWidth'>
        {whyChoseUsDatas?.map((item: whyChoseUsType) => (
          <div key={item.id} className='sticky top-32 md:top-68 w-full bg-white border-2 h-[520px] md:h-[300px] px-4 lg:px-8 flex flex-col items-center justify-center rounded-md mt-20 overflow-hidden customShadow3'>
            <SingleChooseUs item={item} />
          </div>
        ))}
      </div> */}
      <div className='max-w-[1200px] w-full mx-auto h-[400px] customShadow3 rounded-xl overflow-hidden'>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper">
          {whyChoseUsDatas?.map((item: whyChoseUsType, index: number) => (
            <SwiperSlide key={index} className='w-full h-full bg-white rounded-xl px-16 py-6'>
              <SingleChooseUs item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default WhyChooseUs
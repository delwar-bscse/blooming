/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from 'react';
import Title from '../shared/Title'
import { myFetch } from '@/utils/myFetch'
import VideoView from '../cui/ViewVideo';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '@/app/styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export const selectOptions = ["Beauty And Skincare", , "Travel And Hotel", "Food And Beverage", "Teach And Digital Products", "Health And Fitness", "Fashion And Lifestyle"];

const BrandsChooseSlider = () => {
  const [videoDatas, setVideoDatas] = useState<Record<string, any>[]>([]);



  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await myFetch("/upload-video");
        const newArray = response?.data.filter((item: Record<string, any>) => {
          return selectOptions.includes(item.category);
        });
        setVideoDatas(newArray);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };
    fetchVideoData();
  }, []);


  return (
    <div className='w-full px-3 '>
      <div className='max-w-[1200px] bg-white w-full mx-auto h-[500px] md:h-[600px] customShadow rounded-xl'>
        <Swiper
          direction={'vertical'}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper">
          {videoDatas?.map((item: Record<string, any>, index: number) => (
            <SwiperSlide key={index} className='w-full flex flex-col justify-center items-center'>
              <div className='pt-8'>
                <Title title={item.category as string} />
              </div>
              <div className='w-full mb-8'>
                <Swiper
                  // slidesPerView={count}
                  // spaceBetween={20}
                  pagination={{ clickable: true }}
                  loop={true}
                  modules={[Pagination]}
                  breakpoints={{
                    520: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    }
                  }}
                  className="mySwiper"
                >
                  {item?.videos?.map((video: Record<string, unknown>, index: number) => (
                    <SwiperSlide key={index}>
                      <div className='pb-8'>
                        <VideoView videoUrl={video.url as string} videoId={`video-${video.key as string}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}



export default BrandsChooseSlider


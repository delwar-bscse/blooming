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

  const screenWidth = useScreenSize();

  // Define how many videos to show based on screen size
  let videosToShow = 1;
  if (screenWidth > 768) videosToShow = 2;
  if (screenWidth > 1024) videosToShow = 3;
  if (screenWidth > 1280) videosToShow = 4;


  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await myFetch("/upload-video");
        setVideoDatas(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };
    fetchVideoData();
  }, []);


  return (
    <div className='w-full px-3'>
      <div className='max-w-[1200px] w-full mx-auto h-[600px] customShadow rounded-xl'>
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
          {videoDatas?.map((item: Record<string, any>, index: number) => (
            <SwiperSlide key={index} className='w-full flex flex-col justify-center items-center'>
              <div className='pt-8'>
                <Title title={item.category as string} />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-16 mb-8'>
                {item?.videos?.slice(0, videosToShow)?.map((item: Record<string, unknown>, index: number) => (
                  <div key={index} className="">
                    <VideoView videoUrl={item.url as string} videoId={`video-${item.key as string}`} />
                  </div>
                ))}
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);

    updateWidth(); // Set initially
    window.addEventListener("resize", updateWidth); // Watch resize
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return screenWidth;
};

export default BrandsChooseSlider


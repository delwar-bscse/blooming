/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/styles.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import VideoView from '../cui/ViewVideo';
import { myFetch } from '@/utils/myFetch';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function HeroSectionSlider({ url }: { url: string }) {
  const [videos, setVideos] = useState([]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null); //

  useEffect(() => {
    const getVideos = async () => {
      const res = await myFetch(`${url}`, {
        method: "GET",
      });
      console.log("Hero videos:", res);
      setVideos(res?.data?.videos || []);
    };
    getVideos();
  }, []);

  
  return (
    <div
      className="relative w-full px-16  cursor-pointer"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <Swiper
        // slidesPerView={count}
        // spaceBetween={20}
        speed={2000}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper; // save swiper instance
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          520: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 8,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {videos?.map((video: Record<string, unknown>, index: number) => (
          <SwiperSlide key={index}>
            <div className='pb-8'>
              <VideoView
                videoUrl={video.url as string}
                videoId={`video-${video.key as string}`}
                width="130px" height="240px" className="w-[130px] h-[240px] overflow-hidden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons */}
      <div>
        <button
          ref={prevRef}
          className="absolute left-4 bottom-1/2 z-10 bg-black/30 text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-black"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="absolute right-4 bottom-1/2 z-10 bg-black/30 text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-black"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

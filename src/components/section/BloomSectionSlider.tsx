/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/styles.css';
import { Navigation, Pagination } from 'swiper/modules';
import VideoView from '../cui/ViewVideo';
import { myFetch } from '@/utils/myFetch';
import { useScreenSize } from '../shared/ScreenSide';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


export default function BloomSectionSlider({url}: {url: string}) {
  const [videos, setVideos] = useState([]);
  const count = useScreenSize();

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const getVideos = async () => {
      const res = await myFetch(`${url}`, {
        method: "GET",
      });
      setVideos(res?.data?.videos || []);
    };
    getVideos();
  }, []);

  return (
    <div className="relative w-full">
      {/* Swiper */}
      <Swiper
        slidesPerView={count}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Fix: attach refs before Swiper init
          if (swiper.params.navigation) {
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {videos?.map((video: Record<string, unknown>, index: number) => (
          <SwiperSlide key={index}>
            <div className='pb-8'>
              <VideoView videoUrl={video.url as string} videoId={`video-${video.key as string}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons */}
      <div className="hidden">
        <button
          ref={prevRef}
          className="absolute -left-10 bottom-1/2 z-10 bg-black/30 text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-black"
        >
          <FaArrowLeft className="inline-block mr-2" />
        </button>
        <button
          ref={nextRef}
          className="absolute -right-10 bottom-1/2 z-10 bg-black/30 text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-black"
        >
          <FaArrowRight className="" />
        </button>
      </div>
    </div>
  );
}

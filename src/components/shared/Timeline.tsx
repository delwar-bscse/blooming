"use client";

import React from "react";
import { motion } from "framer-motion";
import { starterData, timelineData } from "@/constants/timeline-data";
import Image from "next/image";




const TimelineComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 capitalize">
            our approach to The Social Chance brands
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At The Social Chance brands we believe that every brand has the potential to bloom grow, evolve, and thrive. Our approach is centered around understanding your unique brand story, audience, and goals to craft strategies
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-20">
          {starterData?.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center bg-white shadow-md rounded-full p-4 w-40 h-40 gap-1">
              <Image src={item?.img} alt={item.title} width={50} height={50} />
              <p className="text-2xl font-bold text-gray-700">{item?.year}</p>
              <p className="text-gray-600">{item?.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            The Story Of The Social Chance Brands
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#FFECAC] via-[#FFECAC] to-[#FFECAC] h-full rounded-full" />

          {timelineData.map((item, index) => {
            const sideClass = item.side === "left" ? "md:justify-start md:pr-8" : "md:justify-end md:pl-8";
            const arrowDirection = item.side === "left"
              ? "border-t-[15px] border-b-[15px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"
              : "border-t-[15px] border-b-[15px] border-r-[20px] border-t-transparent border-b-transparent border-r-white";

            const initialX = item.side === "left" ? -100 : 100;

            return (
              <div key={index} className="relative flex items-center mb-20 last:mb-0 box-border overflow-hidden">
                {/* Year Circle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFECAC] to-[#FFECAC] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-[#6D715F] font-bold text-sm">{item.year}</span>
                  </div>
                </motion.div>

                {/* Content Card */}
                <div className={`w-full bg-transparent flex justify-center ${sideClass}`}>
                  <motion.div
                    className="w-full sm:w-4/12 md:w-5/12"
                    initial={{ opacity: 0, x: initialX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative cursor-pointer group">
                      <h3 className="text-2xl font-bold text-gray-700 mb-4 leading-tight group-hover:text-[#6D715F]  transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.description}
                      </p>

                      {/* Arrow */}
                      <div className={`hidden md:block absolute z-20 top-10 ${item.side === "left"
                          ? "right-0 transform translate-x-full"
                          : "left-0 transform -translate-x-full"
                        }`}>
                        <div className={`w-0 h-0 ${arrowDirection} drop-shadow-sm`}></div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;

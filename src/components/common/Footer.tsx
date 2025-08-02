import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BrandLogo from '@/assets/common/TheSocialChance.png';
import { contactInfo, creatorLink, followUs, quickLinks } from '@/constants/footerDatas';
import FooterTitle from '../shared/FooterTitle';


const Footer = () => {
  return (
    <div className='bg-[#F2ECE0] py-6 text-[#6D715F] flex flex-col'  style={{ minHeight: "50vh" }}>
      <div className='maxWidth flex-1 flex flex-col lg:flex-row lg:gap-4'>
        <div className='lg:basis-[40%] pr-6'>
          <h3>
            <Image src={BrandLogo} alt="Blooming Brands" width={200} height={40}  className='w-[200px] h-[90px]'/>
          </h3>
          <p className='py-2 tracking-wide leading-8 text-base text-justify '>At The Social Chance, we specialize in delivering creative and impactful solutions that help brands grow. Through authenticity, innovation, and a deep understanding of your audience, we create content that drives engagement and builds lasting connections.</p>
        </div>
        <div className='lg:basis-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6'>
          <div>
            <FooterTitle title="Quick Links" />
            <ul className='space-y-3'>
              {quickLinks?.map((item, index) => (
                <li key={index} className='text-base cursor-pointer'>
                  <Link href={item?.url} className='hover:text-gray-300 text-[#6D715F] delay-200'>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle title="Browse Category" />
            <ul className='space-y-3'>
              {creatorLink?.map((item, index) => (
                <li key={index} className='text-base cursor-pointer'>
                  <Link href={item?.url} className='hover:text-gray-300 text-[#6D715F] delay-200'>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle title="Contact Info" />
            <ul className='space-y-2'>
              {contactInfo?.map((item, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <span className='p-2 rounded-full'>{item?.icon}</span>
                  <span>{item?.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='h-[4px] bg-gray-400/40 my-4' />
      <div className='maxWidth flex flex-col md:flex-row justify-between items-center gap-4 py-3'>
        <p className='flex items-center justify-center gap-1 text-sm md:text-base flex-wrap'>copyright@2025 and all right reserved </p>
        <div className='flex items-center gap-2'>
          <p>Follow Us : </p>
          <ul className="flex gap-2">
            {followUs?.map((item, index) => (
              <li key={index} className="cursor-pointer bg-white p-2 rounded-full  hover:scale-110 transform-transition transition-all duration-200">
                <a href={item?.url} target="_blank" rel="noopener noreferrer" className="text-[#6D715F]">
                  {item?.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
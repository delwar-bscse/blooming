import React from 'react'
import aboutImg1 from "@/assets/common/about01.png"
import aboutImg2 from "@/assets/common/about02.png"
import aboutImg3 from "@/assets/common/about03.png"
import Image from 'next/image'
import CustomButton from '@/components/ui/CustomButton'
import videoThumb from "@/assets/common/video_image.png"
import TimelineComponent from '@/components/shared/Timeline'
import { TypingAnimation } from "@/components/magicui/typing-animation";


const About = () => {
  return (
    <section>
      <div>
        {/* --------------------------- He Sisters Behind Blooming Brands --------------------------- */}
        <div className='maxWidth flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 py-32 h-screen'>
          <div className='basis-[60%] flex flex-col justify-center gap-4 lg:p-8'>
            <TypingAnimation className='text-2xl md:text-3xl xl:text-4xl font-bold' duration={100}>He Sisters Behind Blooming Brands</TypingAnimation>
            <TypingAnimation className='lg:leading-8 text-gray-500 text-base font-normal' duration={30} delay={4000}>Shamim and Fareshta Nader — sisters, creatives, and co-founders of Blooming Brands.With degrees in architecture and a deep-rooted love for creativity, we realized after university that the corporate world wasn’t for us. We wanted to build something of our own — something that gave us freedom, purpose, and a way to stay creative every single day.That’s how Blooming Brands was born.As creators ourselves, we understand both sides of the UGC world — the brand expectations and the creator experience. Our mission is to build an agency that empowers creators with real opportunities, and helps brands connect through authentic, scroll-stopping content.We’re not just an agency — we’re a creative home for brands and creators alike. Welcome to the house. 🏠</TypingAnimation>
          </div>
          <div className='hover:scale-102 transition-transform duration-500 ease-in-out w-full md:basis-[40%]'>
            <Image src={aboutImg1} alt="Blooming Brands" className='' />
          </div>
        </div>
        

        <div>
          <TimelineComponent />
        </div>

        {/* --------------------------- Meet Our Team --------------------------- */}
        <div className='maxWidth space-y-4 md:space-y-8 pt-28'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-center'>Meet Our Team</h2>
          <div>
            <Image src={videoThumb} alt="Blooming Brands" className='' />
          </div>
        </div>

        {/* --------------------------- Our Vision --------------------------- */}
        <div className='parentDiv maxWidth flex flex-col lg:flex-row gap-8 lg:gap-16 py-28'>
          <div className='childDiv transition-transform duration-500 ease-in-out w-full md:basis-[40%]'>
            <Image src={aboutImg2} alt="Blooming Brands" className='' />
          </div>
          <div className='basis-[60%] flex flex-col justify-center gap-4 lg:p-8'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold'>Our Vision</h2>
            <p className='lg:leading-8'>Shamim and Fareshta Nader — sisters, creatives, and co-founders of Blooming Brands.With degrees in architecture and a deep-rooted love for creativity, we realized after university that the corporate world wasn’t for us. We wanted to build something of our own — something that gave us freedom, purpose, and a way to stay creative every single day.That’s how Blooming Brands was born.As creators ourselves, we understand both sides of the UGC world — the brand expectations and the creator experience. Our mission is to build an agency that empowers creators with real opportunities, and helps brands connect through authentic, scroll-stopping content.We’re not just an agency — we’re a creative home for brands and creators alike. Welcome to the house. 🏠</p>
          </div>
        </div>

        {/* --------------------------- What We Offer --------------------------- */}
        <div className='parentDiv maxWidth flex flex-col lg:flex-row gap-8 lg:gap-16 pb-28'>
          <div className='childDiv transition-transform duration-500 ease-in-out w-full md:basis-[40%]'>
            <Image src={aboutImg3} alt="Blooming Brands" className='' />
          </div>
          <div className='basis-[60%] flex flex-col justify-center gap-8 lg:p-8'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-center'>It’s time your content worked as hard as you do. See what we offer</h2>
            <div className='w-full max-w-40 mx-auto'>
              <CustomButton text="contact Us" url='/contact'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
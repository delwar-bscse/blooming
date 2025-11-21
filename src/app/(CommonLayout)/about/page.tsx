import React from 'react'
import aboutImg2 from "@/assets/common/about002.png"
import aboutImg3 from "@/assets/common/about003.png"
import Image from 'next/image'
import CustomButton from '@/components/ui/CustomButton'
import TimelineComponent from '@/components/shared/Timeline'
import { myFetch } from '@/utils/myFetch'
import type { Metadata } from 'next'
import TheSister from '@/components/cui/TheSister'

export const metadata: Metadata = {
  title: 'About - The Social Chance',
  description: "Shamim and Fareshta Nader, sisters, creatives, and co-founders of THE SOCIAL CHANCE ugc agency . With degrees in architecture and a deep rooted love for creativity, we realized after university that the corporate world wasn’t for us. We wanted to build something of our own, something that gave us freedom, purpose, and a way to stay creative every single day.That’s how THE SOCIAL CHANCE ugc agency was born. As ex UGC creators ourselves, we understand both sides of the UGC world, the brand expectations and the creator experience. Our mission is to build a UGC agency that empowers UGC creators with real opportunities, and helps brands connect through authentic, scroll stopping content.We’re not just a UGC agency, we’re a creative Chance for brands and UGC creators alike. Welcome to The Social Chance UGC agency. "
}


const About = async () => {

  const res = await myFetch(`/upload-video?category=Meet Our Team`, {
    method: "GET",
  })


  return (
    <section>
      <div>
        {/* --------------------------- He Sisters Behind The Social Chance Brands --------------------------- */}
        <>
          <TheSister />
        </>
        
        <div>
          <TimelineComponent />
        </div>

        {/* --------------------------- Meet Our Team --------------------------- */}
        <div className='maxWidth space-y-4 md:space-y-8 pt-28 flex flex-col items-center'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-center'>Meet Our Team</h2>
          <div>
            <video width="40" height="20" controls className='h-full max-h-[500px] w-full max-w-[1000px] object-contain'>
              <source src={res?.data?.videos[0]?.url as string ?? ""} type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* --------------------------- Our Vision --------------------------- */}
        <div className='parentDiv maxWidth flex flex-col lg:flex-row gap-8 lg:gap-16 py-28'>
          <div className='childDiv transition-transform duration-500 ease-in-out w-full md:basis-[40%]'>
            <Image src={aboutImg2} alt="The Social Chance Brands" className='w-full h-80 object-cover rounded-tl-[80px] rounded-br-[80px]' />
          </div>
          <div className='basis-[60%] flex flex-col justify-center gap-4 lg:p-8'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold'>Our Vision</h2>
            <p className='lg:leading-8'>At The Social Chance UGC agency, our vision is to redefine how Brands connect with their audiences through Authentic, Creator Driven Content. Built by 2 Sisters and Ex ugc creators with a passion for creativity and storytelling, We believe in the Power of short form video to spark Emotion, Drive action and build Trust. We exist to Empower Creators, not just as freelancers, but as Partners and to help Brands of all sizes stand out in a fast moving Digital World. Our Dream is to be more than a UGC agency. We aim to become a trusted Creative UGC agency, where Talent, Strategy and meaningful Content come together. In five years, We see ourselves Expanding into Social Media Marketing, Launching Digital products and growing a team that leads with Heart, Skill and Purpose.</p>
          </div>
        </div>

        {/* --------------------------- What We Offer --------------------------- */}
        <div className='parentDiv maxWidth flex flex-col lg:flex-row gap-8 lg:gap-16 pb-28'>
          <div className='childDiv transition-transform duration-500 ease-in-out w-full md:basis-[40%]'>
            <Image src={aboutImg3} alt="The Social Chance Brands" className='w-full h-80 object-cover rounded-tr-[80px] rounded-bl-[80px]' />
          </div>
          <div className='basis-[60%] flex flex-col justify-center gap-8 lg:p-8'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-center'>It’s time your content worked as hard as you do. See what we offer</h2>
            <div className='w-full max-w-40 mx-auto'>
              <CustomButton text="contact Us" url='/contact' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
import CustomButton from '@/components/ui/CustomButton'
import Image from 'next/image'
import React from 'react'
import image1 from "@/assets/common/blog/blog1.png"
import image2 from "@/assets/common/blog/blog2.png"
import image3 from "@/assets/common/blog/blog3.png"
import image4 from "@/assets/common/blog/blog4.png"
import image5 from "@/assets/common/blog/blog5.png"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import type { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'AI vs Human Content - The Social Chance',
}

const images = [image2, image3, image2]

const Blog = () => {
  return (
    <div>
      <div className='maxWidth space-y-20'>
        {/* -------------------------- User Generated Content VS Artificially Generated Content */}
        <div  className='flex items-center justify-center' style={{height: "calc(100vh - 60px)"}}>
          <div className='space-y-8 pt-16'>
          <TypingAnimation duration={50} className='max-w-[600px] mx-auto text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-font01 lg:leading-12'>User Generated Content VS Artificially Generated Content</TypingAnimation>
          <div className='max-w-[200px] mx-auto pb-8'>
            <CustomButton text="Get Started" />
          </div>
          <div className='flex flex-col-reverse sm:flex-row gap-4 justify-between sm:items-start'>
            <p className='shrink-1'>Following and keeping up to date with digital content trends involves understanding not only the ever-evolving landscape of User  -Generated Content (UGC) but also the emergence of Artificially Generated Content (AGC), particularly the controversial realm of deep fake content created by AI.</p>
            <h3 className='shrink-0 text-xl md:text-2xl xl:text-3xl font-semibold text-font01 text-center'>The Blooming<br />Brands Agency</h3>
          </div>
        </div>
        </div>
        {/* -------------------------- Deep Fake Content -------------------------- */}
        <div>
          <div>
            <h2 className='text-xl sm:text-3xl md:text-4xl font-bold text-font02 pb-3 text-center'>What is Deep Fake Content?</h2>
            <p className='text-center'>Deep Fake Content, often referred to as AGC, is generated using advanced artificial intelligence algorithms. These algorithms manipulate audio and visual elements to create hyper-realistic content that can mimic real individuals or events seamlessly. Notably, this raises ethical concerns, as the potential for misinformation and deception becomes a significant issue.</p>
          </div>
          <div className='w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[750px] overflow-hidden my-8 '>
            <Image src={image1} alt="content image" className='object-cover w-full' />
          </div>
          <div>
            <h2 className='text-xl sm:text-3xl md:text-4xl font-bold text-font02 pb-3'>Benefits and Disadvantages of AGC:</h2>
            <div className='flex flex-col-reverse sm:flex-row gap-4 md:gap-12'>
              <div className=''>
                <p className='font-semibold'>Benefits:</p>
                <ul className='ps-3'>
                  <li className='list-disc list-inside'>Precision and customisation.</li>
                  <li className='list-disc list-inside'>Rapid content creation.</li>
                  <li className='list-disc list-inside'>Cost-effective in certain scenarios.</li>
                </ul>
              </div>
              <div>
                <p className='font-semibold'>disadvantages:</p>
                <ul className='ps-3'>
                  <li className='list-disc list-inside'>Ethical concerns.</li>
                  <li className='list-disc list-inside'>Lack of authenticity.</li>
                  <li className='list-disc list-inside'>Potential for misuse.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------- Examples of Deep Fake Content -------------------------- */}
        <div>
          <h2 className='text-xl sm:text-3xl md:text-4xl font-bold text-font02 pb-3 text-center'>Examples of Deep Fake Content</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4 md:pt-8'>
            {images.map((image, index) => (
              <div key={index} className='w-full overflow-hidden'>
                <Image src={image} alt="content image" className='object-cover w-full hover:scale-105 transform-transition duration-300' />
              </div>
            ))}
          </div>
        </div>
        {/* -------------------------- Best Platforms for UGC Creation -------------------------- */}
        <div>
          <h2 className='text-xl sm:text-3xl md:text-4xl font-bold text-font02 pb-3'>Best Platforms for UGC Creation:</h2>
          <h3 className='text-lg sm:text-2xl md:text-3xl font-semibold pb-3'>My Heritage: Bringing Old Photos to Life</h3>
          <p>Among the deepfake apps making waves, My Heritage stands out as a crowd favourite. Users adore the “deep nostalgia” feature, transforming old photos into animated wonders. Just upload your image, hit the animation button, and within seconds, watch as the face, eyes, and mouth come to life.</p>
          <div className='w-full my-4 md:my-8'>
            <Image src={image4} alt="content image" className='object-cover w-full' />
          </div>
          <div className=''>
            <p className='font-semibold'>Key Features:</p>
            <ul className='ps-3'>
              <li className='list-disc list-inside'>Deep Nostalgia for animating static faces in photos, crafting realistic videos.</li>
              <li className='list-disc list-inside'>Versatility includes family paintings and more.</li>
              <li className='list-disc list-inside'>Cost-effective in certain scenarios.</li>
            </ul>
          </div>
          <div className=''>
            <p className='font-semibold'>Price:</p>
            <ul className='ps-3'>
              <li className='list-disc list-inside'>Premium subscriptions kick off at an annual $149.</li>
            </ul>
          </div>
          <h3 className='text-lg sm:text-xl md:text-2xl font-semibold pt-3'>Go to website -{'>'}</h3>
        </div>
        {/* -------------------------- Face Swap Live: Your Ticket to Dynamic Face Swapping -------------------------- */}
        <div>
          <h3 className='text-lg sm:text-2xl md:text-3xl font-semibold pb-3'>Face Swap Live: Your Ticket to Dynamic Face Swapping</h3>
          <p>For top-notch face swapping, Face Swap Live takes the lead. It’s not just about recording videos; you can throw in stickers, capture photos, and seamlessly share on social media. The app goes beyond static swaps, allowing for movable face parts with features like face morphs and 3D effects. While it’s a paid app, the dynamic experience it offers makes it worth the download.</p>
          <div className='w-full my-4 md:my-8'>
            <Image src={image5} alt="content image" className='object-cover w-full' />
          </div>
          <div className=''>
            <p className='font-semibold'>Key Features:</p>
            <ul className='ps-3'>
              <li className='list-disc list-inside'>A platform for deepfake video production.</li>
              <li className='list-disc list-inside'>Free tiers take 4 hours to review and 30 minutes to create videos.</li>
              <li className='list-disc list-inside'>Premium users enjoy a one-hour turnaround.</li>
            </ul>
          </div>
          <div className=''>
            <p className='font-semibold'>Price:</p>
            <ul className='ps-3'>
              <li className='list-disc list-inside'>PPremium plans start at $19 per month.</li>
            </ul>
          </div>
          <div className='pt-4'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold pb-3'>Go to website -{'>'}</h3>
            <p>While UGC thrives on authenticity and diversity, AGC introduces precision and customisation but at the cost of ethical concerns. Businesses must tread carefully, leveraging the benefits of both without compromising integrity and trust. The future of content creation lies in striking the right balance between these two realms, adapting to evolving trends while staying mindful of ethical considerations.</p>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 py-16'>
            <h2 className='grow text-3xl md:text-4xl xl:text-5xl font-bold text-font02 text-center md:text-left'>The Social Chance Agency</h2>
            <Link href="/" className='block w-full max-w-[160px] mx-auto py-2 px-6 bg-amber-300 rounded-lg text-center'>Get Started</Link>
            {/* <button className='max-w-[160px] mx-auto py-2 px-6 border-2 border-font01 rounded-lg'>Learn More</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
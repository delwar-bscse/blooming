import React from 'react'
import BloomComponent from '../shared/BloomComponent'
import CustomButton from '../ui/CustomButton'
import BloomHeading from '../shared/BloomHeading'
import { heroSlideDatas } from '@/constants/heroSlideData'
import Image from 'next/image'

const BloomSection = ({ title, des }: { title: string, des: string }) => {
  return (
    <section className='bg-[#E9EDF2]'>
      <div className='maxWidth py-20'>
        {/* <h2>See Why Brands Choose Blooming Brands And Why You Should Too.</h2>
        <p>Explore real feedback from real clients then start your story with us.</p> */}
        <div className='pb-16'>
          <BloomHeading title="See Why Brands Choose Blooming Brands And Why You Should Too." des="Explore real feedback from real clients then start your story with us." />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2 md:px-4 lg:px-8 xl:px-16'>
          {heroSlideDatas?.slice(0, 5)?.map((review, index) => (
            <div key={index}>
              <Image src={review?.img} alt="content image" width={500} height={500} className='object-cover w-full' />
            </div>
          ))}
        </div>
      </div>
      <div className='maxWidth pb-20'>
        <>
          <BloomHeading title={title} des={des} />
        </>
        <>
          <BloomComponent min={0} max={3} />
        </>
        <div className='max-w-[200px] mx-auto pt-16'>
          <CustomButton text="View Portfolio" url="#" />
        </div>
      </div>
    </section>
  )
}

export default BloomSection
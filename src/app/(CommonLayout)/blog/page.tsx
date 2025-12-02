import CustomButton from '@/components/ui/CustomButton'
import Image from 'next/image'
import React from 'react'
// import blogBanner from "@/assets/common/blog/blogBanner.png"
import { myFetch } from '@/utils/myFetch'
import { formatImagePath } from '@/utils/formatImagePath'
import type { Metadata } from 'next'
import blogHeroImg from "@/assets/common/bloghero.jpg"
// import Link from 'next/link'

export interface IBlog {
  _id: string;
  image: string;
  title: string;
  slug: string;
  details: string;
  detailsTextEditor?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export async function generateMetadata(): Promise<Metadata> {
  const res = await myFetch("/blog");
  let blogDescription = "";

  res?.data?.forEach((blog: IBlog) => {
    blogDescription += blog?.title;
  });

  return {
    title: "Blog - The Social Chance",
    description: blogDescription,
  };
}




const Blog = async () => {

  const res = await myFetch("/blog");
  const blogDatas = res?.data;

  return (
    <div className='pb-20'>
      <div className='max-w-[1400px] mx-auto h-[500px] flex justify-between items-center bg-gray-800 bg-no-repeat bg-cover relative' style={{ backgroundImage: `url(${blogHeroImg?.src})` }}>

        <div className='h-[80%] w-full md:max-w-[50%] ml-20 px-2 py-1 md:px-10 md:py-4 bg-white flex flex-col justify-center items-end customShadow3 gap-3'>
          <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold text-font01 lg:leading-16'>{blogDatas[0]?.title}</h1>
          <p>{blogDatas[0]?.details.slice(0, 120)}...</p>
          {/* <Link href={`/blog/${blogDatas[0]?._id}`} className='mt-4 bg-yellow-200 px-6 py-1 rounded-md'>Read More</Link> */}
          <div className='w-full max-w-[200px]'>
            <CustomButton text="Read More" url={`/blog/${blogDatas[0]?.slug}`} className='customShadow3' />
          </div>
        </div>
      </div>
      {/* <div className='max-w-[1400px] mx-auto h-[500px] flex justify-between items-center bg-gray-800'>
        <div className='basis-[40%] h-full relative'>
          <h1 className='h-[400px] absolute z-10 left-10 top-10 bg-white text-3xl md:text-4xl xl:text-5xl font-bold text-font01 lg:leading-16'>The Social Chance Journal<br />Where Ideas Take Root</h1>
        </div>
        <div className='basis-[60%]'>
          <Image src={blogHeroImg} alt="content image" width={1000} height={500} className='object-cover w-full h-full' />
        </div>
      </div> */}
      <div className='maxWidth flex flex-col items-start gap-2 pt-16'>
        <p className='text-center text-gray-700 font-semibold text-sm'>BROWSE AND READ THE LATEST BLOG POST</p>
        <h2 className='text-2xl md:text-3xl xl:text-5xl font-bold text-[#6D715F] text-center'>Latest Stories</h2>
      </div>
      <div className='maxWidth grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16'>
        {blogDatas?.map((data: IBlog) => (
          <div key={data._id} className='parentDiv rounded-lg customShadow4 p-4 space-y-4 flex flex-col '>
            <div className='rounded-lg overflow-hidden'>
              <Image src={formatImagePath(data.image)} width={500} height={300} alt="content image" className='object-cover w-full h-[240px] childDiv transition-transform duration-500 ease-in-out' />
            </div>
            <div className='flex-1 flex flex-col justify-between items-center gap-4'>
              <div className='flex-1 flex flex-col items-center gap-2 text-center'>
                <h3 className='text-lg md:text-xl font-bold text-font01'>{data.title}</h3>
                <p className='text-center'>{data.details.slice(0, 100)}</p>
              </div>
              <div className='w-full max-w-[200px] mx-auto'>
                <CustomButton text="Read More" url={`/blog/${data?.slug}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
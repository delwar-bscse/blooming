import CustomButton from '@/components/ui/CustomButton'
// import { blogDatas } from '@/constants/blogDatas'
import Image from 'next/image'
import React from 'react'
import blogBanner from "@/assets/common/blog/blogBanner.png"
import { myFetch } from '@/utils/myFetch'
import { formatImagePath } from '@/utils/formatImagePath'
import type { Metadata } from 'next'

export interface IBlog {
  _id: string;
  image: string;
  title: string;
  details: string;
  createdAt: string; // or `Date` if you parse it
  updatedAt: string; // or `Date` if you parse it
  __v: number;
}
 
export async function generateMetadata(): Promise<Metadata> {
 
  const res = await myFetch("/blog");
  const blogDatas = res?.data?.map((blog: IBlog) => ({
    title: blog.title,
    description: blog.details.slice(0, 100), // Short description for metadata
    image: formatImagePath(blog.image), // Ensure the image path is formatted correctly
    url: `/blog/${blog._id}`, // URL for the blog post
  }));
 
  const blogDatasJson = JSON.stringify(blogDatas);
 
  return {
    title: 'Blog - The Social Chance',
    description: blogDatasJson,
  }
}
 
// export const metadata: Metadata = {
//   title: 'Blog - The Social Chance',
// }



const Blog = async() => {

  const res = await myFetch("/blog");
  const blogDatas = res?.data;

  return (
    <div className='pb-20'>
      <div className='maxWidth flex justify-between items-center py-10'>
        <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold text-font01 lg:leading-16'>The Blooming Journal<br />Where Ideas Take Root</h1>
        <div className='basis-[40%]'>
          <Image src={blogBanner} alt="content image" width={500} height={500} className='object-cover w-full' />
        </div>
      </div>
      <div className='maxWidth grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {blogDatas?.map((data : IBlog)=>(
          <div key={data._id} className='parentDiv rounded-lg shadow-lg p-4 space-y-4'>
            <div className='rounded-lg overflow-hidden'>
              <Image src={formatImagePath(data.image)} width={500} height={500} alt="content image" className='object-cover w-full childDiv transition-transform duration-500 ease-in-out' />
            </div>
            <div className='flex flex-col items-center gap-4'>
              <h3 className='text-lg md:text-xl font-bold text-font01'>{data.title}</h3>
              <p className='text-center'>{data.details.slice(0, 100)}</p>
              <div className='w-full max-w-[200px] mx-auto'>
                <CustomButton text="Read More" url={`/blog/${data._id}`}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
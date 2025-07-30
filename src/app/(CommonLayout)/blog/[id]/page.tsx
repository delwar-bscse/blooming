
import Image from 'next/image'
import React from 'react'
import { myFetch } from '@/utils/myFetch'
import { formatImagePath } from '@/utils/formatImagePath'
import { Metadata } from 'next';
import { IBlog } from '../page';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {

  const id = (await params).id;

  const res = await myFetch(`/blog/${id}`, {
    method: "GET",
  })
  const blog: IBlog = res?.data;

  const blogData = {
    title: blog.title,
    description: blog.details.slice(0, 100), // Short description for metadata
    image: formatImagePath(blog.image), // Ensure the image path is formatted correctly
    url: `/blog/${blog._id}`, // URL for the blog post
  }

  const blogJson = JSON.stringify(blogData);

  return {
    title: 'Blog - The Social Chance',
    description: blogJson,
  }
}


const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const res = await myFetch(`/blog/${id}`, {
    method: "GET",
  })
  const blogData = res?.data;

  return (
    <div>
      <div className='maxWidth space-y-20'>

        {/* -------------------------- Deep Fake Content -------------------------- */}
        <div className='space-y-5 py-16'>
          <h2 className='text-xl sm:text-3xl md:text-6xl font-bold text-font02 pb-3'>{blogData?.title}</h2>
          <p className='text-justify text-lg text-gray-700'>
            <span className="float-right ml-8 mb-4 mt-2">
              <Image src={formatImagePath(blogData?.image ?? "")} width={800} height={600} alt="content image" className="rounded" />
            </span>
            {blogData?.details}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Blog
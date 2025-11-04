
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
    title: blog?.title ?? "",
    description: blog.details.slice(0, 100) ?? "",
    detailsTextEditor: blog?.detailsTextEditor ?? "",
    image: formatImagePath(blog.image ?? ""),
    url: `/blog/${blog._id}`,
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
    <div className='maxWidth space-y-8 pb-16'>

      {/* -------------------------- blog Image & Title -------------------------- */}
      <div className='space-y-5 py-8'>
        <h2 className='text-xl sm:text-3xl md:text-6xl font-bold text-font02 pb-3'>{blogData?.title}</h2>
        <Image src={formatImagePath(blogData?.image ?? "")} width={800} height={600} alt="cover image" className="rounded" />
      </div>
      {/* -------------------------- blog Content -------------------------- */}
      <div
        className="prose jodit-wysiwyg"
        dangerouslySetInnerHTML={{ __html: blogData?.detailsTextEditor ?? "" }}
      />
    </div>
  )
}

export default Blog
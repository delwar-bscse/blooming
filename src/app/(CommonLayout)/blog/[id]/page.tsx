
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

  return {
    title: blog?.title ?? 'Blog - The Social Chance',
    description: blog.details ?? "",
  }
}


const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const res = await myFetch(`/blog/${id}`, {
    method: "GET",
  })
  const blogData = res?.data;

  return (
    <div className='maxWidth space-y-4 py-12'>

      {/* -------------------------- blog Image & Title -------------------------- */}
      <div className='space-y-6'>
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
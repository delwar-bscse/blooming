"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { myFetch } from '@/utils/myFetch'
import { formatImagePath } from '@/utils/formatImagePath'
import { IBlog } from '../page'

const Blog = () => {
  const [blogData, setBlogData] = React.useState<IBlog>({} as IBlog);
  const params = useParams();
  const id = params.id

  useEffect(() => {
    const getPost = async () => {
      const res = await myFetch(`/blog/${id}`, {
        method: "GET",
      })
      if(res.success){
        setBlogData(res.data)
      }

    }
    getPost();
  },[id])

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
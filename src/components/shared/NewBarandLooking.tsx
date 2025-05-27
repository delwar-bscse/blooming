import Image from 'next/image'
import React from 'react'
import video_analysis from '@/assets/common/video_analysis.png'

const NewBarandLooking = () => {
  return (
    <div>
      <div className='maxWidth grid grid-cols-1-reverse sm:grid-cols-2 items-center justify-between gap-10'>
        <div>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 pb-4'>New brand looking to be seen</h2>
          <p className='text-gray-600'>&quot;New brand looking to be seen? Established brand ready to reignite the spark?No worries! we&apos;re here to make it all work for you.&quot;</p>
        </div>
        <div>
          <Image src={video_analysis} alt="video analysis"  />
        </div>
      </div>
    </div>
  )
}

export default NewBarandLooking
"use client"

import React from 'react'
import BloomComponent from '../shared/BloomComponent'
import BloomHeading from '../shared/BloomHeading'

const BloomSectionPortfolio = ({title,des}:{title:string,des:string}) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <section>
      <div className='maxWidth pt-20'>
        <>
          <BloomHeading title={title} des={des} />
        </>
        <>
          {showMore ? (
            <BloomComponent min={0} />
          ) : (
            <BloomComponent min={0} max={6} />
          )}
        </>
        <div className='max-w-[200px] mx-auto py-8'>
          <button onClick={() => setShowMore(!showMore)} className='bg-[#FFECAC] hover:bg-[rgb(255,231,152)] block text-center py-2 px-2 w-full rounded-md shadow-sm cursor-pointer text-gray-700 hover:text-gray-500 font-semibold transition-all duration-500'>{showMore ? 'Show Less' : 'Show More'}</button>
        </div>
      </div>
    </section>
  )
}

export default BloomSectionPortfolio
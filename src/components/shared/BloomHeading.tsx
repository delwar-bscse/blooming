import React from 'react'

const BloomHeading = ({title,des}:{title:string,des:string}) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 pb-4'>{title}</h2>
          <p className='text-gray-600'>{des}</p>
        </div>
    </>
  )
}

export default BloomHeading
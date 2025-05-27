import React from 'react'

const Title = ({title}:{title:string}) => {
  return (
    <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-center text-gray-800 pb-10'>{title}</h2>

  )
}

export default Title
import React from 'react'
import BloomComponent from '../shared/BloomComponent'
import CustomButton from '../ui/CustomButton'
import BloomHeading from '../shared/BloomHeading'

const BloomSection = ({title,des}:{title:string,des:string}) => {
  return (
    <section>
      <div className='maxWidth'>
        <>
          <BloomHeading title={title} des={des} />
        </>
        <>
          <BloomComponent min={0} max={3} />
        </>
        <div className='max-w-[200px] mx-auto py-8'>
          <CustomButton text="View Portfolio" url="#" />
        </div>
      </div>
    </section>
  )
}

export default BloomSection
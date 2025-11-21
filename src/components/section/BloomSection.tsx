import BloomComponent from '../shared/BloomComponent'
import CustomButton from '../ui/CustomButton'
import BloomHeading from '../shared/BloomHeading'
import BloomSectionSlider from './BloomSectionSlider'

const BloomSection = async ({ title, des }: { title: string, des: string }) => {


  return (
    <section className='bg-[#E9EDF2]'>
      <div className='maxWidth py-20'>
        <div className='pb-16'>
          <BloomHeading title={`Work You'd Be Proud To Present To Your Clients`} des="See The Quality And Versatility Our Creative Team Brings To The Table." />
        </div>
        <div>
          <BloomSectionSlider url="/upload-video?category=Landing Page" />
        </div>
      </div>
      <div className='max-w-[1200px] w-full mx-auto px-4 pb-20'>
        <>
          <BloomHeading title={title} des={des} />
        </>
        <>
          <BloomComponent min={0} max={3} />
        </>
        <div className='max-w-[200px] mx-auto pt-16'>
          <CustomButton text="View Portfolio" url="/portfolio" />
        </div>
      </div>
    </section>
  )
}

export default BloomSection
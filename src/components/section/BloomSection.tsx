import BloomComponent from '../shared/BloomComponent'
import CustomButton from '../ui/CustomButton'
import BloomHeading from '../shared/BloomHeading'
import { myFetch } from '@/utils/myFetch'
// import VideoViewCard, { VideoPlayerProvider } from '../cui/VideoViewCard'
import VideoView from '../cui/ViewVideo'

const BloomSection = async ({ title, des }: { title: string, des: string }) => {

  const res = await myFetch(`/upload-video?category=Landing Page`, {
    method: "GET",
  })


  return (
    <section className='bg-[#E9EDF2]'>
      <div className='maxWidth py-20'>
        <div className='pb-16'>
          <BloomHeading title="See Why Brands Choose Blooming Brands And Why You Should Too." des="Explore real feedback from real clients then start your story with us." />
        </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2 md:px-4 lg:px-8 xl:px-16 justify-around'>
            {res?.data?.videos?.slice(0, 5)?.map((video: Record<string, unknown>, index: number) => (
              <VideoView key={index} videoUrl={video.url as string} videoId={`video-${video.key as string}`} />
            ))}
          </div>
      </div>
      <div className='max-w-[1200px] w-full mx-auto pb-20'>
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
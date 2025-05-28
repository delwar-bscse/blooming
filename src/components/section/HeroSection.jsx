import Image from "next/image"
import heroImage from "@/assets/common/heroImage2.png"
import CustomButton from "../ui/CustomButton"


const HeroSection = () => {
  return (
    <section>
      <div className="maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-10 p-5">
        <div className="basis-[60%] flex flex-col items-center justify-center gap-6">
          <h2 className='text-[#636C43] text-3xl md:text-5xl lg:text-6xl font-bold'>Blooming Brands</h2>
          <p className='text-[#545454] text-center max-w-[650px]'>whether you are here to create or collaborate this is where it all starts.creator and brand connects a space for authentic collaboration and impactful ugc content</p>
          <div className="w-full max-w-[500px] flex flex-col md:flex-row gap-4 mt-4">
            <CustomButton text="Apply As Creators" />
            <CustomButton text="Hire a Creator" />
          </div>
        </div>
        <div>
          <Image
            src={heroImage}
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
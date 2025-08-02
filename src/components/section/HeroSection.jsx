"use client"
import Image from "next/image"
import heroImage from "@/assets/common/heroImage2.png"
import CustomButton from "../ui/CustomButton"
import { MarqueeDemo } from "../shared/HeroMarquee";
// import butterfly from "@/assets/common/butterfly.png"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { motion } from "framer-motion"


const HeroSection = () => {
  return (
    <section className="bg-[#F9F6F1] py-10 space-y-2" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div className="relative z-10">
        <div className="parentDiv relative z-10 maxWidth flex flex-col-reverse sm:flex-row items-center justify-between gap-10 p-5">
          <div className=" basis-[60%] flex flex-col  justify-center gap-6">
            <SparklesText>
              <TypingAnimation className='text-[#636C43] text-3xl md:text-5xl lg:text-7xl font-bold' startOnView={true} duration={100}
              style={{ textShadow: '4px 4px 8px rgba(1, 1, 0, 0.6)' }}
              >
                The Social Chance
              </TypingAnimation>
            </SparklesText>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
              viewport={{ once: false }}
              className='text-[#545454]  max-w-[650px]'>whether you are here to create or collaborate this is where it all starts.creator and brand connects a space for authentic collaboration and impactful ugc content
            </motion.p>
            <div className="w-full max-w-[500px] flex flex-col md:flex-row gap-4 mt-4">
              <CustomButton text="Apply As Creator" url="/creator-signup" variant="button02" />
              <CustomButton text="Hire a Creator" url="/brand-form?step=1" variant="button02" />
            </div>
          </div>
          <div className="hover:scale-105 transition-transform duration-500 ease-in-out">
            <Image
              src={heroImage}
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* <Image src={butterfly} alt="butterfly" width={100} height={100} className='absolute top-10 left-10' />
        <Image src={butterfly} alt="butterfly" width={100} height={100} className='absolute bottom-10 right-10' /> */}
      </div>
      <div className="pb-10">
        <MarqueeDemo />
      </div>
    </section>
  )
}

export default HeroSection
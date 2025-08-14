
import ContactUs from '@/components/form/ContactUs'
import Image from 'next/image'
import React from 'react'
// import haveQuestion from "@/assets/common/haveQuestions.png";
import type { Metadata } from 'next'
import { myFetch } from '@/utils/myFetch';
import contactusImg from "@/assets/common/contactus.png"


export const metadata: Metadata = {
  title: 'Contact Us - The Social Chance',
}

const Contact = async () => {
  const res = await myFetch(`/upload-video?category=Contact Us`, {
    method: "GET",
  })
  console.log("Contact Us Response from server:", res);

  return (
    <div>
      {/* <div className='maxWidth flex flex-col-reverse sm:flex-row sm:items-center justify-between' style={{ height: "calc(100vh - 150px)" }}>
        <div className='basis-[50%]'>
          <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-font01 lg:leading-20 text-center'>Have Questions?<br />Reach Out!</h2>
        </div>

        <div className='basis-[50%]'>
          <Image src={haveQuestion} alt="contact image" width={800} height={700} />
        </div>
      </div> */}
      <div>
        <div className=''>
          <Image src={contactusImg} alt="contact image" width={1900} height={500} className='w-full h-auto object-cover' />
        </div>
        <div className='flex items-center justify-center pt-10'  style={{ minHeight: "calc(100vh - 680px)" }}>
          <p className={`font-semibold text-lg md:text-3xl text-gray-700 text-center leading-12`}>CONTACT US VIA THE FORM BELOW & <br />WE&apos;LL GET BACK TO YOUR AS SOON AS WE CAN.</p>
        </div>
      </div>
      {/* <div>
        <video width="40" height="20" className='h-full max-h-[500px] w-full max-w-full object-cover'
        autoPlay={true} loop controls={false}
        >
          <source src={res.data.videos[0].url as string ?? ""} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className='pt-10'>
        <ContactUs />
      </div>
    </div>
  )
}

export default Contact
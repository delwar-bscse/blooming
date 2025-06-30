
import ContactUs from '@/components/form/ContactUs'
import Image from 'next/image'
import React from 'react'
import haveQuestion from "@/assets/common/haveQuestions.png";

const Contact = () => {
  return (
    <div>
      <div className='maxWidth flex flex-col-reverse sm:flex-row sm:items-center justify-between' style={{height: "calc(100vh - 150px)"}}>
        <div  className='basis-[50%]'>
          <h2 className='text-3xl md:text-5xl xl:text-6xl font-bold text-font01 lg:leading-20 text-center'>Have Questions?<br/>Reach Out!</h2>
        </div>

        <div className='basis-[50%]'>
          <Image src={haveQuestion} alt="contact image" width={800} height={700} />
        </div>
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  )
}

export default Contact
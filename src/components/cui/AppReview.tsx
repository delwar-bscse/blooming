/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";

function AppReview() {
  const [isReview, setIsReview] = useState<boolean>(true);


  async function handleSubmit() {
    console.log("Submitted Data:");


    document.getElementById("cancel")?.click()
  }


  return (
    <div>
      {isReview ? <div>
        <p className='text-gray-700 text-xl font-semibold'>We value your thoughts! Tell us how was your experience with our team was ?</p>
        <textarea className='w-full border rounded-md p-2 mt-2' rows={4} placeholder='Write your review here...'></textarea>
        <div className='mt-4 flex justify-end'>
          <Button type="button" onClick={() => handleSubmit()} variant="customYellow" size="llg" className="w-32">
            Send
          </Button>
        </div>
      </div> :
      <div className='text-gray-700 text-4xl font-semibold mt-4 text-center'>Thank You</div>}
    </div>
  )
}

export default AppReview;
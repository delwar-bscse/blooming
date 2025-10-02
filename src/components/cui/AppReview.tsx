import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { myFetch } from '@/utils/myFetch';

function AppReview() {
  const [isReview, setIsReview] = useState<boolean>(true);
  const [reviewData, setReviewData] = useState<string>();


  async function handleSubmit() {
    if (!reviewData) {
      toast.error("Please write a review before send.");
      return;
    }
    console.log("Submitted Data:", reviewData);
    const res = await myFetch(`/review`, {
      method: "POST",
      body: { review: reviewData },
    });
    console.log(res);
    if (res.success) {
      setIsReview(false);
    } else {
      toast.error(res.message || "Failed to send review!");
    }
  }


  return (
    <div>
      {isReview ? <div>
        <p className='text-gray-700 text-xl font-semibold'>We value your thoughts! Tell us how was your experience with our team was ?</p>
        <textarea value={reviewData} onChange={(e) => setReviewData(e.target.value)} className='w-full border rounded-md p-2 mt-2' rows={4} placeholder='Write your review here...'></textarea>
        <div className='mt-4 flex justify-end'>
          <Button type="button" onClick={() => handleSubmit()} variant="customYellow" size="llg" className="w-32">
            Send
          </Button>
        </div>
      </div> :
        <div className='text-gray-600 text-4xl font-bold my-4 text-center'>Thank You</div>}
    </div>
  )
}

export default AppReview;
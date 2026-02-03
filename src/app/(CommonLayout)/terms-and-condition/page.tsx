import { myFetch } from '@/utils/myFetch'
import React from 'react'

const TermsAndCondition = async() => {
  const res = await myFetch(`/setting`, {
    method: "GET",
  })
  // console.log("Terms and Condition : ", res)

  return (
    <div className='maxWidth min-h-screen'>
      <div
        className="prose jodit-wysiwyg"
        dangerouslySetInnerHTML={{ __html: res?.data?.termsOfService ?? "" }}
      />
    </div>
  )
}

export default TermsAndCondition
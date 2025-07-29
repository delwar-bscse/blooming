import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqDatas } from '@/constants/faqDatas'
import { faqType } from '@/types/types'
import Title from './Title'

const FAQ = () => {
  return (
    <div className='max-w-[960px] w-full mx-auto'>
      <Title title="Frequently Asked Questions" />
      <div>
        <Accordion type="single" collapsible>
          {faqDatas?.map((faq:faqType)=>(
            <AccordionItem key={faq.id} value={faq.id.toString()}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ



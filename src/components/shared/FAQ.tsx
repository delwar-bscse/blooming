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
const bgColor = ["#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4", "#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4", "#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4", "#FFF9E5", "#E9EDF2", "#EBE2D1", "#E8E9E4"];

const FAQ = () => {
  return (
    <div className='max-w-[960px] w-full mx-auto px-2'>
      <Title title="Frequently Asked Questions" />
      <div>
        <Accordion type="single" collapsible>
          {faqDatas?.map((faq: faqType, index: number) => (
            <AccordionItem key={faq.id} value={faq.id.toString()} style={{ backgroundColor: bgColor[index] }}>
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



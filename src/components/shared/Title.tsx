import { cn } from '@/lib/utils'
import React from 'react'

const Title = ({title, className}:{title:string, className?:string}) => {
  return (
    <h2 className={cn("text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 pb-4", className)}>{title}</h2>

  )
}

export default Title
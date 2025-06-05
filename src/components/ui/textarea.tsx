import * as React from "react"

import { cn } from "@/lib/utils"

const variantClasses: Record<string, string> = {
  borderblack: "border-2 border-gray-400 focus-visible:ring-gray-200",
  // Add more variants as needed
}

type TextareaProps = React.ComponentProps<"textarea"> & {
  variant?: keyof typeof variantClasses
}

function Textarea({ className, variant, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        " placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-48 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        variant ? variantClasses[variant] : "",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

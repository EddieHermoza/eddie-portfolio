'use client'

import ReactMarkdown, { Components } from 'react-markdown'
const markdownComponents: Components = {
  h1: ({ ...props }) => {
    return <h1 className="animate-in fade-in ease-in duration-200" {...props} />
  },
  li: ({ ...props }) => {
    return (
      <li
        className="animate-in fade-in ease-in duration-200 border-b border-border/40 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0 list-none"
        {...props}
      />
    )
  },
  p: ({ ...props }) => {
    return (
      <p
        className="animate-in fade-in ease-in duration-200 border-b border-border/40 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0"
        {...props}
      />
    )
  },
  strong: ({ ...props }) => {
    return (
      <strong className="animate-in fade-in ease-in duration-200" {...props} />
    )
  },
  em: ({ ...props }) => {
    return <em className="animate-in fade-in ease-in duration-200" {...props} />
  },
  ul: ({ ...props }) => {
    return <ul className="list-none p-0 m-0" {...props} />
  },
}

export default function CustomMarkdown({ children }: { children: string }) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-xs xs:text-sm md:text-sm lg:text-lg font-light leading-relaxed">
      <ReactMarkdown components={markdownComponents}>{children}</ReactMarkdown>
    </div>
  )
}

import { HTMLAttributes } from 'react'
import { cn } from '@/modules/shared/lib/utils'

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  variant: 'h1' | 'h2' | 'h3'
}

export default function Title({
  variant,
  className,
  children,
  ...rest
}: TitleProps) {
  const baseStyles = 'font-light text-black dark:text-white'

  const variants = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
  }

  const Component = variant

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      {...rest}
    >
      {children}
    </Component>
  )
}

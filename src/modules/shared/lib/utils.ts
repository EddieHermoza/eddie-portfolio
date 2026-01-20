import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const cx = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(' ')
}
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const handleScroll = (id: string) => {
  const element = document.getElementById(id)
  if (!element) return
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

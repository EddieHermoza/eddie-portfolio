interface ErrorMessageProps {
  message: string | undefined | null
  className?: string
}

export default function ErrorMessage({
  message,
  className,
}: ErrorMessageProps) {
  if (!message) return null
  return (
    <span className={`${className} text-red-400 text-xs tracking-wider`}>
      {message}
    </span>
  )
}

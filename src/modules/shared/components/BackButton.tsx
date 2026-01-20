'use client'
import { useRouter } from 'next/navigation'
import { IoIosArrowRoundBack } from 'react-icons/io'
interface Props {
  className?: string
}
export default function BackButton({ className }: Props) {
  const { back } = useRouter()

  return (
    <button
      onClick={() => back()}
      className={`${className} rounded-full h-16 px-5 hover:bg-primary/10 duration-200 flex-center active:bg-primary/10`}
    >
      <IoIosArrowRoundBack size={26} />
      Volver al inicio
    </button>
  )
}

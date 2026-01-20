import BackButton from '@/modules/shared/components/BackButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackButton className="absolute top-5 left-1/2 -translate-x-1/2 max-lg:top-2 z-50 w-auto flex-center px-5 py-2 gap-3" />
      {children}
      <BackButton className="mx-auto z-50 w-auto flex-center px-5 py-2 gap-3 mb-20 max-md:mb-15" />
    </>
  )
}

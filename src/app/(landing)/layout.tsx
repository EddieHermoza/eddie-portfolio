import AppCursor from '@/modules/shared/components/AppCursor'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AppCursor />

    </>
  )
}

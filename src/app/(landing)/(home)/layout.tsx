import SideBar from '@/modules/landing/home/components/SideBar'
import OpenToWork from '@/modules/landing/home/components/OpenToWork'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[100svh] w-screen overflow-x-hidden">
      <SideBar />
      <main className="size-full overflow-y-auto relative overflow-x-hidden custom-scrollbar">
        {children}
        <OpenToWork />
      </main>
    </div>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[100svh] w-screen overflow-x-hidden">
      <div className="bg-background size-full relative px-2 py-5 sm:pt-10 sm:px-10 pb-20 flex flex-col gap-5 overflow-x-hidden overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
  )
}

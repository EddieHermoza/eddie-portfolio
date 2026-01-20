export default function OpenToWork() {
  return (
    <div className="hidden fixed top-10 right-20 max-sm:right-5 max-sm:top-7 max-sm:gap-2 flex-center gap-5 z-50 bg-background/60 backdrop-blur-xs p-4 rounded-full">
      <div className="loader filter invert-100 dark:invert-0 size-5 max-md:size-3" />
      <span className="text-3xl max-md:text-xl ">Open to work</span>
    </div>
  )
}

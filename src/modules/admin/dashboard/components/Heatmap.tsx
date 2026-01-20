import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/modules/shared/components/ui/tooltip'

const year = new Date().getFullYear()
const month = new Date().getMonth()
const DAYS = new Date(year, month + 1, 0).getDate()

const heatmapData = Array.from({ length: DAYS }, (_, i) => ({
  day: new Date(year, month, i + 1),
  commits: Math.floor(Math.random() * 12),
}))

function intensity(value: number) {
  if (value === 0) return 'bg-neutral-200'
  if (value < 3) return 'bg-emerald-200'
  if (value < 6) return 'bg-emerald-400'
  if (value < 9) return 'bg-emerald-600'
  return 'bg-emerald-800'
}

export function Heatmap() {
  return (
    <div className="grid grid-cols-10 gap-3 p-4">
      {heatmapData.map((value, i) => (
        <Tooltip key={i}>
          <TooltipTrigger asChild>
            <div
              className={`w-full hover:scale-110 duration-200 h-12 ${intensity(
                value.commits
              )}`}
            ></div>
          </TooltipTrigger>
          <TooltipContent className="pointer-events-none">
            <div className="text-xs flex flex-col gap-1 ">
              <span className="font-semibold">{value.day.toDateString()}</span>
              <span>{value.commits} commits</span>
            </div>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

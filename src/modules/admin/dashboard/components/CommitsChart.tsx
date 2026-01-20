'use client'

import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/modules/shared/components/ui/chart'

const chartData = [
  { month: 'January', commits: 12 },
  { month: 'February', commits: 25 },
  { month: 'March', commits: 41 },
  { month: 'April', commits: 55 },
  { month: 'May', commits: 73 },
  { month: 'June', commits: 95 },
  { month: 'July', commits: 120 },
  { month: 'August', commits: 150 },
  { month: 'September', commits: 180 },
  { month: 'October', commits: 220 },
  { month: 'November', commits: 260 },
  { month: 'December', commits: 300 },
]

const chartConfig = {
  commits: {
    label: 'Commits',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig

export function CommitsChart() {
  return (
    <ChartContainer config={chartConfig} className="max-h-96 w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        <Line
          dataKey="commits"
          type="monotone"
          stroke="var(--color-commits)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}

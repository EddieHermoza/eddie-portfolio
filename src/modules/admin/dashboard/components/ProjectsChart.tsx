'use client'

import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/modules/shared/components/ui/chart'

const chartData = [
  { status: 'Completados', projects: 275, fill: 'var(--color-Completados)' },
  { status: 'Desarrollo', projects: 200, fill: 'var(--color-Desarrollo)' },
  { status: 'Pausados', projects: 287, fill: 'var(--color-Pausados)' },
]

const chartConfig = {
  projects: {
    label: 'Proyectos',
  },
  Completados: {
    label: 'Completados',
    color: 'var(--chart-1)',
  },
  Desarrollo: {
    label: 'Desarrollo',
    color: 'var(--chart-2)',
  },
  Pausados: {
    label: 'Pausados',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig

export function ProjectsChart() {
  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.projects, 0)
  }, [])

  return (
    <ChartContainer config={chartConfig} className="size-96">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="projects"
          nameKey="status"
          innerRadius={100}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {total.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Proyectos
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="status" />}
          className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
        />
      </PieChart>
    </ChartContainer>
  )
}

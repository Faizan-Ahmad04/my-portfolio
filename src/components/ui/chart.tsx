
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

const THEMES = {
  light: {
    chart: {
      backgroundColor: "hsl(var(--background))",
      textColor: "hsl(var(--foreground))",
      fontSize: 12,
    },
    grid: {
      strokeDasharray: "3 3",
      stroke: "hsl(var(--border))",
    },
    legend: {
      wrapperStyle: {
        color: "hsl(var(--foreground))",
      },
    },
    tooltip: {
      contentStyle: {
        backgroundColor: "hsl(var(--background))",
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
      },
    },
  },
  dark: {
    chart: {
      backgroundColor: "hsl(var(--background))",
      textColor: "hsl(var(--foreground))",
      fontSize: 12,
    },
    grid: {
      strokeDasharray: "3 3",
      stroke: "hsl(var(--border))",
    },
    legend: {
      wrapperStyle: {
        color: "hsl(var(--foreground))",
      },
    },
    tooltip: {
      contentStyle: {
        backgroundColor: "hsl(var(--background))",
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
      },
    },
  },
} as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | undefined>(undefined)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a ChartProvider")
  }
  return context
}

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: any,
  key: string
) {
  return config[key]
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const { theme } = useTheme()
  const chartTheme = THEMES[theme as keyof typeof THEMES] || THEMES.dark

  return (
    <style
      id={id}
      dangerouslySetInnerHTML={{
        __html: `
          .recharts-wrapper {
            background-color: ${chartTheme.chart.backgroundColor} !important;
          }
          .recharts-text {
            fill: ${chartTheme.chart.textColor} !important;
            font-size: ${chartTheme.chart.fontSize}px !important;
          }
          .recharts-grid line {
            stroke: ${chartTheme.grid.stroke} !important;
            stroke-dasharray: ${chartTheme.grid.strokeDasharray} !important;
          }
          .recharts-legend-item-text {
            color: ${chartTheme.legend.wrapperStyle.color} !important;
          }
          .recharts-tooltip-wrapper {
            background-color: ${chartTheme.tooltip.contentStyle.backgroundColor} !important;
            border: ${chartTheme.tooltip.contentStyle.border} !important;
            border-radius: ${chartTheme.tooltip.contentStyle.borderRadius} !important;
          }
        `,
      }}
    />
  )
}

// Custom hook for theme (simplified version)
function useTheme() {
  return { theme: 'dark' as const }
}

const Chart = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    theme?: keyof typeof THEMES
  }
>(({ config, theme = "dark", className, children, ...props }, ref) => {
  const id = React.useId()

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        className={cn("space-y-4", className)}
        {...props}
      >
        <ChartStyle id={id} config={config} />
        {children}
      </div>
    </ChartContext.Provider>
  )
})
Chart.displayName = "Chart"

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    active?: boolean
    payload?: any[]
    label?: string
    labelFormatter?: (value: any, payload: any[]) => React.ReactNode
    labelClassName?: string
    formatter?: (value: any, name: string, props: any, index: number, payload: any) => React.ReactNode
    color?: string
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
    hideLabel?: boolean
    hideIndicator?: boolean
  }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item: any, index: number) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload?.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "flex h-2.5 w-2.5 items-center justify-center rounded-full",
                            indicator === "dashed" && "border border-dashed"
                          )}
                          style={{
                            backgroundColor: indicatorColor,
                          }}
                        />
                      )
                    )}
                    <div className="flex flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name || item.dataKey}
                        </span>
                        {nestLabel && tooltipLabel}
                      </div>
                      <span className="font-medium">
                        {item.value?.toLocaleString()}
                      </span>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltip.displayName = "ChartTooltip"

const ChartLegend = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    verticalAlign?: "top" | "middle" | "bottom"
    hideIcon?: boolean
    nameKey?: string
  }
>(
  (
    {
      className,
      verticalAlign = "top",
      hideIcon = false,
      nameKey,
      ...props
    },
    ref
  ) => {
    const { config } = useChart()

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        <RechartsPrimitive.Legend
          verticalAlign={verticalAlign}
          content={({ payload }) => {
            if (!payload?.length) {
              return null
            }

            return (
              <div
                className={cn(
                  "flex items-center gap-2",
                  verticalAlign === "top" && "flex-col",
                  verticalAlign === "bottom" && "flex-col-reverse"
                )}
              >
                {payload.map((item: any) => {
                  const key = `${nameKey || item.dataKey || "value"}`
                  const itemConfig = getPayloadConfigFromPayload(config, item, key)

                  return (
                    <div
                      key={item.dataKey}
                      className="flex items-center gap-1"
                    >
                      {itemConfig?.icon ? (
                        <itemConfig.icon />
                      ) : (
                        !hideIcon && (
                          <div
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor: item.color,
                            }}
                          />
                        )
                      )}
                      <span className="text-xs text-muted-foreground">
                        {itemConfig?.label || item.value}
                      </span>
                    </div>
                  )
                })}
              </div>
            )
          }}
        />
      </div>
    )
  }
)
ChartLegend.displayName = "ChartLegend"

export {
  Chart,
  ChartTooltip,
  ChartLegend,
  useChart,
  getPayloadConfigFromPayload,
}

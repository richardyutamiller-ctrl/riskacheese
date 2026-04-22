interface TrendBadgeProps {
  value: number
  pct: number
  /** Renders as a compact inline chip instead of a full row */
  compact?: boolean
}

export default function TrendBadge({ value, pct, compact }: TrendBadgeProps) {
  const positive = value >= 0
  const color = positive ? 'text-green-600' : 'text-red-500'
  const arrow = positive ? '↑' : '↓'
  const sign  = positive ? '+' : ''

  if (compact) {
    return (
      <span className={`text-xs font-medium ${color}`}>
        {arrow} {Math.abs(pct).toFixed(1)}%
      </span>
    )
  }

  return (
    <p className={`flex items-center gap-1 text-sm font-medium mt-1 ${color}`}>
      <span>{arrow}</span>
      <span>
        {sign}{value.toLocaleString()} ({sign}{pct.toFixed(1)}%)
      </span>
    </p>
  )
}

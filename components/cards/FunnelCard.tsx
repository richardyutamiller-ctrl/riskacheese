import type { FunnelCardData } from '@/lib/types'

export default function FunnelCard({ data }: { data: FunnelCardData }) {
  const max = Math.max(...data.stages.map((s) => s.count))

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Funnel</h2>
        <span className="text-xs text-gray-400">{data.source}</span>
      </div>

      <p className="text-base font-semibold text-gray-900 mb-5">{data.title}</p>

      <div className="space-y-4">
        {data.stages.map((stage, i) => (
          <div key={stage.name}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600">{stage.name}</span>
              <span className="font-semibold text-gray-900 tabular-nums">
                {stage.count.toLocaleString()}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-brand-400"
                style={{ width: `${(stage.count / max) * 100}%` }}
              />
            </div>
            {stage.conversionFromPrev !== null && (
              <p className="text-xs text-gray-400 mt-0.5">
                {stage.conversionFromPrev.toFixed(1)}% from previous stage
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500">
        <span>Top → bottom conversion</span>
        <span className="font-semibold text-gray-900">
          {((data.stages[data.stages.length - 1].count / data.stages[0].count) * 100).toFixed(1)}%
        </span>
      </div>
    </div>
  )
}

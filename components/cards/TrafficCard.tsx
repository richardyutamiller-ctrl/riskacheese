import type { TrafficCardData } from '@/lib/types'
import TrendBadge from '@/components/ui/TrendBadge'

export default function TrafficCard({ data }: { data: TrafficCardData }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Traffic</h2>
        <span className="text-xs text-gray-400">7d</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Sessions</p>
          <p className="text-2xl font-bold text-gray-900 tabular-nums">
            {data.sessions7d.toLocaleString()}
          </p>
          <TrendBadge value={data.sessionsChange7d} pct={data.sessionsChangePct7d} compact />
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Pageviews</p>
          <p className="text-2xl font-bold text-gray-900 tabular-nums">
            {data.pageviews7d.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Bounce rate</p>
          <p className="text-sm font-semibold text-gray-900 tabular-nums">
            {data.bounceRate.toFixed(1)}%
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Avg. duration</p>
          <p className="text-sm font-semibold text-gray-900">{data.avgSessionDuration}</p>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-2">Top pages</p>
        <ul className="space-y-1.5">
          {data.topPages.map((page) => (
            <li key={page.path} className="flex justify-between text-xs">
              <span className="text-gray-600 font-mono truncate">{page.path}</span>
              <span className="text-gray-900 font-semibold tabular-nums ml-3 shrink-0">
                {page.views.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

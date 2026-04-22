import type { RevenueCardData } from '@/lib/types'
import TrendBadge from '@/components/ui/TrendBadge'

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function RevenueCard({ data }: { data: RevenueCardData }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Revenue</h2>
        <span className="text-xs text-gray-400">30d</span>
      </div>

      <div className="mb-5">
        <p className="text-xs text-gray-500 mb-0.5">MRR</p>
        <p className="text-3xl font-bold text-gray-900 tabular-nums">{fmt(data.mrr)}</p>
        <TrendBadge value={data.mrrChange30d} pct={data.mrrChangePct30d} />
      </div>

      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">ARR</p>
          <p className="text-sm font-semibold text-gray-900 tabular-nums">
            {fmt(data.arr)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Customers</p>
          <p className="text-sm font-semibold text-gray-900 tabular-nums">
            {data.activeCustomers.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Churn</p>
          <p className="text-sm font-semibold text-red-500 tabular-nums">
            {data.churnRate.toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  )
}

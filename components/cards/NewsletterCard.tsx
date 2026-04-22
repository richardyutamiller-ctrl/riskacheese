import type { NewsletterCardData } from '@/lib/types'
import TrendBadge from '@/components/ui/TrendBadge'

export default function NewsletterCard({ data }: { data: NewsletterCardData }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Newsletter</h2>
      </div>

      <div className="mb-5">
        <p className="text-3xl font-bold text-gray-900 tabular-nums">
          {data.totalSubscribers.toLocaleString()}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">subscribers</p>
        <TrendBadge value={data.subscribersChange30d} pct={data.subscribersChangePct30d} />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Open rate</p>
          <p className="text-xl font-semibold text-gray-900 tabular-nums">
            {data.openRate.toFixed(1)}%
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Click rate</p>
          <p className="text-xl font-semibold text-gray-900 tabular-nums">
            {data.clickRate.toFixed(1)}%
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Last:{' '}
        <span className="text-gray-700 font-medium">{data.lastCampaign}</span>
        {' · '}
        {data.lastSentDate}
      </p>
    </div>
  )
}

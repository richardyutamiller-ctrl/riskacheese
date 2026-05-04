import {
  getFollowerData,
  getFunnelData,
  getRevenueData,
  getNewsletterData,
  getTrafficData,
} from '@/lib/data'
import FollowerCard   from '@/components/cards/FollowerCard'
import FunnelCard     from '@/components/cards/FunnelCard'
import RevenueCard    from '@/components/cards/RevenueCard'
import NewsletterCard from '@/components/cards/NewsletterCard'
import TrafficCard    from '@/components/cards/TrafficCard'

export default async function DashboardPage() {
  const [follower, funnel, revenue, newsletter, traffic] = await Promise.all([
    getFollowerData(),
    getFunnelData(),
    getRevenueData(),
    getNewsletterData(),
    getTrafficData(),
  ])

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Riskacheese</h1>
          <p className="text-sm text-gray-500 mt-0.5">Founder dashboard</p>
        </div>
        <span className="text-xs text-gray-400">
          {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <RevenueCard    data={revenue} />
        <FollowerCard   data={follower} />
        <NewsletterCard data={newsletter} />
        <FunnelCard     data={funnel} />
        <TrafficCard    data={traffic} />
      </div>
    </main>
  )
}

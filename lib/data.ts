import type {
  FollowerCardData,
  FunnelCardData,
  RevenueCardData,
  NewsletterCardData,
  TrafficCardData,
} from './types'

// Each function is async so swapping in a real API call is a one-line change:
//
//   export async function getFollowerData(): Promise<FollowerCardData> {
//     const res = await fetch('https://open.tiktokapis.com/v2/user/info/?fields=follower_count', {
//       headers: { Authorization: `Bearer ${process.env.TIKTOK_ACCESS_TOKEN}` },
//       next: { revalidate: 3600 },
//     })
//     if (!res.ok) throw new Error('TikTok API error')
//     return transformTikTokResponse(await res.json())
//   }

export async function getFollowerData(): Promise<FollowerCardData> {
  return {
    totalFollowers: 84_200,
    totalChange7d: 1_340,
    totalChangePct7d: 1.6,
    platforms: [
      {
        platform: 'tiktok',
        handle: '@riskacheese',
        followers: 54_100,
        followersChange7d: 980,
        followersChangePct7d: 1.8,
      },
      {
        platform: 'instagram',
        handle: '@riskacheese',
        followers: 21_800,
        followersChange7d: 310,
        followersChangePct7d: 1.4,
      },
      {
        platform: 'youtube',
        handle: 'Riskacheese',
        followers: 8_300,
        followersChange7d: 50,
        followersChangePct7d: 0.6,
      },
    ],
  }
}

// Brevo webinar funnel swap-in:
//
//   export async function getFunnelData(): Promise<FunnelCardData> {
//     const [contacts, events] = await Promise.all([
//       fetch('https://api.brevo.com/v3/contacts?listId=YOUR_LIST_ID&limit=1000', {
//         headers: { 'api-key': process.env.BREVO_API_KEY! },
//         next: { revalidate: 1800 },
//       }).then(r => r.json()),
//       fetch('https://api.brevo.com/v3/events?type=webinar', {
//         headers: { 'api-key': process.env.BREVO_API_KEY! },
//         next: { revalidate: 1800 },
//       }).then(r => r.json()),
//     ])
//     return transformBrevoFunnel(contacts, events)
//   }

export async function getFunnelData(): Promise<FunnelCardData> {
  return {
    title: 'Cheese Making Webinar',
    source: 'Brevo · Apr 2026',
    stages: [
      { name: 'Landing page visits', count: 4_820, conversionFromPrev: null },
      { name: 'Email opt-in',        count: 1_247, conversionFromPrev: 25.9 },
      { name: 'Registered',          count: 891,   conversionFromPrev: 71.5 },
      { name: 'Attended live',       count: 412,   conversionFromPrev: 46.2 },
      { name: 'Purchased',           count: 87,    conversionFromPrev: 21.1 },
    ],
  }
}

export async function getRevenueData(): Promise<RevenueCardData> {
  return {
    mrr: 12_480,
    mrrChange30d: 1_120,
    mrrChangePct30d: 9.9,
    arr: 149_760,
    activeCustomers: 312,
    churnRate: 2.1,
  }
}

export async function getNewsletterData(): Promise<NewsletterCardData> {
  return {
    totalSubscribers: 9_840,
    subscribersChange30d: 420,
    subscribersChangePct30d: 4.5,
    openRate: 38.2,
    clickRate: 6.4,
    lastCampaign: 'The Cheese Board Issue #47',
    lastSentDate: 'Apr 18, 2026',
  }
}

export async function getTrafficData(): Promise<TrafficCardData> {
  return {
    sessions7d: 18_450,
    sessionsChange7d: 2_310,
    sessionsChangePct7d: 14.3,
    pageviews7d: 41_200,
    bounceRate: 43.7,
    avgSessionDuration: '2m 14s',
    topPages: [
      { path: '/',        views: 12_400 },
      { path: '/shop',    views: 8_900 },
      { path: '/recipes', views: 6_200 },
      { path: '/about',   views: 3_100 },
      { path: '/webinar', views: 2_800 },
    ],
  }
}

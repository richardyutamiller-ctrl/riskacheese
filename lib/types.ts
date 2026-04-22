// ─── Follower Card ────────────────────────────────────────────────────────────

export type SocialPlatform = 'tiktok' | 'instagram' | 'youtube' | 'twitter'

export interface FollowerPlatform {
  platform: SocialPlatform
  handle: string
  followers: number
  followersChange7d: number
  followersChangePct7d: number
}

export interface FollowerCardData {
  totalFollowers: number
  totalChange7d: number
  totalChangePct7d: number
  platforms: FollowerPlatform[]
}

// ─── Funnel Card ──────────────────────────────────────────────────────────────

export interface FunnelStage {
  name: string
  count: number
  conversionFromPrev: number | null // null for the top-of-funnel stage
}

export interface FunnelCardData {
  title: string
  source: string // e.g. "Brevo · Apr 2026"
  stages: FunnelStage[]
}

// ─── Revenue Card ─────────────────────────────────────────────────────────────

export interface RevenueCardData {
  mrr: number
  mrrChange30d: number
  mrrChangePct30d: number
  arr: number
  activeCustomers: number
  churnRate: number
}

// ─── Newsletter Card ──────────────────────────────────────────────────────────

export interface NewsletterCardData {
  totalSubscribers: number
  subscribersChange30d: number
  subscribersChangePct30d: number
  openRate: number
  clickRate: number
  lastCampaign: string
  lastSentDate: string
}

// ─── Traffic Card ─────────────────────────────────────────────────────────────

export interface TopPage {
  path: string
  views: number
}

export interface TrafficCardData {
  sessions7d: number
  sessionsChange7d: number
  sessionsChangePct7d: number
  pageviews7d: number
  bounceRate: number
  avgSessionDuration: string
  topPages: TopPage[]
}

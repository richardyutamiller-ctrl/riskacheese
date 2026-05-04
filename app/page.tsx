import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">Riskacheese</span>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
          <Link
            href="/dashboard"
            className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
          Now in early access
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Know your numbers.<br />
          <span className="text-gray-400">Grow with confidence.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Riskacheese gives founders a single dashboard to track revenue, growth, and funnel performance — without the noise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="w-full sm:w-auto bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Get early access
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto text-sm text-gray-600 px-6 py-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '500+', label: 'Founders using it' },
            { value: '$2.4M', label: 'Revenue tracked' },
            { value: '12', label: 'Metrics at a glance' },
            { value: '< 5 min', label: 'Setup time' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">Everything a founder needs</h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          One place for all your key metrics — no spreadsheets, no stitching tools together.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '📈',
              title: 'Revenue tracking',
              desc: 'MRR, ARR, churn, and expansion revenue — updated daily.',
            },
            {
              icon: '🔁',
              title: 'Funnel visibility',
              desc: 'See where leads drop off and fix it before it costs you.',
            },
            {
              icon: '👥',
              title: 'Audience growth',
              desc: 'Followers, newsletter subscribers, and traffic in one view.',
            },
            {
              icon: '⚡',
              title: 'Zero setup',
              desc: 'Connect your tools in minutes — no engineer required.',
            },
            {
              icon: '📬',
              title: 'Weekly digest',
              desc: 'Get a summary of your key metrics delivered every Monday.',
            },
            {
              icon: '🔒',
              title: 'Private by default',
              desc: 'Your data stays yours. No third-party data sharing.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
          <p className="text-gray-500 mb-12">One plan. Everything included. No surprises.</p>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 max-w-sm mx-auto">
            <p className="text-sm font-medium text-gray-500 mb-2">Founder</p>
            <p className="text-5xl font-bold mb-1">$29</p>
            <p className="text-sm text-gray-400 mb-8">per month</p>
            <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left">
              {[
                'All metrics & integrations',
                'Unlimited history',
                'Weekly digest emails',
                'Shareable investor view',
                'Priority support',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-700 transition-colors text-center"
            >
              Start free trial
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get clarity?</h2>
        <p className="text-gray-500 mb-8">Join hundreds of founders who ship faster when they know their numbers.</p>
        <a
          href="#"
          className="inline-block bg-gray-900 text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Get started free
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold">Riskacheese</span>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Riskacheese. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

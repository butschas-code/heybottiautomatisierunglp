import { useInView } from '../hooks/useInView'
import { BarChart3, TrendingUp, MessageSquare, Search } from 'lucide-react'

const INSIGHTS = [
  {
    icon: MessageSquare,
    color: '#28E6B4',
    title: 'Top Customer Questions',
    desc: 'See exactly which questions come up most often — and use that to improve your products, content, and onboarding.',
  },
  {
    icon: TrendingUp,
    color: '#22d3ee',
    title: 'Demand Signals',
    desc: 'Identify which products or services generate the most customer interest before you invest in scaling them.',
  },
  {
    icon: Search,
    color: '#a78bfa',
    title: 'Sales Objections',
    desc: 'Understand where customers hesitate before buying — and fix the gaps in your offer, pricing, or explanation.',
  },
  {
    icon: BarChart3,
    color: '#f472b6',
    title: 'Market Language',
    desc: 'Learn how your customers actually describe their problems — and use their language in your marketing.',
  },
]

const DISCOVERIES = [
  'Top customer questions',
  'Repeated objections',
  'Most requested products',
  'Confusing parts of your offer',
  'Language your customers actually use',
  'New service opportunities',
  'Sales bottlenecks',
  'Support pressure points',
  'Regional or language-specific demand',
  'Content and campaign ideas',
]

export default function Results() {
  const [ref, inView] = useInView()
  const [listRef, listInView] = useInView()

  return (
    <section id="intelligence" className="py-24 sm:py-32 bg-botti-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Business Intelligence</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            See what your customers
            <br />
            <span className="gradient-text">are really telling you.</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            Your customer conversations are one of the most valuable data sources in your business.
            Heybotti helps you transform daily communication into actionable insight.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {INSIGHTS.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`section-reveal ${inView ? 'visible' : ''} p-6 rounded-2xl border border-botti-border bg-botti-card hover:border-botti-teal/20 transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                <p className="text-botti-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div ref={listRef} className={`grid lg:grid-cols-2 gap-8 items-center section-reveal ${listInView ? 'visible' : ''}`}>
          <div>
            <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-6 leading-tight">
              You can discover:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {DISCOVERIES.map(d => (
                <div key={d} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-botti-teal flex-shrink-0 mt-2" />
                  <span className="text-white/75 text-sm leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-botti-teal/20 bg-gradient-to-br from-botti-teal-dim to-botti-card p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-botti-teal/5 blur-2xl pointer-events-none" />
            <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-5">The difference</p>
            <p className="text-xl sm:text-2xl font-light text-white leading-relaxed mb-6">
              "This gives you more than automation. It gives you a clearer view of your market."
            </p>
            <p className="text-botti-muted text-sm">
              Every Digital Brand Personality built with Heybotti includes built-in conversation analysis — not as an add-on, but as a core function.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useInView } from '../hooks/useInView'

const CAPABILITIES = [
  'Customer questions',
  'Product explanations',
  'Service recommendations',
  'Lead qualification',
  'Order requests',
  'WhatsApp inquiries',
  'Website chat',
  'Customer onboarding',
  'FAQ automation',
  'Follow-up preparation',
  'Internal summaries',
  'Conversation insights',
  'Market feedback',
  'Product demand signals',
  'Sales objections',
  'Customer language analysis',
]

const DIFFERENTIATORS = [
  {
    title: 'Not reactive. Proactive.',
    desc: 'Most chatbots wait for a question, search for an answer, and respond. Your Digital Brand Personality connects customer dialogue with business learning — every conversation makes your system smarter.',
    color: '#28E6B4',
  },
  {
    title: 'Not generic. Branded.',
    desc: 'Your AI should not sound like software. It should sound like your business. Configured around your tone of voice, dialect, customer type, sales style, and brand vocabulary.',
    color: '#a78bfa',
  },
  {
    title: 'Not just answers. Intelligence.',
    desc: 'Identify which products need better explanation, which services create demand, which questions should become content, and where your team loses the most time.',
    color: '#f472b6',
  },
]

export default function Services() {
  const [ref, inView] = useInView()
  const [diffRef, diffInView] = useInView()

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-botti-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What it can do */}
        <div ref={ref} className={`text-center mb-16 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">What it can do</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Your branded AI assistant
            <br />
            <span className="gradient-text">helps with all of this</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            It does not only answer. It learns what your customers care about.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-20 section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap}
              className="flex items-center gap-2.5 p-4 rounded-xl border border-botti-border bg-botti-card hover:border-botti-teal/20 transition-all duration-200 group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-botti-teal flex-shrink-0 group-hover:scale-125 transition-transform" />
              <span className="text-sm text-white/75 group-hover:text-white transition-colors">{cap}</span>
            </div>
          ))}
        </div>

        {/* Why different */}
        <div ref={diffRef} className={`text-center mb-12 section-reveal ${diffInView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Why this is different</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Not a chatbot.
            <br />
            <span className="gradient-text">A brand personality with operational intelligence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((d, i) => (
            <div
              key={d.title}
              className={`section-reveal ${diffInView ? 'visible' : ''} p-7 rounded-2xl border border-botti-border bg-botti-card hover:border-botti-teal/20 transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-2 h-8 rounded-full mb-5" style={{ backgroundColor: d.color }} />
              <h3 className="font-display font-bold text-white text-xl mb-3">{d.title}</h3>
              <p className="text-botti-muted text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-14 p-8 rounded-2xl border border-botti-teal/20 bg-botti-teal-dim section-reveal ${diffInView ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-center text-lg text-white font-light leading-relaxed max-w-3xl mx-auto">
            "This is where <span className="text-botti-teal font-semibold">identity meets intelligence</span> — every conversation helps you understand what customers want, where they hesitate, and which products need better explanation."
          </p>
        </div>
      </div>
    </section>
  )
}

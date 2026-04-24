import { X, Check, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const BEFORE = [
  'Customer questions scattered across WhatsApp, email, and chat',
  'The same questions answered again and again by your team',
  'Hidden insights lost in unstructured conversations',
  'Orders arrive as messy messages with missing information',
  'No clear picture of what customers actually ask or hesitate about',
  'Brand voice inconsistent depending on who replies',
]

const AFTER = [
  'One branded AI personality handles customer inquiries automatically',
  'FAQ automation frees your team for higher-value work',
  'Every conversation becomes structured business intelligence',
  'Order requests collected and forwarded clean and complete',
  'Clear data on demand signals, objections, and customer language',
  'Consistent brand voice across every channel, every time',
]

const SIGNALS = [
  { value: 'Top', label: 'customer questions\nidentified automatically' },
  { value: '24/7', label: 'branded customer\ncommunication' },
  { value: '100%', label: 'consistent voice\nacross channels' },
]

export default function Pain() {
  const [ref, inView] = useInView()
  const [statsRef, statsInView] = useInView()

  return (
    <section id="problem" className="py-24 sm:py-32 bg-botti-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">The Problem</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Customer communication is no longer
            <br />
            <span className="gradient-text">just support.</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            It is sales, brand, operations and intelligence — and most businesses
            lose the information hidden inside every conversation.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 mb-16 section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <div className="rounded-2xl border border-red-900/30 bg-red-950/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-900/40 border border-red-800/50 flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <h3 className="font-semibold text-red-300 text-lg">Without a Brand Personality</h3>
            </div>
            <ul className="space-y-3">
              {BEFORE.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <X size={15} className="text-red-500/70 mt-0.5 flex-shrink-0" />
                  <span className="text-botti-muted text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-botti-teal/20 bg-botti-teal-dim p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-botti-teal/5 blur-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-botti-teal/20 border border-botti-teal/40 flex items-center justify-center">
                <Check size={16} className="text-botti-teal" />
              </div>
              <h3 className="font-semibold text-botti-teal text-lg">With Your Digital Brand Personality</h3>
            </div>
            <ul className="space-y-3">
              {AFTER.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={15} className="text-botti-teal mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Intelligence callout */}
        <div className={`rounded-2xl border border-botti-border bg-botti-card p-8 mb-14 section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '250ms' }}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-3">Hidden inside your conversations</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'What do customers misunderstand?',
              'Which products create the most interest?',
              'Where do customers hesitate before buying?',
              'Which requests repeat every single week?',
            ].map(q => (
              <div key={q} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-botti-teal flex-shrink-0 mt-2" />
                <p className="text-white/75 text-sm leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
          <p className="text-botti-muted text-sm mt-6 border-t border-botti-border pt-5">
            Heybotti turns customer communication into a{' '}
            <span className="text-white font-medium">structured, intelligent business system.</span>
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-3 gap-4 sm:gap-8">
          {SIGNALS.map(({ value, label }, i) => (
            <div
              key={value}
              className={`text-center section-reveal ${statsInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="font-display font-bold gradient-text mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                {value}
              </div>
              <p className="text-botti-muted text-sm leading-relaxed whitespace-pre-line">{label}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-14 section-reveal ${statsInView ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <a
            href="#offer"
            className="inline-flex items-center gap-2 text-botti-teal font-semibold hover:gap-3 transition-all"
          >
            See what a Digital Brand Personality includes
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

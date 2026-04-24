import { ArrowRight, MessageSquare, ShoppingCart, BarChart3 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const CORE_AREAS = [
  {
    icon: MessageSquare,
    color: '#28E6B4',
    title: 'Customer Communication',
    desc: 'Answer customer questions, explain products, guide inquiries, qualify leads and support customers — all in your brand voice.',
    items: ['FAQ automation', 'Lead qualification', 'Product explanations', 'Customer onboarding', 'Multi-language support'],
  },
  {
    icon: ShoppingCart,
    color: '#a78bfa',
    title: 'Order Management',
    desc: 'Collect order requests, structure customer information, forward inquiries and help your team stay organized.',
    items: ['Structured order collection', 'WhatsApp order flows', 'Customer data capture', 'Team routing & summaries', 'Follow-up preparation'],
  },
  {
    icon: BarChart3,
    color: '#f472b6',
    title: 'Business Intelligence',
    desc: 'Analyze conversations, identify patterns, reveal customer needs and turn daily communication into useful strategic insight.',
    items: ['Top customer questions', 'Demand signals', 'Sales objections', 'Market language analysis', 'Content & campaign ideas'],
  },
]

const CONFIG_STEPS = [
  { num: '01', title: 'Paste your URL or share input', desc: 'Enter your website URL, key information, or speak directly with SOFIA and the Heybotti team.' },
  { num: '02', title: 'Create your virtual personality', desc: 'We configure tone, dialect, languages, focus market, customer type, and brand vocabulary.' },
  { num: '03', title: 'Add your products or services', desc: 'Enter at least three products or services so your personality can explain, compare, and recommend.' },
  { num: '04', title: 'Connect and go live', desc: 'Add your WhatsApp number or email and launch your Digital Brand Personality.' },
]

export default function Package() {
  const [ref, inView] = useInView()
  const [stepsRef, stepsInView] = useInView()

  return (
    <>
      {/* The Offer */}
      <section id="offer" className="py-24 sm:py-32 bg-botti-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`text-center mb-14 section-reveal ${inView ? 'visible' : ''}`}>
            <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">The Offer</p>
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Your Digital Brand Personality.
              <br />
              <span className="gradient-text">Not a generic bot.</span>
            </h2>
            <p className="text-botti-muted text-lg max-w-2xl mx-auto">
              Configured around your identity, your offer and your way of speaking —
              designed around three core areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CORE_AREAS.map((area, i) => {
              const Icon = area.icon
              return (
                <div
                  key={area.title}
                  className={`section-reveal ${inView ? 'visible' : ''} gradient-border`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="p-7 h-full flex flex-col">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${area.color}15`, border: `1px solid ${area.color}25` }}
                    >
                      <Icon size={22} style={{ color: area.color }} />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mb-3">{area.title}</h3>
                    <p className="text-botti-muted text-sm leading-relaxed mb-5 flex-1">{area.desc}</p>
                    <ul className="space-y-2">
                      {area.items.map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: area.color }} />
                          <span className="text-sm text-white/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          <div className={`text-center mt-12 section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-botti-teal hover:bg-botti-teal-dark transition-all duration-200 teal-glow group"
            >
              Start Configuration
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" ref={stepsRef} className="py-24 sm:py-32 bg-botti-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 section-reveal ${stepsInView ? 'visible' : ''}`}>
            <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Simple setup. Serious intelligence.</p>
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              From URL to intelligent
              <br />
              <span className="gradient-text">customer communication</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONFIG_STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`section-reveal ${stepsInView ? 'visible' : ''} relative`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {i < CONFIG_STEPS.length - 1 && (
                  <div className="hidden lg:block step-connector" style={{ background: 'linear-gradient(90deg, rgba(40,230,180,0.4), transparent)' }} />
                )}
                <div className="gradient-border h-full">
                  <div className="p-6 h-full flex flex-col">
                    <span className="font-display font-black text-4xl leading-none opacity-20 text-botti-teal mb-5">{step.num}</span>
                    <h3 className="font-display font-bold text-white text-lg mb-3 leading-tight">{step.title}</h3>
                    <p className="text-botti-muted text-sm leading-relaxed flex-1">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

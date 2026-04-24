import { ArrowRight, Palette, TrendingUp, Settings } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const SESSIONS = [
  {
    icon: Palette,
    color: '#28E6B4',
    title: 'Branding Session',
    desc: 'Clarify your positioning, tone, customer language and offer structure. Define exactly how your Digital Brand Personality should sound, feel and respond.',
    includes: ['Tone of voice definition', 'Customer language audit', 'Offer structure review', 'Brand vocabulary guide'],
  },
  {
    icon: TrendingUp,
    color: '#a78bfa',
    title: 'Expansion Session',
    desc: 'Identify new markets, customer segments, sales angles and offer opportunities. Use your conversation data to find where growth is already happening.',
    includes: ['New market identification', 'Customer segment analysis', 'Sales angle development', 'Offer opportunity mapping'],
  },
  {
    icon: Settings,
    color: '#fb923c',
    title: 'Organization Session',
    desc: 'Improve internal workflows, customer handling, order routing and operational structure. Make your system work harder for your team.',
    includes: ['Workflow optimization', 'Customer handling review', 'Order routing design', 'Operational structure audit'],
  },
]

export default function Upsell() {
  const [ref, inView] = useInView()

  return (
    <section id="sessions" className="py-24 sm:py-32 bg-botti-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Go further</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Need more than automation?
            <br />
            <span className="gradient-text">Book a strategy session.</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            We help you improve the business layer around your Digital Brand Personality — branding, expansion, and organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SESSIONS.map((session, i) => {
            const Icon = session.icon
            return (
              <div
                key={session.title}
                className={`section-reveal ${inView ? 'visible' : ''} gradient-border group hover:-translate-y-1 transition-all duration-300`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="p-7 h-full flex flex-col">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${session.color}15`, border: `1px solid ${session.color}25` }}
                  >
                    <Icon size={22} style={{ color: session.color }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-botti-teal transition-colors">
                    {session.title}
                  </h3>
                  <p className="text-botti-muted text-sm leading-relaxed mb-5 flex-1">{session.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {session.includes.map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: session.color }} />
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
            Book a Session
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const USE_CASES = [
  {
    icon: '🛍️',
    name: 'E-Commerce',
    challenge: 'Product questions, order inquiries, and shipping requests flood in around the clock from every channel.',
    capabilities: [
      'Product questions and recommendations',
      'Order request collection via WhatsApp',
      'Shipping and availability information',
      'Upselling flows in brand voice',
    ],
    insight: 'Which products get the most pre-purchase questions — and why.',
    color: '#28E6B4',
  },
  {
    icon: '🏪',
    name: 'Local Businesses',
    challenge: 'Appointment inquiries, service questions, and price requests arrive all day across multiple channels.',
    capabilities: [
      'Appointment inquiry handling',
      'Service and price explanations',
      'WhatsApp communication in local dialect',
      'Booking preparation and routing',
    ],
    insight: 'What services your community asks about most — and when.',
    color: '#22d3ee',
  },
  {
    icon: '🎯',
    name: 'Consultants & Agencies',
    challenge: 'Lead qualification takes too long. Service scope is unclear. Onboarding is inconsistent.',
    capabilities: [
      'Lead qualification and scoring',
      'Service explanation and positioning',
      'Client onboarding automation',
      'Inquiry routing and summaries',
    ],
    insight: 'Which service angles generate interest — and which confuse prospects.',
    color: '#a78bfa',
  },
  {
    icon: '💆',
    name: 'Wellness & Health',
    challenge: 'Product education is repetitive. Customers need guidance before they buy. Multilingual demand is growing.',
    capabilities: [
      'Product education in brand voice',
      'Customer guidance and recommendations',
      'Booking request handling',
      'Multilingual communication',
    ],
    insight: 'Which ingredients or benefits your customers care about most.',
    color: '#34d399',
  },
  {
    icon: '🏢',
    name: 'B2B Service Providers',
    challenge: 'Inbound inquiries are unstructured. Qualification takes too much time. Meeting prep is manual.',
    capabilities: [
      'Structured inquiry collection',
      'Lead qualification flows',
      'Meeting preparation summaries',
      'Customer intelligence reports',
    ],
    insight: 'Which company profiles and challenges drive the most qualified conversations.',
    color: '#fb923c',
  },
]

export default function Industries() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()
  const uc = USE_CASES[active]

  return (
    <section id="use-cases" className="py-24 sm:py-32 bg-botti-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Use Cases</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Built for businesses that sell,
            <br />
            <span className="gradient-text">serve and communicate daily</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            Every industry has its own customer communication patterns. Your Digital Brand Personality is configured around yours.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {USE_CASES.map((uc, i) => (
            <button
              key={uc.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                active === i
                  ? 'bg-botti-teal text-black border-botti-teal font-bold'
                  : 'text-botti-muted border-botti-border hover:border-botti-teal/30 hover:text-white'
              }`}
            >
              {uc.icon} {uc.name}
            </button>
          ))}
        </div>

        {/* Active detail */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: challenge + capabilities */}
          <div key={`left-${uc.name}`} className="animate-fade-in gradient-border">
            <div className="p-8 h-full flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: uc.color }}>
                {uc.icon} {uc.name}
              </p>
              <h3 className="font-display font-bold text-white text-2xl mb-5 leading-tight">
                The challenge
              </h3>
              <p className="text-botti-muted text-base leading-relaxed mb-8 border-l-2 pl-4 italic" style={{ borderColor: `${uc.color}60` }}>
                "{uc.challenge}"
              </p>

              <h4 className="text-white font-semibold mb-4">What your Digital Brand Personality handles:</h4>
              <ul className="space-y-3 flex-1">
                {uc.capabilities.map(cap => (
                  <li key={cap} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${uc.color}20`, border: `1px solid ${uc.color}30` }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: uc.color }} />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: intelligence */}
          <div key={`right-${uc.name}`} className="animate-fade-in flex flex-col gap-6">
            <div className="gradient-border flex-1">
              <div className="p-8 h-full flex flex-col">
                <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Business Intelligence</p>
                <h3 className="font-display font-bold text-white text-xl mb-4">What you will learn from your conversations</h3>
                <p className="text-white/80 text-base leading-relaxed mb-6 flex-1">{uc.insight}</p>
                <div className="rounded-xl border border-botti-teal/20 bg-botti-teal-dim p-4">
                  <p className="text-botti-teal text-sm font-medium">Every conversation adds to your market intelligence — not just your conversation log.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-black bg-botti-teal hover:bg-botti-teal-dark transition-all duration-200 group"
            >
              Configure for {uc.name}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

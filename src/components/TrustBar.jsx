import { useInView } from '../hooks/useInView'

const CAPABILITIES = [
  { name: 'Brand Voice', color: '#28E6B4' },
  { name: 'WhatsApp Integration', color: '#25D366' },
  { name: 'Website Chat', color: '#22d3ee' },
  { name: 'Order Management', color: '#a78bfa' },
  { name: 'Lead Qualification', color: '#fb923c' },
  { name: 'Business Intelligence', color: '#f472b6' },
  { name: 'Multilingual', color: '#34d399' },
  { name: 'Tone Customization', color: '#28E6B4' },
  { name: 'Customer Onboarding', color: '#60a5fa' },
  { name: 'FAQ Automation', color: '#22d3ee' },
  { name: 'Conversation Insights', color: '#a78bfa' },
  { name: 'Market Feedback', color: '#fb923c' },
  { name: 'Sales Objections', color: '#f472b6' },
  { name: 'SOFIA Network', color: '#28E6B4' },
  { name: 'Custom LLM', color: '#34d399' },
  { name: 'Horizen Blockchain', color: '#60a5fa' },
]

function Chip({ name, color }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-botti-border bg-botti-card/60 flex-shrink-0">
      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-sm font-medium text-botti-muted whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function TrustBar() {
  const [ref, inView] = useInView()
  const doubled = [...CAPABILITIES, ...CAPABILITIES]

  return (
    <section ref={ref} className="py-14 border-y border-botti-border bg-botti-card/30 overflow-hidden">
      <div className={`text-center mb-8 transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-botti-subtle text-sm font-medium uppercase tracking-widest">
          Configured around your business — not built from a template
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="flex gap-3 animate-marquee">
          {doubled.map((c, i) => <Chip key={`${c.name}-${i}`} {...c} />)}
        </div>
      </div>
    </section>
  )
}

import { useInView } from '../hooks/useInView'

const TOOLS = [
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Pipedrive', color: '#1F4D78' },
  { name: 'Odoo', color: '#714B67' },
  { name: 'Shopify', color: '#96BF48' },
  { name: 'WooCommerce', color: '#7F54B3' },
  { name: 'Gmail', color: '#EA4335' },
  { name: 'Google Ads', color: '#4285F4' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'Notion', color: '#ffffff' },
  { name: 'Stripe', color: '#6772E5' },
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Make', color: '#6D00CC' },
  { name: 'n8n', color: '#EA4B71' },
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'Monday', color: '#FF3D57' },
  { name: 'Airtable', color: '#18BFFF' },
  { name: 'Calendly', color: '#006BFF' },
  { name: 'Typeform', color: '#262627' },
]

function ToolChip({ name, color }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-botti-border bg-botti-card/60 flex-shrink-0">
      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-sm font-medium text-botti-muted whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function TrustBar() {
  const [ref, inView] = useInView()
  const doubled = [...TOOLS, ...TOOLS]

  return (
    <section ref={ref} className="py-14 border-y border-botti-border bg-botti-card/30 overflow-hidden">
      <div className={`text-center mb-8 transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-botti-subtle text-sm font-medium uppercase tracking-widest">
          Wir automatisieren deine bestehenden Tools
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="flex gap-3 animate-marquee">
          {doubled.map((t, i) => <ToolChip key={`${t.name}-${i}`} {...t} />)}
        </div>
      </div>
    </section>
  )
}

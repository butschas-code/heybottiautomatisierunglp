import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle2, Zap, Clock, TrendingUp } from 'lucide-react'

const INDUSTRIES = [
  { label: '🏥 Healthcare', pain: 'Patientenakten, Terminplanung & Abrechnung — endlich automatisiert.' },
  { label: '🍽️ Gastronomie', pain: 'Bestellungen, Lieferanten & Personalplanung laufen von selbst.' },
  { label: '🔧 Handwerk', pain: 'Angebote, Rechnungen & Kundenkommunikation — ohne manuellen Aufwand.' },
  { label: '🏠 Immobilien', pain: 'Lead-Follow-up, Exposés & Besichtigungstermine automatisch verwalten.' },
  { label: '🚚 Logistik', pain: 'Auftragsabwicklung, Tracking & Reporting komplett automatisiert.' },
  { label: '🛍️ E-Commerce', pain: 'Bestandssync, Versand & Retourenabwicklung rund um die Uhr aktiv.' },
  { label: '💆 Wellness', pain: 'Buchungen, Erinnerungen & Kundenpflege laufen vollautomatisch.' },
  { label: '⚖️ Kanzleien', pain: 'Dokumentenmanagement, Fristen & Mandantenkommunikation automatisiert.' },
  { label: '🏗️ Baubranche', pain: 'Projektdokumentation, Subunternehmer & Abrechnung ohne Chaos.' },
  { label: '📦 Retail', pain: 'Lagerbestand, Einkauf & Kundenkommunikation endlich synchronisiert.' },
]

const TRUST_ITEMS = [
  { icon: TrendingUp, value: '100+', label: 'Unternehmen automatisiert' },
  { icon: Clock, value: '4 Wo.', label: 'bis zum ersten Ergebnis' },
  { icon: Zap, value: '24/7', label: 'läuft deine Automation' },
]

export default function Hero() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndustry(prev => (prev + 1) % INDUSTRIES.length)
        setIsAnimating(false)
      }, 300)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden mesh-bg noise-bg">
      {/* Background glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-botti-teal opacity-[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full bg-botti-teal opacity-[0.03] blur-3xl pointer-events-none" />

      {/* SVG workflow decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none opacity-20 hidden lg:block">
        <WorkflowGraphic />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-botti-teal/30 bg-botti-teal-dim text-botti-teal text-sm font-medium mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="w-2 h-2 rounded-full bg-botti-teal animate-pulse-slow" />
            Starter-Paket ab €997 — inklusive Build & 30 Tage Support
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-bold leading-[1.05] tracking-tight mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', transitionDelay: '200ms' }}
          >
            Mehr Zeit für
            <br />
            <span className="gradient-text">Wachstum.</span>
            <br />
            Weniger Aufwand.
          </h1>

          {/* Sub */}
          <p
            className={`text-lg sm:text-xl text-botti-muted leading-relaxed mb-4 max-w-xl transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '350ms' }}
          >
            Wir automatisieren die Prozesse, die dich Zeit und Geld kosten —
            individuell, schnell und komplett eingerichtet.
          </p>

          {/* Rotating industry line */}
          <div
            className={`flex items-center gap-3 mb-10 h-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '450ms' }}
          >
            <CheckCircle2 size={18} className="text-botti-teal flex-shrink-0" />
            <p
              className={`text-botti-teal font-medium text-base transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
            >
              {INDUSTRIES[activeIndustry].pain}
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '550ms' }}
          >
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-botti-teal hover:bg-botti-teal-dark transition-all duration-200 teal-glow group"
            >
              Jetzt Paket anfragen
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-botti-border hover:border-botti-teal/30 hover:bg-white/5 transition-all duration-200"
            >
              Services entdecken
            </a>
          </div>

          {/* Trust stats */}
          <div
            className={`flex flex-wrap gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '650ms' }}
          >
            {TRUST_ITEMS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-botti-teal-dim border border-botti-teal/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-botti-teal" />
                </div>
                <div>
                  <div className="font-bold text-white text-lg leading-tight">{value}</div>
                  <div className="text-botti-subtle text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry tabs */}
      <div
        className={`relative border-t border-botti-border bg-botti-card/50 backdrop-blur-sm transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-4 scrollbar-hide">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.label}
                onClick={() => { setActiveIndustry(i); setIsAnimating(false) }}
                className={`industry-tab flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  activeIndustry === i
                    ? 'active'
                    : 'text-botti-muted border-transparent hover:text-white hover:border-botti-border'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-botti-subtle text-xs">
        <div className="w-px h-8 bg-gradient-to-b from-botti-teal/50 to-transparent" />
        scroll
      </div>
    </section>
  )
}

function WorkflowGraphic() {
  return (
    <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#28E6B4" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#28E6B4" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Connection lines */}
      <line x1="120" y1="150" x2="280" y2="200" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse-slow" />
      <line x1="280" y1="200" x2="420" y2="150" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse-slow" style={{animationDelay:'0.5s'}} />
      <line x1="280" y1="200" x2="320" y2="340" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse-slow" style={{animationDelay:'1s'}}/>
      <line x1="320" y1="340" x2="180" y2="420" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse-slow" style={{animationDelay:'1.5s'}}/>
      <line x1="320" y1="340" x2="460" y2="410" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse-slow" style={{animationDelay:'2s'}}/>

      {/* Nodes */}
      {[
        { cx: 120, cy: 150, r: 28, label: 'CRM', delay: '0s' },
        { cx: 280, cy: 200, r: 36, label: 'Hub', delay: '0.3s', main: true },
        { cx: 420, cy: 150, r: 26, label: 'E-Mail', delay: '0.6s' },
        { cx: 320, cy: 340, r: 32, label: 'Workflow', delay: '0.9s' },
        { cx: 180, cy: 420, r: 24, label: 'HR', delay: '1.2s' },
        { cx: 460, cy: 410, r: 24, label: 'Finance', delay: '1.5s' },
      ].map(node => (
        <g key={node.label} filter="url(#glow)">
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r + 8}
            fill="rgba(40,230,180,0.06)"
            className="animate-pulse-slow"
            style={{ animationDelay: node.delay }}
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={node.main ? 'rgba(40,230,180,0.2)' : 'rgba(17,17,17,0.9)'}
            stroke={node.main ? '#28E6B4' : 'rgba(40,230,180,0.4)'}
            strokeWidth={node.main ? 2 : 1}
          />
          <text
            x={node.cx}
            y={node.cy + 5}
            textAnchor="middle"
            fill="#28E6B4"
            fontSize={node.main ? '11' : '9'}
            fontWeight="600"
            fontFamily="Inter"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Traveling dots on lines */}
      <circle r="3" fill="#28E6B4" opacity="0.8">
        <animateMotion dur="3s" repeatCount="indefinite" path="M120,150 L280,200" />
      </circle>
      <circle r="3" fill="#28E6B4" opacity="0.8">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M280,200 L420,150" begin="1s"/>
      </circle>
      <circle r="3" fill="#28E6B4" opacity="0.8">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M280,200 L320,340" begin="0.5s"/>
      </circle>
      <circle r="3" fill="#28E6B4" opacity="0.8">
        <animateMotion dur="3s" repeatCount="indefinite" path="M320,340 L180,420" begin="1.5s"/>
      </circle>
      <circle r="3" fill="#28E6B4" opacity="0.8">
        <animateMotion dur="2.8s" repeatCount="indefinite" path="M320,340 L460,410" begin="2s"/>
      </circle>
    </svg>
  )
}

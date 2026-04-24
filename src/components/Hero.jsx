import { useState, useEffect } from 'react'
import { ArrowRight, MessageSquare, ShoppingCart, BarChart3 } from 'lucide-react'

const CHANNELS = [
  { label: '💬 Website Chat', text: 'Answer questions, guide customers, qualify leads — in your brand voice.' },
  { label: '📱 WhatsApp', text: 'Receive orders and inquiries directly via WhatsApp, structured and automated.' },
  { label: '📊 Business Intelligence', text: 'Every conversation reveals what customers want, hesitate about, and buy.' },
  { label: '🛒 Order Management', text: 'Collect and structure order requests, forward to your team automatically.' },
  { label: '🌍 Multilingual', text: 'Communicate in multiple languages — configured around your target markets.' },
  { label: '🎯 Lead Qualification', text: 'Identify serious buyers and route them to the right next step.' },
]

const CORE_AREAS = [
  { icon: MessageSquare, label: 'Customer Communication' },
  { icon: ShoppingCart, label: 'Order Management' },
  { icon: BarChart3, label: 'Business Intelligence' },
]

export default function Hero() {
  const [activeChannel, setActiveChannel] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveChannel(prev => (prev + 1) % CHANNELS.length)
        setIsAnimating(false)
      }, 300)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden mesh-bg noise-bg">
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-botti-teal opacity-[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full bg-botti-teal opacity-[0.03] blur-3xl pointer-events-none" />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none opacity-20 hidden lg:block">
        <BrandPersonalityGraphic />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-botti-teal/30 bg-botti-teal-dim text-botti-teal text-sm font-medium mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="w-2 h-2 rounded-full bg-botti-teal animate-pulse-slow" />
            Identity meets intelligence
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-bold leading-[1.05] tracking-tight mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', transitionDelay: '200ms' }}
          >
            Digital Brand
            <br />
            <span className="gradient-text">Personality.</span>
          </h1>

          {/* Sub */}
          <p
            className={`text-lg sm:text-xl text-botti-muted leading-relaxed mb-4 max-w-xl transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '350ms' }}
          >
            Automated customer service in your brand design — a virtual AI personality
            that understands your business, communicates with your customers,
            manages requests, and turns conversations into business insights.
          </p>

          {/* Rotating channel line */}
          <div
            className={`flex items-start gap-3 mb-10 min-h-[3.5rem] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="w-5 h-5 rounded-full bg-botti-teal/20 border border-botti-teal/40 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-botti-teal" />
            </div>
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <span className="text-botti-teal font-semibold text-sm">{CHANNELS[activeChannel].label}</span>
              <p className="text-botti-muted text-sm leading-relaxed mt-0.5">{CHANNELS[activeChannel].text}</p>
            </div>
          </div>

          {/* Core areas */}
          <div
            className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '500ms' }}
          >
            {CORE_AREAS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-botti-teal/20 bg-botti-teal-dim text-botti-teal text-sm font-medium">
                <Icon size={14} />
                {label}
              </div>
            ))}
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
              Create Your Digital Brand Personality
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sessions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-botti-border hover:border-botti-teal/30 hover:bg-white/5 transition-all duration-200"
            >
              Book Strategy Session
            </a>
          </div>

          {/* Support line */}
          <p
            className={`text-botti-subtle text-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '650ms' }}
          >
            Via website or WhatsApp · Configured around your tone, products & market · Connected to SOFIA
          </p>
        </div>
      </div>

      {/* Channel tabs */}
      <div
        className={`relative border-t border-botti-border bg-botti-card/50 backdrop-blur-sm transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-4 scrollbar-hide">
            {CHANNELS.map((ch, i) => (
              <button
                key={ch.label}
                onClick={() => { setActiveChannel(i); setIsAnimating(false) }}
                className={`industry-tab flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  activeChannel === i
                    ? 'active'
                    : 'text-botti-muted border-transparent hover:text-white hover:border-botti-border'
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-botti-subtle text-xs">
        <div className="w-px h-8 bg-gradient-to-b from-botti-teal/50 to-transparent" />
        scroll
      </div>
    </section>
  )
}

function BrandPersonalityGraphic() {
  return (
    <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <filter id="glow2">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#28E6B4" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#28E6B4" stopOpacity="0"/>
        </linearGradient>
      </defs>

      <line x1="300" y1="200" x2="150" y2="320" stroke="url(#lineGrad2)" strokeWidth="1.5" className="animate-pulse-slow" />
      <line x1="300" y1="200" x2="300" y2="350" stroke="url(#lineGrad2)" strokeWidth="1.5" className="animate-pulse-slow" style={{animationDelay:'0.5s'}} />
      <line x1="300" y1="200" x2="450" y2="320" stroke="url(#lineGrad2)" strokeWidth="1.5" className="animate-pulse-slow" style={{animationDelay:'1s'}}/>
      <line x1="150" y1="320" x2="120" y2="450" stroke="url(#lineGrad2)" strokeWidth="1.5" className="animate-pulse-slow" style={{animationDelay:'1.5s'}}/>
      <line x1="450" y1="320" x2="480" y2="450" stroke="url(#lineGrad2)" strokeWidth="1.5" className="animate-pulse-slow" style={{animationDelay:'2s'}}/>

      {[
        { cx: 300, cy: 200, r: 40, label: 'SOFIA', delay: '0s', main: true },
        { cx: 150, cy: 320, r: 28, label: 'Customer', delay: '0.3s' },
        { cx: 300, cy: 350, r: 28, label: 'Orders', delay: '0.6s' },
        { cx: 450, cy: 320, r: 28, label: 'Insights', delay: '0.9s' },
        { cx: 120, cy: 450, r: 22, label: 'WhatsApp', delay: '1.2s' },
        { cx: 480, cy: 450, r: 22, label: 'Brand', delay: '1.5s' },
      ].map(node => (
        <g key={node.label} filter="url(#glow2)">
          <circle cx={node.cx} cy={node.cy} r={node.r + 8} fill="rgba(40,230,180,0.06)" className="animate-pulse-slow" style={{ animationDelay: node.delay }} />
          <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.main ? 'rgba(40,230,180,0.2)' : 'rgba(17,17,17,0.9)'} stroke={node.main ? '#28E6B4' : 'rgba(40,230,180,0.4)'} strokeWidth={node.main ? 2 : 1} />
          <text x={node.cx} y={node.cy + 5} textAnchor="middle" fill="#28E6B4" fontSize={node.main ? '11' : '9'} fontWeight="600" fontFamily="Inter">{node.label}</text>
        </g>
      ))}

      <circle r="3" fill="#28E6B4" opacity="0.8"><animateMotion dur="3s" repeatCount="indefinite" path="M300,200 L150,320" /></circle>
      <circle r="3" fill="#28E6B4" opacity="0.8"><animateMotion dur="2.5s" repeatCount="indefinite" path="M300,200 L300,350" begin="0.8s"/></circle>
      <circle r="3" fill="#28E6B4" opacity="0.8"><animateMotion dur="3.5s" repeatCount="indefinite" path="M300,200 L450,320" begin="0.5s"/></circle>
      <circle r="3" fill="#28E6B4" opacity="0.8"><animateMotion dur="3s" repeatCount="indefinite" path="M150,320 L120,450" begin="1.5s"/></circle>
      <circle r="3" fill="#28E6B4" opacity="0.8"><animateMotion dur="2.8s" repeatCount="indefinite" path="M450,320 L480,450" begin="2s"/></circle>
    </svg>
  )
}

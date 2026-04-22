import { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const CASES = [
  {
    industry: '📊 B2B Software',
    title: 'Lead-Reaktionszeit von 24 Stunden auf 2 Minuten',
    challenge: 'Ein B2B-Softwareunternehmen verlor 60% seiner Leads durch zu langsame Follow-up-Zeiten. Das Sales-Team war überlastet.',
    solution: 'Wir implementierten automatisches Lead-Scoring, sofortige Follow-up-Sequenzen und personalisiertes CRM-Nurturing.',
    results: [
      { value: '45%', label: 'mehr Conversions' },
      { value: '20h', label: 'weniger Aufwand/Woche' },
      { value: '2 Min.', label: 'Reaktionszeit (von 24h)' },
    ],
    color: '#22d3ee',
  },
  {
    industry: '📦 Distributionshandel',
    title: '500 Rechnungen/Monat — von 3 Stellen auf 30 Minuten',
    challenge: 'Ein Distributor verarbeitete 500+ Rechnungen monatlich mit 3 Vollzeitkräften. Fehler und Verzögerungen waren alltäglich.',
    solution: 'OCR-Rechnungsverarbeitung, automatisierte Genehmigungsworkflows und Bankabgleich vollständig automatisiert.',
    results: [
      { value: '85%', label: 'weniger Bearbeitungszeit' },
      { value: '3→0.5', label: 'Vollzeitstellen dafür' },
      { value: '0', label: 'manuelle Fehler' },
    ],
    color: '#a78bfa',
  },
  {
    industry: '🛒 Multi-Channel Retail',
    title: 'Bestandssync über 4 Plattformen — vollautomatisch',
    challenge: 'Ein Retailer verkaufte auf 4 Plattformen und synchronisierte den Bestand manuell — Stockouts und Überverkäufe waren häufig.',
    solution: 'Echtzeit-Bestandssync, automatisches Order-Routing und Retourenworkflows über alle Plattformen.',
    results: [
      { value: '-70%', label: 'Bearbeitungszeit' },
      { value: '+42%', label: 'Kundenzufriedenheit' },
      { value: '0', label: 'Stockouts mehr' },
    ],
    color: '#fb923c',
  },
]

const TESTIMONIAL = {
  quote: 'Seit wir unsere Prozesse automatisiert haben, habe ich endlich Zeit zum Durchatmen. Mein Team ist ruhiger, unsere Arbeit besser — und ich freue mich tatsächlich wieder auf Montage.',
  name: 'Geschäftsführer',
  company: 'Mittelständisches Unternehmen, Bayern',
}

function AnimatedNumber({ target, suffix = '', prefix = '' }) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  const numericValue = parseFloat(target.replace(/[^0-9.-]/g, ''))
  const isSpecial = isNaN(numericValue) || target.includes('→') || target.includes('Min.')

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        if (!isSpecial) {
          let start = 0
          const duration = 1800
          const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplayed(Math.round(eased * numericValue))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref}>
      {isSpecial ? target : `${prefix}${displayed}${suffix}`}
    </span>
  )
}

export default function Results() {
  const [ref, inView] = useInView()

  return (
    <section id="results" className="py-24 sm:py-32 bg-botti-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Echte Ergebnisse</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Keine leeren Versprechen.
            <br />
            <span className="gradient-text">Echte Zahlen.</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            Diese Ergebnisse haben Unternehmen durch unsere Automationen erzielt —
            messbar, real, dauerhaft.
          </p>
        </div>

        {/* Case studies */}
        <div className="space-y-6 mb-16">
          {CASES.map((c, i) => (
            <div
              key={c.title}
              className={`section-reveal ${inView ? 'visible' : ''} rounded-2xl border border-botti-border bg-botti-card p-6 sm:p-8 hover:border-opacity-50 transition-all duration-300`}
              style={{ transitionDelay: `${i * 120}ms`, '--hover-color': c.color }}
            >
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-10 items-center">
                {/* Left: story */}
                <div className="sm:col-span-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-botti-card2 border border-botti-border text-botti-muted text-xs font-medium mb-4">
                    {c.industry}
                  </div>
                  <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-3 leading-tight">{c.title}</h3>
                  <div className="space-y-3 text-sm text-botti-muted">
                    <div>
                      <span className="text-red-400/80 font-semibold">Problem: </span>
                      {c.challenge}
                    </div>
                    <div>
                      <span className="text-botti-teal font-semibold">Lösung: </span>
                      {c.solution}
                    </div>
                  </div>
                </div>

                {/* Right: stats */}
                <div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
                  {c.results.map(r => (
                    <div key={r.label} className="text-center sm:text-left">
                      <div className="font-display font-bold text-2xl sm:text-3xl leading-tight mb-1" style={{ color: c.color }}>
                        <AnimatedNumber target={r.value} />
                      </div>
                      <div className="text-botti-subtle text-xs">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`section-reveal ${inView ? 'visible' : ''} relative rounded-2xl border border-botti-teal/20 bg-gradient-to-br from-botti-teal-dim to-botti-card p-8 sm:p-12 text-center`} style={{ transitionDelay: '400ms' }}>
          <Quote size={40} className="text-botti-teal/30 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl font-light text-white leading-relaxed mb-8 max-w-3xl mx-auto">
            "{TESTIMONIAL.quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-botti-teal/20 border border-botti-teal/30 flex items-center justify-center text-botti-teal font-bold">
              G
            </div>
            <div className="text-left">
              <div className="font-semibold text-white text-sm">{TESTIMONIAL.name}</div>
              <div className="text-botti-subtle text-xs">{TESTIMONIAL.company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

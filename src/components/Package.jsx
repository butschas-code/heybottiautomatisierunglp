import { Check, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const INCLUDES = [
  { icon: '🔍', title: 'Prozess-Analyse', desc: 'Wir analysieren deine aktuellen Workflows und identifizieren das größte Automatisierungspotenzial.' },
  { icon: '⚙️', title: '1 Automation — komplett gebaut', desc: 'Wir bauen und testen eine vollständige Automatisierungslösung, genau auf dein Business zugeschnitten.' },
  { icon: '🔗', title: 'Integration in deine Tools', desc: 'Die Automation wird nahtlos in deine bestehenden Systeme integriert — kein Tool-Wechsel nötig.' },
  { icon: '🎓', title: 'Onboarding & Dokumentation', desc: 'Dein Team wird eingeführt und bekommt eine vollständige Dokumentation aller Workflows.' },
  { icon: '🛡️', title: '30 Tage Support & Optimierung', desc: 'Nach dem Launch sind wir 30 Tage lang für Anpassungen, Fragen und Optimierungen da.' },
]

const BADGES = [
  { icon: Clock, text: 'Live in 4–6 Wochen' },
  { icon: Shield, text: 'DSGVO-konform' },
  { icon: Sparkles, text: 'Keine laufenden Lizenzkosten' },
]

export default function Package() {
  const [ref, inView] = useInView()

  return (
    <section id="package" className="py-24 sm:py-32 bg-botti-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-14 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Das Angebot</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Ein klares Paket.
            <br />
            <span className="gradient-text">Kein versteckter Aufwand.</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            Wir nehmen uns die Zeit, dein Business zu verstehen — und liefern dann eine
            Automatisierung, die wirklich funktioniert.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Includes list */}
          <div className={`lg:col-span-3 space-y-4 section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            {INCLUDES.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-5 p-5 rounded-xl border border-botti-border bg-botti-card hover:border-botti-teal/20 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-botti-teal transition-colors">{item.title}</h3>
                  <p className="text-botti-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing card */}
          <div
            className={`lg:col-span-2 section-reveal ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="rounded-2xl border border-botti-teal/30 bg-gradient-to-br from-botti-card to-botti-card2 p-8 sticky top-24 teal-glow relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-botti-teal/5 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-botti-teal/5 blur-2xl pointer-events-none" />

              <div className="relative">
                {/* Popular badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-botti-teal/15 border border-botti-teal/30 text-botti-teal text-xs font-semibold mb-6">
                  <Sparkles size={12} />
                  Meistgewählt
                </div>

                <div className="mb-2">
                  <p className="text-botti-muted text-sm font-medium uppercase tracking-wider">Starter-Paket</p>
                </div>

                <div className="flex items-end gap-2 mb-2">
                  <span className="font-display font-bold text-white" style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', lineHeight: 1 }}>
                    €997
                  </span>
                </div>
                <p className="text-botti-subtle text-sm mb-8">
                  Einmaliger Projektpreis · Preise zzgl. MwSt.
                </p>

                {/* Quick includes */}
                <ul className="space-y-3 mb-8">
                  {INCLUDES.map(item => (
                    <li key={item.title} className="flex items-center gap-3">
                      <Check size={15} className="text-botti-teal flex-shrink-0" />
                      <span className="text-sm text-white/80">{item.title}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {BADGES.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-botti-bg/60 border border-botti-border text-botti-muted text-xs">
                      <Icon size={12} className="text-botti-teal" />
                      {text}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="relative w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-black bg-botti-teal hover:bg-botti-teal-dark transition-all duration-200 group pulse-ring"
                >
                  Jetzt Paket anfragen
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

                <p className="text-center text-botti-subtle text-xs mt-4">
                  Kostenlose Erstberatung · Kein Risiko
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

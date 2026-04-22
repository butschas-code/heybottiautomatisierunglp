import { X, Check, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const BEFORE = [
  'Daten manuell in mehrere Systeme eingeben',
  'Stundenlang auf Antworten von Kollegen warten',
  'Leads gehen verloren, weil Follow-ups vergessen werden',
  'Rechnungen händisch prüfen & abtippen',
  'Berichte jede Woche manuell zusammenstellen',
  'Meetings über Dinge, die ein System erledigen könnte',
]

const AFTER = [
  'Daten fließen automatisch zwischen deinen Tools',
  'Aufgaben werden sofort erstellt und zugewiesen',
  'Jeder Lead erhält automatisch die richtige Nachricht',
  'Rechnungen werden automatisch erkannt & gebucht',
  'Berichte werden täglich automatisch verschickt',
  'Dein Team fokussiert sich auf wertschöpfende Arbeit',
]

const STATS = [
  { value: '12h+', label: 'gesparte Stunden\npro Woche, pro Team' },
  { value: '85%', label: 'weniger Zeit für\nrepetitive Aufgaben' },
  { value: '0', label: 'vergessene Follow-ups\noder verpasste Fristen' },
]

export default function Pain() {
  const [ref, inView] = useInView()
  const [statsRef, statsInView] = useInView()

  return (
    <section id="pain" className="py-24 sm:py-32 bg-botti-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className={`text-center mb-16 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Das Problem</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Was kostet dich manuelle Arbeit<br />
            <span className="gradient-text">wirklich?</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            Die meisten Unternehmen verschwenden täglich Stunden mit Aufgaben,
            die eine Maschine in Sekunden erledigen könnte.
          </p>
        </div>

        {/* Before / After */}
        <div className={`grid md:grid-cols-2 gap-6 mb-16 section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          {/* Before */}
          <div className="rounded-2xl border border-red-900/30 bg-red-950/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-900/40 border border-red-800/50 flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <h3 className="font-semibold text-red-300 text-lg">Ohne Automatisierung</h3>
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

          {/* After */}
          <div className="rounded-2xl border border-botti-teal/20 bg-botti-teal-dim p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-botti-teal/5 blur-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-botti-teal/20 border border-botti-teal/40 flex items-center justify-center">
                <Check size={16} className="text-botti-teal" />
              </div>
              <h3 className="font-semibold text-botti-teal text-lg">Mit heybotti Automation</h3>
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

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-3 gap-4 sm:gap-8">
          {STATS.map(({ value, label }, i) => (
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

        {/* CTA nudge */}
        <div className={`text-center mt-14 section-reveal ${statsInView ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <a
            href="#package"
            className="inline-flex items-center gap-2 text-botti-teal font-semibold hover:gap-3 transition-all"
          >
            Sieh, was wir für dein Business automatisieren können
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

import { Search, Lightbulb, Wrench, Rocket } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse',
    subtitle: '1–2 Wochen',
    desc: 'Wir analysieren deine aktuellen Workflows, Tools und Engpässe — und identifizieren wo Automation den größten Hebel hat.',
    deliverables: ['Prozess-Übersicht & Tool-Mapping', 'Automation-Impact-Assessment', 'Priorisierte Handlungsempfehlung'],
    color: '#22d3ee',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Design',
    subtitle: '1–2 Wochen',
    desc: 'Wir entwerfen klare Automatisierungspläne, maßgeschneidert auf dein Business und deine Systeme.',
    deliverables: ['Automation-Blueprint', 'Systemintegrationsplan', 'Genehmigter Zeitplan'],
    color: '#a78bfa',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Build & Integrate',
    subtitle: '2–4 Wochen',
    desc: 'Wir bauen, verbinden und testen deine automatisierten Workflows — schnell, zuverlässig und ohne Unterbrechung deines Betriebs.',
    deliverables: ['Vollständiges Automatisierungssystem', 'Umfassendes Team-Training', 'Vollständige Dokumentation'],
    color: '#28E6B4',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Optimize',
    subtitle: '+ 30 Tage Support',
    desc: 'Go-Live! Wir sind 30 Tage nach dem Launch für Anpassungen, Optimierungen und Fragen da.',
    deliverables: ['Go-Live & Monitoring', '30 Tage aktiver Support', 'Regelmäßige Optimierungsberichte'],
    color: '#fb923c',
  },
]

export default function Process() {
  const [ref, inView] = useInView()

  return (
    <section id="process" className="py-24 sm:py-32 bg-botti-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">So arbeiten wir</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Von der ersten Idee bis zum
            <br />
            <span className="gradient-text">laufenden System</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            Unser strukturierter Prozess sorgt dafür, dass dein Business während der
            Implementierung weiterläuft — und danach deutlich besser.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-botti-teal/30 bg-botti-teal-dim text-botti-teal text-sm">
            ⏱️ Typische Gesamtdauer: 4–8 Wochen
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className={`section-reveal ${inView ? 'visible' : ''} relative`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Connector line (desktop) */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block step-connector"
                    style={{ background: `linear-gradient(90deg, ${step.color}60, transparent)` }}
                  />
                )}

                <div className="gradient-border h-full">
                  <div className="p-6 h-full flex flex-col">
                    {/* Number + icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="font-display font-black text-4xl leading-none opacity-20"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}15`, border: `1px solid ${step.color}30` }}
                      >
                        <Icon size={20} style={{ color: step.color }} />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-white text-xl mb-1">{step.title}</h3>
                    <p className="text-xs font-medium mb-3 px-2 py-1 rounded-md self-start" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                      {step.subtitle}
                    </p>
                    <p className="text-botti-muted text-sm leading-relaxed mb-5 flex-1">{step.desc}</p>

                    <div className="border-t border-botti-border pt-4">
                      <p className="text-xs font-semibold text-botti-subtle uppercase tracking-wider mb-3">Ergebnis</p>
                      <ul className="space-y-2">
                        {step.deliverables.map(d => (
                          <li key={d} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: step.color }} />
                            <span className="text-xs text-white/65">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

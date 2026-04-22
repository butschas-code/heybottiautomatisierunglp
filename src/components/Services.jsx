import { useState } from 'react'
import { ArrowRight, TrendingUp, FileText, Users, ShoppingCart, BarChart3, GitBranch } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    icon: TrendingUp,
    color: '#22d3ee',
    title: 'Sales & Marketing',
    subtitle: 'Kalte Leads in Kunden — vollautomatisch',
    desc: 'Automatisierte Funnels, Follow-ups und CRM-Prozesse, die systematisch Interessenten in Kunden verwandeln — 24/7, datengetrieben und persönlich.',
    benefits: ['Lead Scoring & Routing', 'CRM-Automatisierung (HubSpot, Pipedrive, Odoo)', 'E-Mail-Sequenzen & Trigger', 'Multi-Channel-Automation'],
    stat: { value: '45%', label: 'mehr Conversions' },
    result: 'Lead-Reaktionszeit von 24h auf 2 Minuten reduziert',
  },
  {
    icon: FileText,
    color: '#a78bfa',
    title: 'Finance & Accounting',
    subtitle: 'Null manuelle Buchhaltung — volle Übersicht',
    desc: 'Dokumente, Zahlungen, Rechnungen und Berichte fließen automatisch durch deine Systeme — für ein ordentliches Backoffice ohne Kopfschmerzen.',
    benefits: ['OCR-Rechnungsverarbeitung', 'Automatischer Bank-Abgleich', 'Reporting-Dashboards', 'Zahlungserinnerungen'],
    stat: { value: '85%', label: 'weniger Aufwand' },
    result: 'Rechnungsverarbeitung von 3 Vollzeit-Stellen auf 30 Minuten',
  },
  {
    icon: Users,
    color: '#34d399',
    title: 'HR & Recruiting',
    subtitle: 'Schneller einstellen. Besser onboarden.',
    desc: 'Von der Bewerbung bis zum Onboarding: Automation bringt Geschwindigkeit, Struktur und Wertschätzung in deine HR-Prozesse.',
    benefits: ['ATS-Workflow-Automation', 'Automatische Interview-Terminierung', 'Kandidaten-Kommunikation', 'Strukturiertes Onboarding'],
    stat: { value: '-53%', label: 'Time-to-Hire' },
    result: 'Einstellungszeit von 45 auf 21 Tage reduziert',
  },
  {
    icon: ShoppingCart,
    color: '#fb923c',
    title: 'E-Commerce',
    subtitle: 'Dein Shop läuft — auch wenn du schläfst',
    desc: 'Bestandssync, Versand, Retouren und Kundenkommunikation laufen automatisch — jede Bewegung im Shop löst die richtigen Aktionen aus.',
    benefits: ['Echtzeit-Bestandssync', 'Automatische Auftragsabwicklung', 'Retourenverarbeitung', 'Shopify, WooCommerce, Odoo'],
    stat: { value: '-70%', label: 'Bearbeitungszeit' },
    result: 'Bestellabwicklung in 4 Plattformen ohne manuellen Aufwand',
  },
  {
    icon: BarChart3,
    color: '#f472b6',
    title: 'Business Intelligence',
    subtitle: 'Alle KPIs — in Echtzeit, automatisch',
    desc: 'Echtzeit-Dashboards, Anomalie-Alerts und saubere Daten — vollautomatisch aggregiert aus all deinen Systemen.',
    benefits: ['Echtzeit-KPI-Dashboards', 'Automatische Datenbereinigung', 'Scheduled Reports', 'Anomalie-Erkennung'],
    stat: { value: '10 Min.', label: 'statt 2 Tagen' },
    result: 'Reporting von 8 Tools in einem zentralen Dashboard',
  },
  {
    icon: GitBranch,
    color: '#28E6B4',
    title: 'Workflow & Intern',
    subtitle: 'Interne Prozesse, die von selbst laufen',
    desc: 'Genehmigungen, Dokumentenmanagement und Übergaben laufen standardisiert im Hintergrund — sauber, nachvollziehbar, skalierbar.',
    benefits: ['Genehmigungsworkflows', 'Aufgabenerstellung & -zuweisung', 'Tool-Integrationen', 'Dokumenten-Management'],
    stat: { value: '-90%', label: 'Genehmigungszeit' },
    result: 'Genehmigungszeiten von 5 Tagen auf 4 Stunden',
  },
]

export default function Services() {
  const [active, setActive] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section id="services" className="py-24 sm:py-32 bg-botti-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Was wir automatisieren</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Automation für jeden
            <br />
            <span className="gradient-text">Bereich deines Business</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            Vom Vertrieb bis zur Buchhaltung — wir identifizieren, wo du am meisten Zeit verlierst,
            und automatisieren genau dort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            const isActive = active === i
            return (
              <div
                key={svc.title}
                className={`section-reveal ${inView ? 'visible' : ''} gradient-border cursor-pointer transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setActive(isActive ? null : i)}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon + stat */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${svc.color}15`, border: `1px solid ${svc.color}25` }}
                    >
                      <Icon size={22} style={{ color: svc.color }} />
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg leading-tight" style={{ color: svc.color }}>{svc.stat.value}</div>
                      <div className="text-botti-subtle text-xs">{svc.stat.label}</div>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-white text-xl mb-1">{svc.title}</h3>
                  <p className="text-botti-teal text-xs font-medium mb-3">{svc.subtitle}</p>
                  <p className="text-botti-muted text-sm leading-relaxed mb-4 flex-1">{svc.desc}</p>

                  {/* Expanded details */}
                  <div className={`faq-content ${isActive ? 'open' : ''}`}>
                    <div className="pt-4 border-t border-botti-border">
                      <ul className="space-y-2 mb-4">
                        {svc.benefits.map(b => (
                          <li key={b} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: svc.color }} />
                            <span className="text-sm text-white/75">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-botti-subtle italic border-l-2 pl-3" style={{ borderColor: svc.color }}>
                        Beispiel: {svc.result}
                      </div>
                    </div>
                  </div>

                  <button
                    className="mt-4 flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: svc.color }}
                  >
                    {isActive ? 'Weniger anzeigen' : 'Details anzeigen'}
                    <ArrowRight size={14} className={`transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-botti-teal hover:bg-botti-teal-dark transition-all duration-200 teal-glow group"
          >
            Welche Automation ist die richtige für mich?
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const INDUSTRIES = [
  {
    icon: '🏥',
    name: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    pain: 'Patientenakten, Terminplanung und Abrechnungen verursachen täglich Stunden manueller Arbeit.',
    automations: [
      'Automatische Terminerinnerungen per SMS & E-Mail',
      'Digitale Patientenaufnahme & Dokumentenverwaltung',
      'Automatisierte Abrechnungsprozesse & Kassenanbindung',
      'Rezept-Tracking und Nachsorge-Workflows',
    ],
    stat: '8h',
    statLabel: 'Zeitersparnis\npro Woche',
  },
  {
    icon: '🍽️',
    name: 'Gastronomie',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    pain: 'Bestellverwaltung, Lieferantenkommunikation und Personalplanung kosten täglich wertvolle Zeit.',
    automations: [
      'Automatisches Bestellwesen & Lieferantenmanagement',
      'Tischreservierungen & Gäsekommunikation automatisieren',
      'Dienstplan-Automatisierung & Schichterinnerungen',
      'Hygiene-Checklisten und Compliance-Workflows',
    ],
    stat: '40%',
    statLabel: 'weniger admin\nAufwand',
  },
  {
    icon: '🔧',
    name: 'Handwerk',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
    pain: 'Angebote, Rechnungen und Kundenkommunikation werden noch immer von Hand erledigt.',
    automations: [
      'Automatische Angebots- und Rechnungserstellung',
      'Kundenkommunikation & Projektstatusbenachrichtigungen',
      'Material- und Lagerverwaltung',
      'Erinnerungen für Wartungsverträge & Servicetermine',
    ],
    stat: '15h',
    statLabel: 'gesparte Stunden\nmonatlich',
  },
  {
    icon: '🏠',
    name: 'Immobilien',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    pain: 'Lead-Follow-up, Exposés und Besichtigungstermine werden manuell koordiniert — und Leads gehen verloren.',
    automations: [
      'Automatisches Lead-Nurturing & Follow-up-Sequenzen',
      'Besichtigungsterminierung & Erinnerungen',
      'Automatische Exposé-Erstellung & Versand',
      'Mieterverwaltung & Vertragserinnerungen',
    ],
    stat: '3x',
    statLabel: 'mehr qualifizierte\nLeads',
  },
  {
    icon: '🚚',
    name: 'Logistik',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    pain: 'Auftragsabwicklung, Tracking und Reporting werden noch manuell gepflegt und verursachen Fehler.',
    automations: [
      'Automatische Auftragsabwicklung & Disposition',
      'Echtzeit-Tracking und Kundenbenachrichtigungen',
      'Automatisierte Frachtabrechnung',
      'Reporting-Dashboards für KPIs',
    ],
    stat: '70%',
    statLabel: 'weniger\nFehlerquote',
  },
  {
    icon: '🛍️',
    name: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    pain: 'Bestandsverwaltung, Bestellabwicklung und Retourenbearbeitung laufen noch immer manuell.',
    automations: [
      'Echtzeit-Bestandssync über alle Plattformen',
      'Automatische Auftragsabwicklung & Versand',
      'Retourenautomatisierung & Erstattungsprozesse',
      'Personalisierte Kunden-E-Mail-Sequenzen',
    ],
    stat: '-70%',
    statLabel: 'Bearbeitungszeit',
  },
  {
    icon: '💆',
    name: 'Wellness',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    pain: 'Buchungen, Erinnerungen und Kundenpflege werden noch händisch verwaltet.',
    automations: [
      'Online-Buchungssystem & automatische Erinnerungen',
      'Loyalitätsprogramm-Automatisierung',
      'Geburtstagsgrüße & Reaktivierungs-Kampagnen',
      'Ressourcen- und Raumverwaltung',
    ],
    stat: '25%',
    statLabel: 'mehr\nWiederkehrer',
  },
  {
    icon: '⚖️',
    name: 'Kanzleien',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    pain: 'Dokumentenmanagement, Fristenüberwachung und Mandantenkommunikation sind zeitintensiv.',
    automations: [
      'Automatisches Dokumentenmanagement & Ablage',
      'Fristüberwachung & Erinnerungssystem',
      'Mandantenkommunikation & Statusupdates',
      'Rechnungsstellung & Stundennachverfolgung',
    ],
    stat: '12h',
    statLabel: 'gesparte Stunden\npro Woche',
  },
]

export default function Industries() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()
  const ind = INDUSTRIES[active]

  return (
    <section id="industries" className="py-24 sm:py-32 bg-botti-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Branchen</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Automation für deine Branche —
            <br />
            <span className="gradient-text">nicht von der Stange</span>
          </h2>
          <p className="text-botti-muted text-lg max-w-2xl mx-auto">
            Jede Branche hat eigene Schmerzpunkte. Wir kennen sie — und automatisieren gezielt.
          </p>
        </div>

        {/* Industry selector tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                active === i
                  ? 'bg-botti-teal text-black border-botti-teal font-bold'
                  : 'text-botti-muted border-botti-border hover:border-botti-teal/30 hover:text-white'
              }`}
            >
              {ind.icon} {ind.name}
            </button>
          ))}
        </div>

        {/* Active industry detail */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-96">
            <img
              src={ind.image}
              alt={ind.name}
              className="w-full h-full object-cover transition-all duration-500"
              key={ind.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-botti-bg/90 via-botti-bg/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-botti-card/80 backdrop-blur-sm border border-botti-border">
                <span className="text-2xl">{ind.icon}</span>
                <span className="font-bold text-white">{ind.name}</span>
              </div>
            </div>
            {/* Stat overlay */}
            <div className="absolute top-6 right-6 text-center px-4 py-3 rounded-xl bg-botti-teal/90 backdrop-blur-sm">
              <div className="font-display font-bold text-black text-2xl leading-tight">{ind.stat}</div>
              <div className="text-black/70 text-xs leading-tight whitespace-pre-line">{ind.statLabel}</div>
            </div>
          </div>

          {/* Content */}
          <div key={`content-${ind.name}`} className="animate-fade-in">
            <p className="text-sm font-semibold text-botti-teal uppercase tracking-widest mb-3">{ind.icon} {ind.name}</p>
            <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4 leading-tight">
              Das Problem das wir lösen
            </h3>
            <p className="text-botti-muted text-base leading-relaxed mb-8 border-l-2 border-red-500/40 pl-4 italic">
              "{ind.pain}"
            </p>

            <h4 className="text-white font-semibold mb-4">Was wir automatisieren:</h4>
            <ul className="space-y-3 mb-8">
              {ind.automations.map(a => (
                <li key={a} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-botti-teal/20 border border-botti-teal/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-botti-teal" />
                  </div>
                  <span className="text-white/80 text-sm leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-black bg-botti-teal hover:bg-botti-teal-dark transition-all duration-200 group"
            >
              Automation für {ind.name} anfragen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

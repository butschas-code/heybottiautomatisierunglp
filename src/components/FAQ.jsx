import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const FAQS = [
  {
    q: 'Was genau kostet das Starter-Paket?',
    a: 'Das Starter-Paket kostet €997 (zzgl. MwSt.). Das ist ein einmaliger Projektpreis — keine laufenden Lizenzkosten von uns. Dazu kommen ggf. Kosten für die von dir genutzten Tools (z.B. Make, n8n oder Zapier) — das besprechen wir vorab transparent.',
  },
  {
    q: 'Wie lange dauert die Umsetzung?',
    a: 'Typischerweise 4–8 Wochen von Analyse bis Go-Live. Phase 1 (Analyse): 1–2 Wochen. Phase 2 (Design): 1–2 Wochen. Phase 3 (Build & Test): 2–4 Wochen. Danach bist du live — mit 30 Tagen aktivem Support.',
  },
  {
    q: 'Muss ich meine bestehenden Tools wechseln?',
    a: 'Nein! Wir automatisieren das, was du bereits nutzt. Ob HubSpot, Shopify, Gmail, Odoo oder ein anderes Tool — wir verbinden deine bestehenden Systeme. Du musst nichts neu einführen, wenn es nicht nötig ist.',
  },
  {
    q: 'Was passiert, wenn nach dem Launch etwas schiefgeht?',
    a: 'Für 30 Tage nach dem Launch sind wir aktiv für dich da — das ist im Paket inklusive. Wir überwachen die Automation, beheben Fehler und optimieren. Danach bieten wir optionale Support-Pakete für laufende Betreuung an.',
  },
  {
    q: 'Ist mein Unternehmen groß genug für Automation?',
    a: 'Ja! Gerade kleinere Unternehmen profitieren überproportional von Automation, weil jede gesparte Stunde zählt. Wir arbeiten mit Unternehmen ab 5 Mitarbeiter. Entscheidend ist nicht die Größe, sondern ob repetitive Prozesse existieren — und die haben fast alle.',
  },
  {
    q: 'Für welche Branchen seid ihr tätig?',
    a: 'Wir arbeiten branchenübergreifend: Healthcare, Gastronomie, Handwerk, Immobilien, Logistik, Retail, Wellness, Kanzleien, Baubranche, Agenturen, E-Commerce und mehr. Jede Branche hat eigene Workflows — wir kennen die spezifischen Herausforderungen.',
  },
  {
    q: 'Was passiert im kostenlosen Erstgespräch?',
    a: 'Im Erstgespräch (ca. 30–45 Min.) lernen wir dein Business kennen, verstehen deine Prozesse und zeigen dir konkret, wo Automation sofort helfen würde. Kein Sales-Pitch — nur echtes Interesse an deiner Situation. Danach bekommst du ein individuelles Angebot.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section id="faq" className="py-24 sm:py-32 bg-botti-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-14 section-reveal ${inView ? 'visible' : ''}`}>
          <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Häufige Fragen
          </h2>
          <p className="text-botti-muted text-lg">
            Alles, was du wissen möchtest — bevor du anfragst.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className={`section-reveal ${inView ? 'visible' : ''} rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-botti-teal/30 bg-botti-teal-dim'
                    : 'border-botti-border bg-botti-card hover:border-botti-border-light'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`font-semibold text-base transition-colors ${isOpen ? 'text-botti-teal' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                      isOpen
                        ? 'bg-botti-teal border-botti-teal text-black'
                        : 'border-botti-border text-botti-muted'
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                  <div className="px-5 sm:px-6 pb-5 text-botti-muted text-sm leading-relaxed">
                    {faq.a}
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

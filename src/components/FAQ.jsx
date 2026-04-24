import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const FAQS = [
  {
    q: 'What exactly is a Digital Brand Personality?',
    a: 'It is a branded AI-powered customer communication layer configured around your business identity, tone of voice, products, and target market. It is not a generic chatbot — it sounds and responds like your brand, handles customer inquiries intelligently, and generates business insights from every conversation.',
  },
  {
    q: 'How is this different from a standard chatbot?',
    a: 'Standard chatbots are reactive — they wait, search, and answer. Your Digital Brand Personality is configured around your identity and connects customer dialogue with business learning. Every conversation reveals insights about what customers want, where they hesitate, and which products need better explanation.',
  },
  {
    q: 'Which channels does it work on?',
    a: 'Your Digital Brand Personality can be deployed on website chat, WhatsApp, email routing, and order request flows. You choose which channels make sense for your business during configuration.',
  },
  {
    q: 'How long does configuration take?',
    a: 'The core configuration — URL input, personality setup, product entry, and channel connection — can be completed in one session. More detailed customization of tone, dialect, market focus, and knowledge base takes a few days of iteration with the Heybotti team.',
  },
  {
    q: 'What is the minimum to get started?',
    a: 'You need at least three products or services entered, your brand information, and a connection channel (WhatsApp number or email). We can extract much of the initial context directly from your website URL.',
  },
  {
    q: 'What is the SOFIA connection?',
    a: 'SOFIA is the intelligent agentic operations layer at the center of Heybotti. Your Digital Brand Personality works as a focused, lightweight version of SOFIA — connected to the network so it learns faster over time. Technical integration can be supported through Horizen blockchain infrastructure.',
  },
  {
    q: 'What is a Custom LLM setup?',
    a: 'For businesses that want more control, we can configure a dedicated AI environment with a custom model, brand-specific knowledge base, and secure data structure. This is recommended for businesses with specific compliance requirements or high interaction volumes. Infrastructure can be hosted via Contabo OpenClaw.',
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
            Common questions
          </h2>
          <p className="text-botti-muted text-lg">
            Everything you need to know before you start.
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

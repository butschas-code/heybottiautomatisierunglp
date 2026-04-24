import { Link, Cpu, Zap, Globe } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const SOFIA_FEATURES = [
  { title: 'Connected to SOFIA', desc: 'Each customer server can be connected to SOFIA and the Heybotti team so the network learns faster, improves faster and becomes more useful over time.' },
  { title: 'Horizen Blockchain', desc: 'Technical connection supported through Horizen blockchain infrastructure for secure, connected learning and future scalability.' },
  { title: 'Network Learning', desc: 'Your Digital Brand Personality benefits from shared network intelligence — every deployment strengthens the whole.' },
]

const LLM_INCLUDES = [
  'Dedicated server setup',
  'Custom model configuration',
  'Brand-specific knowledge base',
  'Secure data structure',
  'Role-based AI behavior',
  'Website or WhatsApp integration',
  'Business-specific prompt architecture',
  'Ongoing optimization',
]

export default function Process() {
  const [ref, inView] = useInView()
  const [llmRef, llmInView] = useInView()

  return (
    <>
      {/* SOFIA Connection */}
      <section id="sofia" className="py-24 sm:py-32 bg-botti-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`text-center mb-16 section-reveal ${inView ? 'visible' : ''}`}>
            <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">The SOFIA Connection</p>
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              A light version of SOFIA
              <br />
              <span className="gradient-text">for your business</span>
            </h2>
            <p className="text-botti-muted text-lg max-w-2xl mx-auto">
              At the center of Heybotti is SOFIA — our intelligent agentic operations layer.
              Your Digital Brand Personality works like a focused, lightweight version of SOFIA,
              built for customer communication, order management and insight generation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {SOFIA_FEATURES.map((feat, i) => {
              const icons = [Link, Cpu, Globe]
              const colors = ['#28E6B4', '#a78bfa', '#22d3ee']
              const Icon = icons[i]
              return (
                <div
                  key={feat.title}
                  className={`section-reveal ${inView ? 'visible' : ''} gradient-border`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="p-7 h-full flex flex-col">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${colors[i]}15`, border: `1px solid ${colors[i]}25` }}
                    >
                      <Icon size={20} style={{ color: colors[i] }} />
                    </div>
                    <h3 className="font-semibold text-white text-lg mb-3">{feat.title}</h3>
                    <p className="text-botti-muted text-sm leading-relaxed flex-1">{feat.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Sofia visual */}
          <div className={`rounded-2xl border border-botti-teal/20 bg-botti-teal-dim p-8 sm:p-10 text-center section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-botti-teal/40 bg-botti-teal/10 text-botti-teal text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-botti-teal animate-pulse-slow" />
              SOFIA Network — Active
            </div>
            <p className="text-lg text-white font-light leading-relaxed max-w-2xl mx-auto">
              Each Digital Brand Personality is a node in the SOFIA network — a focused AI with its own branded identity, connected to a system that learns continuously from every interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Custom LLM */}
      <section id="custom-llm" ref={llmRef} className="py-24 sm:py-32 bg-botti-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`section-reveal ${llmInView ? 'visible' : ''}`}>
              <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Custom LLM Setup</p>
              <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                Your own
                <br />
                <span className="gradient-text">AI environment</span>
              </h2>
              <p className="text-botti-muted text-lg leading-relaxed mb-8">
                For businesses that want more control, we can set up a customized LLM environment — dedicated, secure, and built around your specific requirements.
              </p>
              <p className="text-botti-subtle text-sm mb-8">
                Suggested infrastructure option: Contabo OpenClaw hosting for custom LLM deployment.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-botti-teal hover:bg-botti-teal-dark transition-all duration-200 teal-glow group"
              >
                <Zap size={18} />
                Discuss Custom LLM Setup
              </a>
            </div>

            <div className={`section-reveal ${llmInView ? 'visible' : ''} gradient-border`} style={{ transitionDelay: '200ms' }}>
              <div className="p-8">
                <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-5">This can include:</p>
                <ul className="space-y-3">
                  {LLM_INCLUDES.map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-botti-teal flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

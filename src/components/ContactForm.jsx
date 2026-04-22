import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const SERVICES_OPTIONS = [
  'Sales & Marketing Automation',
  'Finance & Accounting Automation',
  'HR & Recruiting Automation',
  'E-Commerce & Fulfillment Automation',
  'Business Intelligence & Reporting',
  'Workflow & Interne Automation',
  'Noch nicht sicher — bitte beraten',
]

const COMPANY_SIZES = ['1–10 Mitarbeiter', '11–50 Mitarbeiter', '51–200 Mitarbeiter', '200+ Mitarbeiter']

export default function ContactForm() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', size: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Bitte gib deinen Namen ein.'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Bitte gib eine gültige E-Mail-Adresse ein.'
    if (!form.service) e.service = 'Bitte wähle einen Bereich.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    // Simulate submit — replace with your actual endpoint or mailto
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 sm:py-32 bg-botti-card/20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <CheckCircle2 size={64} className="text-botti-teal mx-auto mb-6" />
          <h2 className="font-display font-bold text-white text-3xl mb-4">Danke — wir melden uns!</h2>
          <p className="text-botti-muted text-lg mb-8">
            Wir haben deine Anfrage erhalten und melden uns innerhalb von <strong className="text-white">24 Stunden</strong> bei dir.
          </p>
          <div className="rounded-xl border border-botti-teal/20 bg-botti-teal-dim p-6 text-left">
            <p className="text-botti-teal text-sm font-semibold mb-3">Was als nächstes passiert:</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>✅ Deine Anfrage wird von unserem Team geprüft</li>
              <li>📞 Wir kontaktieren dich für ein kostenloses Erstgespräch</li>
              <li>🎯 Du bekommst eine individuelle Einschätzung deines Potenzials</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-botti-bg">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-botti-teal/20 to-transparent" />
        <div className="absolute inset-0 mesh-bg opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div ref={ref} className={`section-reveal ${inView ? 'visible' : ''}`}>
            <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Jetzt starten</p>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
              Lass uns herausfinden,
              <br />
              <span className="gradient-text">was wir für dich</span>
              <br />
              automatisieren können.
            </h2>
            <p className="text-botti-muted text-lg leading-relaxed mb-10">
              Kein Sales-Pitch. Kein Druck. Nur ein ehrliches Gespräch über dein Business —
              und konkrete Ideen, wo Automation sofort anpacken kann.
            </p>

            {/* Trust points */}
            <div className="space-y-4">
              {[
                { icon: '🚀', text: 'Erste Ergebnisse in 4–6 Wochen' },
                { icon: '💬', text: 'Kostenloses Erstgespräch — kein Risiko' },
                { icon: '🔒', text: 'DSGVO-konform & made in Europe' },
                { icon: '📞', text: 'Antwort innerhalb von 24 Stunden' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-white/80 text-base">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`section-reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="rounded-2xl border border-botti-border bg-botti-card p-6 sm:p-8">
              <h3 className="font-display font-bold text-white text-xl mb-2">Starter-Paket anfragen</h3>
              <p className="text-botti-muted text-sm mb-8">Ab €997 · Antwort in &lt; 24h</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    placeholder="Max Mustermann"
                    className={`w-full px-4 py-3 rounded-xl bg-botti-bg border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 transition-all ${errors.name ? 'border-red-500/50' : 'border-botti-border focus:border-botti-teal/50'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">E-Mail *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    placeholder="max@unternehmen.de"
                    className={`w-full px-4 py-3 rounded-xl bg-botti-bg border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 transition-all ${errors.email ? 'border-red-500/50' : 'border-botti-border focus:border-botti-teal/50'}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Telefon <span className="text-botti-subtle">(optional)</span></label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    placeholder="+49 123 456 789"
                    className="w-full px-4 py-3 rounded-xl bg-botti-bg border border-botti-border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 focus:border-botti-teal/50 transition-all"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Was möchtest du automatisieren? *</label>
                  <select
                    value={form.service}
                    onChange={e => handleChange('service', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-botti-bg border text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 transition-all appearance-none ${form.service ? 'text-white' : 'text-botti-subtle'} ${errors.service ? 'border-red-500/50' : 'border-botti-border focus:border-botti-teal/50'}`}
                  >
                    <option value="" disabled>Bereich auswählen...</option>
                    {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1.5">{errors.service}</p>}
                </div>

                {/* Company size */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Unternehmensgröße</label>
                  <div className="grid grid-cols-2 gap-2">
                    {COMPANY_SIZES.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => handleChange('size', s)}
                        className={`px-3 py-2.5 rounded-lg text-xs font-medium border transition-all ${
                          form.size === s
                            ? 'bg-botti-teal-dim border-botti-teal/40 text-botti-teal'
                            : 'bg-botti-bg border-botti-border text-botti-muted hover:border-botti-border-light'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Kurze Beschreibung <span className="text-botti-subtle">(optional)</span></label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    placeholder="Beschreibe kurz, welche Prozesse dich am meisten Zeit kosten..."
                    className="w-full px-4 py-3 rounded-xl bg-botti-bg border border-botti-border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 focus:border-botti-teal/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-black bg-botti-teal hover:bg-botti-teal-dark disabled:opacity-60 transition-all duration-200 group"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={18} className="animate-spin" /> Wird gesendet...</>
                  ) : (
                    <>Paket anfragen & beraten lassen <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></>
                  )}
                </button>

                <p className="text-center text-botti-subtle text-xs">
                  Kostenlose Erstberatung · DSGVO-konform · Kein Spam
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

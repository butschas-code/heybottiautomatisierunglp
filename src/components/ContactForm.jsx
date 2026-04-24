import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const INTENTS = [
  'Create my Digital Brand Personality',
  'Book a Branding Session',
  'Book an Expansion Session',
  'Book an Organization Session',
  'Discuss Custom LLM Setup',
  'General inquiry — tell me more',
]

export default function ContactForm() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', website: '', whatsapp: '', intent: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Please enter a valid email address.'
    if (!form.intent) e.intent = 'Please select an option.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
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
          <h2 className="font-display font-bold text-white text-3xl mb-4">Thank you — we will be in touch.</h2>
          <p className="text-botti-muted text-lg mb-8">
            We have received your message and will respond within <strong className="text-white">24 hours</strong>.
          </p>
          <div className="rounded-xl border border-botti-teal/20 bg-botti-teal-dim p-6 text-left">
            <p className="text-botti-teal text-sm font-semibold mb-3">What happens next:</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>✅ Your request is reviewed by the Heybotti team</li>
              <li>📞 We contact you for a free initial conversation</li>
              <li>🎯 You receive a configuration proposal for your Digital Brand Personality</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-botti-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-botti-teal/20 to-transparent" />
        <div className="absolute inset-0 mesh-bg opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={ref} className={`section-reveal ${inView ? 'visible' : ''}`}>
            <p className="text-botti-teal text-sm font-semibold uppercase tracking-widest mb-4">Give your brand an intelligent voice</p>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
              Your customers are
              <br />
              <span className="gradient-text">already asking.</span>
            </h2>
            <p className="text-botti-muted text-lg leading-relaxed mb-4">
              Your business is already answering. But too much time, knowledge and opportunity is lost in the process.
            </p>
            <p className="text-botti-muted text-base leading-relaxed mb-10">
              Heybotti turns customer communication into a branded, automated and intelligent system.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🎨', text: 'Automated customer service in your brand voice' },
                { icon: '📦', text: 'Order-ready communication from day one' },
                { icon: '📊', text: 'Business insights that move you forward' },
                { icon: '📞', text: 'Response within 24 hours — no pressure' },
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
              <h3 className="font-display font-bold text-white text-xl mb-2">Start now</h3>
              <p className="text-botti-muted text-sm mb-8">Free initial conversation · No commitment</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl bg-botti-bg border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 transition-all ${errors.name ? 'border-red-500/50' : 'border-botti-border focus:border-botti-teal/50'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    placeholder="you@yourbusiness.com"
                    className={`w-full px-4 py-3 rounded-xl bg-botti-bg border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 transition-all ${errors.email ? 'border-red-500/50' : 'border-botti-border focus:border-botti-teal/50'}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Website URL <span className="text-botti-subtle">(optional — we will extract your brand context)</span></label>
                  <input
                    type="url"
                    value={form.website}
                    onChange={e => handleChange('website', e.target.value)}
                    placeholder="https://yourbusiness.com"
                    className="w-full px-4 py-3 rounded-xl bg-botti-bg border border-botti-border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 focus:border-botti-teal/50 transition-all"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">WhatsApp number <span className="text-botti-subtle">(optional)</span></label>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={e => handleChange('whatsapp', e.target.value)}
                    placeholder="+1 234 567 890"
                    className="w-full px-4 py-3 rounded-xl bg-botti-bg border border-botti-border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 focus:border-botti-teal/50 transition-all"
                  />
                </div>

                {/* Intent */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">What are you looking for? *</label>
                  <select
                    value={form.intent}
                    onChange={e => handleChange('intent', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-botti-bg border text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 transition-all appearance-none ${form.intent ? 'text-white' : 'text-botti-subtle'} ${errors.intent ? 'border-red-500/50' : 'border-botti-border focus:border-botti-teal/50'}`}
                  >
                    <option value="" disabled>Select an option...</option>
                    {INTENTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.intent && <p className="text-red-400 text-xs mt-1.5">{errors.intent}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Tell us about your business <span className="text-botti-subtle">(optional)</span></label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    placeholder="What do you sell? Who are your customers? What is your main communication challenge?"
                    className="w-full px-4 py-3 rounded-xl bg-botti-bg border border-botti-border text-white placeholder-botti-subtle text-sm focus:outline-none focus:ring-2 focus:ring-botti-teal/40 focus:border-botti-teal/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-black bg-botti-teal hover:bg-botti-teal-dark disabled:opacity-60 transition-all duration-200 group pulse-ring"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Start Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></>
                  )}
                </button>

                <p className="text-center text-botti-subtle text-xs">
                  Free conversation · No commitment · Response within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

const reasons = ['Early Access', 'General Inquiry', 'Enterprise / White-label', 'Partnership', 'Media Inquiry', 'Technical Support']

const offices = [
  { city: 'Bangalore (HQ)', address: 'Koramangala, Bangalore — 560034', emoji: '🏢' },
  { city: 'Mumbai', address: 'BKC, Bandra West — 400051', emoji: '🏙️' },
  { city: 'Delhi', address: 'Connaught Place — 110001', emoji: '🏛️' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: reasons[0], message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const inputStyle = { width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 16px', color: 'var(--text-primary)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }
  const labelStyle = { fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 8, display: 'block', fontWeight: 500 }

  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* HERO */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 500, height: 400, top: 0, right: -100 }} />
        <div className="orb orb-violet" style={{ width: 400, height: 400, bottom: 0, left: -100 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title" style={{ maxWidth: 600, margin: '0 auto 24px' }}>
            Let's start a<br /><span className="gradient-text">conversation</span>
          </h1>
          <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
            Whether you're curious about early access, want to collaborate, or just have a question — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, maxWidth: 1000, margin: '0 auto', alignItems: 'start' }}>
            {/* LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* CONTACT INFO */}
              <div className="card">
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 2, color: 'var(--gold)', marginBottom: 20, textTransform: 'uppercase' }}>
                  Direct Contact
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { icon: '✉️', label: 'Email', value: 'hello@memoryai.in' },
                    { icon: '📞', label: 'Phone', value: '+91 80 4567 8900' },
                    { icon: '🕐', label: 'Response Time', value: 'Within 24 hours' },
                  ].map(c => (
                    <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.2rem', marginTop: 2 }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 2 }}>{c.label}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* OFFICES */}
              <div className="card">
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 2, color: 'var(--gold)', marginBottom: 20, textTransform: 'uppercase' }}>
                  Our Offices
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {offices.map(o => (
                    <div key={o.city} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.1rem' }}>{o.emoji}</span>
                      <div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{o.city}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{o.address}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOCIAL */}
              <div className="card">
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 2, color: 'var(--gold)', marginBottom: 16, textTransform: 'uppercase' }}>
                  Follow Us
                </h3>
                <div style={{ display: 'flex', gap: 12 }}>
                  {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map(s => (
                    <a key={s} href="#" style={{ padding: '8px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.color = 'var(--gold)' }}
                      onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-secondary)' }}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="card" style={{ padding: 40 }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 20 }}>🙏</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: 12, color: 'var(--gold-light)' }}>Message Received</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>Thank you for reaching out, {form.name}. Our team will get back to you within 24 hours at {form.email}.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', reason: reasons[0], message: '' }) }} className="btn-ghost" style={{ marginTop: 24 }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                    Send us a message
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" style={inputStyle} required />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@email.com" style={inputStyle} required />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Phone (Optional)</label>
                      <input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 9XXXXXXXXX" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reason</label>
                      <select value={form.reason} onChange={e => update('reason', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                        {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell us what you're looking for..." style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }} required />
                  </div>

                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.95rem', padding: '14px 24px', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Sending...' : 'Send Message ✈'}
                  </button>

                  <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useState } from 'react'

const plans = [
  {
    name: 'Memory Seed',
    price: { monthly: 0, annual: 0 },
    tagline: 'Explore the possibility',
    color: 'var(--text-secondary)',
    features: [
      '1 Avatar Profile',
      'Up to 50 screenshots',
      '30-day memory journal',
      'Basic personality model',
      'Text responses only',
      'Community support',
    ],
    cta: 'Start Free',
    href: '/contact',
  },
  {
    name: 'Memory Keeper',
    price: { monthly: 1499, annual: 999 },
    tagline: 'For personal use & family',
    color: 'var(--gold)',
    popular: true,
    features: [
      '3 Avatar Profiles',
      'Unlimited screenshots',
      'Unlimited journal entries',
      'Advanced personality AI',
      'Voice synthesis output',
      'Entity relationship graph',
      'Mobile app access',
      'Priority support',
    ],
    cta: 'Get Started',
    href: '/contact',
  },
  {
    name: 'Memory Legacy',
    price: { monthly: 3999, annual: 2999 },
    tagline: 'For teams & organizations',
    color: 'var(--violet-light)',
    features: [
      'Unlimited Avatar Profiles',
      'Bulk data import',
      'Multi-person collaboration',
      'Custom personality fine-tuning',
      'Voice cloning integration',
      'API access',
      'White-label option',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    href: '/contact',
  },
]

const faqs = [
  { q: 'Is my data safe?', a: 'All data is end-to-end encrypted and stored on secure Indian servers (AWS Mumbai / Azure India). We follow PDPA and GDPR standards. You own your data and can delete it anytime.' },
  { q: 'Can I create an avatar for someone who has passed away?', a: 'Yes. This is one of our most meaningful use cases. You\'ll need chat data from their device (with family consent) and any available journal or diary entries.' },
  { q: 'How accurate is the personality simulation?', a: 'With 500+ messages and 2+ weeks of journal data, accuracy reaches 92–98% in tone, phrase usage, and behavioral style. Quality depends on input data richness.' },
  { q: 'Can I cancel my subscription?', a: 'Yes, cancel anytime from your dashboard. Your data and avatar profiles are preserved for 90 days post-cancellation, giving you time to export everything.' },
  { q: 'Is there a free trial for paid plans?', a: 'Yes — both paid plans include a 14-day free trial with full features. No credit card required to start.' },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* HERO */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 600, height: 400, top: 0, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Transparent Pricing</span>
          <h1 className="section-title" style={{ maxWidth: 600, margin: '0 auto 24px' }}>
            Simple pricing.<br /><span className="gradient-text">Profound value.</span>
          </h1>
          <p className="section-desc" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
            Start free. Grow when you're ready. Every plan includes our core AI — no hidden fees, no data selling.
          </p>

          {/* TOGGLE */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 40, padding: '6px 20px' }}>
            <span style={{ fontSize: '0.85rem', color: !annual ? 'var(--text-primary)' : 'var(--text-muted)' }}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} style={{ width: 46, height: 26, background: annual ? 'var(--gold)' : 'var(--bg-secondary)', border: 'none', borderRadius: 20, cursor: 'pointer', position: 'relative', transition: 'background 0.3s' }}>
              <span style={{ position: 'absolute', top: 3, left: annual ? 'calc(100% - 22px)' : 3, width: 20, height: 20, background: annual ? '#0a0806' : 'var(--text-muted)', borderRadius: '50%', transition: 'left 0.3s' }} />
            </button>
            <span style={{ fontSize: '0.85rem', color: annual ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              Annual <span style={{ color: 'var(--gold)', fontSize: '0.75rem' }}>Save 33%</span>
            </span>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: plan.popular ? 'rgba(196,160,90,0.04)' : 'var(--bg-card)',
                border: `1px solid ${plan.popular ? 'var(--gold)' : 'var(--border)'}`,
                borderRadius: 16, padding: 36, display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden',
                boxShadow: plan.popular ? 'var(--glow-gold)' : 'none',
              }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: 16, right: 16, padding: '4px 12px', background: 'var(--gold)', color: '#0a0806', borderRadius: 20, fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: 1 }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 2, color: plan.color, marginBottom: 8, textTransform: 'uppercase' }}>{plan.name}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4, lineHeight: 1 }}>
                  {plan.price[annual ? 'annual' : 'monthly'] === 0 ? 'Free' : `₹${plan.price[annual ? 'annual' : 'monthly'].toLocaleString()}`}
                  {plan.price[annual ? 'annual' : 'monthly'] > 0 && <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>/mo</span>}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 28 }}>{plan.tagline}</p>
                <div style={{ width: '100%', height: 1, background: 'var(--border)', marginBottom: 28 }} />
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, marginBottom: 32 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 10, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: plan.color, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to={plan.href} className={plan.popular ? 'btn-primary' : 'btn-ghost'} style={{ textAlign: 'center', justifyContent: 'center', width: '100%' }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: `1px solid ${openFaq === i ? 'var(--border-glow)' : 'var(--border)'}`, borderRadius: 10, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500, fontFamily: 'var(--font-body)', textAlign: 'left', gap: 16 }}>
                  {f.q}
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 18px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

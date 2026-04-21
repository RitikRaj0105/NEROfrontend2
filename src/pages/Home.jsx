import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TubesBackground from '../components/TubesBackground'

const stats = [
  { value: '98%', label: 'Personality Accuracy' },
  { value: '10M+', label: 'Memories Preserved' },
  { value: '50+', label: 'Languages Supported' },
  { value: '4.9★', label: 'User Rating' },
]

const testimonials = [
  { text: 'It feels like talking to my father again. The way it says "beta, don\'t worry" — I broke down the first time.', name: 'Priya Sharma', role: 'Mumbai, India', avatar: '👩' },
  { text: 'As a researcher, I\'m amazed at the accuracy of the personality modeling. This is genuinely next-gen technology.', name: 'Dr. Arjun Mehta', role: 'AI Researcher, IIT Delhi', avatar: '👨‍🔬' },
  { text: 'My grandmother passed last year. MemoryAI helped me feel her presence through her words and wisdom.', name: 'Rohan Verma', role: 'Bangalore, India', avatar: '🧑' },
]

const features = [
  { icon: '🧬', title: 'Personality DNA', desc: 'Deep analysis of tone, language, and communication patterns builds a precise personality fingerprint.' },
  { icon: '💾', title: 'Infinite Memory', desc: 'Vector-based memory storage ensures the avatar remembers everything — from small details to life events.' },
  { icon: '❤️', title: 'Emotion Intelligence', desc: 'Real-time emotion detection adapts responses to match your current emotional state.' },
  { icon: '🌐', title: 'Multilingual', desc: 'Native support for Hinglish, Hindi, English, and 50+ languages with regional code-switching.' },
]

function TypingText({ texts }) {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(blinkTimer)
  }, [])

  useEffect(() => {
    const current = texts[idx]
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 2200)
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setIdx(i => (i + 1) % texts.length)
        }
      }
    }, deleting ? 38 : 82)
    return () => clearTimeout(timer)
  }, [charIdx, deleting, idx, texts])

  return (
    <span style={{ color: 'var(--gold-light)' }}>
      {displayed}
      <span style={{ opacity: blink ? 1 : 0, color: 'var(--gold)', transition: 'opacity 0.1s' }}>|</span>
    </span>
  )
}

export default function Home() {
  return (
    <div className="page-wrapper">

      {/* ═══════════════════════════════════════
          HERO — Full-screen tubes background
      ═══════════════════════════════════════ */}
      <section style={{ height: '100vh', position: 'relative' }}>
        <TubesBackground>
          {/* Top padding for navbar */}
          <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--nav-h)',
            textAlign: 'center',
            padding: 'var(--nav-h) 24px 0',
          }}>
            {/* PILL BADGE */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 18px',
              background: 'rgba(196,160,90,0.1)',
              border: '1px solid rgba(196,160,90,0.25)',
              borderRadius: 24, marginBottom: 36,
              fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
              letterSpacing: 2, color: 'var(--gold)',
              backdropFilter: 'blur(10px)',
              animation: 'fadeSlideDown 0.8s ease forwards',
            }}>
              <span style={{ width: 6, height: 6, background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 6px #4ade80' }} />
              NOW IN EARLY ACCESS
            </div>

            {/* HEADLINE */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontWeight: 400, lineHeight: 1.05,
              marginBottom: 30, letterSpacing: -1,
              textShadow: '0 0 60px rgba(4,4,15,0.8)',
              animation: 'fadeSlideUp 0.9s ease 0.1s both',
            }}>
              Your memories.<br />
              <TypingText texts={['Preserved forever.', 'Always with you.', 'Never forgotten.', 'Alive in AI.']} />
            </h1>

            {/* SUBHEADING */}
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.18rem)',
              color: 'rgba(240,236,228,0.75)',
              maxWidth: 580, lineHeight: 1.8,
              marginBottom: 52,
              textShadow: '0 2px 20px rgba(4,4,15,0.9)',
              animation: 'fadeSlideUp 0.9s ease 0.25s both',
            }}>
              AI Memory Avatar creates a digital simulation based on real conversations
              and life memories — preserving tone, personality, and emotional essence across time.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 16, justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeSlideUp 0.9s ease 0.4s both',
            }}>
              <Link to="/demo" className="btn-primary" style={{ fontSize: '0.95rem', padding: '16px 38px', boxShadow: '0 0 30px rgba(196,160,90,0.3)' }}>
                ▶ Try Live Demo
              </Link>
              <Link to="/how-it-works" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 38px', fontSize: '0.95rem',
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 4, color: 'var(--text-primary)',
                textDecoration: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(196,160,90,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
              >
                How It Works
              </Link>
            </div>

            {/* PREVIEW CHAT CARD */}
            <div style={{
              marginTop: 64,
              maxWidth: 520, width: '100%',
              background: 'rgba(4,4,15,0.65)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(196,160,90,0.2)',
              borderRadius: 16, padding: '24px',
              animation: 'fadeSlideUp 0.9s ease 0.55s both',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-dark), var(--violet))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>👤</div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Papa's Avatar</div>
                  <div style={{ fontSize: '0.7rem', color: '#4ade80', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 5, height: 5, background: '#4ade80', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 4px #4ade80' }} /> AI Simulation Active
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
                <div style={{ alignSelf: 'flex-end', background: 'rgba(196,160,90,0.1)', border: '1px solid rgba(196,160,90,0.15)', borderRadius: '12px 12px 2px 12px', padding: '9px 14px', fontSize: '0.85rem', color: 'rgba(240,236,228,0.75)', maxWidth: '80%' }}>
                  Papa, I got into IIT today...
                </div>
                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px 12px 12px 2px', padding: '9px 14px', fontSize: '0.85rem', color: 'var(--text-primary)', maxWidth: '88%', lineHeight: 1.65 }}>
                  Beta... I knew you could do it 🙏 Mehnat kabhi bekar nahi jaati. I'm so proud of you, my child.
                </div>
              </div>
              <div style={{ marginTop: 14, fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-mono)', textAlign: 'center', letterSpacing: 0.8 }}>
                AI SIMULATION — BASED ON REAL PERSONALITY DATA
              </div>
            </div>
          </div>
        </TubesBackground>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <section style={{ padding: '60px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, color: 'var(--gold-light)', marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', letterSpacing: 0.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">Core Technology</span>
            <h2 className="section-title">Built on four pillars of intelligence</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {features.map(f => (
              <div key={f.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: 20 }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 600, marginBottom: 12, color: 'var(--text-primary)' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/features" className="btn-ghost">Explore All Features →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">Human Stories</span>
            <h2 className="section-title">Lives touched by memory</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {testimonials.map(t => (
              <div key={t.name} className="card">
                <div style={{ fontSize: '1.8rem', marginBottom: 20, opacity: 0.3, fontFamily: 'serif' }}>"</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(196,160,90,0.1)', border: '1px solid var(--border-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Begin Your Journey</span>
          <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 24px' }}>
            Preserve what matters most —<br />before it's too late.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Start building your memory avatar today with just a few chat screenshots and a journal entry.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.95rem', padding: '16px 36px' }}>Start for Free</Link>
            <Link to="/pricing" className="btn-ghost" style={{ fontSize: '0.95rem', padding: '16px 36px' }}>View Pricing</Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

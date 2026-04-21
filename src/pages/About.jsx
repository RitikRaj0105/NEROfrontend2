import { Link } from 'react-router-dom'

const team = [
  { name: 'Aryan Kapoor', role: 'Co-founder & CEO', bg: '🧑‍💼', bio: 'Former ML engineer at Google DeepMind. Lost his grandfather in 2021 — built MemoryAI to preserve his stories.' },
  { name: 'Dr. Priya Nair', role: 'Co-founder & CTO', bg: '👩‍💻', bio: 'PhD in Computational Linguistics from IIT Bombay. Expert in multilingual NLP and personality modeling.' },
  { name: 'Rohan Singh', role: 'Head of Design', bg: '🧑‍🎨', bio: 'Award-winning UX designer with 10 years experience creating empathetic human-centered interfaces.' },
  { name: 'Anjali Verma', role: 'Head of Ethics', bg: '👩‍⚖️', bio: 'AI ethics researcher and former NASSCOM advisor. Ensures MemoryAI operates with integrity and care.' },
]

const milestones = [
  { year: '2021', event: 'Founded in Bangalore', desc: 'Two engineers, one loss, and a vision to preserve human essence through AI.' },
  { year: '2022', event: 'First Working Prototype', desc: 'Built the core personality modeling engine and ran pilot tests with 100 volunteer families.' },
  { year: '2023', event: 'Seed Funding ₹3.2Cr', desc: 'Raised seed round led by Blume Ventures and Kalaari Capital. Expanded team to 12.' },
  { year: '2024', event: 'Beta Launch', desc: 'Onboarded 5,000 beta users. Crossed 10M memories stored. Featured in Economic Times.' },
  { year: '2025', event: 'Early Access Live', desc: 'Platform open to public. Series A underway. Expanding to Southeast Asia and Middle East.' },
]

const values = [
  { icon: '💙', title: 'Empathy First', desc: 'Every design decision starts with the human experience. We build for hearts, not just minds.' },
  { icon: '🔒', title: 'Privacy Sacred', desc: 'Your memories are yours. We never sell data. We never train on your personal content without explicit consent.' },
  { icon: '⚖️', title: 'Ethical AI', desc: 'We maintain clear AI labels, consent frameworks, and psychological safety protocols in all use cases.' },
  { icon: '🌱', title: 'Built for India', desc: 'Designed from the ground up for Indian families — supporting Hinglish, regional languages, and cultural context.' },
]

export default function About() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* HERO */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-violet" style={{ width: 700, height: 500, top: -100, left: -200 }} />
        <div className="orb orb-gold" style={{ width: 500, height: 500, bottom: 0, right: -150 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Our Story</span>
          <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto 28px' }}>
            Built from grief.<br />
            <span className="gradient-text">Guided by purpose.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: 640, margin: '0 auto', lineHeight: 1.85 }}>
            MemoryAI started when our founder lost his grandfather and realized that with him went decades of stories, wisdom, and warmth — locked forever in the past. We decided that no one else should face that silence.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ paddingBottom: 100, background: 'var(--bg-secondary)', paddingTop: 80, borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Core Values</span>
            <h2 className="section-title">What we stand for</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {values.map(v => (
              <div key={v.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones</h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 80, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, var(--border), transparent)' }} />
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, marginBottom: 48, position: 'relative' }}>
                <div style={{ textAlign: 'right', paddingRight: 24 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 700 }}>{m.year}</span>
                </div>
                <div style={{ paddingLeft: 28, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 6, width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)', border: '2px solid var(--bg-primary)', transform: 'translateX(-50%)' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{m.event}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">The Team</span>
            <h2 className="section-title">People behind the mission</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {team.map(t => (
              <div key={t.name} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-dark), var(--violet))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 16px', border: '2px solid var(--border-glow)' }}>
                  {t.bg}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{t.name}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: 1, marginBottom: 14 }}>{t.role}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 700, height: 400, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, fontStyle: 'italic', color: 'var(--text-primary)', maxWidth: 760, margin: '0 auto 40px', lineHeight: 1.5, letterSpacing: -0.3 }}>
            "The people we love never truly leave — if we preserve the right memories."
          </blockquote>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary">Join Our Mission</Link>
            <Link to="/demo" className="btn-ghost">Try the Demo</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

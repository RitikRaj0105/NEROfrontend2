import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01', icon: '📱', title: 'Upload Chat Screenshots',
    desc: 'Import screenshots from WhatsApp, Telegram, or any messaging app. Our OCR engine extracts text with high accuracy, even from Hinglish and mixed-language conversations.',
    detail: ['Supports WhatsApp, Telegram, iMessage', 'Multi-language OCR including Hindi & Hinglish', 'Processes 1000s of messages in minutes', 'Automatic noise & timestamp removal'],
    color: 'var(--gold)',
  },
  {
    num: '02', icon: '📓', title: 'Write a Memory Journal',
    desc: 'Log daily memories — people they met, emotions, experiences, stories. The richer the journal, the more authentic and contextually aware the avatar becomes.',
    detail: ['Daily or periodic log entries', 'Tag people, places, and events', 'Add emotional context and tone', 'Import existing notes or diaries'],
    color: 'var(--violet-light)',
  },
  {
    num: '03', icon: '🧬', title: 'Personality Analysis',
    desc: 'Advanced NLP models analyze tone, language style, common phrases, behavioral patterns, and emotional signatures to construct a detailed personality profile.',
    detail: ['Tone classification (caring, strict, humorous)', 'Phrase frequency and pattern mining', 'Code-switching & regional language detection', 'Behavioral trait mapping'],
    color: 'var(--gold-light)',
  },
  {
    num: '04', icon: '💾', title: 'Memory Vector Storage',
    desc: 'Every journal entry is converted to semantic embeddings and stored in a vector database. This enables the avatar to recall relevant memories contextually during conversations.',
    detail: ['Sentence embedding with transformer models', 'Semantic similarity search (RAG)', 'Long-term and short-term memory layers', 'Context-aware retrieval at runtime'],
    color: '#a78bfa',
  },
  {
    num: '05', icon: '🤖', title: 'AI Response Generation',
    desc: 'When you send a message, the system detects emotion, fetches personality, retrieves memories, assembles a structured prompt, and generates a response in the person\'s voice.',
    detail: ['Real-time emotion detection (9 emotion classes)', 'Dynamic prompt assembly pipeline', 'LLM generation with personality constraints', 'Response quality scoring & filtering'],
    color: '#34d399',
  },
  {
    num: '06', icon: '🔊', title: 'Voice & Continuous Learning',
    desc: 'Optionally receive voice responses via text-to-speech. Every new interaction and journal entry continues to refine and improve the avatar over time.',
    detail: ['Text-to-speech with emotional tone', 'Multiple voice profile options', 'Continuous learning loop', 'User feedback integration'],
    color: '#fb7185',
  },
]

export default function HowItWorks() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* HERO */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 500, height: 500, top: -100, right: -100 }} />
        <div className="orb orb-violet" style={{ width: 400, height: 400, bottom: 0, left: -100 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">The Process</span>
          <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto 24px' }}>
            From raw conversations to<br /><span className="gradient-text">living memory</span>
          </h1>
          <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center', maxWidth: 560 }}>
            A six-stage pipeline that transforms chat histories and journal entries into an emotionally intelligent digital presence.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 80px 1fr' : '1fr 80px 1fr',
                gap: 0,
                alignItems: 'center',
                marginBottom: 0,
              }}>
                {/* LEFT CONTENT */}
                <div style={{ padding: '48px 40px', textAlign: i % 2 === 0 ? 'right' : 'left', order: i % 2 === 0 ? 0 : 2 }}>
                  {i % 2 === 0 ? (
                    <StepContent step={step} />
                  ) : (
                    <StepDetail step={step} align="left" />
                  )}
                </div>

                {/* MIDDLE TIMELINE */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                  <div style={{ width: 2, flex: 1, background: `linear-gradient(to bottom, ${i === 0 ? 'transparent' : 'var(--border)'}, var(--border))` }} />
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%', border: `2px solid ${step.color}`,
                    background: `${step.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', flexShrink: 0, zIndex: 1,
                    boxShadow: `0 0 20px ${step.color}30`,
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ width: 2, flex: 1, background: `linear-gradient(to bottom, var(--border), ${i === steps.length - 1 ? 'transparent' : 'var(--border)'})` }} />
                </div>

                {/* RIGHT CONTENT */}
                <div style={{ padding: '48px 40px', order: i % 2 === 0 ? 2 : 0 }}>
                  {i % 2 === 0 ? (
                    <StepDetail step={step} align="left" />
                  ) : (
                    <StepContent step={step} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-secondary)', padding: '80px 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 24 }}>Ready to begin?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 40, fontSize: '1rem' }}>Upload your first screenshot and see the magic in minutes.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link to="/demo" className="btn-primary">Try the Demo</Link>
            <Link to="/contact" className="btn-ghost">Get Early Access</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function StepContent({ step }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: step.color, letterSpacing: 3, marginBottom: 12 }}>
        STEP {step.num}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, marginBottom: 16, color: 'var(--text-primary)', lineHeight: 1.2 }}>
        {step.title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>{step.desc}</p>
    </div>
  )
}

function StepDetail({ step, align }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px', borderLeft: align === 'left' ? `3px solid ${step.color}` : undefined, borderRight: align !== 'left' ? `3px solid ${step.color}` : undefined }}>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {step.detail.map(d => (
          <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: step.color, marginTop: 1, flexShrink: 0 }}>✓</span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}

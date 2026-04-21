import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Data Input',
    color: 'var(--gold)',
    features: [
      { icon: '📸', title: 'Screenshot Upload', desc: 'Drag-and-drop interface for bulk uploading chat screenshots from any messaging platform.' },
      { icon: '🔍', title: 'Smart OCR Engine', desc: 'High-accuracy text extraction that handles fonts, emojis, Hinglish, and low-quality images.' },
      { icon: '📓', title: 'Memory Journal', desc: 'Structured daily journaling with tagging for people, places, emotions, and events.' },
      { icon: '🔄', title: 'Auto Sync', desc: 'Connect messaging apps directly for automatic conversation import and continuous updates.' },
    ],
  },
  {
    label: 'Intelligence',
    color: 'var(--violet-light)',
    features: [
      { icon: '🧬', title: 'Personality Profiling', desc: 'Builds a precise personality DNA including tone, vocabulary, phrase patterns, and behavioral tendencies.' },
      { icon: '😊', title: '9-Class Emotion Detection', desc: 'Identifies anger, joy, sadness, fear, love, surprise, disgust, anticipation, and trust in real time.' },
      { icon: '🌐', title: '50+ Language Support', desc: 'Native support for Indian languages, Hinglish code-switching, and regional dialects.' },
      { icon: '📊', title: 'Behavioral Analytics', desc: 'Tracks response patterns like advice-giving, emotional support, humor usage, and confrontation style.' },
    ],
  },
  {
    label: 'Memory',
    color: '#34d399',
    features: [
      { icon: '🗄️', title: 'Vector Memory Storage', desc: 'Semantic embeddings in a vector database for contextual memory retrieval across all stored data.' },
      { icon: '🔗', title: 'Entity Graph', desc: 'Automatically builds a knowledge graph of people, places, and relationships mentioned in data.' },
      { icon: '⏳', title: 'Temporal Memory', desc: 'Time-aware memory prioritizes recent events while maintaining access to older memories.' },
      { icon: '♾️', title: 'Unlimited Storage', desc: 'No cap on memories or journal entries — store a lifetime of experiences.' },
    ],
  },
  {
    label: 'Output',
    color: '#fb7185',
    features: [
      { icon: '💬', title: 'Style-matched Responses', desc: 'Every response mirrors the exact vocabulary, sentence structure, and tone of the simulated person.' },
      { icon: '🔊', title: 'Voice Synthesis', desc: 'TTS with emotional tone matching for an immersive auditory experience.' },
      { icon: '📱', title: 'Mobile App', desc: 'Native iOS and Android apps for on-the-go conversations with your memory avatar.' },
      { icon: '🔒', title: 'End-to-End Encryption', desc: 'All personal data, memories, and conversations are fully encrypted and private.' },
    ],
  },
]

export default function Features() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* HERO */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Full Feature Set</span>
          <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto 24px' }}>
            Every feature engineered for<br /><span className="gradient-text">authentic human connection</span>
          </h1>
          <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
            16 core features across data input, intelligence, memory, and output — built to the highest standard of AI engineering.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            {categories.map(c => (
              <div key={c.label} style={{ padding: '6px 16px', background: 'var(--bg-card)', border: `1px solid ${c.color}40`, borderRadius: 20, fontSize: '0.82rem', color: c.color, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE CATEGORIES */}
      {categories.map((cat, ci) => (
        <section key={cat.label} style={{ paddingBottom: 80, background: ci % 2 === 1 ? 'var(--bg-secondary)' : 'transparent' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <div style={{ width: 4, height: 40, background: cat.color, borderRadius: 2 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: 2, color: cat.color, marginBottom: 4 }}>CATEGORY {String(ci + 1).padStart(2, '0')}</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{cat.label}</h2>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {cat.features.map(f => (
                <div key={f.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: `${cat.color}15`, border: `1px solid ${cat.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: 18 }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Why MemoryAI</span>
            <h2 className="section-title">How we compare</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr>
                  {['Feature', 'MemoryAI', 'Other AI Chat', 'Basic Chatbot'].map((h, i) => (
                    <th key={h} style={{ padding: '16px 20px', textAlign: i === 0 ? 'left' : 'center', color: i === 1 ? 'var(--gold-light)' : 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: 1, borderBottom: `1px solid ${i === 1 ? 'var(--gold)' : 'var(--border)'}`, background: i === 1 ? 'rgba(196,160,90,0.05)' : 'transparent' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Personality modeling from real data', '✓', '✗', '✗'],
                  ['Long-term memory across sessions', '✓', 'Partial', '✗'],
                  ['Emotion-aware responses', '✓', 'Limited', '✗'],
                  ['Hinglish & Indian language support', '✓', 'Limited', '✗'],
                  ['OCR from chat screenshots', '✓', '✗', '✗'],
                  ['Voice synthesis output', '✓', 'Partial', '✗'],
                  ['Continuous learning from journal', '✓', '✗', '✗'],
                  ['End-to-end encryption', '✓', 'Varies', '✗'],
                ].map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: '1px solid var(--border)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '14px 20px', textAlign: ci === 0 ? 'left' : 'center', color: ci === 0 ? 'var(--text-primary)' : cell === '✓' ? '#4ade80' : cell === '✗' ? '#6b7280' : 'var(--gold)', background: ci === 1 ? 'rgba(196,160,90,0.03)' : 'transparent' }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 24 }}>Start building your avatar</h2>
          <Link to="/demo" className="btn-primary" style={{ fontSize: '0.95rem', padding: '16px 36px' }}>Try Free Demo →</Link>
        </div>
      </section>
    </div>
  )
}

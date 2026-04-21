import { useState, useRef, useEffect } from 'react'

const PROFILES = [
  { id: 'papa', name: "Papa's Avatar", emoji: '👨', tone: 'caring, wise, uses "beta"', phrases: ['beta', 'don\'t worry', 'mehnat karo'] },
  { id: 'nani', name: "Nani's Avatar", emoji: '👵', tone: 'warm, traditional, loving', phrases: ['arre beta', 'khana khaya', 'meri jaan'] },
  { id: 'friend', name: "Best Friend", emoji: '🧑‍🤝‍🧑', tone: 'funny, casual, uses slang', phrases: ['yaar', 'bhai', 'seriously tho'] },
]

const PRESET_RESPONSES = {
  papa: {
    'tired': 'Beta, thoda rest le lo... you\'ve been working too hard. Health is more important than anything else. Have you eaten properly today?',
    'happy': 'Wah beta! This is what I always believed — you were destined for great things. Keep going, but stay grounded always 🙏',
    'sad': 'Beta, life has ups and downs. Every challenge makes you stronger. I\'m always with you — just close your eyes and you\'ll hear my voice in your heart.',
    'exam': 'Don\'t panic, beta. Revision is done, now just sleep well tonight. You know more than you think. Mehnat kabhi bekar nahi jaati.',
    'default': 'Beta, tell me more. I\'m here for you — always have been, always will be. What\'s on your mind?',
  },
  nani: {
    'tired': 'Arre beta, aaja mere paas. Main garam chai banati hoon. Thoda rest lo, Nani ka dil tujhe dekh ke bhar aaya.',
    'happy': 'Meri jaan! Kitni khushi ki baat hai! Bhagwan tera bhala kare. Aaj tere liye kuch meetha banaungi 😊',
    'sad': 'Arre nahi rone ka beta... Nani yahan hai. Yeh sab theek ho jayega. Zindagi mein har mushkil ka koi na koi hal hota hai.',
    'default': 'Meri jaan, khana khaya? Nani ko teri yaad aa rahi thi aaj. Tu theek hai na?',
  },
  friend: {
    'tired': 'Bhai honestly same 😭 let\'s just cancel everything and watch Netflix. You need a proper break yaar, no jokes.',
    'happy': 'YOOO that\'s insane!! Bro you deserve this so much, seriously tho. We\'re celebrating this weekend, no excuses!!',
    'sad': 'Hey, I got you okay? Talk to me. Don\'t keep it inside — that\'s what we\'re here for. Also maybe some chai + samosa? fixes everything lol',
    'default': 'Yaar what\'s going on? Spill. I\'m all ears, no judgment, you know how we roll.',
  },
}

function getResponse(profileId, message) {
  const responses = PRESET_RESPONSES[profileId] || PRESET_RESPONSES.papa
  const lower = message.toLowerCase()
  if (lower.includes('tired') || lower.includes('exhausted') || lower.includes('thak')) return responses.tired || responses.default
  if (lower.includes('happy') || lower.includes('excited') || lower.includes('good news')) return responses.happy || responses.default
  if (lower.includes('sad') || lower.includes('upset') || lower.includes('dukh') || lower.includes('cry')) return responses.sad || responses.default
  if (lower.includes('exam') || lower.includes('test') || lower.includes('study')) return responses.exam || responses.default
  return responses.default
}

export default function Demo() {
  const [profile, setProfile] = useState(PROFILES[0])
  const [messages, setMessages] = useState([
    { from: 'ai', text: `Hello! I'm ${PROFILES[0].name}. How are you feeling today? I'm here to listen.` }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [journalMode, setJournalMode] = useState(false)
  const [journal, setJournal] = useState('')
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const handleProfileChange = (p) => {
    setProfile(p)
    setMessages([{ from: 'ai', text: `Hello! I'm ${p.name}. How are you feeling today? I'm here to listen.` }])
  }

  const sendMessage = () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMsg }])
    setLoading(true)
    setTimeout(() => {
      const response = getResponse(profile.id, userMsg)
      setMessages(prev => [...prev, { from: 'ai', text: response }])
      setLoading(false)
    }, 1200 + Math.random() * 800)
  }

  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh' }}>
      <section style={{ padding: '60px 0 40px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">Interactive Demo</span>
          <h1 className="section-title" style={{ marginBottom: 16 }}>Experience memory<br /><span className="gradient-text">come alive</span></h1>
          <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
            Select an avatar profile and start chatting. This demo uses pre-built personalities — real avatars are built from your personal data.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 100 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
            {/* SIDEBAR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 2, color: 'var(--gold)', marginBottom: 16, textTransform: 'uppercase' }}>
                  Select Avatar
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {PROFILES.map(p => (
                    <button key={p.id} onClick={() => handleProfileChange(p)} style={{
                      background: profile.id === p.id ? 'rgba(196,160,90,0.08)' : 'transparent',
                      border: `1px solid ${profile.id === p.id ? 'var(--gold)' : 'var(--border)'}`,
                      borderRadius: 8, padding: '12px 14px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 12, transition: 'all 0.2s',
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>{p.emoji}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, color: profile.id === p.id ? 'var(--gold-light)' : 'var(--text-primary)' }}>{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 2, color: 'var(--gold)', marginBottom: 12, textTransform: 'uppercase' }}>
                  Profile Info
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: 2 }}>Tone</span>
                    {profile.tone}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>Key Phrases</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {profile.phrases.map(ph => (
                        <span key={ph} style={{ padding: '2px 8px', background: 'rgba(196,160,90,0.08)', border: '1px solid rgba(196,160,90,0.2)', borderRadius: 4, fontSize: '0.75rem', color: 'var(--gold)' }}>{ph}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 20 }}>
                <button onClick={() => setJournalMode(!journalMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', letterSpacing: 1, textTransform: 'uppercase', padding: 0 }}>
                  {journalMode ? '← Back to Chat' : '📓 Try Journal Entry'}
                </button>
                {journalMode && (
                  <div style={{ marginTop: 12 }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 8 }}>Add a memory to teach the avatar</p>
                    <textarea value={journal} onChange={e => setJournal(e.target.value)} placeholder="Today I met Raj at the park..." style={{ width: '100%', minHeight: 100, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 8, padding: 10, color: 'var(--text-primary)', fontSize: '0.82rem', resize: 'vertical', fontFamily: 'var(--font-body)' }} />
                    <button onClick={() => { alert('Memory saved! (Demo mode — in real app this would train the avatar)'); setJournal(''); setJournalMode(false) }} className="btn-primary" style={{ marginTop: 10, width: '100%', justifyContent: 'center', padding: '10px', fontSize: '0.82rem' }}>
                      Save Memory
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* CHAT */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 560 }}>
              {/* CHAT HEADER */}
              <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-dark), var(--violet))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                  {profile.emoji}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{profile.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-mono)' }}>
                    <span style={{ width: 6, height: 6, background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} /> AI Simulation Active
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', padding: '4px 12px', background: 'rgba(255,200,0,0.08)', border: '1px solid rgba(255,200,0,0.2)', borderRadius: 12, fontSize: '0.72rem', color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>
                  DEMO MODE
                </div>
              </div>

              {/* MESSAGES */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {messages.map((m, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start', alignItems: 'flex-end', gap: 10 }}>
                    {m.from === 'ai' && (
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-dark), var(--violet))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>
                        {profile.emoji}
                      </div>
                    )}
                    <div style={{
                      maxWidth: '72%', padding: '10px 16px', borderRadius: m.from === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                      background: m.from === 'user' ? 'rgba(196,160,90,0.1)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${m.from === 'user' ? 'rgba(196,160,90,0.2)' : 'var(--border)'}`,
                      fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-primary)',
                    }}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-dark), var(--violet))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>{profile.emoji}</div>
                    <div style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '14px 14px 14px 2px', display: 'flex', gap: 5, alignItems: 'center' }}>
                      {[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', animation: `bounce 1.2s infinite ${i * 0.2}s`, display: 'inline-block' }} />)}
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* INPUT */}
              <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border)', display: 'flex', gap: 10 }}>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Send a message..."
                  style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 16px', color: 'var(--text-primary)', fontSize: '0.9rem', fontFamily: 'var(--font-body)', outline: 'none' }}
                />
                <button onClick={sendMessage} className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Send ↑</button>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40, padding: '20px', background: 'rgba(255,200,0,0.04)', border: '1px dashed rgba(255,200,0,0.2)', borderRadius: 10, maxWidth: 960, margin: '32px auto 0' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: 0.5 }}>
              ⚠ AI-GENERATED SIMULATION BASED ON DEMO DATA — NOT A REAL PERSON
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  )
}

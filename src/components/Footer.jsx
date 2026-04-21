import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold) 0%, var(--violet) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🧠</div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Memory<span style={{ color: 'var(--gold)' }}>AI</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              Preserving the essence of human connection through intelligent memory simulation.
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: 1 }}>
              AI-GENERATED SIMULATION — NOT THE REAL PERSON
            </p>
          </div>

          {[
            { title: 'Product', links: [['/', 'Home'], ['/how-it-works', 'How It Works'], ['/features', 'Features'], ['/demo', 'Live Demo'], ['/pricing', 'Pricing']] },
            { title: 'Company', links: [['/about', 'About Us'], ['/contact', 'Contact'], ['#', 'Blog'], ['#', 'Careers']] },
            { title: 'Legal', links: [['#', 'Privacy Policy'], ['#', 'Terms of Service'], ['#', 'Ethics Policy'], ['#', 'Data Security']] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(([to, label]) => (
                  <li key={label}>
                    <Link to={to} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-line" style={{ marginBottom: 32 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            © 2025 MemoryAI. All rights reserved. Built with purpose, guided by ethics.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
              <a key={s} href="#" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

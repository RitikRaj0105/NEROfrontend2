import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/features', label: 'Features' },
  { to: '/demo', label: 'Demo' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 'var(--nav-h)',
        background: scrolled ? 'rgba(4,4,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* LOGO */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--violet) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', boxShadow: 'var(--glow-gold)',
            }}>🧠</div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: 0.3 }}>
              Memory<span style={{ color: 'var(--gold)' }}>AI</span>
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, '@media(max-width:768px)': { display: 'none' } }} className="nav-links">
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                padding: '8px 16px',
                color: location.pathname === l.to ? 'var(--gold-light)' : 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: 0.2,
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = location.pathname === l.to ? 'var(--gold-light)' : 'var(--text-secondary)'}
              >
                {l.label}
                {location.pathname === l.to && (
                  <span style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)' }} />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + HAMBURGER */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
              Get Early Access
            </Link>
            <button
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 6, padding: '8px 10px', cursor: 'pointer', color: 'var(--text-primary)', display: 'none' }}
              className="hamburger"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, zIndex: 999,
          background: 'rgba(4,4,15,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '12px 16px', color: 'var(--text-primary)', textDecoration: 'none',
              fontSize: '1rem', borderRadius: 8, border: '1px solid transparent',
              transition: 'all 0.2s',
            }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

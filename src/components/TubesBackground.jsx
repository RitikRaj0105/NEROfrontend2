import { useEffect, useRef, useState } from 'react'

// Brand-matched color palettes for MemoryAI (gold + violet theme)
const BRAND_PALETTES = [
  {
    tubes: ["#c4a05a", "#7c5cbf", "#e8c97a"],
    lights: ["#c4a05a", "#a987e8", "#e8c97a", "#7c5cbf"]
  },
  {
    tubes: ["#e8c97a", "#a987e8", "#f0ece4"],
    lights: ["#c4a05a", "#7c5cbf", "#e8c97a", "#ffffff"]
  },
  {
    tubes: ["#ff6eb4", "#c4a05a", "#7c5cbf"],
    lights: ["#ff6eb4", "#c4a05a", "#a987e8", "#e8c97a"]
  },
  {
    tubes: ["#a987e8", "#e8c97a", "#34d399"],
    lights: ["#7c5cbf", "#c4a05a", "#34d399", "#a987e8"]
  },
]

let paletteIndex = 0

function nextPalette() {
  paletteIndex = (paletteIndex + 1) % BRAND_PALETTES.length
  return BRAND_PALETTES[paletteIndex]
}

export default function TubesBackground({ children, onClick }) {
  const canvasRef = useRef(null)
  const appRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [ripple, setRipple] = useState(null)

  useEffect(() => {
    let mounted = true
    const canvas = canvasRef.current
    if (!canvas) return

    const init = async () => {
      try {
        const module = await import(
          /* @vite-ignore */
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
        )
        const TubesCursor = module.default
        if (!mounted) return

        const palette = BRAND_PALETTES[0]
        const app = TubesCursor(canvas, {
          tubes: {
            colors: palette.tubes,
            lights: {
              intensity: 180,
              colors: palette.lights
            }
          }
        })

        appRef.current = app
        if (mounted) setLoaded(true)
      } catch (err) {
        console.error('TubesCursor load failed:', err)
        if (mounted) setLoaded(true) // still show content even if 3d fails
      }
    }

    init()
    return () => { mounted = false }
  }, [])

  const handleClick = (e) => {
    // Ripple effect
    setRipple({ x: e.clientX, y: e.clientY, id: Date.now() })
    setTimeout(() => setRipple(null), 700)

    // Update colors
    if (appRef.current) {
      const palette = nextPalette()
      try {
        appRef.current.tubes?.setColors?.(palette.tubes)
        appRef.current.tubes?.setLightsColors?.(palette.lights)
      } catch (e) { /* ignore */ }
    }
    onClick?.()
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#04040f',
        cursor: 'crosshair',
      }}
    >
      {/* CANVAS */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          display: 'block',
          touchAction: 'none',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      />

      {/* DARK VIGNETTE — keeps text readable */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(4,4,15,0.35) 0%, rgba(4,4,15,0.7) 100%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* BOTTOM FADE for seamless transition into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 180,
        background: 'linear-gradient(to bottom, transparent, #04040f)',
        pointerEvents: 'none', zIndex: 2,
      }} />

      {/* CLICK RIPPLE */}
      {ripple && (
        <div
          key={ripple.id}
          style={{
            position: 'fixed',
            left: ripple.x, top: ripple.y,
            width: 0, height: 0,
            borderRadius: '50%',
            border: '2px solid rgba(196,160,90,0.6)',
            transform: 'translate(-50%, -50%)',
            animation: 'rippleOut 0.7s ease-out forwards',
            pointerEvents: 'none',
            zIndex: 100,
          }}
        />
      )}

      {/* CONTENT OVERLAY */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
        {children}
      </div>

      {/* CLICK HINT */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        pointerEvents: 'none',
        animation: 'floatPulse 3s ease-in-out infinite',
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          border: '1px solid rgba(196,160,90,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.9rem', color: 'rgba(196,160,90,0.7)',
        }}>✦</div>
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: '0.62rem',
          letterSpacing: 3, textTransform: 'uppercase',
          color: 'rgba(196,160,90,0.5)',
        }}>Click to shift colors</span>
      </div>

      <style>{`
        @keyframes rippleOut {
          0%   { width: 0; height: 0; opacity: 1; }
          100% { width: 300px; height: 300px; opacity: 0; }
        }
        @keyframes floatPulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
          50%       { opacity: 1;   transform: translateX(-50%) translateY(-6px); }
        }
      `}</style>
    </div>
  )
}

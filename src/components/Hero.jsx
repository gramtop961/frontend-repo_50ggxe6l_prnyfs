import React, { Suspense } from 'react'
import { motion } from 'framer-motion'

// Lazy-load Spline so the section still looks good even if it fails to load
const Spline = React.lazy(() => import('@splinetool/react-spline'))

const BUTTON_BASE =
  'relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D8A537]/60'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-[#0D0D0F]">
      {/* Static cinematic background so it’s always visual */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_40%,rgba(29,187,97,0.15)_0%,rgba(13,13,15,0.7)_55%,rgba(13,13,15,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.3)_40%,rgba(0,0,0,0.75)_100%)]" />
        {/* Subtle grid for texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(241,239,234,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,239,234,0.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Spline background (optional, won’t block visuals) */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-[#F1EFEA]/80">
            <span className="h-px w-10 bg-gradient-to-r from-[#1DBB61] via-[#1DBB61]/60 to-transparent" />
            <span className="text-xs uppercase tracking-[0.25em]">Portfolio</span>
          </div>

          <h1 className="text-[clamp(2.6rem,6vw,5rem)] leading-[1.05] font-extrabold text-[#F1EFEA]">
            <span className="block shimmer-text">Aditya Jain</span>
            <span className="block text-[#F1EFEA]/90 font-semibold text-[clamp(1rem,2vw,1.25rem)] mt-3">
              Unity Developer • Gameplay • Physics • AI
            </span>
          </h1>

          <p className="max-w-2xl text-[#F1EFEA]/75 text-lg">
            Where ideas turn into playable worlds.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('projects')}
              className={`${BUTTON_BASE} bg-[#1DBB61] text-[#0D0D0F] shadow-[0_0_0_0_rgba(29,187,97,0.0)] hover:shadow-[0_0_35px_0_rgba(29,187,97,0.45)]`}
            >
              View My Projects
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                alert('Resume download coming soon. Send me your PDF link to wire it up!')
              }}
              className={`${BUTTON_BASE} border border-[#D8A537]/60 text-[#F1EFEA] hover:border-[#D8A537] hover:shadow-[0_0_30px_0_rgba(216,165,55,0.35)]`}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle particle drift */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-[#F1EFEA]/10 shadow-[0_0_8px_#D8A53755] animate-float"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 6 + 's',
              animationDuration: 6 + Math.random() * 8 + 's',
            }}
          />
        ))}
      </div>

      {/* Bottom cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#F1EFEA]/60 text-xs tracking-wider z-10">
        Scroll
      </div>
    </section>
  )
}

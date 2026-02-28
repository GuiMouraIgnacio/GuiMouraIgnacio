import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react'

const pieces = [
  'https://dglb26w8rx2ld.cloudfront.net/000_clients/674272/page/w400-674272tMaDCYYU.gif',
  'https://dglb26w8rx2ld.cloudfront.net/000_clients/674272/page/w400-6742721ttHkD0k.gif',
  'https://dglb26w8rx2ld.cloudfront.net/000_clients/674272/page/w400-674272ZUvDRaff.png',
  'https://dglb26w8rx2ld.cloudfront.net/000_clients/674272/page/w400-67427247AeiYfe.gif',
  'https://dglb26w8rx2ld.cloudfront.net/000_clients/674272/page/w400-674272IqorVqSw.png',
  'https://dglb26w8rx2ld.cloudfront.net/000_clients/674272/page/w400-674272ZBuumyPa.png',
  'https://dglb26w8rx2ld.cloudfront.net/000_clients/674272/page/w400-674272lhT5llEG.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-6742729UD1cWSr.gif',
  'https://dglb26w8rx2ld.cloudfront.net/000_clients/674272/page/w400-674272jJpOGVCZ.gif',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272MGhQarqb.gif',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-6742724FA2zE2I.gif',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272gs34MlbD.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272xQyvLgA4.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272kyKd3prM.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272uKLmeOcf.gif',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272arMrXbhO.gif',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272bCpAW5Nr.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272ADyDvvpr.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272ZmFVUjqa.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272pAxQrL4e.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-674272UhljwVgq.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-senseipanda-3a3d22.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-ape3-222e2a.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-ape2-845765.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-screenshot-2024-03-13-152354-b0d9a0.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-screenshot-2024-03-13-152233-bd4ebf.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-screenshot-2024-03-13-152324-ca2d18.png',
  'https://dvqlxo2m2q99q.cloudfront.net/000_clients/674272/page/w400-screenshot-2024-03-13-152506-d49d74.png',
]

const INITIAL_COUNT = 18

export default function Art() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [showAll, setShowAll] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  const visible = showAll ? pieces : pieces.slice(0, INITIAL_COUNT)

  const close = useCallback(() => setSelected(null), [])
  const prev = useCallback(() =>
    setSelected((i) => (i !== null ? (i - 1 + pieces.length) % pieces.length : null)), [])
  const next = useCallback(() =>
    setSelected((i) => (i !== null ? (i + 1) % pieces.length : null)), [])

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, close, prev, next])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="art" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-sm text-accent tracking-widest uppercase">
            Pixel Art
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-3">
            And I draw things too.
          </h2>
          <p className="text-text-muted max-w-xl leading-relaxed mb-10">
            Pixel art has been a hobby since I first picked up a gamepad.
            Characters, animations, game assets. It's where the developer brain
            switches off and something else takes over.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2"
        >
          {visible.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: 0.1 + (i % INITIAL_COUNT) * 0.025,
              }}
              className="group relative aspect-square bg-surface border border-border rounded-lg overflow-hidden hover:border-accent/40 hover:z-10 transition-all duration-200 hover:scale-105 cursor-pointer focus:outline-none focus:border-accent/60"
            >
              <img
                src={src}
                alt={`Pixel art piece ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-contain p-1"
                style={{ imageRendering: 'pixelated' }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Show more / links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          {!showAll && pieces.length > INITIAL_COUNT && (
            <button
              onClick={() => setShowAll(true)}
              className="font-mono text-sm text-text-muted hover:text-text-primary border border-border hover:border-accent/40 px-4 py-2 rounded-lg transition-all duration-200"
            >
              Show all {pieces.length} pieces
            </button>
          )}
          <a
            href="https://cmakota.portfoliobox.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-text-muted hover:text-accent transition-colors duration-200"
          >
            View full portfolio
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={close}
          >
            {/* Image container stop propagation so clicks on image don't close */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={pieces[selected]}
                alt={`Pixel art piece ${selected + 1}`}
                className="w-full h-auto rounded-xl border border-border"
                style={{ imageRendering: 'pixelated' }}
              />

              {/* Counter */}
              <p className="font-mono text-xs text-text-muted text-center mt-3">
                {selected + 1} / {pieces.length}
              </p>
            </motion.div>

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary bg-surface border border-border hover:border-accent/40 rounded-lg p-2 transition-all duration-150"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary bg-surface border border-border hover:border-accent/40 rounded-lg p-2 transition-all duration-150"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary bg-surface border border-border hover:border-accent/40 rounded-lg p-2 transition-all duration-150"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

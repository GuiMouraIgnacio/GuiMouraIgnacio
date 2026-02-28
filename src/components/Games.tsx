import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Gamepad2 } from 'lucide-react'
import { games } from '../data/content'

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export default function Games() {
  return (
    <section id="games" className="py-28 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <span className="font-mono text-sm text-accent tracking-widest uppercase">
            Game Jams
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-3">
            I also make games.
          </h2>
          <p className="text-text-muted max-w-xl leading-relaxed mb-12">
            Outside of my day job I participate in game jams: 48 to 96 hour
            sprints where a small team ships something playable from scratch.
            These are prototypes, not finished products, but they're some of the
            most fun I've had coding.
          </p>
        </FadeInWhenVisible>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((game, i) => (
            <FadeInWhenVisible key={game.title} delay={i * 0.07}>
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Gamepad2 size={15} className="text-accent shrink-0 mt-0.5" />
                    <h3 className="font-bold text-text-primary text-[0.95rem] leading-snug">
                      {game.title}
                    </h3>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                  />
                </div>

                {/* Jam + year */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs px-2 py-1 rounded-md bg-bg border border-border text-accent">
                    {game.jam}
                  </span>
                  {game.solo && (
                    <span className="font-mono text-xs px-2 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent">
                      Solo
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">
                  {game.description}
                </p>

                {/* Footer: genre + roles */}
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {game.genre.map((g) => (
                      <span
                        key={g}
                        className="font-mono text-[0.65rem] px-2 py-1 rounded-md bg-bg border border-border text-text-muted"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono text-[0.65rem] text-text-muted/60">
                    My role: {game.roles.join(' · ')}
                  </p>
                </div>
              </a>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

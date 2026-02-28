import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '../data/content'

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <span className="font-mono text-sm text-accent tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-16">
            Where I've worked.
          </h2>
        </FadeInWhenVisible>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeInWhenVisible key={exp.company} delay={i * 0.1}>
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 -translate-x-[5px] w-[11px] h-[11px] rounded-full border-2 border-accent bg-bg hidden md:block" />

                  <div className="bg-surface border border-border rounded-xl p-7 hover:border-accent/20 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-accent font-medium mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-text-muted bg-bg border border-border px-3 py-1.5 rounded-md shrink-0 self-start">
                        {exp.period}
                      </span>
                    </div>

                    {/* Metrics */}
                    {exp.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-4 mb-5 pb-5 border-b border-border">
                        {exp.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-xl font-bold text-accent">{m.value}</p>
                            <p className="text-xs text-text-muted">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2.5">
                      {exp.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex gap-3 text-sm text-text-muted leading-relaxed"
                        >
                          <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/content'

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

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <span className="font-mono text-sm text-accent tracking-widest uppercase">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-12">
            The toolbox.
          </h2>
        </FadeInWhenVisible>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => (
            <FadeInWhenVisible key={group.category} delay={gi * 0.08}>
              <div className="bg-surface border border-border rounded-xl p-6 h-full hover:border-accent/30 transition-colors duration-300">
                <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-bg border border-border text-text-primary hover:border-accent/50 hover:text-accent transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

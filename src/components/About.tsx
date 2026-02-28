import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap } from 'lucide-react'
import { personal } from '../data/content'

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

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <span className="font-mono text-sm text-accent tracking-widest uppercase">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-12">
            The person behind the code.
          </h2>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            {personal.about.map((paragraph, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <p className="text-text-muted leading-relaxed text-[1.05rem]">
                  {paragraph}
                </p>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-4">
              <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3 text-text-muted">
                  <MapPin size={16} className="text-accent shrink-0" />
                  <span className="text-sm">Lisbon, Portugal</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <GraduationCap size={16} className="text-accent shrink-0" />
                  <span className="text-sm">
                    B.S. Information Systems · Universidade de São Paulo (USP)
                  </span>
                </div>
              </div>

              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                  Currently open to
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Full-time roles',
                    'Remote',
                    'Hybrid (Lisbon)',
                    'Freelance projects',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1.5 rounded-md bg-bg border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}

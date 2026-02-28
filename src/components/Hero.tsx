import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/content'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #222222 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Subtle accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(56,189,248,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto w-full pt-24 pb-16">
        <motion.div {...fadeUp(0.1)} className="mb-4">
          <span className="font-mono text-sm text-accent tracking-widest uppercase">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-text-primary leading-[1.05] tracking-tight mb-6"
        >
          {personal.shortName}
          <br />
          <span className="text-text-muted font-medium">builds things</span>
          <br />
          that{' '}
          <span className="relative inline-block">
            scale
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent rounded-full" />
          </span>
          .
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          Senior Fullstack Developer · 8+ years · Lisbon, Portugal.
          <br />
          From monolith to cloud-native.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-bg font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <Mail size={16} />
            Get in touch
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-accent text-text-muted hover:text-text-primary font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary font-medium text-sm px-2 py-3 transition-colors duration-200"
          >
            View my work
            <ArrowDown size={15} />
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex flex-wrap gap-8 border-t border-border pt-8"
        >
          {[
            { value: '8+', label: 'Years of experience' },
            { value: '500k+', label: 'MAUs supported' },
            { value: '10M+', label: 'Matches processed' },
            { value: '$1M+', label: 'Platform revenue' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-text-muted opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

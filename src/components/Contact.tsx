import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import { personal } from '../data/content'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-28 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-sm text-accent tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-4">
            Let's build something.
          </h2>
          <p className="text-text-muted max-w-lg leading-relaxed mb-12">
            Whether you have a role in mind, a project to discuss, or just want
            to say hi, my inbox is open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-bg font-semibold text-sm px-8 py-4 rounded-xl transition-colors duration-200"
          >
            <Mail size={17} />
            {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 border border-border hover:border-accent text-text-muted hover:text-text-primary font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200"
          >
            <Linkedin size={17} />
            LinkedIn
            <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

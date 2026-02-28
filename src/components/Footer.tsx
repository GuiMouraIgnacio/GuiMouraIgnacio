import { personal } from '../data/content'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-text-muted">
          gmi<span className="text-accent">.</span>
        </span>
        <p className="text-xs text-text-muted text-center">
          Built with React & Tailwind · {personal.location}
        </p>
      </div>
    </footer>
  )
}

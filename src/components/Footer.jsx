const LOGO = 'https://storage.googleapis.com/gpt-engineer-file-uploads/DIpf0zM67tWvGVBUwNbwVLz8ZOy1/uploads/1767279237196-Logo_single_black_background.png'

export default function Footer() {
  return (
    <footer className="border-t border-botti-border bg-botti-card/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="heybotti" className="h-7 w-7 rounded-md" />
            <span className="font-display font-bold text-white">
              hey<span className="gradient-text">botti</span>
            </span>
            <span className="text-botti-subtle text-sm">— Automation für dein Business</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-botti-subtle">
            <a href="https://heybotti.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              heybotti.com
            </a>
            <a href="https://heybotti.com/impressum" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="https://heybotti.com/datenschutz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>

          <p className="text-botti-subtle text-xs">
            © {new Date().getFullYear()} heybotti. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

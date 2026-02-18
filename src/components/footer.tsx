import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle/50 bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div>
            <span className="text-lg font-bold tracking-tight text-text-primary">
              scaff<span className="text-accent-teal">.</span>
            </span>
            <p className="mt-1 text-sm text-text-muted">
              Product leader, mentor & builder.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex gap-8">
            <Link
              href="/portfolio"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="/sobre"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/consultoria"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Consultoria
            </Link>
            <Link
              href="/contato"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/andrescaff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/ScaffCS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-teal transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:contato@andrescaff.com"
              className="text-text-muted hover:text-accent-teal transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border-subtle/50 pt-6 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} André Scaff. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

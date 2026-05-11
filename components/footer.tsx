import Link from 'next/link'
import { Linkedin, Twitter, Mail, ExternalLink, FileText } from 'lucide-react'

const defaultFooterLinks = {
  Services: [
    { label: 'Enterprise AI Trainings', href: '/trainings' },
    { label: 'AI Consulting', href: '/consulting' },
    { label: 'GenAI Architecture', href: '/architecture' },
    { label: 'Workshops & Speaking', href: '/workshops' },
  ],
  Company: [
    { label: 'About Manan', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'AI Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  Expertise: [
    { label: 'RAG Systems', href: '/architecture' },
    { label: 'Multi-Agent AI', href: '/architecture' },
    { label: 'LLMOps', href: '/architecture' },
    { label: 'AI Product Engineering', href: '/consulting' },
  ],
}

interface FooterProps {
  customExpertiseLinks?: Array<{ label: string; href: string }>
}

export function Footer({ customExpertiseLinks }: FooterProps = {}) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-sm bg-ai-blue flex items-center justify-center text-white font-mono font-bold text-sm">
                MJ
              </div>
              <span className="font-semibold text-foreground">Manan Jindal</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Enterprise GenAI Architect & AI Transformation Consultant. Helping organizations
              build production-grade AI systems that deliver real business value.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/mananjindal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ai-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/MananJindal18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ai-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://medium.com/@manan_jindal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ai-blue transition-colors"
                aria-label="Medium"
              >
                <FileText size={18} />
              </a>
              <a
                href="mailto:manan.jindal@gmail.com"
                className="text-muted-foreground hover:text-ai-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries({
            ...defaultFooterLinks,
            ...(customExpertiseLinks ? { Expertise: customExpertiseLinks } : {}),
          }).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link: { label: string; href: string }) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Manan Jindal. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">Enterprise GenAI Architect</span>
            <span className="text-xs text-muted-foreground/50">&middot;</span>
            <span className="text-xs text-muted-foreground">AI Transformation Consultant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

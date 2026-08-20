import React from 'react';
import { GitBranch, Link2, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">&lt;Shalini /&gt;</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Full Stack Engineer crafting premium digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-mono text-[var(--accent)] mb-4 uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-[var(--accent)] transition">
                    // {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-mono text-[var(--accent)] mb-4 uppercase">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/ShaliniBangamuwage"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
                title="GitHub"
              >
                <GitBranch size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shalini-bangamuwage/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
                title="LinkedIn"
              >
                <Link2 size={20} />
              </a>
              <a
                href="mailto:shalini.bangamuwage@gmail.com"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-color)] pt-8 text-center text-sm text-[var(--text-muted)]">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-[var(--accent)]" /> by Shalini Madhuka © {currentYear}
          </p>
          <p className="mt-2 font-mono text-xs">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

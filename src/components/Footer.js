import React from 'react';
import { Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PaperCard from './PaperCard';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Work', href: '#work' },
  { name: 'Resume', href: process.env.PUBLIC_URL + '/resume.pdf' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[var(--bg-primary)] px-4 py-12 text-[var(--text-primary)] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PaperCard className="p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-sm font-semibold text-[var(--accent)]">SM</div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">Bangamuwage Shalini Madhuka Dilhari</p>
                  <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">BSc (Hons) IT • IEEE RAS Member</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-[var(--text-secondary)]">A calm, editorial portfolio that highlights product work, engineering craft, and thoughtful delivery.</p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/ShaliniMadhuka" aria-label="GitHub" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] p-2 text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"><FaGithub className="h-5 w-5" /></a>
                <a href="https://www.linkedin.com/in/bangamuwage-shalini-madhuka-dilhari-b10698305/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] p-2 text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"><FaLinkedin className="h-5 w-5" /></a>
                <a href="mailto:madukadilhari63@gmail.com" aria-label="Email" className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] p-2 text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"><Mail className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">Navigate</h4>
              <ul className="mt-4 space-y-3 text-sm">
                {quickLinks.map((link) => <li key={link.name}><a href={link.href} className="inline-flex items-center gap-2 text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"><ExternalLink className="h-4 w-4 text-[var(--accent)]" />{link.name}</a></li>)}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">Contact</h4>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[var(--accent)]" /><span>Colombo, Sri Lanka</span></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[var(--accent)]" /><a href="mailto:madukadilhari63@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">madukadilhari63@gmail.com</a></div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border-color)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--text-muted)]">© {currentYear} <span className="font-semibold text-[var(--text-primary)]">Shalini Madhuka</span>. All rights reserved.</p>
            <button type="button" onClick={scrollToTop} aria-label="Back to top" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"><ArrowUp className="h-4 w-4" /> Top</button>
          </div>
        </PaperCard>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PaperCard from './PaperCard';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[var(--bg-primary)] px-4 py-6 text-[var(--text-primary)] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PaperCard className="p-6">
          {/* Top CTA */}
          <div className="footer-cta">
            <div className="footer-cta-inner">
              <div className="footer-cta-copy">
                <h2 className="footer-cta-heading">Have an idea worth building?</h2>
                <p className="mt-2 text-[var(--text-secondary)]">I’m open to software engineering opportunities, collaborative projects and meaningful digital-product challenges.</p>
              </div>

              <div className="footer-cta-actions">
                <button onClick={() => scrollTo('#contact')} className="btn btn-primary inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-[var(--text-primary)] text-[var(--text-inverse)] border border-transparent hover:opacity-95">Start a Conversation</button>
                <button onClick={() => scrollTo('#expertise')} className="btn btn-ghost inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold border border-[var(--border)] text-[var(--text-primary)] bg-transparent hover:bg-[var(--surface-elevated)]">View My Work</button>
              </div>
            </div>
          </div>

          {/* Navigation + Contact */}
          <div className="footer-nav">
            <div className="nav-col">
              <h4>Navigate</h4>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}><ExternalLink className="inline-block mr-2" />Home</a>
              <br />
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}><ExternalLink className="inline-block mr-2" />About</a>
              <br />
              <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollTo('#expertise'); }}><ExternalLink className="inline-block mr-2" />Expertise</a>
              <br />
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}><ExternalLink className="inline-block mr-2" />Contact</a>
            </div>

            <div className="nav-col">
              <h4>Contact</h4>
              <div className="text-[var(--text-secondary)]">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />Colombo, Sri Lanka</div>
                <div className="flex items-center gap-2 mt-2"><Mail className="h-4 w-4" /><a href="mailto:shalini.bangamuwage@gmail.com" className="hover:text-[var(--text-primary)]">shalini.bangamuwage@gmail.com</a></div>
                <div className="flex items-center gap-3 mt-4">
                  <a href="https://github.com/ShaliniMadhuka" aria-label="GitHub" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] p-2 text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"><FaGithub className="h-5 w-5" /></a>
                  <a href="https://www.linkedin.com/in/bangamuwage-shalini-madhuka-dilhari-b10698305/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] p-2 text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"><FaLinkedin className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <div>
              <p className="text-[var(--text-muted)]">© {currentYear} <span className="font-semibold text-[var(--text-primary)]">Shalini Madhuka</span>. All rights reserved.</p>
              <p className="mt-1 text-[var(--text-secondary)]">Available for full-time, contract and collaborative roles.</p>
            </div>

            <div className="flex items-center gap-3">
              <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"><ArrowUp className="h-4 w-4" /> Top</button>
              <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]">View Resume</a>
            </div>
          </div>
        </PaperCard>
      </div>
    </footer>
  );
};

export default Footer;

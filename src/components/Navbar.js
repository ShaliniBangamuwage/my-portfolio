import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#blog', label: 'Blog' },
  { href: '#experience', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // track active section
  useEffect(() => {
    const sections = navItems.map((i) => document.querySelector(i.href)).filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      try {
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      } catch (e) {}
      return next;
    });
  }, []);
  const handleAnchorClick = useCallback(
    (event, href) => {
      event.preventDefault();
      closeMobileMenu();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [closeMobileMenu]
  );

  return (
    <header className={clsx('fixed inset-x-0 z-50 transition-all duration-300', scrolled ? 'border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/90 backdrop-blur-xl' : 'bg-transparent')}>
      <div className="mx-auto flex min-h-[72px] max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" onClick={(event) => handleAnchorClick(event, '#home')} className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-[var(--text-primary)] transition hover:text-[var(--accent)]">
          <span className="font-mono text-[var(--accent)]">SHALINI</span>
          <span className="text-[var(--text-secondary)]">/</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className={clsx('relative px-2 py-1 text-sm text-[var(--text-secondary)] transition', active === item.href ? 'text-[var(--text-primary)]' : 'hover:text-[var(--accent)]')}
            >
              {item.label}
              <span
                className={clsx('absolute left-0 right-0 -bottom-2 mx-auto h-0.5 w-0 bg-[var(--accent)] transition-all', active === item.href && 'w-6')}
                style={{ maxWidth: '24px' }}
              />
            </a>
          ))}

          <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noreferrer" className="ml-4 hidden rounded-full border border-[var(--border-color)] px-3 py-2 text-sm text-[var(--text-primary)] transition hover:bg-[var(--accent)]/10 md:inline-flex">
            View Resume
          </a>

          <button
            aria-label="Toggle theme"
            aria-pressed={theme === 'light'}
            onClick={toggleTheme}
            className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] transition hover:bg-[var(--hover)]"
          >
            {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>
        </nav>

        <button type="button" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden">
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[var(--bg-primary)]/80 backdrop-blur-xl md:hidden" onClick={closeMobileMenu}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-auto mt-24 flex max-w-md flex-col gap-4 rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              onClick={(event) => event.stopPropagation()}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleAnchorClick(event, item.href)}
                  className="text-center text-base text-[var(--text-primary)] transition hover:text-[var(--accent)]"
                >
                  {item.label}
                </a>
              ))}
              <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center rounded-full border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-primary)] transition hover:bg-[var(--accent)]/10">
                View Resume
              </a>
              <button
                aria-label="Toggle theme"
                onClick={() => {
                  toggleTheme();
                  closeMobileMenu();
                }}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-primary)] transition hover:bg-[var(--hover)]"
              >
                {theme === 'dark' ? <><Sun size={14} /> Light</> : <><Moon size={14} /> Dark</>}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

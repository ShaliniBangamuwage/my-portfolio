import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, GitBranch, Link2 } from 'lucide-react';

const IDEHero = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[var(--bg-primary)]">
      {/* subtle background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="#c5ff4a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="mb-4 inline-block rounded px-3 py-1 text-xs font-medium tracking-tight text-[var(--accent)] border border-[var(--border-color)] bg-[rgba(197,255,74,0.04)]">AVAILABLE FOR INTERNSHIPS & COLLABORATION</p>

            <h1 className="mt-6 text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Full-stack developer building dependable digital products.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
              I’m Shalini Bangamuwage, an IT undergraduate at the University of Moratuwa. I build responsive web and mobile applications with React, Next.js, Node.js, NestJS, Firebase, MongoDB, and AI integrations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('#projects')} className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--bg-primary)] shadow-sm transition hover:brightness-95">View selected work <ArrowDownRight size={16} /></button>
              <button onClick={() => scrollTo('#contact')} className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--accent)]">Let’s connect <ArrowUpRight size={16} /></button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} viewport={{ once: true }}>
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-secondary)]">FEATURED PROJECT</span>
                <span className="text-xs font-mono text-[var(--text-muted)]">shalinim.dev</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">MediCareX</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">Multi-user pharmacy management platform</p>

              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">A full-stack pharmacy platform connecting customers, pharmacists, suppliers, and administrators through prescription workflows, product management, orders, delivery tracking, and real-time Firebase data.</p>

              <div className="mt-4 text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Role:</strong> Customer dashboard and pharmacist-facing features
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {['React','Vite','NestJS','Firebase','Firestore','Cloudinary'].map((t)=> (
                  <span key={t} className="rounded px-3 py-1 text-xs border border-[var(--border-color)] text-[var(--text-secondary)]">{t}</span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href="https://innovatexuom.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--bg-primary)]">Live demo</a>
                <a href="#projects" onClick={() => scrollTo('#projects')} className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]">View project</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* credibility strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
            <div className="font-semibold text-[var(--text-primary)]">University of Moratuwa</div>
            <div className="text-xs">BSc (Hons) Information Technology</div>
          </div>
          <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
            <div className="font-semibold text-[var(--text-primary)]">GPA</div>
            <div className="text-xs">3.84 / 4.00</div>
          </div>
          <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
            <div className="font-semibold text-[var(--text-primary)]">Projects</div>
            <div className="text-xs">6+ completed projects</div>
          </div>
          <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
            <div className="font-semibold text-[var(--text-primary)]">Leadership</div>
            <div className="text-xs">IEEE WIE Director</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDEHero;
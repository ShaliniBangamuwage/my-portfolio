import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './IDEHero.css';

const IDEHero = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';
  const photo = process.env.PUBLIC_URL + '/prop.jpg';

  return (
    <section id="home" className="home-hero relative isolate overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="pointer-events-none h-full w-full subtle-pattern" />
      </div>

      <div className="home-hero-content relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center hero-grid">
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="home-kicker text-[10px] font-semibold uppercase tracking-[0.36em] text-[var(--text-muted)]">Hello, I am</p>

            <h1 className="home-title mt-4 text-4xl font-black leading-[0.9] tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-[5rem]">
              Shalini<br />Bangamuwage
            </h1>

            <div className="home-specialties mt-5 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[var(--text-secondary)]">
              <span className="rounded-full border border-[var(--border)] px-2.5 py-1.5">Full-Stack</span>
              <span className="rounded-full border border-[var(--border)] px-2.5 py-1.5">AI Products</span>
              <span className="rounded-full border border-[var(--border)] px-2.5 py-1.5">Cloud Systems</span>
            </div>

            <h2 className="mt-6 text-xl font-medium tracking-[-0.04em] text-[var(--text-secondary)] sm:text-2xl">
              Software engineer building modern, scalable, and user-focused digital experiences.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-[0.95rem]">
              I design and build products that combine clean engineering, thoughtful product thinking, and AI-driven experiences for real users.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo('#expertise')} className="inline-flex items-center gap-3 rounded-none border border-[var(--border)] bg-[var(--text-primary)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-inverse)] transition hover:translate-y-[-1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                View Work
                <ArrowDownRight size={16} />
              </button>

              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-none border border-[var(--border)] bg-transparent px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-primary)] transition hover:bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                Download CV
              </a>

              <div className="ml-2 flex items-center gap-2">
                <a href="https://github.com/ShaliniBangamuwage" aria-label="GitHub" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]"><FaGithub className="h-4 w-4" /></a>
                <a href="https://www.linkedin.com/in/shalini-bangamuwage/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]"><FaLinkedin className="h-4 w-4" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="ide-hero-visual-column"
          >
            <div className="ide-portrait-system">
              <div className="ide-orbit ide-orbit-one" aria-hidden="true" />
              <div className="ide-orbit ide-orbit-two" aria-hidden="true" />

              <div className="ide-portrait-frame">
                <img
                  src={photo}
                  alt="Shalini Bangamuwage, innovative software engineer"
                  className="ide-portrait-photo"
                />
              </div>
            </div>

            <div className="ide-tech-list" aria-hidden="true">
              <span>REACT</span>
              <i>•</i>
              <span>NESTJS</span>
              <i>•</i>
              <span>NODE</span>
              <i>•</i>
              <span>AI</span>
              <i>•</i>
              <span>FIREBASE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IDEHero;
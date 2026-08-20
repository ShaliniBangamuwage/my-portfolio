import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import './IDEHero.css';

const IDEHero = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';
  const photo = process.env.PUBLIC_URL + '/prop.jpg';

  return (
    <section id="home" className="relative isolate overflow-hidden bg-hero-gradient min-h-screen flex items-center">
      {/* background details: grid, soft lights, particles */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="pointer-events-none h-full w-full subtle-pattern" />
        <div className="pointer-events-none absolute inset-0 opacity-05">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="gridDots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.7" fill="var(--border-color)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridDots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center hero-grid">
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-sm font-semibold tracking-widest text-[var(--text-secondary)]">HELLO, I’M</p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">Shalini Madhuka</h1>

            <h2 className="mt-3 text-xl font-semibold leading-snug bg-clip-text text-transparent hero-gradient-text">Innovative Software Engineer</h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">I build intelligent, scalable and user-focused digital experiences by combining modern software engineering, creative problem-solving and emerging AI technologies.</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo('#expertise')} className="btn-primary inline-flex items-center gap-3 rounded-md px-5 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" style={{ background: 'var(--button-primary)', color: 'var(--button-primary-text)' }}>
                View My Work
                <ArrowDownRight size={16} />
              </button>

              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-3 rounded-md border border-[var(--border-color)] px-5 py-3 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" style={{ color: 'var(--text-primary)' }}>
                Download CV
              </a>

              <div className="ml-2 flex items-center gap-2">
                <a href="https://github.com/ShaliniBangamuwage" aria-label="GitHub" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"><FaGithub className="h-5 w-5" /></a>
                <a href="https://www.linkedin.com/in/shalini-bangamuwage/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"><FaLinkedin className="h-5 w-5" /></a>
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
                  alt="Shalini Madhuka, innovative software engineer"
                  className="ide-portrait-photo"
                />
              </div>

              <div className="ide-code-badge ide-badge-code" aria-hidden="true">
                &lt;/&gt;
              </div>

              <div className="ide-code-badge ide-badge-react" aria-hidden="true">
                <SiReact />
              </div>

              <div className="ide-code-badge ide-badge-braces" aria-hidden="true">
                {'{ }'}
              </div>

              <div className="ide-code-badge ide-badge-terminal" aria-hidden="true">
                &gt;_
              </div>
            </div>

            <div className="ide-tech-list" aria-hidden="true">
              <span>REACT</span>
              <i>•</i>
              <span>NESTJS</span>
              <i>•</i>
              <span>TYPESCRIPT</span>
              <i>•</i>
              <span>FIREBASE</span>
              <i>•</i>
              <span>AWS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IDEHero;
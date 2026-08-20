import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ChevronDown, Download, Cpu } from 'lucide-react';
import PaperCard from './PaperCard';
import TechStack from './TechStack';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certification from './Certification';
import Contact from './Contact';

const stats = [
  { label: 'Projects', value: '7+' },
  { label: 'Education', value: 'BSc (Hons) IT' },
];

const highlights = ['React', 'Java', 'Frontend Engineering', 'Scalable UI'];

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="bg-transparent text-[var(--text-primary)]">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <style>{`
          @keyframes floatCode {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.7; }
            50% { transform: translateY(-12px) translateX(8px) rotate(1deg); opacity: 1; }
          }
          @keyframes scanLine {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(120%); }
          }
          @keyframes pulseGlow {
            0%, 100% { transform: scale(0.96); opacity: 0.45; }
            50% { transform: scale(1.04); opacity: 0.8; }
          }
          @keyframes driftGrid {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-20px); }
          }
        `}</style>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(circle 240px at ${pointer.x}px ${pointer.y}px, rgba(17,17,17,0.10), transparent 45%)` }} />
          <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(circle 180px at ${pointer.x}px ${pointer.y}px, rgba(255,255,255,0.2), transparent 40%)` }} />
          <div className="absolute -left-16 top-8 h-44 w-44 rounded-full border border-[var(--border-color)]/20 bg-[var(--bg-primary)]/5 blur-3xl" style={{ animation: 'pulseGlow 7s ease-in-out infinite' }} />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full border border-[var(--border-color)]/15 bg-[var(--bg-primary)]/5 blur-3xl" style={{ animation: 'pulseGlow 9s ease-in-out infinite' }} />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--text-muted)]/35 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-[140px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" style={{ animation: 'scanLine 8s linear infinite' }} />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(17,17,17,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.12) 1px, transparent 1px)', backgroundSize: '34px 34px', animation: 'driftGrid 18s linear infinite' }} />
          <div className="absolute left-6 top-16 rounded border border-[var(--border-color)]/20 bg-[var(--bg-secondary)]/80 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)] shadow-[0_8px_25px_rgba(0,0,0,0.06)] backdrop-blur" style={{ animation: 'floatCode 8s ease-in-out infinite' }}>Software Engineer</div>
          <div className="absolute bottom-8 right-20 rounded border border-[var(--border-color)]/20 bg-[var(--bg-secondary)]/80 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)] shadow-[0_8px_25px_rgba(0,0,0,0.06)] backdrop-blur" style={{ animation: 'floatCode 11s ease-in-out infinite' }}>Building with care</div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut' }} className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <PaperCard className="relative overflow-hidden p-8 sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_45%)]" />
              <div className="relative space-y-6">
                <div className="inline-flex items-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                  Available for new opportunities
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">I build reliable software for modern web products.</h1>
                  <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                    I’m a software engineer focused on building clean, scalable web experiences with React, Java, and thoughtful UI engineering.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--accent)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--bg-primary)] transition hover:bg-[var(--accent-dark)]">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/bangamuwage-shalini-madhuka-dilhari-b10698305/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] transition hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]">
                    Visit LinkedIn
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
                      <p className="text-2xl font-semibold text-[var(--text-primary)]">{item.value}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-2 text-sm text-[var(--text-muted)]">
                  <Cpu className="h-4 w-4 text-[var(--text-primary)]" />
                  <span className="font-semibold text-[var(--text-primary)]">Focused on clean engineering</span>
                </div>
              </div>
            </PaperCard>

            <PaperCard className="overflow-hidden p-0">
                <div className="relative">
                <img src={process.env.PUBLIC_URL + '/prop.jpg'} alt="Shalini Madhuka" className="h-[240px] w-full object-cover grayscale sm:h-[300px]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.75)] to-transparent p-6 text-[var(--text-primary)]">
                  <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)]">Based in Sri Lanka</p>
                  <p className="mt-2 text-xl font-semibold">Software Engineer • Frontend & Full Stack</p>
                </div>
              </div>

              <div className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] p-6">
                <div className="flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </PaperCard>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto mb-8 flex max-w-6xl justify-center px-4 sm:px-6 lg:px-8">
        <a href="#about" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)]">
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>

      <TechStack />

      <About />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
    </div>
  );
};

export default Hero;


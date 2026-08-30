import React, { useEffect, useState, useRef } from 'react';
// using anchor links instead of router Link to keep single-page scrolling
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Download, X } from 'lucide-react';
import PaperCard from './PaperCard';

const metadata = [
  { label: 'Published', value: 'July 2026' },
  { label: 'Location', value: 'Sri Lanka' },
  { label: 'Status', value: 'Open To Opportunities' },
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % 4);
    }, 3200);

    return () => clearInterval(roleInterval);
  }, []);

  const openVideoModal = () => setShowVideoModal(true);
  const closeVideoModal = () => {
    setShowVideoModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]"
        >
          <PaperCard className="p-8">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="issue-number">ISSUE 2026</span>
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--text-secondary)]">ARCHIVE RECORD #001</span>
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--text-secondary)]">VOL.07</span>
              </div>

              <div>
                <p className="archive-title text-4xl sm:text-5xl">SOFTWARE ENGINEER ARCHIVES</p>
                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)]">ENGINEER PROFILE</p>
              </div>

              <div className="rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] p-6 text-[var(--text-primary)]">
                <p className="font-bold uppercase tracking-[0.35em] text-[var(--text-primary)]">Name</p>
                <p className="mt-2 text-3xl font-semibold">Shalini Bangamuwage</p>
                <p className="mt-4 uppercase tracking-[0.35em] text-[var(--text-secondary)] text-sm">Full Stack Developer</p>
              </div>

              <div className="grid gap-3 border-t border-[var(--border)] pt-6 text-sm">
                {metadata.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="w-24 font-mono uppercase tracking-[0.35em] text-[var(--text-secondary)]">{item.label}:</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="#expertise"
                  className="inline-flex items-center justify-center rounded-sm border border-[var(--border-strong)] bg-transparent px-5 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-[var(--border-strong)] hover:text-[var(--text-inverse)]"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={process.env.PUBLIC_URL + '/resume.pdf'}
                  className="inline-flex items-center justify-center rounded-sm border border-[var(--border-strong)] bg-transparent px-5 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-[var(--border-strong)] hover:text-[var(--text-inverse)]"
                >
                  Read Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="border-t border-[#222] pt-6 text-sm">
                <p className="font-mono uppercase tracking-[0.35em] text-[#4b453d]">Last Updated</p>
                <p className="mt-2 text-lg font-semibold">2026.07.06</p>
              </div>
            </div>
          </PaperCard>

          <PaperCard className="p-8 space-y-6">
            <div>
              <p className="issue-number">STATUS</p>
              <h2 className="section-header">ACTIVE</h2>
              <p className="editor-note">Recent archive extract from the engineering report. Publication type: retro developer dossier.</p>
            </div>

            <div className="rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] p-5 text-sm leading-6">
              <p className="font-bold uppercase tracking-[0.35em]">Archive metadata</p>
              <div className="mt-4 space-y-3 text-[#1E1E1E]">
                <p><span className="font-mono uppercase text-[var(--text-secondary)]">Issue:</span> 2026</p>
                <p><span className="font-mono uppercase text-[var(--text-secondary)]">Report:</span> Software engineer archive</p>
                <p><span className="font-mono uppercase text-[var(--text-secondary)]">Location:</span> Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] p-5 text-sm leading-6">
              <p className="font-bold uppercase tracking-[0.35em]">Editorial note</p>
              <p className="mt-3 text-[var(--text-primary)]">This dossier blends typewritten engineer records with archive labels, technical journal styling, and a vintage newspaper structure.</p>
            </div>
          </PaperCard>
        </motion.div>
      </div>

      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--text-primary)]/90 p-4">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--bg-primary)] p-4 shadow-lg shadow-black/40 sm:p-6">
            <button
              type="button"
              onClick={closeVideoModal}
              aria-label="Close video modal"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] transition hover:bg-[var(--border-strong)] hover:text-[var(--text-inverse)]"
            >
              <X size={18} />
            </button>
            <video
              ref={videoRef}
              className="h-[320px] w-full rounded-sm bg-[var(--text-primary)] object-cover sm:h-[420px]"
              controls
              autoPlay
              src={process.env.PUBLIC_URL + '/myprofile.mp4'}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;


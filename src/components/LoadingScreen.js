import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
    <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="flex flex-col items-center gap-6 rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 px-8 py-10 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }} className="h-14 w-14 rounded-full border-[3px] border-transparent border-t-[var(--text-primary)] border-r-[var(--text-secondary)]" />
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-[0.35em]">SM</div>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold tracking-[0.3em]">SHALINI BANGAMUWAGE</p>
        <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Loading Portfolio</p>
      </div>
    </motion.div>
  </div>
);

export default LoadingScreen;

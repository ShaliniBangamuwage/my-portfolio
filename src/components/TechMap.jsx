import React, { useState } from 'react';

const groups = [
  { key: 'Frontend', label: 'Frontend', tech: ['React', 'Next.js', 'Tailwind CSS'] },
  { key: 'Backend', label: 'Backend', tech: ['Node.js', 'NestJS', 'REST APIs', 'Auth'] },
  { key: 'Data', label: 'Data & Cloud', tech: ['MongoDB', 'Firebase/Firestore', 'Supabase', 'Postgres'] },
  { key: 'AI', label: 'AI', tech: ['Groq API', 'Semantic Scholar API', 'Prompt Design'] },
  { key: 'Cloud', label: 'Cloud', tech: ['Cloudinary', 'Vercel', 'Deployment'] },
];

export default function TechMap({ className }) {
  const [active, setActive] = useState('Frontend');
  const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 640px)').matches;

  if (isMobile) {
    return (
      <div className={className}>
        {groups.map((g) => (
          <details key={g.key} className="mb-3 rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)]" open={active === g.key}>
            <summary onClick={() => setActive(g.key)} className="cursor-pointer px-4 py-3 font-medium text-[var(--text-primary)]">{g.label}</summary>
            <div className="px-4 py-3 text-[var(--text-secondary)]">
              <div className="flex flex-wrap gap-2">
                {g.tech.map((t) => <span key={t} className="rounded px-2 py-1 text-xs border border-[var(--border-color)]">{t}</span>)}
              </div>
            </div>
          </details>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="relative h-48 w-full">
        <svg viewBox="0 0 400 200" className="h-full w-full">
          <defs>
            <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>
          {/* center node */}
          <g>
            <circle cx="200" cy="100" r="26" fill="var(--surface)" stroke="var(--border-color)" />
            <text x="200" y="104" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="600">Full-Stack</text>
          </g>

          {/* group nodes */}
          {groups.map((g, i) => {
            const angle = (i / groups.length) * Math.PI * 2;
            const x = 200 + Math.cos(angle) * 110;
            const y = 100 + Math.sin(angle) * 70;
            const activeNode = active === g.key;
            return (
              <g key={g.key} onClick={() => setActive(g.key)} className="cursor-pointer">
                <line x1="200" y1="100" x2={x} y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <circle cx={x} cy={y} r={activeNode ? 16 : 12} fill={activeNode ? 'rgba(255,255,255,0.04)' : 'var(--card-bg)'} stroke={activeNode ? 'var(--text-primary)' : 'var(--border-color)'} />
                <text x={x} y={y + 28} textAnchor="middle" fill="var(--text-primary)" fontSize="12">{g.label}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {groups.find((g) => g.key === active).tech.map((t) => (
          <span key={t} className="rounded px-3 py-1 text-sm border border-[var(--border-color)] text-[var(--text-secondary)]">{t}</span>
        ))}
      </div>
    </div>
  );
}

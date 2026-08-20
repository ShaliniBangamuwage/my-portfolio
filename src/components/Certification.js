import React, { useEffect, useMemo, useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import PaperCard from './PaperCard';

const certifications = [
  {
    id: 1,
    title: 'Career Essentials in Software Development',
    organization: 'Microsoft and LinkedIn',
    date: 'February 2025',
    category: 'Software Development',
    credentialId: 'MS-001',
    verifyLink: '#',
    image: `${process.env.PUBLIC_URL}/certificates/uom5.jpg`,
    skills: ['Programming', 'Software Development'],
    description: 'Demonstrated expertise in designing distributed systems on AWS platform.',
  },
  {
    id: 2,
    title: 'Web Design for Beginners',
    organization: 'University of Moratuwa',
    date: 'November 2024',
    category: 'Web Development',
    credentialId: 'UOM-002',
    verifyLink: '#',
    image: `${process.env.PUBLIC_URL}/certificates/uom2.jpg`,
    skills: ['React', 'HTML', 'CSS'],
    description: 'Comprehensive course covering HTML fundamentals to advanced concepts.',
  },
  {
    id: 3,
    title: 'JavaScript Projects',
    organization: 'Udemy',
    date: 'May 2025',
    category: 'Web Development',
    credentialId: 'UD-003',
    verifyLink: '#',
    image: `${process.env.PUBLIC_URL}/certificates/uom7.jpg`,
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    description: 'End-to-end web development including frontend and backend technologies.',
  },
  {
    id: 4,
    title: 'Career Essentials in Software Development',
    organization: 'Microsoft and LinkedIn',
    date: 'February 2025',
    category: 'Software Development',
    credentialId: 'MS-004',
    verifyLink: '#',
    image: `${process.env.PUBLIC_URL}/certificates/uom3.jpg`,
    skills: ['Programming', 'Software Development'],
    description: 'Demonstrated expertise in designing distributed systems on AWS platform.',
  },
  {
    id: 5,
    title: 'Web Development',
    organization: 'Alison',
    date: 'February 2025',
    category: 'Web Development',
    credentialId: 'AL-005',
    verifyLink: '#',
    image: `${process.env.PUBLIC_URL}/certificates/uom9.png`,
    skills: ['Web Design'],
    description: 'Comprehensive course covering modern web development workflows.',
  },
  {
    id: 6,
    title: 'Python From Zero to Hero',
    organization: 'Udemy',
    date: 'February 2025',
    category: 'Programming',
    credentialId: 'UD-006',
    verifyLink: '#',
    image: `${process.env.PUBLIC_URL}/certificates/uom6.jpg`,
    skills: ['Python Programming'],
    description: 'Professional certification in Google Cloud Platform services and architecture.',
  },
];

const categories = ['All', ...new Set(certifications.map((cert) => cert.category))];

const Certification = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredCertifications = useMemo(
    () => certifications.filter((cert) => selectedCategory === 'All' || cert.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section className="bg-transparent px-4 py-20 text-[var(--text-primary)] sm:px-6 lg:px-8" id="certification">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-5 py-3 text-sm text-[var(--text-secondary)] shadow-[0_20px_45px_rgba(0,0,0,0.1)]">
            <span className="text-[var(--accent)] font-mono uppercase tracking-[0.35em]">Credentials</span>
            <span>Learning · Certifications · Professional Development</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-[-0.04em] text-[var(--text-primary)]">Certification Archive</h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">A curated archive of professional learning milestones, credentials, and certifications that support my continuous growth.</p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] transition ${
              selectedCategory === category
                ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)]'
                : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
            }`}>
              {category}
            </button>
          ))}
        </div>

        {filteredCertifications.length === 0 ? (
          <PaperCard className="p-10 text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)]">
              <Layers className="h-8 w-8 text-[var(--accent)]" />
            </div>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">No certifications found</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Try selecting a different category to reveal more records.</p>
          </PaperCard>
        ) : (
          <div className="grid gap-6 xl:grid-cols-2">
            {filteredCertifications.map((cert, index) => (
              <PaperCard key={cert.id} className="p-6" style={{ animationDelay: `${index * 0.05}s`, animationName: isVisible ? 'fadeUp' : 'none', animationDuration: '0.6s', animationFillMode: 'forwards', opacity: isVisible ? 1 : 0 }}>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    <Layers className="h-4 w-4 text-[var(--accent)]" />
                    {cert.category}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">{cert.date}</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-center">
                  <div className="overflow-hidden rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-4">
                    <img src={cert.image} alt={`${cert.title} Certificate`} className="h-48 w-full object-contain" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-[var(--text-primary)]">{cert.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{cert.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-2.5 py-1">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border-color)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">Issuer</p>
                    <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">{cert.organization}</p>
                  </div>
                  <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--accent)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--bg-primary)] transition hover:bg-[var(--accent-dark)]">
                    Verify credential
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </PaperCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certification;

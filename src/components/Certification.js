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
  {
    id: 7,
    title: 'Cloud Essentials – Knowledge Badge Readiness Path',
    organization: 'AWS Training and Certification',
    date: '',
    category: 'Cloud Computing',
    credentialId: null,
    verifyLink: '',
   image: `${process.env.PUBLIC_URL}/certificates/uom10.jpg`,
    skills: ['AWS Cloud', 'Cloud Computing', 'AWS Cloud Fundamentals', 'Hands-on Labs'],
    description: 'Completed the Cloud Essentials Knowledge Badge Readiness Path, including practical labs covering essential AWS Cloud concepts.',
  },
  {
    id: 8,
    title: 'SQL Server for Data Analysis',
    organization: 'Alison',
    date: 'August 2026',
    category: 'Data Analysis',
    credentialId: '5603-46531290',
    verifyLink: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Falison%2Ecom%2Fverify%2F6e15fb9923&urlhash=iQwj&mt=mW2B7OZkksLL7W6hAtLF8qrdJRgoKXOK3JulCWzIu5DznhB7xJeO30Xf9XsjS_bkYmHXgHSTyRc3M7_OWX4HrWvtupjZ&isSdui=true',
    image: 'https://media.licdn.com/dms/image/v2/C4D0BAQHS8A4vdTgmrw/company-logo_100_100/company-logo_100_100/0/1659347075803/alison_learning_logo?e=1788998400&v=beta&t=mBErjZCflCWbW5j4-qFYbNoQPMRyF7FajJVSEDKMd78',
    skills: ['SQL Server', 'Data Analysis', 'Database Querying', 'Data Modelling'],
    description: 'Completed SQL Server for Data Analysis training through Alison.',
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
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] px-4 py-20 sm:px-6 lg:px-8" id="certification">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4 text-center">
          <h1 className="section-header">Certification Archive</h1>
          <p className="editor-note">Stamped technical records and credential cards presented with a dossier seal aesthetic.</p>
        </div>

      <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-sm border px-4 py-2 text-xs uppercase tracking-[0.35em] transition ${
                selectedCategory === category ? 'border-[var(--border-strong)] bg-[var(--border-strong)] text-[var(--text-inverse)]' : 'border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredCertifications.length === 0 ? (
            <PaperCard className="p-10 text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)]">
              <Layers className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold">No certifications found</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Try selecting a different category to reveal more records.</p>
          </PaperCard>
        ) : (
          <div className="grid gap-6 xl:grid-cols-2">
            {filteredCertifications.map((cert, index) => (
              <PaperCard
                key={cert.id}
                className="p-6"
                style={{ animationDelay: `${index * 0.05}s`, animationName: isVisible ? 'fadeUp' : 'none', animationDuration: '0.6s', animationFillMode: 'forwards', opacity: isVisible ? 1 : 0 }}
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2 text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                    <Layers className="h-4 w-4" />
                    {cert.category}
                  </span>
                  <span className="article-meta">{cert.date}</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-center">
                  <div className="overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--bg-primary)] p-4">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="h-48 w-full object-contain cert-image"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="h-48 w-full flex items-center justify-center text-[var(--text-secondary)]">No image</div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-[var(--text-primary)]">{cert.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{cert.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] px-2 py-1">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)]">Issuer</p>
                    <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">{cert.organization}</p>
                  </div>
                  {cert.verifyLink ? (
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-[var(--border-strong)] bg-transparent px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--text-primary)] transition hover:bg-[var(--border-strong)] hover:text-[var(--text-inverse)]"
                    >
                      Verify credential
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
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

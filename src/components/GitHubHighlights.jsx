import React from 'react';
import { ExternalLink, GitBranch, Star, Activity, Layers } from 'lucide-react';
import PaperCard from './PaperCard';

const repoHighlights = [
  {
    id: 1,
    name: 'cafe-fullstack-app',
    description: 'Responsive cafe website and ordering experience built with React and modern frontend workflows.',
    language: 'JavaScript',
    tags: ['React', 'Responsive', 'UX'],
    link: 'https://github.com/ShaliniMadhuka/cafe-fullstack-app',
  },
  {
    id: 2,
    name: 'manager',
    description: 'A task and business management interface with a focus on productivity and clarity.',
    language: 'JavaScript',
    tags: ['Productivity', 'SPA', 'UI'],
    link: 'https://github.com/ShaliniMadhuka/manager',
  },
  {
    id: 3,
    name: 'paperpulse',
    description: 'TypeScript-powered project showcasing modern UI systems and content-driven interactions.',
    language: 'TypeScript',
    tags: ['TypeScript', 'Design', 'Frontend'],
    link: 'https://github.com/ShaliniMadhuka/paperpulse',
  },
  {
    id: 4,
    name: 'my-portfolio',
    description: 'This portfolio implementation, styled for a dark-code / IDE aesthetic with smooth motion.',
    language: 'CSS',
    tags: ['Portfolio', 'Tailwind', 'React'],
    link: 'https://github.com/ShaliniMadhuka/my-portfolio',
  },
];

const GitHubHighlights = () => (
  <section id="github" className="bg-transparent px-4 py-20 text-[var(--text-primary)] sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 space-y-4 text-center">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--text-secondary)]">
          <GitBranch className="h-4 w-4 text-[var(--accent)]" />
          GitHub Highlights
        </div>
        <h2 className="text-3xl font-semibold sm:text-4xl">Featured repos & contributions</h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--text-secondary)]">A snapshot of my most active code repositories, recent GitHub activity, and the software projects that drive my work.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-10">
        <PaperCard className="p-6">
          <div className="flex items-center gap-3 text-[var(--text-secondary)]">
            <Star className="h-5 w-5 text-[var(--accent)]" />
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Popular repos</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">{repoHighlights.length}</p>
            </div>
          </div>
        </PaperCard>

        <PaperCard className="p-6">
          <div className="flex items-center gap-3 text-[var(--text-secondary)]">
            <Activity className="h-5 w-5 text-[var(--accent)]" />
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Contributions</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">271 this year</p>
            </div>
          </div>
        </PaperCard>

        <PaperCard className="p-6">
          <div className="flex items-center gap-3 text-[var(--text-secondary)]">
            <Layers className="h-5 w-5 text-[var(--accent)]" />
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Primary stack</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">JavaScript / React</p>
            </div>
          </div>
        </PaperCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {repoHighlights.map((repo) => (
          <PaperCard key={repo.id} className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{repo.name}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{repo.description}</p>
              </div>
              <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {repo.language}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {repo.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  {tag}
                </span>
              ))}
            </div>
            <a href={repo.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--accent)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--bg-primary)] transition hover:bg-[var(--accent-dark)]">
              View Repo
              <ExternalLink className="h-4 w-4" />
            </a>
          </PaperCard>
        ))}
      </div>
    </div>
  </section>
);

export default GitHubHighlights;

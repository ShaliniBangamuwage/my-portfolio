import React, { useMemo, useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import PaperCard from './PaperCard';

const projects = [
  {
    id: 1,
    title: 'MediCareX',
    subtitle: 'Pharmacy management system',
    category: 'Product platform',
    date: '2024',
    tech: ['React', 'Vite', 'NestJS', 'Firebase', 'Cloudinary'],
    summary: 'A multi-user pharmacy platform connecting customers, pharmacists, administrators, and suppliers through a single digital system.',
    highlights: [
      'Migrated prescription-image storage to Cloudinary across all 3 upload flows, reducing Firestore document size and eliminating recurring failures.',
      'Implemented loyalty-points logic and workflow locking across 3 modules to prevent concurrent edits.',
      'Diagnosed and fixed a Firebase authentication token race condition, stabilizing real-time dashboard sync.',
    ],
    link: 'https://github.com/ShaliniMadhuka',
  },
  {
    id: 2,
    title: 'PaperPulse',
    subtitle: 'AI-powered research paper analysis tool',
    category: 'SaaS product',
    date: '2024',
    tech: ['Next.js', 'Supabase', 'Groq API', 'OAuth', 'PayHere'],
    summary: 'A full-stack platform that helps CS students analyze research papers using multiple external APIs and a subscription model.',
    highlights: [
      'Engineered and deployed a full-stack SaaS platform integrating 4 external APIs, including Google OAuth, Groq LLM, Semantic Scholar, and PayHere.',
      'Designed a 2-tier Free/Pro subscription model with an admin dashboard and Kanban board for saved ideas.',
    ],
    link: 'https://paperpulse-taupe.vercel.app',
  },
  {
    id: 3,
    title: 'HabitAutopsy',
    subtitle: 'AI habit-tracking app',
    category: 'Mobile + web app',
    date: '2024',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'Supabase', 'Groq API'],
    summary: 'A cross-platform habit tracker that generates AI-written “autopsy” reports and supports iOS, Android, and web usage.',
    highlights: [
      'Developed the experience across 3 platforms and added AI-generated reports through the Groq API.',
      'Migrated the backend data layer from Prisma to Supabase and rebuilt authentication middleware across 2 auth flows.',
      'Resolved Expo SDK version conflicts across 3 target platforms to restore build stability.',
    ],
    link: 'https://github.com/ShaliniMadhuka',
  },
  {
    id: 4,
    title: 'EduLanka',
    subtitle: 'Government school textbooks and past papers platform',
    category: 'Education platform',
    date: '2025',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Meilisearch', 'PWA'],
    summary: 'A modern learning platform giving students account-based access to grade- and subject-organized study content.',
    highlights: [
      'Integrated Meilisearch to power fast content search plus an in-app quiz system for practice.',
      'Assembled a provincial exam-paper repository with downloadable materials and configured the site as a PWA.',
      'Used Supabase for authentication and database management with TypeScript across the stack for safer delivery.',
    ],
    link: 'https://github.com/ShaliniMadhuka',
  },
  {
    id: 5,
    title: 'E-Commerce Website for Restaurant',
    subtitle: 'Ordering platform for a restaurant',
    category: 'Web app',
    date: '2023',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    summary: 'A full-stack ordering experience with a REST API and a structured data model for menu items, orders, and customers.',
    highlights: [
      'Delivered a full-stack ordering platform with a React/Tailwind frontend and an Express + MongoDB backend.',
      'Built a 3-collection Mongoose schema and connected the interface to a REST API for end-to-end workflows.',
    ],
    link: 'https://github.com/ShaliniMadhuka',
  },
  {
    id: 6,
    title: 'Laser Tune',
    subtitle: 'First-year hardware project',
    category: 'Embedded systems',
    date: '2022',
    tech: ['Arduino Mega', 'ESP32', 'C++', 'Embedded Systems'],
    summary: 'An embedded audio device that processes sensor input in real time and triggers audio playback.',
    highlights: [
      'Built an embedded audio device integrating 5 hardware components, including an Arduino Mega, ESP32, VS1053B audio codec, piezo/FSR sensors, and a custom PCB.',
      'Authored embedded C++ firmware to process 2 sensor types in real time and trigger playback accordingly.',
    ],
    link: 'https://github.com/ShaliniMadhuka',
  },
];

const categories = ['All', 'Product platform', 'SaaS product', 'Mobile + web app', 'Education platform', 'Web app', 'Embedded systems'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => (activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)), [activeFilter]);

  return (
    <section className="bg-transparent px-4 py-16 text-[var(--text-primary)] sm:px-6 lg:px-8 lg:py-20" id="work">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="issue-number">Selected works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-4xl">Projects built with purpose, collaboration, and real users in mind.</h2>
            <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">A selection of academic and team projects that demonstrates my experience in full-stack development, interface design, system architecture, and problem-solving.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} type="button" onClick={() => setActiveFilter(category)} className={`rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.3em] transition ${activeFilter === category ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)]' : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <PaperCard className="p-6 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <button key={project.id} type="button" onClick={() => setSelectedProject(project)} className="group overflow-hidden rounded-[1.2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 text-left transition hover:-translate-y-1 hover:border-[var(--accent)]">
                <div className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  <span>{project.date}</span>
                  <span className="rounded-full border border-[var(--border-color)] px-2 py-1">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--accent)]">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  {project.tech.map((tech) => <span key={tech} className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-2.5 py-1">{tech}</span>)}
                </div>
              </button>
            ))}
          </div>
        </PaperCard>
      </div>

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(5,5,5,0.92)] p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <button type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details" className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] transition hover:bg-[var(--accent)] hover:text-[var(--bg-primary)]">×</button>
            <div className="grid gap-6 lg:grid-cols-[0.95fr_0.55fr]">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                  <span>{selectedProject.category}</span>
                </div>
                <h2 className="text-3xl font-semibold text-[var(--text-primary)]">{selectedProject.title}</h2>
                <p className="text-sm font-medium text-[var(--accent)]">{selectedProject.subtitle}</p>
                <p className="text-sm leading-7 text-[var(--text-secondary)]">{selectedProject.summary}</p>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  {selectedProject.tech.map((tech) => <span key={tech} className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-2.5 py-1">{tech}</span>)}
                </div>
              </div>
              <div className="rounded-[1.25rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Key impact</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--bg-primary)] transition hover:bg-[var(--accent-dark)]">
                  <ExternalLink className="h-4 w-4" />
                  Open project
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Projects;

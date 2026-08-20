import React, { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import ProjectImage from './ProjectImage';
import './Expertise.css';

const projectImagesPath = `${process.env.PUBLIC_URL}/project-images`;

const projects = [
  {
    id: 1,
    slug: 'medicarex',
    title: 'MediCareX',
    subtitle: 'Pharmacy management system',
    category: 'Product Platform',
    description: 'A multi-user pharmacy platform connecting customers, pharmacists and suppliers.',
    image: `${projectImagesPath}/medicarex.png`,
    github: 'https://github.com/SoftwareProjectInnovateX/Softwareproject23fontendMediCareXgroup8',
    liveDemo: null,
    technologies: ['React', 'NestJS', 'Firebase'],
    highlights: ['Team project', 'Inventory & dispensing workflows']
  },
  {
    id: 2,
    slug: 'paperpulse',
    title: 'PaperPulse',
    subtitle: 'Research paper analysis',
    category: 'SaaS Product',
    description: 'AI-assisted research paper summarization and exploration.',
    image: `${projectImagesPath}/paperpulse.png`,
    github: 'https://github.com/ShaliniBangamuwage/paperpulse',
    liveDemo: 'https://paperpulse-taupe.vercel.app',
    technologies: ['Next.js', 'Supabase'],
    highlights: ['AI summarization', 'User subscriptions']
  },
  {
    id: 3,
    slug: 'habit-autopsy',
    title: 'HabitAutopsy',
    subtitle: 'AI habit tracking',
    category: 'Mobile + Web App',
    description: 'Cross-platform habit tracker with AI analysis.',
    image: `${projectImagesPath}/habit-autopsy.png`,
    github: 'https://github.com/ShaliniBangamuwage/habit_tracker',
    liveDemo: null,
    technologies: ['React Native', 'Expo'],
    highlights: ['Cross-platform', 'Offline-first sync']
  },
  {
    id: 4,
    slug: 'edulanka',
    title: 'EduLanka',
    subtitle: 'Education platform',
    category: 'Education Platform',
    description: 'A lightweight LMS and course marketplace for Sri Lanka.',
    image: `${projectImagesPath}/edulanka.png`,
    github: 'https://github.com/example/edulanka',
    liveDemo: null,
    technologies: ['React', 'Node.js'],
    highlights: ['Course marketplace', 'Teacher dashboards']
  },
  {
    id: 5,
    slug: 'restaurant',
    title: 'Restaurant POS',
    subtitle: 'Order & table management',
    category: 'Web Application',
    description: 'Small restaurant point-of-sale and table management system.',
    image: `${projectImagesPath}/restaurant.png`,
    github: 'https://github.com/example/restaurant-pos',
    liveDemo: null,
    technologies: ['React', 'Express'],
    highlights: ['POS flows', 'Receipt & orders management']
  },
  {
    id: 6,
    slug: 'laser-tune',
    title: 'LaserTune',
    subtitle: 'Embedded control dashboard',
    category: 'Embedded System',
    description: 'Dashboard for tuning and visualizing embedded hardware parameters.',
    image: `${projectImagesPath}/laser-tune.png`,
    github: 'https://github.com/example/laser-tune',
    liveDemo: null,
    technologies: ['Electron', 'C++'],
    highlights: ['Real-time telemetry', 'Hardware control UI']
  },
  
];

const categories = ['All', 'Product Platform', 'SaaS Product', 'Mobile + Web App', 'Education Platform', 'Web Application', 'Embedded System', 'Portfolio'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)), [activeFilter]);

  const motionVariants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : 12 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="expertise" className="expertise-projects px-4 py-12">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-8 text-center">
          <p className="issue-number">PROJECT DOSSIER</p>
          <h2 className="section-header">Expertise — Project Showcase</h2>
          <p className="editor-note">An editorial listing of selected projects. Hover a card to reveal color and actions.</p>
        </header>

        <div className="mb-6 flex flex-wrap gap-3 justify-center">
          {categories.map((c) => (
            <button key={c} type="button" aria-pressed={activeFilter === c} onClick={() => setActiveFilter(c)} className={`expertise-filter ${activeFilter === c ? 'expertise-filter-active' : 'expertise-filter-inactive'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filtered.map((project, i) => (
            <motion.article key={project.id} initial="hidden" animate="visible" variants={motionVariants} transition={{ duration: 0.45, delay: i * 0.04 }} className={`expertise-project ${i % 2 === 0 ? 'reverse' : ''}`} tabIndex={0}>
              <div className="expertise-project-content">
                <div className="expertise-project-meta">
                  <span className="expertise-project-number">{String(project.id).padStart(2, '0')}</span>
                  <span className="expertise-project-category">{project.category}</span>
                </div>

                <h3 className="expertise-project-title">{project.title}</h3>
                {project.subtitle && <div className="expertise-project-sub">{project.subtitle}</div>}
                <p className="expertise-project-description">{project.description}</p>

                {project.highlights && (
                  <p className="expertise-project-note">{project.highlights.join(' • ')}</p>
                )}

                <div className="expertise-project-technologies">
                  {project.technologies.map((t) => (
                    <span key={t} className="expertise-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="expertise-project-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} repository`} className="expertise-btn expertise-btn-github">
                    <FaGithub />
                    <span className="ml-2">Repository</span>
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="expertise-btn expertise-btn-live">
                      <ExternalLink className="h-4 w-4" />
                      <span className="ml-2">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="expertise-project-media">
                <ProjectImage src={project.image} alt={`${project.title} preview`} loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

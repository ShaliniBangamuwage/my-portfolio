import React, { useState, useRef, useEffect } from 'react';
import { BrainCircuit, Database, LayoutTemplate, Server, Wrench } from 'lucide-react';
import PaperCard from './PaperCard';

const CAPABILITIES = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Engineering',
    icon: LayoutTemplate,
    technologies: ['React', 'Next.js', 'React Native', 'Expo', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    capabilities: ['Component architecture', 'State management', 'Responsive layouts', 'Cross-platform interfaces', 'Accessibility', 'API integration'],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Engineering',
    icon: Server,
    technologies: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Firebase Authentication', 'Role-Based Access Control'],
    capabilities: ['RESTful API design', 'Authentication and authorization', 'Modular service architecture', 'Validation and error handling', 'Third-party integrations', 'Scheduled processing'],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data and Cloud Systems',
    icon: Database,
    technologies: ['MongoDB', 'Mongoose', 'Firebase', 'Firestore', 'Supabase', 'PostgreSQL', 'Cloudinary', 'Vercel', 'Railway'],
    capabilities: ['Database modelling', 'Real-time data synchronization', 'Authentication workflows', 'File and image storage', 'Cloud deployment', 'Environment configuration'],
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI-Integrated Applications',
    icon: BrainCircuit,
    technologies: ['Groq API', 'OpenAI-compatible APIs', 'Pinecone', 'Semantic Search', 'Meilisearch', 'Semantic Scholar API'],
    capabilities: ['AI-generated insights', 'Recommendation systems', 'Semantic product search', 'Research-paper analysis', 'Demand forecasting', 'Prompt and output validation'],
  },
  {
    id: 'tools',
    number: '05',
    title: 'Engineering Tools and Practices',
    icon: Wrench,
    technologies: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vite', 'npm', 'Firebase Console', 'Railway', 'Vercel', 'Arduino', 'ESP32', 'C/C++'],
    capabilities: ['Version control', 'Branching and merging', 'API testing', 'Debugging', 'Deployment configuration', 'Embedded system development'],
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    // keep focus visible for keyboard users when active changes
    const buttons = navRef.current?.querySelectorAll('button[role="tab"]');
    if (buttons && buttons[active]) buttons[active].focus({ preventScroll: true });
  }, [active]);

  const onKeyDown = (e) => {
    const key = e.key;
    if (key === 'ArrowDown' || key === 'ArrowRight') {
      e.preventDefault();
      setActive((s) => Math.min(s + 1, CAPABILITIES.length - 1));
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      e.preventDefault();
      setActive((s) => Math.max(s - 1, 0));
    }
  };

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7">
          <span className="skills-number-label">02 / EXPERTISE</span>
          <h2 id="skills-heading" className="skills-heading">Technical capability across the full product lifecycle.</h2>
          <p className="skills-intro">From interface design and backend systems to cloud services and AI experiences, I build the technologies needed to turn ideas into dependable products.</p>
        </div>

        <PaperCard className="skills-card skills-card-elevated">
          <nav ref={navRef} className="skills-nav" role="tablist" aria-orientation="horizontal" onKeyDown={onKeyDown}>
            {CAPABILITIES.map((cap, i) => (
              <button
                key={cap.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`skills-panel-${cap.id}`}
                id={`skills-tab-${cap.id}`}
                tabIndex={active === i ? 0 : -1}
                className={`skills-nav-item ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="skills-nav-icon-wrap">
                  <cap.icon className="skills-nav-icon" size={16} strokeWidth={2} />
                </div>
                <div className="skills-nav-number">{cap.number}</div>
                <div className="skills-nav-title">
                  <div className="skills-nav-name">{cap.title}</div>
                </div>
              </button>
            ))}
          </nav>

          <div className="skills-container">
            <div className="skills-panel-wrap">
              {CAPABILITIES.map((cap, i) => (
                <article
                  key={cap.id}
                  id={`skills-panel-${cap.id}`}
                  role="tabpanel"
                  aria-labelledby={`skills-tab-${cap.id}`}
                  hidden={active !== i}
                  className="skills-panel"
                >
                  <div className="skills-panel-header">
                    <span className="skills-panel-icon-wrap">
                      <cap.icon className="skills-panel-icon" size={18} strokeWidth={2.2} />
                    </span>
                    <h3 className="skills-panel-title">{cap.title}</h3>
                  </div>

                  <div className="skills-section-grid">
                    <div>
                      <h4 className="skills-small-label">Technologies</h4>
                      <ul className="skills-tech-list">
                        {cap.technologies.map((t) => (
                          <li key={t} className="skills-tech-item">{t}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="skills-small-label">Capabilities</h4>
                      <ul className="skills-capabilities">
                        {cap.capabilities.map((c) => (
                          <li key={c} className="skills-capability-item">{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="skills-summary-grid">
            <div className="skills-summary-item">
              <div className="skills-summary-label">Core focus</div>
              <p>Full-stack product development from interface to deployment.</p>
            </div>
            <div className="skills-summary-item">
              <div className="skills-summary-label">Strongest fit</div>
              <p>Product architecture, AI workflows, and scalable digital systems.</p>
            </div>
            <div className="skills-summary-item">
              <div className="skills-summary-label">Currently exploring</div>
              <p>Cloud-native systems, secure AI integration, and reliable engineering practices.</p>
            </div>
          </div>
        </PaperCard>
      </div>
    </section>
  );
};

export default Skills;

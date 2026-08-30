import React, { useState, useRef, useEffect } from 'react';
import { BrainCircuit, Database, LayoutTemplate, Server, Wrench } from 'lucide-react';
import PaperCard from './PaperCard';

const CAPABILITIES = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Engineering',
    icon: LayoutTemplate,
    summary: 'Building responsive, accessible and maintainable interfaces that translate complex requirements into clear user experiences.',
    technologies: ['React', 'Next.js', 'React Native', 'Expo', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    capabilities: ['Component architecture', 'State management', 'Responsive layouts', 'Cross-platform interfaces', 'Accessibility', 'API integration'],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Engineering',
    icon: Server,
    summary: 'Designing reliable application services, REST APIs and modular backend systems that support real product workflows.',
    technologies: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Firebase Authentication', 'Role-Based Access Control'],
    capabilities: ['RESTful API design', 'Authentication and authorization', 'Modular service architecture', 'Validation and error handling', 'Third-party integrations', 'Scheduled processing'],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data and Cloud Systems',
    icon: Database,
    summary: 'Structuring application data and cloud-connected services for secure, reliable and scalable digital products.',
    technologies: ['MongoDB', 'Mongoose', 'Firebase', 'Firestore', 'Supabase', 'PostgreSQL', 'Cloudinary', 'Vercel', 'Railway'],
    capabilities: ['Database modelling', 'Real-time data synchronization', 'Authentication workflows', 'File and image storage', 'Cloud deployment', 'Environment configuration'],
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI-Integrated Applications',
    icon: BrainCircuit,
    summary: 'Integrating AI and intelligent search capabilities into practical application workflows while keeping outputs controlled and user-focused.',
    technologies: ['Groq API', 'OpenAI-compatible APIs', 'Pinecone', 'Semantic Search', 'Meilisearch', 'Semantic Scholar API'],
    capabilities: ['AI-generated insights', 'Recommendation systems', 'Semantic product search', 'Research-paper analysis', 'Demand forecasting', 'Prompt and output validation'],
  },
  {
    id: 'tools',
    number: '05',
    title: 'Engineering Tools and Practices',
    icon: Wrench,
    summary: 'Using modern development workflows and engineering practices to build, test, deploy and improve software collaboratively.',
    technologies: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vite', 'npm', 'Firebase Console', 'Railway', 'Vercel', 'Arduino', 'ESP32', 'C/C++'],
    capabilities: ['Version control', 'Branching and merging', 'API testing', 'Debugging', 'Deployment configuration', 'Embedded system development'],
  },
];

const TECHNOLOGY_GROUPS = {
  Frontend: ['React', 'Next.js', 'React Native', 'Expo', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'NestJS', 'REST APIs'],
  Data: ['MongoDB', 'Mongoose', 'Firebase', 'Firestore', 'Supabase', 'PostgreSQL'],
  'AI and Search': ['Groq API', 'Pinecone', 'Meilisearch', 'Semantic Scholar API'],
  'Cloud and Tools': ['Vercel', 'Railway', 'Cloudinary', 'Git', 'GitHub', 'Postman'],
  Embedded: ['Arduino Mega', 'ESP32', 'C', 'C++'],
};

const EVIDENCE = [
  { project: 'MediCareX', text: 'Multi-role full-stack architecture with Firebase authentication, Firestore workflows, NestJS services and AI-integrated recommendations.' },
  { project: 'PaperPulse', text: 'Next.js and Supabase platform with Groq-based paper analysis and Semantic Scholar integration for research workflows.' },
  { project: 'HabitAutopsy', text: 'Cross-platform React Native app with Node.js/Express APIs, Supabase data and AI-assisted behavioural reports.' },
  { project: 'Caferia', text: 'React storefront with Node.js/Express REST API and MongoDB/Mongoose data modelling for ordering workflows.' },
  { project: 'Laser Tune', text: 'Embedded firmware and sensor integration using Arduino Mega, ESP32 and C++ for audio processing.' },
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

        <PaperCard className="skills-card">
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
                  <div className="skills-nav-summary">{cap.summary}</div>
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
                  <p className="skills-panel-summary">{cap.summary}</p>

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

          {/* Technology ecosystem */}
          <div className="skills-ecosystem">
            <h4 className="skills-small-label">Technology Ecosystem</h4>
            <div className="skills-ecosystem-grid">
              {Object.entries(TECHNOLOGY_GROUPS).map(([group, items]) => (
                <div key={group} className="skills-ecosystem-group">
                  <div className="skills-ecosystem-group-title">{group}</div>
                  <div className="skills-ecosystem-tags">
                    {items.map((it) => (
                      <span key={it} className="skills-tag">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capability in Practice */}
          <div className="skills-evidence">
            <h4 className="skills-small-label">Capability in Practice</h4>
            <div className="skills-evidence-list">
              {EVIDENCE.map((e) => (
                <div key={e.project} className="skills-evidence-item">
                  <strong className="skills-evidence-project">{e.project}:</strong>
                  <span className="skills-evidence-text"> {e.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Current direction */}
          <div className="skills-strengths">
            <div className="skills-strengths-grid">
              <div className="skills-strengths-item">
                <h4 className="skills-strength-number">01</h4>
                <div>
                  <h5 className="skills-strength-title">Full-Stack Product Development</h5>
                  <p className="skills-strength-desc">Connecting frontend interfaces, backend services and application data into complete product experiences.</p>
                </div>
              </div>

              <div className="skills-strengths-item">
                <h4 className="skills-strength-number">02</h4>
                <div>
                  <h5 className="skills-strength-title">System Integration</h5>
                  <p className="skills-strength-desc">Connecting authentication, payments, storage, search, AI services and external APIs.</p>
                </div>
              </div>

              <div className="skills-strengths-item">
                <h4 className="skills-strength-number">03</h4>
                <div>
                  <h5 className="skills-strength-title">Problem Solving</h5>
                  <p className="skills-strength-desc">Diagnosing application, deployment, authorization, data-flow and integration issues.</p>
                </div>
              </div>

              <div className="skills-strengths-item">
                <h4 className="skills-strength-number">04</h4>
                <div>
                  <h5 className="skills-strength-title">User-Focused Engineering</h5>
                  <p className="skills-strength-desc">Balancing technical implementation with responsive and intuitive experiences.</p>
                </div>
              </div>
            </div>

            <div className="skills-current">
              <div className="skills-current-label">CURRENTLY EXPLORING</div>
              <ul className="skills-current-list">
                <li>Scalable software architecture</li>
                <li>Cloud-native application development</li>
                <li>Responsible AI integration</li>
                <li>System design and performance</li>
                <li>Automated testing and CI/CD</li>
                <li>Secure application development</li>
              </ul>
            </div>
          </div>
        </PaperCard>
      </div>
    </section>
  );
};

export default Skills;

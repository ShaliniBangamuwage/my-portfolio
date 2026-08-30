import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PaperCard from './PaperCard';
import './About.css';

const educationItems = [
  {
    badge: 'Current',
    period: '2023 — present',
    title: 'BSc (Hons) in Information Technology',
    subtitle: 'University of Moratuwa — Faculty of Information Technology',
    details: 'Focused on software engineering, systems design, and applied computing with a current GPA of 3.826.',
    tags: ['Full-Stack', 'Mobile', 'Databases'],
  },
  {
    badge: 'School',
    period: '2014 — 2022',
    title: "St. Thomas' Girls' High School",
    subtitle: 'G.C.E. Advanced Level — Physical Science stream',
    details: 'Completed studies with A, A, B results and a strong foundation in analytical problem solving.',
  },
];

const About = () => {
  const [activeStage, setActiveStage] = useState(null);
  const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';

  // keyboard accessibility for stages
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setActiveStage(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const stages = [
    { id: 1, title: 'Understand', body: 'I begin by identifying the real user need, constraints and expected outcome.' },
    { id: 2, title: 'Architect', body: 'I structure maintainable systems, clear data flows and scalable application foundations.' },
    { id: 3, title: 'Build', body: 'I transform the design into reliable, responsive and user-focused software.' },
    { id: 4, title: 'Evolve', body: 'I test, refine and improve the solution using feedback, analytics and emerging technologies.' },
  ];

  const principles = [
    { id: '01', title: 'Purpose Before Complexity', body: 'Every technical decision should support a real need instead of introducing unnecessary complexity.' },
    { id: '02', title: 'Intelligence With Responsibility', body: 'AI should enhance human decisions while remaining transparent, controlled and meaningful.' },
    { id: '03', title: 'Scalability From the Foundation', body: 'Maintainability, modularity and reliable data flows should be considered from the beginning.' },
    { id: '04', title: 'People at the Centre', body: 'Successful software must be technically strong and intuitive for the people who use it.' },
  ];

  const focusAreas = [
    { title: 'Full-Stack Engineering', body: 'Designing complete digital products across modern frontend, backend and database technologies.' },
    { title: 'AI Integration', body: 'Adding intelligent capabilities that improve discovery, automation, analysis and decision support.' },
    { title: 'Cloud and Scalable Systems', body: 'Building maintainable applications designed for reliable deployment and future growth.' },
    { title: 'User-Focused Engineering', body: 'Combining technical quality with clear, accessible and intuitive experiences.' },
  ];

  return (
    <main id="about" className="about-root bg-transparent px-4 py-12 text-[var(--text-primary)] sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Editorial intro */}
        <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="about-intro">
          <div className="about-meta">01 / <span className="about-meta-title">ABOUT</span></div>
          <h1 className="about-heading">Engineering Ideas Into Meaningful Digital Experiences.</h1>
          <p className="about-lead">I combine software engineering, creative problem-solving and emerging technologies to build intelligent, scalable and user-focused products.</p>
        </motion.header>

        {/* Portrait + story */}
        <section className="about-editorial grid gap-10 lg:grid-cols-[0.6fr_0.95fr] lg:items-start mt-12">
          <PaperCard className="about-portrait-card p-6">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="about-portrait-wrap">
              <div className="about-portrait-frame">
                <img src={process.env.PUBLIC_URL + '/prop.jpg'} alt="Shalini Bangamuwage, innovative software engineer" className="about-portrait-photo" />
              </div>
              <div className="about-portrait-overlay" aria-hidden="true" />
            </motion.div>
          </PaperCard>

          <PaperCard className="about-story p-8">
            <p className="issue-number">About</p>
            <h2 className="about-story-title">I'm Shalini Bangamuwage, an Information Technology undergraduate at the University of Moratuwa with a strong interest in full-stack software engineering and intelligent digital systems.</h2>
            <div className="about-paragraphs">
              <p>I enjoy transforming complex requirements into practical, reliable and intuitive applications. My approach combines structured engineering, thoughtful user experience and continuous experimentation with emerging AI and cloud technologies.</p>
              <p>Beyond writing code, I focus on understanding the real problem, designing maintainable solutions and creating digital experiences that provide meaningful value to their users.</p>
            </div>

            <blockquote className="about-quote">
              <span className="quote-mark">“</span>
              <p className="quote-text">I don’t just build features—I engineer experiences that solve real problems.</p>
            </blockquote>

            <div className="mt-6 flex gap-3">
              <button onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Explore My Work</button>
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">Download CV</a>
            </div>
          </PaperCard>
        </section>

        {/* How I think: process */}
        <section className="about-process mt-12">
          <h3 className="section-header">How I Think</h3>
          <div className="about-process-line" aria-hidden="true" />
          <div className="about-process-stages">
            {stages.map((s) => (
              <div key={s.id} className={`about-stage ${activeStage === s.id ? 'active' : ''}`} tabIndex={0} onClick={() => setActiveStage(activeStage === s.id ? null : s.id)} onKeyDown={(e) => { if (e.key === 'Enter') setActiveStage(activeStage === s.id ? null : s.id); }}>
                <div className="about-stage-index">0{s.id}</div>
                <div className="about-stage-title">{s.title}</div>
                <div className="about-stage-body">{s.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Principles and education */}
        <section className="about-principles-education mt-12 grid gap-8 lg:grid-cols-2">
          <div className="about-principles">
            <h3 className="section-header">Engineering Principles</h3>
            <div className="about-principles-grid">
              {principles.map((p) => (
                <div key={p.id} className="about-principle">
                  <div className="about-principle-num" aria-hidden="true">{p.id}</div>
                  <div className="about-principle-body">
                    <h4 className="about-principle-title">{p.title}</h4>
                    <p className="about-principle-text">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-education">
            <h3 className="section-header">Education & Direction</h3>
            <div className="about-education-panel">
              {educationItems.map((ed) => (
                <div key={ed.title} className="about-education-item">
                  <div className="about-education-title">
                    <strong>{ed.title}</strong>
                    <span className="about-education-sub">{ed.subtitle}</span>
                  </div>
                  <p className="about-education-desc">{ed.details}</p>
                </div>
              ))}

              <div className="about-currently">
                <h4>Currently Exploring</h4>
                <ul>
                  <li>AI-integrated applications</li>
                  <li>Scalable full-stack architecture</li>
                  <li>Cloud platforms and deployment</li>
                  <li>Intelligent search and recommendation systems</li>
                  <li>Cross-platform user experiences</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section className="about-focus mt-12">
          <h3 className="section-header">Professional Focus Areas</h3>
          <div className="about-focus-grid">
            {focusAreas.map((f, i) => (
              <motion.button key={f.title} whileHover={{ scale: 1.02 }} className={`about-focus-item`}>
                <div className="about-focus-index">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="about-focus-title">{f.title}</h4>
                <p className="about-focus-text">{f.body}</p>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Metrics + CTA */}
        <section className="about-metrics-cta mt-12">
          <div className="about-metrics">
            <div className="about-metric">
              <div className="about-metric-num" aria-hidden="true">—</div>
              <div className="about-metric-label">PROJECTS</div>
            </div>
            <div className="about-metric">
              <div className="about-metric-num" aria-hidden="true">—</div>
              <div className="about-metric-label">TECHNOLOGIES</div>
            </div>
            <div className="about-metric">
              <div className="about-metric-num" aria-hidden="true">—</div>
              <div className="about-metric-label">CERTIFICATIONS</div>
            </div>
            <div className="about-metric">
              <div className="about-metric-num">Continuous</div>
              <div className="about-metric-label">ENGINEERING MINDSET</div>
            </div>
          </div>

          <div className="about-cta mt-8">
            <h3 className="section-header">Curious by Nature. Driven to Build.</h3>
            <p className="about-cta-lead">I’m continuously learning, experimenting and looking for opportunities to create technology that makes a meaningful difference.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Explore My Work</button>
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">Download CV</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
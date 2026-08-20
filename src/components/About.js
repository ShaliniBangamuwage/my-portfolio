import React, { useState } from 'react';
import PaperCard from './PaperCard';

const tabs = [
  { id: 'journey', label: 'Journey' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
];

const journeyItems = [
  {
    year: 'Feb 2026 — present',
    title: 'Director of Membership Development and Volunteer Coordination',
    description: 'Lead membership engagement and volunteer coordination initiatives for IEEE WIE Student Branch Affinity Group of University of Moratuwa. Coordinate volunteer assignments, event logistics, partnership outreach, and internal communication while supporting member onboarding and participation across branch activities.',
  },
  {
    year: 'Mar 2026 — present',
    title: 'Lead of Logistic Committee',
    description: 'Lead logistics planning and coordination for IEEE Industry Applications Society student branch events and technical activities. Coordinate venues, schedules, equipment, volunteer assignments, and operational workflows to support smooth execution.',
  },
  {
    year: 'Mar 2026 — present',
    title: 'Member of Robotics and Automation Society',
    description: 'Participate in robotics, automation, and engineering-focused student activities. Support technical events, workshops, and collaborative initiatives while expanding knowledge in robotics, embedded systems, and engineering problem-solving.',
  },
  {
    year: 'Aug 2026 — present',
    title: 'Member, IEEE Microwave Theory & Technology Society',
    description: 'Engage in MTT-S activities, workshops, seminars, and professional development events. Collaborate with students and professionals to enhance knowledge in RF engineering, microwave systems, and wireless communication technologies.',
  },
];

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

const experienceItems = [
  { image: process.env.PUBLIC_URL + '/lseg.jpg', title: 'LSEG', subtitle: 'Technology & innovation visit', description: 'Explored how modern financial platforms combine product thinking, reliability, and data-driven systems.' },
  { image: process.env.PUBLIC_URL + '/24.jpg', title: 'Zone 24x7', subtitle: 'AI/ML solutions', description: 'Observed how intelligent systems are shaped for real-world enterprise needs and customer experience.' },
  { image: process.env.PUBLIC_URL + '/wso2s.jpg', title: 'WSO2', subtitle: 'Open-source enterprise tools', description: 'Learned about scalable integrations, APIs, and the role of open-source software in modern engineering.' },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <main id="about" className="bg-transparent px-4 py-12 text-[var(--text-primary)] sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <PaperCard className="p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-5">
              <div className="overflow-hidden rounded-[1.4rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3">
                <img src={process.env.PUBLIC_URL + '/prop.jpg'} alt="Shalini portrait" className="h-[340px] w-full rounded-[1.1rem] object-cover" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Education', value: 'University of Moratuwa' },
                  { label: 'Focus', value: 'Full-stack product work' },
                  { label: 'Availability', value: 'Open to opportunities' },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <p className="issue-number">About</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-[var(--text-primary)] sm:text-4xl">I enjoy transforming complex ideas into simple, useful digital experiences.</h2>
              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">I am a motivated Information Technology undergraduate with a strong interest in software engineering, product development, and intelligent digital systems. I work across the full development process—from understanding user requirements and designing interfaces to building APIs, managing databases, and connecting complete systems.</p>
              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">My goal is not only to make applications work, but to make them feel clear, reliable, and valuable to the people who use them.</p>

              <div className="flex flex-wrap gap-3">
                {['Product thinking', 'Frontend systems', 'Backend engineering', 'Database design', 'UI/UX'].map((tag) => (
                  <span key={tag} className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </PaperCard>

        <PaperCard className="p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
            <div>
              <p className="issue-number">Professional record</p>
              <h3 className="section-header">Story & experience</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.3em] transition ${activeTab === tab.id ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)]' : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {activeTab === 'journey' && journeyItems.map((item) => (
              <div key={item.title} className="rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">{item.year}</p>
                <h4 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}

            {activeTab === 'education' && educationItems.map((item) => (
              <div key={item.title} className="rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
                <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">
                  <span>{item.badge}</span>
                  <span>{item.period}</span>
                </div>
                <h4 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h4>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.details}</p>
                {item.tags && <div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">{tag}</span>)}</div>}
              </div>
            ))}

            {activeTab === 'experience' && experienceItems.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h4>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.subtitle}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </PaperCard>
      </div>
    </main>
  );
};

export default About;

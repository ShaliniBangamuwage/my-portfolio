import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'journey', label: 'My Journey' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'volunteer', label: 'Volunteering' },
];

const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'company', label: 'Company Visits' },
  { id: 'volunteer', label: 'Volunteer' },
  { id: 'memories', label: 'Memories' },
];

const galleryImages = [
  { id: 1, src: process.env.PUBLIC_URL + '/lseg.jpg', title: 'LSEG Technology Visit', desc: 'Exploring financial technology innovations', category: 'company' },
  { id: 2, src: process.env.PUBLIC_URL + '/24.jpg', title: 'Zone 24x7 AI Labs', desc: 'Learning AI/ML enterprise solutions', category: 'company' },
  { id: 3, src: process.env.PUBLIC_URL + '/wso2s.jpg', title: 'WSO2 Innovation Hub', desc: 'Open-source technology exploration', category: 'company' },
  { id: 4, src: process.env.PUBLIC_URL + '/open.jpg', title: 'IEEE Open Week', desc: 'Organizing tech exhibitions and workshops', category: 'volunteer' },
  { id: 5, src: process.env.PUBLIC_URL + '/mercorn.jpg', title: 'IEEE MERCON Conference', desc: 'Supporting international tech conference', category: 'volunteer' },
  { id: 6, src: process.env.PUBLIC_URL + '/robo.jpg', title: 'IEEE Robotic Day', desc: 'Coordinating robotics demonstrations', category: 'volunteer' },
  { id: 7, src: process.env.PUBLIC_URL + '/hackelite.jpg', title: 'IEEE Hackelite', desc: 'Managing hackathon operations', category: 'volunteer' },
  { id: 8, src: process.env.PUBLIC_URL + '/fit.jpg', title: 'University Squad', desc: 'Late night coding sessions with friends', category: 'memories' },
  { id: 9, src: process.env.PUBLIC_URL + '/hardware.jpg', title: 'Team spirit', desc: 'First Year Hardware project squad', category: 'memories' },
  { id: 10, src: process.env.PUBLIC_URL + '/mer.jpeg', title: 'Project Celebration', desc: 'Celebrating successful project', category: 'memories' },
  { id: 11, src: process.env.PUBLIC_URL + '/zone.jpeg', title: 'Study Group', desc: 'Learning together, growing together', category: 'memories' },
  { id: 12, src: process.env.PUBLIC_URL + '/IEEE.jpeg', title: 'Tech Event', desc: 'Making memories at tech events', category: 'memories' },
];

const journeyItems = [
  {
    year: '2025 - Present',
    title: 'IEEE RAS Member 25/26',
    description: 'Active member of IEEE Robotics and Automation Society, contributing to innovative projects and community initiatives.',
  },
  {
    year: '2024',
    title: 'IEEE Event Volunteer',
    description: 'Volunteered at Open Week, MERCON, Robotic Day, and Hackelite, gaining valuable organizational experience.',
  },
  {
    year: '2024',
    title: 'Industry Exposure',
    description: 'Visited LSEG, Zone 24x7, and WSO2 to learn about fintech, AI/ML, and open-source enterprise innovation.',
  },
  {
    year: '2023 - Present',
    title: 'University of Moratuwa',
    description: 'Pursuing BSc (Hons) in IT while focusing on software development, mobile apps, and product design.',
  },
];

const educationItems = [
  {
    badge: 'Current',
    period: '2023 - Present',
    title: 'BSc (Hons) in Information Technology',
    subtitle: 'University of Moratuwa',
    details: 'Specializing in software engineering, mobile development, and web technologies.',
    tags: ['Full Stack Development', 'Mobile Apps', 'AI/ML'],
  },
  {
    badge: '🏆 Scholarship',
    period: '2023',
    title: 'Scholarship Achievement',
    subtitle: 'Pass 174 - Merit Based',
    details: 'Awarded for academic excellence and strong performance in competitive exams.',
  },
  {
    badge: 'Excellence',
    period: '2020 - 2022',
    title: 'G.C.E Advanced Level',
    subtitle: 'Mathematics Stream',
    details: 'A2B result with a 1.89 Z-score, building a strong analytical foundation.',
  },
  {
    badge: '9A',
    period: '2019',
    title: 'G.C.E Ordinary Level',
    subtitle: 'Outstanding Achievement',
    details: '9A passes across Mathematics, Science, and Languages.',
  },
];

const experienceItems = [
  {
    image: process.env.PUBLIC_URL + '/lseg.jpg',
    title: 'London Stock Exchange Group (LSEG)',
    subtitle: 'Technology & Innovation Visit',
    description: 'Explored financial technology, high-frequency trading systems, and data analytics solutions that drive modern markets.',
    tags: ['FinTech', 'Trading', 'Analytics'],
  },
  {
    image: process.env.PUBLIC_URL + '/24.jpg',
    title: 'Zone 24x7',
    subtitle: 'AI/ML Solutions Experience',
    description: 'Learned how AI/ML powers virtual assistants, customer experience, and enterprise automation.',
    tags: ['AI', 'NLP', 'Automation'],
  },
  {
    image: process.env.PUBLIC_URL + '/wso2s.jpg',
    title: 'WSO2',
    subtitle: 'Open Source Enterprise Solutions',
    description: 'Studied API management, integration, and the role of open-source software in scalable systems.',
    tags: ['Open Source', 'APIs', 'Integration'],
  },
];

const volunteerItems = [
  {
    icon: '🌐',
    title: 'IEEE Open Week',
    role: 'Event Coordinator',
    description: 'Organized exhibitions, workshops, and student engagement activities.',
  },
  {
    icon: '📡',
    title: 'IEEE MERCON',
    role: 'Conference Support',
    description: 'Supported international conference operations and technical sessions.',
  },
  {
    icon: '🤖',
    title: 'IEEE Robotic Day',
    role: 'Competition Manager',
    description: 'Coordinated demonstrations, competitions, and participant logistics.',
  },
  {
    icon: '💻',
    title: 'IEEE Hackelite',
    role: 'Operations Lead',
    description: 'Managed hackathon workflows and team support for a smooth event experience.',
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [activeGallery, setActiveGallery] = useState('all');

  const filteredImages = useMemo(
    () => (activeGallery === 'all' ? galleryImages : galleryImages.filter((image) => image.category === activeGallery)),
    [activeGallery]
  );

  return (
    <main className="bg-base-900 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950/80 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.1),transparent_18%)]" />
        <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-accent">Discover</span>
            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-50 sm:text-5xl">Building the <span className="text-accent">Future</span> one line at a time.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Software developer, IEEE member, and innovation enthusiast shaping elegant digital experiences across web, mobile, and community initiatives.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-section sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/30">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/95">
              <img src={process.env.PUBLIC_URL + '/prop.jpg'} alt="Shalini Bangamuwage" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            </div>
            <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Projects</p>
                <p className="mt-2 text-2xl font-semibold text-slate-50">15+</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Events</p>
                <p className="mt-2 text-2xl font-semibold text-slate-50">5+</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Scholarship</p>
                <p className="mt-2 text-2xl font-semibold text-slate-50">174</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-3xl border border-accent/20 bg-slate-900/95 px-4 py-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">⚡</span>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Available</p>
                <p className="text-sm text-slate-200">Open to new opportunities and collaboration.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-black/30">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-accent">Software Developer & IEEE Member</span>
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-50 sm:text-4xl">Hi, I'm <span className="text-accent">Shalini Bangamuwage</span></h2>
                <div className="space-y-4 text-slate-300">
                  <p>A passionate software developer and active IEEE member pursuing BSc (Hons) in Information Technology at the University of Moratuwa.</p>
                  <p>I specialize in React Native, Java, and modern web technologies, building thoughtful products that blend technical quality with polished user experience.</p>
                </div>
                <a href={process.env.PUBLIC_URL + '/resume.pdf'} download="resume.pdf" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-accent-dark">Download Resume</a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: 'Academic Excellence', detail: 'O/L: 9A • A/L: A2B (1.89 Z-score)' },
                { title: 'Scholarship Holder', detail: 'Pass 174 merit-based award' },
                { title: 'IEEE Active Member', detail: 'Robotics & Automation Society 25/26' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 transition duration-200 hover:border-accent/40 hover:bg-slate-900/90">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.title}</p>
                  <p className="mt-3 text-base font-semibold text-slate-100">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: 'Innovation', detail: 'Creating cutting-edge solutions' },
                { title: 'Community', detail: 'Building together, growing together' },
                { title: 'Impact', detail: 'Making a real difference' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
                  <p className="text-2xl">{item.title === 'Innovation' ? '💡' : item.title === 'Community' ? '🤝' : '🎯'}</p>
                  <h3 className="mt-4 text-lg font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-950/80 border-t border-white/10 py-section">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-black/20">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 sm:gap-6">
              <h2 className="text-2xl font-semibold text-slate-50">Professional story</h2>
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === tab.id ? 'bg-accent text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {activeTab === 'journey' && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {journeyItems.map((item) => (
                    <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                      <span className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.year}</span>
                      <h3 className="mt-3 text-xl font-semibold text-slate-100">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="grid gap-4 lg:grid-cols-2">
                  {educationItems.map((item) => (
                    <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                      <div className="flex items-center justify-between gap-4 text-sm uppercase tracking-[0.25em] text-slate-400">
                        <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">{item.badge}</span>
                        <span>{item.period}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-slate-100">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{item.subtitle}</p>
                      <p className="mt-4 text-sm leading-6 text-slate-300">{item.details}</p>
                      {item.tags && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="grid gap-4 lg:grid-cols-3">
                  {experienceItems.map((item) => (
                    <div key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-sm">
                      <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                      <div className="p-5">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.subtitle}</p>
                        <h3 className="mt-3 text-lg font-semibold text-slate-100">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'volunteer' && (
                <div className="space-y-4">
                  <div className="grid gap-4 lg:grid-cols-2">
                    {volunteerItems.map((item) => (
                      <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-2xl">{item.icon}</div>
                        <h3 className="mt-4 text-xl font-semibold text-slate-100">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                        <span className="mt-4 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">{item.role}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                    <h3 className="text-lg font-semibold text-slate-100">Community Impact</h3>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {[
                        { value: '4+', label: 'Events Organized' },
                        { value: '500+', label: 'Students Reached' },
                        { value: '100+', label: 'Hours Volunteered' },
                      ].map((item) => (
                        <div key={item.label} className="rounded-3xl bg-slate-900/90 p-4 text-center">
                          <p className="text-3xl font-semibold text-accent">{item.value}</p>
                          <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/20">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-50">Moments & Memories</h2>
                <p className="mt-2 text-sm text-slate-400">Capturing the story behind tech visits, volunteer work, and community moments.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {galleryCategories.map((category) => (
                  <button key={category.id} type="button" onClick={() => setActiveGallery(category.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeGallery === category.id ? 'bg-accent text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredImages.map((item) => (
                <motion.div key={item.id} whileHover={{ y: -6 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/95 shadow-sm">
                  <img src={item.src} alt={item.title} className="h-60 w-full object-cover" />
                  <div className="space-y-2 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.category.replace(/\b\w/g, (l) => l.toUpperCase())}</p>
                    <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
                    <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

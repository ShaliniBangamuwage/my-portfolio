import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90, icon: '🌐', category: 'Frontend' },
  { name: 'CSS', level: 85, icon: '🎨', category: 'Frontend' },
  { name: 'JavaScript', level: 80, icon: '⚡', category: 'Frontend' },
  { name: 'React', level: 75, icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', level: 70, icon: '🟢', category: 'Backend' },
  { name: 'Git', level: 85, icon: '📦', category: 'Tools' },
  { name: 'Figma', level: 80, icon: '🎯', category: 'Design' },
  { name: 'TypeScript', level: 65, icon: '📘', category: 'Frontend' },
];

const tools = [
  { name: 'VS Code', icon: '💻' },
  { name: 'GitHub', icon: '🙀' },
  { name: 'Webpack', icon: '📦' },
  { name: 'npm', icon: '📮' },
  { name: 'Postman', icon: '📬' },
  { name: 'Chrome DevTools', icon: '🔧' },
];

const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = useMemo(
    () => (activeCategory === 'All' ? skills : skills.filter((skill) => skill.category === activeCategory)),
    [activeCategory]
  );

  const averageLevel = useMemo(
    () => Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length),
    []
  );

  return (
    <section className="bg-base-900 text-slate-100 py-section" id="skills">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="pb-12 text-center">
          <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-accent">What I Know</span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-5xl">My <span className="text-accent">Skills</span> & Expertise</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">A modern toolkit for building polished user experiences, mobile applications, and technical systems.</p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-accent text-slate-950 shadow-lg shadow-accent/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="grid gap-4 lg:grid-cols-2">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-accent/10 text-2xl text-accent shadow-inner shadow-accent/5">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">{skill.name}</h3>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{skill.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-semibold text-accent">{skill.level}%</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Proficiency</p>
                </div>
              </div>

              <div className="mt-6 rounded-full bg-white/5 p-1">
                <div className="h-3 rounded-full bg-gradient-to-r from-accent to-accent-dark" style={{ width: `${skill.level}%` }} />
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                <span>{skill.level >= 80 ? 'Expert' : skill.level >= 70 ? 'Advanced' : 'Intermediate'}</span>
                <span className="font-semibold text-slate-100">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-slate-100">Tools & Technologies</h3>
            <p className="mt-3 text-slate-400">The developer toolkit I use for daily product delivery, collaboration, and debugging.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {tools.map((tool) => (
                <div key={tool.name} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:border-accent/30 hover:bg-white/10">
                  <span className="mr-3 text-lg">{tool.icon}</span>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-black/20">
            <div className="space-y-6">
              <div className="rounded-[1.75rem] bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Technical skills</p>
                <p className="mt-2 text-4xl font-semibold text-slate-50">{skills.length}+</p>
              </div>
              <div className="rounded-[1.75rem] bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Dev tools</p>
                <p className="mt-2 text-4xl font-semibold text-slate-50">{tools.length}+</p>
              </div>
              <div className="rounded-[1.75rem] bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Average proficiency</p>
                <p className="mt-2 text-4xl font-semibold text-slate-50">{averageLevel}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

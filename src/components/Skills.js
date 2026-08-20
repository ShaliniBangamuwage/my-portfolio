import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ArrowRight, BrainCircuit, ChevronRight, Code2, Cpu, Database, GitBranch, Globe, Layers3, MessageSquare, Radar, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { SiFigma, SiGithub, SiWebpack, SiNpm, SiPostman } from 'react-icons/si';
import PaperCard from './PaperCard';

const portfolioSkills = [
  { name: 'React', level: 90, icon: Code2, category: 'Frontend' },
  { name: 'JavaScript', level: 88, icon: Zap, category: 'Frontend' },
  { name: 'HTML & CSS', level: 90, icon: Globe, category: 'Frontend' },
  { name: 'Node.js', level: 78, icon: Cpu, category: 'Backend' },
  { name: 'NestJS', level: 75, icon: Layers3, category: 'Backend' },
  { name: 'REST APIs', level: 82, icon: Cpu, category: 'Backend' },
  { name: 'Firebase & Firestore', level: 80, icon: Database, category: 'Database' },
  { name: 'SQL', level: 78, icon: Database, category: 'Database' },
  { name: 'Git & GitHub', level: 86, icon: SiGithub, category: 'Tools' },
  { name: 'Figma', level: 80, icon: SiFigma, category: 'Design' },
];

const portfolioProjects = [
  {
    id: 1,
    title: 'MediCareX',
    category: 'Product platform',
    tech: ['React', 'NestJS', 'Firebase', 'Firestore'],
    summary: 'Multi-user pharmacy platform with inventory, prescriptions, supplier coordination, and delivery flows.',
    fit: 'High fit for full-stack product delivery and healthcare workflows.',
  },
  {
    id: 2,
    title: 'Software Projects & Technical Experiments',
    category: 'Academic & personal engineering',
    tech: ['React', 'Node.js', 'Databases', 'UI Design'],
    summary: 'A portfolio of experiments spanning UI design, database work, and applied problem solving.',
    fit: 'Strong fit for rapid prototyping and systems thinking.',
  },
];

const tools = [
  { name: 'VS Code', icon: Code2 },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Webpack', icon: SiWebpack },
  { name: 'npm', icon: SiNpm },
  { name: 'Postman', icon: SiPostman },
];

const graphNodes = [
  { id: 'react', label: 'React', x: 54, y: 26, size: 22 },
  { id: 'node', label: 'Node.js', x: 18, y: 56, size: 20 },
  { id: 'nest', label: 'NestJS', x: 78, y: 58, size: 18 },
  { id: 'db', label: 'Firebase', x: 46, y: 78, size: 20 },
  { id: 'ui', label: 'UI Systems', x: 72, y: 24, size: 18 },
];

const graphEdges = [
  ['react', 'ui'],
  ['react', 'node'],
  ['node', 'nest'],
  ['react', 'db'],
  ['nest', 'db'],
];

const radarDimensions = [
  { label: 'Frontend', value: 92 },
  { label: 'Backend', value: 78 },
  { label: 'Product thinking', value: 84 },
  { label: 'Systems design', value: 76 },
  { label: 'Collaboration', value: 88 },
  { label: 'Design fluency', value: 81 },
];

const knowledgeTopics = [
  {
    label: 'AI-driven engineering',
    description: 'Blend product thinking with stack-level execution by focusing on reusable frontend patterns, reliable backend services, and data-driven design decisions.',
    learn: 'Visitors learn how strong portfolios connect customer value with concrete technical choices.',
    highlight: 'This site uses React and NestJS together with data workflows to demonstrate both product-facing UI and API-driven backend thinking.',
  },
  {
    label: 'Visitor knowledge bites',
    description: 'Showcase what visitors should learn: how a portfolio demonstrates problem framing, technical delivery, and the importance of impact statements.',
    learn: 'Visitors gain insight into what makes engineering work memorable and credible.',
    highlight: 'Project summaries and case-study phrasing focus on user benefits, technical challenges, and measurable outcomes.',
  },
  {
    label: 'Competitive portfolio insights',
    description: 'Explain what makes a standout portfolio: clarity, measurable outcomes, thoughtful UX, and a narrative that connects each project to real value.',
    learn: 'Visitors can compare this portfolio against typical resumes and see why storytelling matters.',
    highlight: 'The portfolio emphasizes product, results, and the software delivery process rather than just a raw skills list.',
  },
  {
    label: 'Engineering growth signal',
    description: 'Highlight why consistent activity, learning new tools, and sharing technical progress are strong signals for recruiters and collaborators.',
    learn: 'Visitors understand the importance of momentum and visible development habits.',
    highlight: 'Active projects, GitHub metrics, and event leadership show a pattern of continuous learning and collaboration.',
  },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedTech, setSelectedTech] = useState('React');
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [activeKnowledgeTopic, setActiveKnowledgeTopic] = useState('AI-driven engineering');
  const [githubData, setGithubData] = useState(null);
  const [aiSummary, setAiSummary] = useState('');
  const [assistantInput, setAssistantInput] = useState('');
  const [assistantMessages, setAssistantMessages] = useState([
    {
      role: 'assistant',
      content: 'I can answer based on your featured projects, stack profile, and public GitHub activity. Ask me about your strengths, project fit, or hiring story.',
    },
  ]);

  useEffect(() => {
    let active = true;

    const loadGitHub = async () => {
      try {
        const [profileResponse, repoResponse] = await Promise.all([
          fetch('https://api.github.com/users/shalinimadhuka'),
          fetch('https://api.github.com/users/shalinimadhuka/repos?per_page=100&sort=updated'),
        ]);

        if (!profileResponse.ok || !repoResponse.ok) throw new Error('GitHub lookup failed');

        const [profile, repos] = await Promise.all([profileResponse.json(), repoResponse.json()]);

        if (!active) return;
        setGithubData({ profile, repos });
      } catch {
        if (active) setGithubData({ profile: null, repos: [] });
      }
    };

    loadGitHub();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const buildLocalSummary = () => {
      const projectCount = portfolioProjects.length;
      const stackDepth = portfolioSkills.length;
      const repoCount = githubData?.repos?.length || 0;
      const recentActivity = githubData?.repos?.filter((repo) => {
        const updated = new Date(repo.pushed_at);
        const cutoff = new Date(Date.now() - 1000 * 60 * 60 * 24 * 180);
        return updated >= cutoff;
      }).length || 0;

      return `Based on ${projectCount} featured portfolio projects, ${stackDepth} core capabilities, ${repoCount} public repositories, and ${recentActivity} recently active repos, your profile reads as a pragmatic full-stack builder with strong product delivery instincts and a clear focus on React, APIs, and data-driven product experiences.`;
    };

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      setAiSummary(buildLocalSummary());
      return;
    }

    const prompt = `Summarize this developer profile with grounded, non-hallucinatory language using only the following data: ${portfolioProjects.map((project) => `${project.title}: ${project.summary}`).join(' | ')}. Skills: ${portfolioSkills.map((skill) => `${skill.name}:${skill.level}`).join(', ')}. Repositories: ${githubData?.repos?.slice(0, 8).map((repo) => repo.name).join(', ') || 'no public GitHub data'}. Write a concise 2-sentence profile summary.`;

    const controller = new AbortController();
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: 'You are a concise technical profile summarizer. Use only the facts provided and avoid invented claims.' }, { role: 'user', content: prompt }],
        temperature: 0.3,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        const content = json?.choices?.[0]?.message?.content?.trim();
        if (content) {
          setAiSummary(content);
        } else {
          setAiSummary(buildLocalSummary());
        }
      })
      .catch(() => {
        setAiSummary(buildLocalSummary());
      });

    return () => controller.abort();
  }, [githubData]);

  const filteredSkills = useMemo(() => (activeFilter === 'All' ? portfolioSkills : portfolioSkills.filter((skill) => skill.category === activeFilter)), [activeFilter]);

  const repoStats = useMemo(() => {
    if (!githubData?.repos?.length) {
      return { totalRepos: 0, activeRepos: 0, topLanguages: ['React', 'Node.js'] };
    }

    const languageMap = {};
    githubData.repos.forEach((repo) => {
      if (repo.language) {
        languageMap[repo.language] = (languageMap[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languageMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([name]) => name);

    const activeRepos = githubData.repos.filter((repo) => {
      const updated = new Date(repo.pushed_at);
      const cutoff = new Date(Date.now() - 1000 * 60 * 60 * 24 * 180);
      return updated >= cutoff;
    }).length;

    return { totalRepos: githubData.repos.length, activeRepos, topLanguages };
  }, [githubData]);

  const profileScore = useMemo(() => {
    const skillBase = portfolioSkills.reduce((sum, skill) => sum + skill.level, 0) / portfolioSkills.length;
    const repoBonus = repoStats.totalRepos > 0 ? 4 : 0;
    return Math.min(96, Math.round(skillBase + repoBonus));
  }, [repoStats.totalRepos]);

  const recommendedProjects = useMemo(() => {
    const match = portfolioProjects.filter((project) => project.tech.includes(selectedTech) || project.tech.some((tech) => tech.toLowerCase() === selectedTech.toLowerCase()));
    return match.length ? match : portfolioProjects;
  }, [selectedTech]);

  const activeKnowledge = knowledgeTopics.find((topic) => topic.label === activeKnowledgeTopic) || knowledgeTopics[0];

  const launchAssistant = (event) => {
    event.preventDefault();
    const question = assistantInput.trim();
    if (!question) return;

    const responses = {
      stack: 'Your strongest stack combination is React on the front end, Node.js or NestJS on the backend, and Firebase or SQL for data needs. That combination is visible across your portfolio projects and product work.',
      project: `Your most product-focused work is ${portfolioProjects[0].title}, which combines product design thinking, multi-user workflows, and a complete digital experience.`,
      fit: 'You look like a strong fit for product-minded engineering roles that value full-stack delivery, thoughtful UX, and reliable implementation.',
      github: `Your public GitHub footprint currently shows ${repoStats.totalRepos} repositories and ${repoStats.activeRepos} recently active ones, which supports a steady engineering cadence.`,
    };

    let answer = 'I can answer using your portfolio projects, core technologies, and GitHub activity. Try asking about your stack, projects, hiring fit, or GitHub presence.';

    if (question.toLowerCase().includes('stack')) answer = responses.stack;
    if (question.toLowerCase().includes('project')) answer = responses.project;
    if (question.toLowerCase().includes('hire') || question.toLowerCase().includes('fit')) answer = responses.fit;
    if (question.toLowerCase().includes('github')) answer = responses.github;

    setAssistantMessages((current) => [...current, { role: 'user', content: question }, { role: 'assistant', content: answer }]);
    setAssistantInput('');
  };

  return (
    <section className="bg-transparent px-4 py-16 text-[var(--text-primary)] sm:px-6 lg:px-8 lg:py-20" id="expertise">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="issue-number">AI-powered developer intelligence</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-4xl">A live operating view of your engineering profile, project fit, and growth signal.</h2>
            <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">This experience combines your portfolio data, visible GitHub activity, and a grounded analysis layer to feel like an AI command center rather than a static skill list.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setRecruiterMode((value) => !value)} className={`rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.3em] transition ${recruiterMode ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)]' : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
              {recruiterMode ? 'Recruiter mode on' : 'Recruiter mode'}
            </button>
            {['All', 'Frontend', 'Backend', 'Database', 'Design', 'Tools'].map((category) => (
              <button key={category} type="button" onClick={() => setActiveFilter(category)} className={`rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.3em] transition ${activeFilter === category ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)]' : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {[
            { label: 'Featured projects', value: portfolioProjects.length, icon: Sparkles },
            { label: 'Core capabilities', value: portfolioSkills.length, icon: BrainCircuit },
            { label: 'Public repos', value: repoStats.totalRepos, icon: GitBranch },
            { label: 'Active momentum', value: `${repoStats.activeRepos}+`, icon: Activity },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-[1.2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)]/80 p-4">
                <div className="flex items-center gap-3 text-[var(--accent)]">
                  <Icon className="h-4 w-4" />
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">{item.label}</p>
                </div>
                <p className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{item.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <PaperCard className="overflow-hidden p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">AI engineering assessment</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">Live profile analysis</h3>
                </div>
                <div className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Grounded on portfolio data</div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.15rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Signal strength</p>
                    <span className="text-sm font-semibold text-[var(--accent)]">{profileScore}/96</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-[var(--bg-secondary)]">
                    <motion.div className="h-full rounded-full bg-[var(--accent)]" initial={{ width: 0 }} animate={{ width: `${profileScore}%` }} transition={{ duration: 0.7 }} />
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                    <div className="flex items-center justify-between rounded-full border border-[var(--border-color)] px-3 py-2"><span>React & product UI</span><span className="text-[var(--accent)]">Strong</span></div>
                    <div className="flex items-center justify-between rounded-full border border-[var(--border-color)] px-3 py-2"><span>Backend services</span><span className="text-[var(--accent)]">Developing</span></div>
                    <div className="flex items-center justify-between rounded-full border border-[var(--border-color)] px-3 py-2"><span>Data & system thinking</span><span className="text-[var(--accent)]">Growing</span></div>
                  </div>
                </div>

                <div className="rounded-[1.15rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
                  <div className="flex items-center gap-2 text-[var(--accent)]">
                    <BrainCircuit className="h-4 w-4" />
                    <p className="text-[10px] uppercase tracking-[0.3em]">Profile summary</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{aiSummary || 'Analyzing your portfolio and GitHub footprint…'}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['React', 'Product thinking', 'API design', 'Portfolio-first growth'].map((item) => (
                      <span key={item} className="rounded-full border border-[var(--border-color)] px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </PaperCard>

            <PaperCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <Sparkles className="h-4 w-4" />
                  <p className="text-[10px] uppercase tracking-[0.35em]">AI learning lab</p>
                </div>
                <div className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">For curious visitors</div>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">Instant portfolio intelligence</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">Choose a topic and get a short, useful explanation that helps visitors understand how this portfolio is built, why it stands out, and what engineering skills are showcased.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {knowledgeTopics.map((topic) => (
                  <button key={topic.label} type="button" onClick={() => setActiveKnowledgeTopic(topic.label)} className={`rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.3em] transition ${activeKnowledgeTopic === topic.label ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)]' : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
                    {topic.label}
                  </button>
                ))}
              </div>
              <div className="mt-6 rounded-[1.1rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-5 text-sm leading-7 text-[var(--text-secondary)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">Selected insight</p>
                <h4 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{activeKnowledge.label}</h4>
                <p className="mt-3 text-[var(--text-secondary)]">{activeKnowledge.description}</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">What visitors learn</p>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">{activeKnowledge.learn}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">How this portfolio shows it</p>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">{activeKnowledge.highlight}</p>
                  </div>
                </div>
              </div>
            </PaperCard>

            <PaperCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">Engineering DNA</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">A radar view of your profile strengths</h3>
                </div>
                <div className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Portfolio-derived</div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <div className="rounded-[1.15rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-3">
                  <svg viewBox="0 0 240 240" className="h-full w-full">
                    {[1, 2, 3, 4, 5].map((ring) => (
                      <polygon key={ring} points="120,20 168,44 168,96 120,120 72,96 72,44" transform={`scale(${0.22 + ring * 0.12}) translate(${120 - (120 * (0.22 + ring * 0.12))} ${120 - (120 * (0.22 + ring * 0.12))})`} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    ))}
                    <polygon points={radarDimensions.map((point, index) => {
                      const angle = (Math.PI / 3) * index - Math.PI / 2;
                      const radius = (point.value / 100) * 90;
                      const x = 120 + radius * Math.cos(angle);
                      const y = 120 + radius * Math.sin(angle);
                      return `${x},${y}`;
                    }).join(' ')} fill="rgba(34,211,238,0.16)" stroke="var(--accent)" strokeWidth="2" />
                    {radarDimensions.map((point, index) => {
                      const angle = (Math.PI / 3) * index - Math.PI / 2;
                      const radius = (point.value / 100) * 90;
                      const x = 120 + radius * Math.cos(angle);
                      const y = 120 + radius * Math.sin(angle);
                      return <circle key={point.label} cx={x} cy={y} r="3.5" fill="var(--accent)" />;
                    })}
                    {radarDimensions.map((point, index) => {
                      const angle = (Math.PI / 3) * index - Math.PI / 2;
                      const x = 120 + 100 * Math.cos(angle);
                      const y = 120 + 100 * Math.sin(angle);
                      return <text key={`${point.label}-label`} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.72)" fontSize="10">{point.label}</text>;
                    })}
                  </svg>
                </div>
                <div className="space-y-3">
                  {radarDimensions.map((point) => (
                    <div key={point.label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-[var(--text-secondary)]">
                        <span>{point.label}</span>
                        <span className="text-[var(--accent)]">{point.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--bg-secondary)]">
                        <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${point.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PaperCard>

            <PaperCard className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">Project recommendation engine</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">Suggested work based on your selected technology</h3>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {['React', 'Node.js', 'NestJS', 'Firebase', 'UI Design'].map((tech) => (
                  <button key={tech} type="button" onClick={() => setSelectedTech(tech)} className={`rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.3em] transition ${selectedTech === tech ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)]' : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
                    {tech}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {recommendedProjects.map((project) => (
                  <motion.div key={project.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-[1.1rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-lg font-semibold text-[var(--text-primary)]">{project.title}</h4>
                      <span className="rounded-full border border-[var(--border-color)] px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">{project.category}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{project.summary}</p>
                    <p className="mt-3 text-sm font-medium text-[var(--accent)]">{project.fit}</p>
                  </motion.div>
                ))}
              </div>
            </PaperCard>
          </div>

          <div className="space-y-5">
            <PaperCard className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <Radar className="h-4 w-4" />
                <p className="text-[10px] uppercase tracking-[0.35em]">GitHub intelligence</p>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">Repository pulse and technology mix</h3>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.15rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Public repo count</span>
                    <span className="text-lg font-semibold text-[var(--text-primary)]">{repoStats.totalRepos}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {repoStats.topLanguages.map((language) => (
                      <span key={language} className="rounded-full border border-[var(--border-color)] px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">{language}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.15rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Recent activity</span>
                    <span className="text-lg font-semibold text-[var(--text-primary)]">{repoStats.activeRepos} active repos</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">This reflects your current public engineering cadence and indicates a strong pattern of consistent iteration.</p>
                </div>
              </div>
            </PaperCard>

            <PaperCard className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <Cpu className="h-4 w-4" />
                <p className="text-[10px] uppercase tracking-[0.35em]">Technology graph</p>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">How your stack connects</h3>
              <div className="mt-5 rounded-[1.15rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-4">
                <svg viewBox="0 0 100 100" className="h-[260px] w-full">
                  {graphEdges.map(([from, to]) => {
                    const start = graphNodes.find((node) => node.id === from);
                    const end = graphNodes.find((node) => node.id === to);
                    return <line key={`${from}-${to}`} x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="rgba(34,211,238,0.42)" strokeWidth="0.8" />;
                  })}
                  {graphNodes.map((node) => (
                    <g key={node.id}>
                      <circle cx={node.x} cy={node.y} r={node.size / 6} fill="rgba(34,211,238,0.16)" />
                      <circle cx={node.x} cy={node.y} r={node.size / 8} fill="var(--accent)" />
                      <text x={node.x} y={node.y + 8} textAnchor="middle" fill="rgba(255,255,255,0.92)" fontSize="3.2">{node.label}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="mt-5 space-y-3">
                {filteredSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex items-center justify-between rounded-[0.95rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[var(--accent)]" />
                        <span className="text-[var(--text-primary)]">{skill.name}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">{skill.category}</span>
                    </div>
                  );
                })}
              </div>
            </PaperCard>

            <PaperCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <MessageSquare className="h-4 w-4" />
                  <p className="text-[10px] uppercase tracking-[0.35em]">Portfolio-aware assistant</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <span key={tool.name} className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                        <Icon className="h-3.5 w-3.5" />
                        {tool.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">Ask about your profile</h3>
              <form onSubmit={launchAssistant} className="mt-4 space-y-3">
                <input value={assistantInput} onChange={(event) => setAssistantInput(event.target.value)} placeholder="Ask about projects, stack, or hiring fit" className="w-full rounded-[0.9rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none ring-0" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--accent)] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--bg-primary)]">
                  Ask <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
              <div className="mt-4 space-y-3">
                <AnimatePresence mode="popLayout">
                  {assistantMessages.map((message, index) => (
                    <motion.div key={`${message.role}-${index}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`rounded-[1rem] border px-4 py-3 text-sm leading-7 ${message.role === 'assistant' ? 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]' : 'border-[var(--accent)]/40 bg-[var(--bg-primary)] text-[var(--text-primary)]'}`}>
                      {message.content}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </PaperCard>

            <PaperCard className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <TrendingUp className="h-4 w-4" />
                <p className="text-[10px] uppercase tracking-[0.35em]">Growth prediction</p>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">Next-step recommendations</h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
                  <div className="flex items-center justify-between">
                    <span>Deepen backend systems</span>
                    <span className="text-[var(--accent)]">High value</span>
                  </div>
                </div>
                <div className="rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
                  <div className="flex items-center justify-between">
                    <span>Expand API and data architecture</span>
                    <span className="text-[var(--accent)]">Strong next move</span>
                  </div>
                </div>
                <div className="rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
                  <div className="flex items-center justify-between">
                    <span>Package portfolio into case studies</span>
                    <span className="text-[var(--accent)]">Visibility boost</span>
                  </div>
                </div>
              </div>
            </PaperCard>
          </div>
        </div>

        <AnimatePresence>
          {recruiterMode ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 rounded-[1.4rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">Recruiter mode</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">A concise hiring summary</h3>
                </div>
                <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Portfolio-fit view</span>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-[1.15rem] border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">This profile shows a builder who can move from interface design to implementation, collaborate on real product workflows, and turn ideas into working digital products with measurable structure.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {portfolioProjects.map((project) => (
                      <span key={project.title} className="rounded-full border border-[var(--border-color)] px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">{project.title}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.15rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Why this profile stands out</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2"><ChevronRight className="mt-1 h-4 w-4 text-[var(--accent)]" /> Strong mix of frontend craft and product-minded execution.</li>
                    <li className="flex items-start gap-2"><ChevronRight className="mt-1 h-4 w-4 text-[var(--accent)]" /> Real-world project experience with clear user and workflow focus.</li>
                    <li className="flex items-start gap-2"><ChevronRight className="mt-1 h-4 w-4 text-[var(--accent)]" /> Good foundation for roles that value modern web delivery and thoughtful implementation.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

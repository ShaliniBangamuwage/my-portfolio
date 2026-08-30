import React from 'react';
import { ExternalLink, Calendar, Clock } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import './Expertise.css';

const blogs = [
  {
    id: 1,
    slug: 'context-engineering',
    title: 'Context Engineering: The Skill That Actually Matters When Working With AI',
    excerpt: 'If you\'ve spent any time trying to get better results out of an AI assistant, you\'ve probably read advice about "prompt engineering" - magic phrases, role-play framing...',
    date: 'Aug 25, 2026',
    readTime: '6 min read',
    url: 'https://shalinidev.hashnode.dev/context-engineering-the-skill-that-actually-matters-when-working-with-ai',
    category: 'AI Engineering',
    image: '/blog/1.jpg'
  },
  {
    id: 2,
    slug: 'shipping-ai-agents',
    title: 'Shipping AI Agents You Can Actually Trust',
    excerpt: 'There are many ways things go wrong when shipping AI agents. They can fail silently instead of crashing, get misled by content they were never meant to treat as instructions...',
    date: 'Jul 28, 2026',
    readTime: '3 min read',
    url: 'https://shalinidev.hashnode.dev/shipping-ai-agents-you-can-actually-trust',
    category: 'AI Safety',
    image: '/blog/2.png'
  },
  {
    id: 3,
    slug: 'ai-agents-memory',
    title: 'What AI Agents Remember - and Why That\'s a Risk',
    excerpt: 'Everything covered so far lives and dies within a single conversation. Close the session, and the risk resets. But agents that carry memory across sessions or hand work off to other agents don\'t...',
    date: 'Jul 23, 2026',
    readTime: '5 min read',
    url: 'https://shalinidev.hashnode.dev/what-ai-agents-remember-and-why-that-s-a-risk',
    category: 'AI Security',
    image: '/blog/3.png'
  },
  {
    id: 4,
    slug: 'ai-agents-misuse-tools',
    title: 'When AI Agents Misuse the Tools You Give Them',
    excerpt: 'Here\'s something that surprises a lot of teams the first time they see it: an agent can misuse its tools with no misleading content anywhere in sight, no unusual phrasing...',
    date: 'Jul 11, 2026',
    readTime: '6 min read',
    url: 'https://shalinidev.hashnode.dev/when-ai-agents-misuse-the-tools-you-give-them',
    category: 'AI Engineering',
    image: '/blog/4.png'
  },
  {
    id: 5,
    slug: 'malicious-content-ai',
    title: 'How Malicious Content Hijacks AI Agents',
    excerpt: 'If you\'ve read anything about AI security in the last two years, you\'ve read a sentence like "prompt injection is when someone manipulates the model\'s input to override its instructions..."',
    date: 'Jul 9, 2026',
    readTime: '6 min read',
    url: 'https://shalinidev.hashnode.dev/how-malicious-content-hijacks-ai-agents',
    category: 'AI Security',
    image: '/blog/5.png'
  },
  {
    id: 6,
    slug: 'ai-agents-break',
    title: 'Why AI Agents Break Differently Than Traditional Software',
    excerpt: 'AI agents have fundamentally different failure modes than traditional software. Understanding these differences is crucial for building reliable AI systems...',
    date: 'Jul 8, 2026',
    readTime: '6 min read',
    url: 'https://shalinidev.hashnode.dev/why-ai-agents-break-differently-than-traditional-software',
    category: 'AI Engineering',
    image: '/blog/6.png'
  }
];

const Blog = () => {
  const reduceMotion = useReducedMotion();

  const motionVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="blog" className="expertise-projects px-4 py-12">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-8 text-center">
          <p className="issue-number">TECHNICAL WRITING</p>
          <h2 className="section-header">Blog — The Curious Engineer</h2>
          <p className="editor-note">Articles exploring AI engineering, safety, and building reliable systems. Read more on Hashnode.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {blogs.map((article, i) => (
            <motion.article 
              key={article.id} 
              initial="hidden" 
              animate="visible" 
              variants={motionVariants} 
              transition={{ duration: 0.45, delay: i * 0.04 }} 
              onClick={() => window.open(article.url, '_blank')}
              className="group cursor-pointer overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:shadow-lg hover:border-[var(--accent)] transition-all duration-300 h-full flex flex-col"
            >
              {/* Blog Cover Image */}
              <div className="relative h-48 bg-[var(--bg-primary)] overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 mb-3 line-clamp-3">
                  {article.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                  <span className="text-sm text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">Read Article</span>
                  <ExternalLink className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://shalinidev.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Visit The Curious Engineer Blog
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;

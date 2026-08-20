import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    year: '2023 — present',
    type: 'education',
    title: 'University of Moratuwa',
    company: 'BSc (Hons) in Information Technology',
    description:
      'Studying Information Technology with a focus on software engineering, systems design, and product thinking.',
    tags: ['Software Engineering', 'Systems Design', 'Product Thinking'],
    icon: GraduationCap,
  },
  {
    year: '2025 — present',
    type: 'volunteer',
    title: 'Director of Membership Development and Coordination',
    company: 'IEEE Women in Engineering',
    description:
      'Contributing to membership growth, chapter coordination, and volunteer engagement while supporting IEEE women-led technical events and community programs.',
    tags: ['Leadership', 'Membership Growth', 'Volunteer Coordination'],
    icon: Briefcase,
  },
  {
    year: '2025 — present',
    type: 'volunteer',
    title: 'IEEE RAS member',
    company: 'Robotics & Automation Society',
    description:
      'Contributing to robotics and community-driven initiatives while growing through technical collaboration.',
    tags: ['Robotics', 'Community', 'Collaboration'],
    icon: Code2,
  },
  {
    year: '2024',
    type: 'volunteer',
    title: 'Event volunteer',
    company: 'IEEE Moratuwa',
    description:
      'Supported IEEE gatherings including Open Week, MERCON, Robotic Day, and Hackelite.',
    tags: ['Leadership', 'Event Management', 'Community'],
    icon: Briefcase,
  },
  {
    year: '2024',
    type: 'experience',
    title: 'Industry exposure',
    company: 'LSEG • Zone24x7 • WSO2',
    description:
      'Visited LSEG, Zone24x7, and WSO2 to understand fintech, AI systems, and enterprise software.',
    tags: ['FinTech', 'AI Systems', 'Enterprise Software'],
    icon: Briefcase,
  },
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)]"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">

            <span className="text-[var(--accent)] font-mono text-sm">
              {'// 03'}
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Experience & Journey
            </h2>

          </div>

          <p className="text-[var(--text-secondary)] max-w-2xl">
            A timeline of my academic journey, technical exposure, leadership,
            professional growth, and contributions to engineering communities.
          </p>
        </motion.div>

        {/* Timeline */}

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >

          {/* Timeline Line */}

          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] to-[var(--border-color)]" />

          {/* Timeline Items */}

          <div className="space-y-12">

            {experienceData.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-24"
                >

                  {/* Timeline Dot */}

                  <div className="absolute -left-14 top-1 w-8 h-8 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center">

                    <Icon className="w-4 h-4 text-[var(--accent)]" />

                  </div>

                  {/* Card Content */}

                  <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10">

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">

                      <div>

                        <p className="text-[var(--text-muted)] font-mono text-sm">
                          {item.year}
                        </p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-1">
                          {item.title}
                        </h3>

                        <p className="text-[var(--accent)] font-mono text-sm">
                          {item.company}
                        </p>

                      </div>

                    </div>

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}

                    <div className="flex flex-wrap gap-2">

                      {item.tags.map((tag) => (

                        <span
                          key={tag}
                          className="inline-block px-3 py-1 text-xs font-mono bg-[var(--accent)]/10 text-[var(--accent)] rounded border border-[var(--accent)]/30 hover:border-[var(--accent)]/60 transition"
                        >
                          {tag}
                        </span>

                      ))}

                    </div>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
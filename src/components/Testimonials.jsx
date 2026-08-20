import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Users, Code2 } from 'lucide-react';

const testimonials = [
  {
    quote: "Shalini's attention to detail and problem-solving approach in her UI/UX design projects is exceptional. Her designs are not just beautiful but highly functional.",
    author: 'Prof. Kasun Vithanage',
    role: 'Academic Mentor',
    icon: GraduationCap,
  },
  {
    quote: "Working with Shalini on the IEEE events was seamless. Her organizational skills and dedication to creating memorable experiences for participants stood out.",
    author: 'IEEE Moratuwa Team',
    role: 'Event Coordinator',
    icon: Users,
  },
  {
    quote: "Her full-stack development capabilities and commitment to clean code practices make her a valuable team member. She consistently delivers quality work on schedule.",
    author: 'Senior Developer',
    role: 'Project Lead',
    icon: Code2,
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[var(--accent)] font-mono text-sm">{'// 04'}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Testimonials
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            What colleagues and mentors say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[var(--accent)]"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--accent)]">
                  <testimonial.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-[var(--text-primary)] text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-[var(--text-muted)] text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

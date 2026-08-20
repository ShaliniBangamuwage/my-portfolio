import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PaperCard from './PaperCard';

const contactMethods = [
  { icon: Mail, title: 'Email', value: 'madukadilhari63@gmail.com', link: 'mailto:madukadilhari63@gmail.com' },
  { icon: FaLinkedin, title: 'LinkedIn', value: 'Connect with me', link: 'https://www.linkedin.com/in/bangamuwage-shalini-madhuka-dilhari-b10698305/' },
  { icon: FaGithub, title: 'GitHub', value: 'View my work', link: 'https://github.com/ShaliniMadhuka' },
  { icon: Phone, title: 'Phone', value: '0760273368', link: 'tel:0760273368' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-transparent px-4 py-16 text-[var(--text-primary)] sm:px-6 lg:px-8 lg:py-20" id="contact">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="issue-number">Let’s connect</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-4xl">Have an idea, opportunity, or project worth building? Let’s talk.</h2>
          <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">I am open to internships, collaborative projects, software-development opportunities, and conversations about technology, product design, and innovation.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <PaperCard className="space-y-3 p-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a key={method.title} href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noreferrer' : undefined} className="group flex items-center gap-4 rounded-[1rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-muted)]">{method.title}</p>
                    <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">{method.value}</p>
                  </div>
                  <span className="text-xl text-[var(--text-muted)] transition group-hover:text-[var(--text-primary)]">→</span>
                </a>
              );
            })}
          </PaperCard>

          <PaperCard className="p-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-[var(--text-secondary)]">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.35em]">Name</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="w-full rounded-[0.9rem] border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]" />
                </label>
                <label className="block text-sm text-[var(--text-secondary)]">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.35em]">Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="w-full rounded-[0.9rem] border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]" />
                </label>
              </div>

              <label className="block text-sm text-[var(--text-secondary)]">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.35em]">Subject</span>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project collaboration" required className="w-full rounded-[0.9rem] border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]" />
              </label>

              <label className="block text-sm text-[var(--text-secondary)]">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.35em]">Message</span>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your idea..." rows="5" required className="w-full rounded-[0.9rem] border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]" />
              </label>

              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--bg-primary)] transition hover:bg-[var(--accent-dark)]">Send message</button>
            </form>
          </PaperCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;

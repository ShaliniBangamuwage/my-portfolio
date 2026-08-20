import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PaperCard from './PaperCard';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'shalini.bangamuwage@gmail.com',
    link: 'mailto:shalini.bangamuwage@gmail.com',
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    value: 'Connect with me',
    link: 'https://www.linkedin.com/in/shalini-bangamuwage/',
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    value: 'View my projects',
    link: 'https://github.com/ShaliniBangamuwage',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '0760273368',
    link: 'tel:0760273368',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] px-4 py-20 sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4 text-center">
          <p className="issue-number">COMMUNICATION CHANNELS</p>
          <h2 className="section-header">Contact Records</h2>
          <p className="editor-note">Archived contact entries and a typewritten message form for requests, collaboration, and verification.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <PaperCard className="space-y-4 p-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-4 transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-secondary)]">{method.title}</p>
                    <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">{method.value}</p>
                  </div>
                  <span className="text-xl text-[var(--text-secondary)] transition group-hover:text-[var(--text-primary)]">→</span>
                </a>
              );
            })}
          </PaperCard>

          <PaperCard className="p-6">
            <div className="space-y-5">
                <div>
                  <p className="issue-number">ARCHIVE NOTE</p>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Submit a Request</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">Fill out the record below to send a message through the archive channel.</p>
                </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-[var(--text-secondary)]">
                    <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.35em]">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus-ring)]"
                    />
                  </label>
                  <label className="block text-sm text-[var(--text-secondary)]">
                    <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.35em]">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus-ring)]"
                    />
                  </label>
                </div>

                <label className="block text-sm text-[var(--text-secondary)]">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.35em]">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    required
                    className="w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus-ring)]"
                  />
                </label>

                <label className="block text-sm text-[var(--text-secondary)]">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.35em]">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                    className="w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus-ring)]"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-3 text-sm uppercase tracking-[0.35em] text-[var(--text-primary)] transition hover:bg-[var(--border-strong)] hover:text-[var(--text-inverse)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </PaperCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;

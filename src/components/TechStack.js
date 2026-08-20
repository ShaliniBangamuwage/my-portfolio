import React from 'react';
import { 
  SiJavascript, SiPhp, SiReact, SiNodedotjs, 
  SiHtml5, SiGit, SiGithub 
} from 'react-icons/si';

const techStack = [
  { name: 'Java', label: 'J', type: 'text' },
  { name: 'C', label: 'C', type: 'text' },
  { name: 'C++', label: 'C++', type: 'text' },
  { name: 'JavaScript', icon: SiJavascript, type: 'icon' },
  { name: 'PHP', icon: SiPhp, type: 'icon' },
  { name: 'React', icon: SiReact, type: 'icon' },
  { name: 'Node.js', icon: SiNodedotjs, type: 'icon' },
  { name: 'HTML5', icon: SiHtml5, type: 'icon' },
  { name: 'CSS3', label: 'CSS', type: 'text' },
  { name: 'Git', icon: SiGit, type: 'icon' },
  { name: 'GitHub', icon: SiGithub, type: 'icon' },
  { name: 'VS Code', label: 'VS', type: 'text' },
];

// Continuous horizontal scroll animation
const scrollStyles = `
  @keyframes carouselScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  .carousel-track {
    display: flex;
    animation: carouselScroll 30s linear infinite;
    gap: 1.5rem;
    padding: 1rem 0;
  }
  
  .carousel-track:hover {
    animation-play-state: paused;
  }
  
  .carousel-item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .carousel-item:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  }
  
  .carousel-container {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
`;

const TechStack = () => {
  // Duplicate array for seamless looping
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <>
      <style>{scrollStyles}</style>
      <section className="relative bg-transparent px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Tech Stack</p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">Technologies & Tools</h3>
          </div>

          <div className="carousel-container relative">
                    <div className="carousel-track">
                      {duplicatedStack.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={`${tech.name}-${index}`}
                            className="carousel-item h-16 w-16 sm:h-20 sm:w-20"
                            style={{ 
                              backgroundColor: 'var(--surface)',
                              color: 'var(--text-primary)',
                              border: '1px solid var(--border-color)'
                            }}
                            title={tech.name}
                          >
                            {tech.type === 'icon' && Icon ? (
                              <Icon size={40} className="sm:scale-125" />
                            ) : (
                              <span className="text-2xl font-bold sm:text-3xl">{tech.label}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs tracking-[0.2em] text-[var(--text-muted)]">
              Hover to pause • Continuously updated
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;

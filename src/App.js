import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import IDEHero from './components/IDEHero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import NetworkFlowBackground from './components/NetworkFlowBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App relative min-h-screen overflow-x-hidden bg-[var(--bg-primary)]">
      <NetworkFlowBackground />
      <div className="relative z-10">
        <Navbar />
        <IDEHero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
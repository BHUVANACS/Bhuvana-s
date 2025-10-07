import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import AnimatedPage from './components/AnimatedPage';

export type Page = 'Home' | 'About' | 'Experience' | 'Skills' | 'Projects' | 'Education' | 'Certifications';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');

  useEffect(() => {
    const cursorGlow = document.getElementById('cursor-glow');
    if (!cursorGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Hero />;
      case 'About':
        return <About />;
      case 'Experience':
        return <Experience />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Education':
        return <Education />;
      case 'Certifications':
        return <Certifications />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen font-sans leading-relaxed relative z-10">
      <ParticleBackground />
      <div className="relative z-20">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-24">
            <AnimatedPage key={activePage}>
              {renderPage()}
            </AnimatedPage>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
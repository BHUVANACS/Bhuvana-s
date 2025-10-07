import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const roles = ["Software Trainer", "UI/UX Enthusiast", "Web Developer"];

const GitHubIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRoleIndex];
      if (isDeleting) {
        setDisplayedRole(fullRole.substring(0, displayedRole.length - 1));
      } else {
        setDisplayedRole(fullRole.substring(0, displayedRole.length + 1));
      }

      if (!isDeleting && displayedRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(typingTimeout);
  }, [displayedRole, isDeleting, currentRoleIndex]);


  return (
    <section className="flex flex-col justify-center items-center text-center py-20 md:py-32 min-h-[calc(100vh-128px)]">
       <AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <img
            src="https://picsum.photos/seed/bhuvana-k/300/300"
            alt="Bhuvana K"
            className="w-48 h-48 rounded-full border-4 border-teal-400 shadow-lg shadow-teal-400/20"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Bhuvana K
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-teal-400 mt-2 relative typing-caret h-10">
              {displayedRole}
            </h2>
            <div className="mt-6 space-y-2 text-slate-400">
               <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 004.28 4.28l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>8190913614</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>bhuvana232k21@gmail.com</span>
              </div>
            </div>
             <div className="mt-8 flex items-center gap-6">
              <a href="#" aria-label="GitHub Profile" className="text-slate-400 hover:text-teal-400 transition-colors">
                <GitHubIcon />
              </a>
              <a href="#" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-teal-400 transition-colors">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
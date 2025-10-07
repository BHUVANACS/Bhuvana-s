import React from 'react';
import AnimatedSection from './AnimatedSection';

const PortfolioIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/70 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const MarketingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/70 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const projectsData = [
  {
    title: "Portfolio Website",
    description: "Designed a personal portfolio using HTML, CSS, and JavaScript to showcase skills and projects.",
    tags: ["HTML", "CSS", "JavaScript", "UI Design"],
    gradient: "from-purple-600/70 to-teal-600/70",
    icon: <PortfolioIcon />
  },
  {
    title: "Digital Marketing Campaign",
    description: "Created and managed a sample SEO & social media campaign for a local business to improve online presence.",
    tags: ["SEO", "Social Media", "Content Strategy"],
    gradient: "from-sky-600/70 to-indigo-600/70",
    icon: <MarketingIcon />
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-2 rounded"></div>
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="flip-card h-[450px]">
                <div className="flip-card-inner rounded-lg shadow-lg">
                  {/* Front of Card */}
                  <div className="flip-card-front bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col justify-between p-6 items-center text-center">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center p-4 shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tags.map(tag => (
                          <span key={tag} className="bg-teal-400/10 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                     <p className="text-sm text-slate-400 italic">Hover to see details</p>
                  </div>
                  {/* Back of Card */}
                  <div className="flip-card-back bg-slate-800/90 backdrop-blur-sm rounded-lg overflow-hidden p-6 flex flex-col justify-center text-center">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                      <div className="mt-6 flex items-center justify-center gap-4">
                          <a href="#" className="inline-block bg-teal-400/10 text-teal-300 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-teal-400/20 transition-colors">View Code</a>
                          <a href="#" className="inline-block bg-slate-700 text-slate-300 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">Live Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;
import React from 'react';
import AnimatedSection from './AnimatedSection';

const experienceData = {
  company: "Hitakey Tech Solution Pvt Ltd, Trichy",
  role: "Software Trainer",
  duration: "OCT 2024 - OCT 2025",
  responsibilities: [
    "Trained students and professionals in programming languages and web technologies.",
    "Designed and delivered course materials, projects, and coding exercises.",
    "Guided learners in real-time applications and career-oriented projects.",
    "Helped develop training modules for both academic and corporate clients.",
  ],
};

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-300" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v7a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2zm-1 3V4a1 1 0 112 0v1h-2z" clipRule="evenodd" />
    </svg>
)

const Experience: React.FC = () => {
  return (
    <section className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Experience
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-2 rounded"></div>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-teal-400/30 pl-10 py-6">
            {/* Timeline Dot */}
            <div className="absolute -left-5 top-6 w-10 h-10 bg-slate-800 border-2 border-teal-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-teal-400/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                    <BriefcaseIcon />
                </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-teal-400/20 hover:-translate-y-1 border border-slate-700/50">
              <p className="text-sm text-teal-400 font-semibold">{experienceData.duration}</p>
              <h3 className="text-2xl font-bold text-white mt-1">{experienceData.role}</h3>
              <p className="text-md text-slate-400 mb-4">{experienceData.company}</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                {experienceData.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Experience;
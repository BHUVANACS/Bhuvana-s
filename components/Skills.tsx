import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve the 'Cannot find namespace JSX' error.
  icon: React.ReactElement;
  skills: Skill[];
}

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const DesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const MarketingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
);

const ToolsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const skillsData: SkillCategory[] = [
  {
    title: "Coding & Development",
    icon: <CodeIcon />,
    skills: [
      { name: "HTML" }, { name: "CSS" }, { name: "JavaScript (basic)" },
      { name: "Python (basic)" }, { name: "Java (OOP)" }, { name: "C & C++" },
      { name: "MySQL (basic)" }
    ]
  },
  {
    title: "UI/UX Designing",
    icon: <DesignIcon />,
    skills: [
      { name: "Figma" }, { name: "Adobe XD" }, { name: "Wireframing" },
      { name: "Responsive Web Design" }, { name: "Visual Design" }
    ]
  },
  {
    title: "Digital Marketing",
    icon: <MarketingIcon />,
    skills: [
      { name: "SEO" }, { name: "Social Media Marketing" }, { name: "Google Ads (basic)" },
      { name: "Content Marketing" }
    ]
  },
  {
    title: "Other Tools",
    icon: <ToolsIcon />,
    skills: [
      { name: "Canva" }, { name: "Photoshop (basics)" }, { name: "GitHub" },
      { name: "MS Office" }, { name: "Excel" }, { name: "Word" }
    ]
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Technical Skills
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-2 rounded"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillsData.map((category, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 h-full shadow-lg transition-all duration-300 hover:shadow-teal-400/20 hover:-translate-y-2 flex flex-col">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white ml-4">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills;
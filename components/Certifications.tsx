import React from 'react';
import AnimatedSection from './AnimatedSection';

const certificationsData = [
  "4 weeks of virtual internship on open weaner – AI Engineering",
  "Certification of participated in Learnathon - 2023",
  "Certification of participated in youthTalkLeadershipSummit-2023",
  "Certification of won on Digi Bites in ourcollege-2023",
  "Certification of completed in Google data analytics by Coursera -2022",
  "Certification of completed in Beginners level Microsoft by Naan Mudalvan- 2022",
];

const Certifications: React.FC = () => {
  return (
    <section className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Internship & Certifications
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-2 rounded"></div>
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <ul className="space-y-4">
            {certificationsData.map((cert, index) => (
               <AnimatedSection key={index} delay={index * 50}>
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-slate-300 text-lg">{cert}</span>
                </li>
               </AnimatedSection>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Certifications;
import React from 'react';
import AnimatedSection from './AnimatedSection';

const educationData = [
  {
    degree: "B.Sc (Computer Science)",
    institution: "Shrimati Indira Gandhi College (Trichy)",
    university: "Bharathidasan University",
    duration: "2021-2024",
    score: "80%",
  },
  {
    degree: "HSC (Higher Secondary)",
    institution: "Government Higher Sec School, Amoor",
    university: "State Board",
    duration: "2020-2021",
    score: "83%",
  },
  {
    degree: "SSLC",
    institution: "Government Higher Sec School, Amoor",
    university: "State Board",
    duration: "2018-2019",
    score: "77%",
  },
];

const Education: React.FC = () => {
  return (
    <section className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Academic Details
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-2 rounded"></div>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
             <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-teal-400/15">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                    <h3 className="text-xl font-bold text-teal-400">{edu.degree}</h3>
                    <p className="text-slate-300 font-medium">{edu.institution}</p>
                    <p className="text-sm text-slate-400">{edu.university}</p>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-lg font-semibold text-white">{edu.score}</p>
                    <p className="text-sm text-slate-500">{edu.duration}</p>
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

export default Education;
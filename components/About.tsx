import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  const strengths = ["Self Motivated", "Hardworking", "Disciplined Person"];

  return (
    <section className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About Me
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-2 rounded"></div>
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-12 transition-all duration-300 hover:shadow-teal-400/20 hover:scale-[1.02]">
          <p className="text-lg md:text-xl text-center text-slate-300 mb-8">
            A passionate and dedicated computer science graduate with a knack for creating beautiful and functional user experiences. I'm excited about web technologies and always eager to learn and grow in a collaborative environment.
          </p>
          <p className="text-lg md:text-xl text-center text-slate-400 mb-8 italic border-t border-slate-700 pt-8">
            "Aiming for a role where I can contribute my skills and dedication to the success of the team, while continuously learning and adapting to new challenges."
          </p>
          
          <h3 className="text-2xl font-semibold text-center text-white mb-6">Core Strengths</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-teal-400/10 text-teal-300 py-2 px-5 rounded-full text-md font-medium flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {strength}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
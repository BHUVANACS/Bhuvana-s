
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-800 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="italic text-slate-400 mb-6">
            "I certify that the information in this resume is accurate and truthful to the best of my knowledge."
          </p>
          <p className="text-slate-500">
            © {new Date().getFullYear()} Bhuvana K. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-600 mt-2">
            Portfolio created with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

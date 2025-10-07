
import React, { useState } from 'react';
import type { Page } from '../App';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const navLinks: { name: Page }[] = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Experience' },
  { name: 'Skills' },
  { name: 'Projects' },
  { name: 'Education' },
  { name: 'Certifications' },
];

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (page: Page) => {
    setActivePage(page);
    setIsOpen(false); // Close menu on link click
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <nav className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleLinkClick('Home')}
              className="text-2xl font-bold text-white hover:text-teal-400 transition-colors"
              aria-label="Go to homepage"
            >
              Bhuvana K.
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.name)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activePage === link.name
                      ? 'bg-teal-400/10 text-teal-300'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                  aria-current={activePage === link.name ? 'page' : undefined}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.name)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activePage === link.name
                  ? 'bg-teal-400/10 text-teal-300'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
               aria-current={activePage === link.name ? 'page' : undefined}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
const Footer = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-[#0f172a] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 relative z-20">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 flex flex-col items-center">
        
        {/* Brand / Name */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 cursor-pointer" onClick={() => setActiveSection('home')}>
          Raja <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Kumar</span>
        </h2>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <button onClick={() => setActiveSection('about')} className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">About</button>
          <button onClick={() => setActiveSection('skills')} className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Skills</button>
          <button onClick={() => setActiveSection('projects')} className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Projects</button>
          <button onClick={() => setActiveSection('contact')} className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Contact</button>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-500">
          <p>© {currentYear} Raja Kumar. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <span className="text-blue-500 font-semibold">React</span> & <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
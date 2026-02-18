import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  // 1. Initialize theme from local storage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  // 2. Toggle theme logic
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Links mapped to the 'case' names in your App.jsx
  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'EDUCATION', id: 'education' },
    { name: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-lg shadow-sm z-50 transition-colors duration-500 border-b border-transparent dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo - Clicking this takes you Home */}
        <div 
          onClick={() => setActiveSection('home')}
          className="text-xl font-bold text-gray-800 dark:text-white transition-colors cursor-pointer"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Raja</span> Kumar
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveSection(item.id)} 
              className={`transition-all duration-300 relative py-1 ${
                activeSection === item.id 
                ? "text-blue-600 dark:text-cyan-400" 
                : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400"
              }`}
            >
              {item.name}
              {/* Active Indicator Line */}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Right Side Elements */}
        <div className="flex items-center space-x-4">
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-800 dark:text-yellow-400 shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <a 
            href="/RajaKumarCSE.pdf" 
            download="Raja_Kumar_Resume.pdf"
            className="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Download Resume
          </a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 focus:outline-none transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
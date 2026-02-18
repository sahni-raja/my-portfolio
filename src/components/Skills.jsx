import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  // Added Tailwind CSS, Postman, and Cloudinary as requested
  const skillCategories = {
    Frontend: [
      { name: 'React.js', level: 'Advanced', icon: '⚛️' },
      { name: 'JavaScript', level: 'Advanced', icon: '🟨' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: '🌊' },
      { name: 'HTML/CSS', level: 'Advanced', icon: '🎨' },
      { name: 'Material UI', level: 'Intermediate', icon: '💅' },
    ],
    Backend: [
      { name: 'Node.js', level: 'Intermediate', icon: '🟢' },
      { name: 'Express.js', level: 'Intermediate', icon: '🚂' },
      { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
      { name: 'Java', level: 'Advanced', icon: '☕' },
      { name: 'REST APIs', level: 'Advanced', icon: '🔌' },
      { name: 'SQL', level: 'Intermediate', icon: '🗄️' },
    ],
    Tools: [
      { name: 'Git & GitHub', level: 'Advanced', icon: '🐙' },
      { name: 'Postman', level: 'Advanced', icon: '🚀' },
      { name: 'Cloudinary', level: 'Intermediate', icon: '☁️' },
      { name: 'VS Code', level: 'Advanced', icon: '💻' },
      { name: 'Vercel / Render', level: 'Intermediate', icon: '🌐' },
      { name: 'IntelliJ IDEA', level: 'Intermediate', icon: '🛠️' },
    ]
  };

  return (
    // Removed static background, added overflow-hidden for the background orbs
    <section id="skills" className="relative py-24 px-6 md:px-20 overflow-hidden">
      
      {/* Background Glowing Orbs for Consistency with About section */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">My primary tools for building robust, scalable applications.</p>
        </div>

        {/* Glassmorphism Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-md border ${
                activeTab === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-700/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards Container - Glassmorphism style */}
        <div className="bg-white/40 dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-xl border border-white/20 dark:border-gray-700/50 min-h-[350px]">
          
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 flex items-center gap-3">
            <span className="text-blue-500">
              {activeTab === 'Frontend' ? '🎨' : activeTab === 'Backend' ? '⚙️' : '🛠️'}
            </span>
            {activeTab} Arsenal
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillCategories[activeTab].map((skill, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-gray-900 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-transparent dark:border-gray-800">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-center">{skill.name}</h4>
                <p className="text-xs text-blue-600 dark:text-cyan-400 mt-2 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800/50">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
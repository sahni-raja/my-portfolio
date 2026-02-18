import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Heritage Institute of Technology',
      location: 'Kolkata, West Bengal',
      board: 'MAKAUT',
      duration: 'Sept 2023 - June 2026 (Expected)',
      score: 'GPA: 7.55 / 10',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'Government Polytechnic',
      location: 'Muzaffarpur, Bihar',
      board: 'SBTE, Bihar',
      duration: 'August 2019 - August 2022',
      score: 'CGPA: 8.57 / 10',
      icon: '📜',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      degree: 'Matriculation (Class X)',
      institution: 'RKPN High School Bochahan',
      location: 'Muzaffarpur, Bihar',
      board: 'BSEB',
      duration: 'April 2019',
      score: 'Score: 87.20%',
      icon: '🏫',
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  return (
    <section id="education" className="relative py-24 px-6 md:px-20 overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Background</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A consistent track record of academic excellence and dedication to Computer Science.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu) => (
            <div 
              key={edu.id} 
              className="group relative bg-white/40 dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/50 p-8 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              
              {/* Glowing Top Border Effect */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${edu.color} rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity`}></div>

              {/* Icon & Duration */}
              <div className="flex justify-between items-start mb-6 mt-2">
                <div className={`w-14 h-14 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {edu.icon}
                </div>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
                  {edu.duration}
                </span>
              </div>

              {/* Degree & Institution */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                {edu.degree}
              </h3>
              <h4 className="text-md font-semibold text-gray-600 dark:text-gray-300 mb-1">
                {edu.institution}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-1">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {edu.location}
              </p>

              {/* Board & Score (Pushed to bottom) */}
              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700/50 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Board / University</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{edu.board}</span>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 font-bold px-3 py-1.5 rounded-lg border border-blue-100 dark:border-blue-800/50 shadow-sm">
                    {edu.score}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
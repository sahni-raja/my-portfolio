import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Web Development Intern - MERN Stack',
      company: 'Aagaaz Training Centre Pvt. Ltd',
      location: 'Patna, Bihar',
      duration: 'June 2025 - July 2025',
      description: [
        'Developed and enhanced internal dashboards (CDL, Collection, and Credit Dashboards) using React.js, Node.js, Express.js, and MongoDB.',
        'Integrated feedback and comment features with real-time date and user tracking across multiple systems.',
        'Implemented responsive UI components using Material UI, significantly improving page styling and user experience.',
        'Contributed to an end-to-end live project, ensuring seamless data flow and high-level scalability.'
      ],
      icon: '💻',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      role: 'Technical Support Associate (Epson)',
      company: 'Skylark Computers Maintenance Services',
      location: 'Darbhanga, Bihar',
      duration: 'September 2022 - September 2023',
      description: [
        'Analyzed and diagnosed technical issues in EcoTank and Dot Matrix printers, providing highly effective service solutions.',
        'Assisted in complex product servicing processes for projectors and billing machines to minimize customer downtime.',
        'Evaluated new product designs to ensure hardware reliability, user satisfaction, and quality assurance.',
        'Supported cross-functional teams with operational and administrative tasks to maintain a smooth daily workflow.'
      ],
      icon: '🔧',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-6 md:px-20 overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Experience</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">My history of building software and solving technical challenges.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-200 dark:border-gray-700 ml-4 md:ml-6 space-y-12">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Dot / Icon */}
              <div className={`absolute -left-[1.35rem] top-0 w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300 border-4 border-slate-50 dark:border-[#0f172a]`}>
                {exp.icon}
              </div>

              {/* Experience Card */}
              <div className="bg-white/40 dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 dark:border-gray-700/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all duration-300">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mt-1">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm font-medium">
                    <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800/50 mb-1 w-fit">
                      {exp.duration}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mt-6">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-500 dark:text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'RkBlog',
      category: 'Full-Stack MERN',
      description: 'A robust full-stack blogging platform where users can securely create, edit, view, and delete posts with rich media integration.',
      features: [
        'Secure user authentication (JWT & bcrypt)',
        'Seamless image uploads via Cloudinary',
        'Scalable database architecture with MongoDB'
      ],
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/sahni-raja', 
      live: 'https://rk-blog-frontend.vercel.app', 
      liveLabel: 'Live App',
      icon: '📝'
    },
    {
      title: 'ShieldSync',
      category: 'Backend Architecture',
      description: 'A secure backend service designed for robust data synchronization, user protection, and optimized data flow.',
      features: [
        'RESTful API design and implementation',
        'Advanced routing and middleware integration',
        'Secure data handling and endpoint protection'
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Postman'],
      github: 'https://github.com/sahni-raja', 
      live: 'https://shieldsync-backend-3x2p.onrender.com', 
      liveLabel: 'Live API',
      icon: '🛡️'
    },
    {
      title: 'The Chatori Spot',
      category: 'Frontend UI/UX',
      description: 'A fully responsive, multi-page restaurant website designed to simulate a real-world dining experience with interactive UI elements.',
      features: [
        'Interactive image zoom & gallery effects',
        'Functional contact form powered by JavaScript',
        'Responsive layout across all screen sizes'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/sahni-raja',
      live: 'https://the-chatori-spot.netlify.app', 
      liveLabel: 'Live Site',
      icon: '🍔'
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 md:px-20 overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my journey from responsive frontend design to secure backend architecture and full-stack development.
          </p>
        </div>

        {/* Projects Grid - Updated to lg:grid-cols-3 for 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white/40 dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/50 p-8 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              {/* Project Icon & Category */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                  {project.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800/50">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Key Features List */}
              <ul className="space-y-2 mb-8 text-sm text-gray-600 dark:text-gray-300">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 dark:text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 mt-auto pt-6 border-t border-gray-200 dark:border-gray-700/50">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Source Code
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {project.liveLabel}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
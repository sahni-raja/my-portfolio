import React from 'react';

const About = () => {
  return (
    // Removed static bg colors to let the global dark theme shine through, added overflow-hidden for the background orbs
    <section id="about" className="relative py-24 px-6 md:px-20 overflow-hidden">
      
      {/* CREATIVE BACKGROUND BLOBS - These create a glowing, modern atmospheric effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-6xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-12 transition-colors">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content - Upgraded with gradient backgrounds behind the text */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
            <p className="border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/10 py-2 rounded-r-lg">
              I am a Full-Stack Software Engineer specializing in the MERN stack. I build scalable, secure, and production-ready web applications, transforming complex requirements into seamless digital experiences.
            </p>
            <p className="border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/10 py-2 rounded-r-lg">
              During my tenure as a Web Development Intern at Aagaaz Training Centre, I architected and optimized internal business dashboards. By integrating React.js, Node.js, and MongoDB, I streamlined data flow and significantly improved UI responsiveness.
            </p>
            <p className="border-l-4 border-blue-400 pl-4 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-800/10 py-2 rounded-r-lg">
              Beyond frameworks, I have a deep understanding of core computer science fundamentals—including Java, DSA, and System Architecture.
            </p>
            
            {/* Floating Tech Highlights - Upgraded to Glassmorphism (backdrop-blur) */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform flex items-center gap-2 text-gray-800 dark:text-gray-200">
                <span>⚡</span> Full-Stack Arch.
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform flex items-center gap-2 text-gray-800 dark:text-gray-200">
                <span>🗄️</span> Database Mgmt
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform flex items-center gap-2 text-gray-800 dark:text-gray-200">
                <span>🔐</span> Auth & Security
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform flex items-center gap-2 text-gray-800 dark:text-gray-200">
                <span>🚀</span> Agile Dev
              </div>
            </div>
          </div>

          {/* DYNAMIC IMAGE CONTAINER */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Animated Glow Behind Image - Expands and brightens on hover! */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Actual Image */}
              <img 
                src="/devimage.png" 
                alt="Raja Kumar" 
                className="relative rounded-2xl shadow-2xl w-full object-cover border-2 border-white/50 dark:border-white/10 group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-500 z-10"
              />
              
              {/* Small floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce z-20">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
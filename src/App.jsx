import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      x: 100, 
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] 
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      x: -100,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Hero setActiveSection={setActiveSection} />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      case 'contact': return <Contact />;
      default: return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-gray-900 dark:text-white transition-colors duration-500 flex flex-col overflow-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow flex flex-col justify-center relative">
        {/* AnimatePresence allows the 'exit' animation to finish before the new one starts */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection} // Essential for triggering animations on change
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
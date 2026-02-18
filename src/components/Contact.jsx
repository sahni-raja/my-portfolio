import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State to handle button text and UI feedback
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Your live Web3Forms access key is now active here!
          access_key: "c9e5ac2f-8c61-44ea-b6fb-9bf717f74c27", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        
        // Reset button after 4 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      } else {
        setStatus('error');
        console.error("Form submission failed", result);
      }
    } catch (error) {
      setStatus('error');
      console.error("Error submitting form", error);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-20 overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have a question, a project opportunity, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white/40 dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/50 p-8 md:p-12 shadow-2xl">
          
          {/* Left Side: Contact Information */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:rajakumar.cse2003@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100 dark:border-blue-800/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                    <p className="text-gray-800 dark:text-gray-200 font-semibold group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">rajakumar.cse2003@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+917557728410" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100 dark:border-blue-800/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone</p>
                    <p className="text-gray-800 dark:text-gray-200 font-semibold group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">+91 7557728410</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-cyan-400 shadow-sm border border-blue-100 dark:border-blue-800/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                    <p className="text-gray-800 dark:text-gray-200 font-semibold">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 lg:mt-0">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">Follow My Work</p>
              <div className="flex gap-4">
                <a href="https://github.com/sahni-raja" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/raja-sahani" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-2/3 bg-white/50 dark:bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none disabled:opacity-50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2 ${
                  status === 'success' ? 'bg-green-500 text-white hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]' :
                  status === 'error' ? 'bg-red-500 text-white hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]' :
                  'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'
                } disabled:hover:translate-y-0 disabled:opacity-80`}
              >
                {status === 'submitting' && <span>Sending...</span>}
                {status === 'success' && <span>Message Sent Successfully! ✓</span>}
                {status === 'error' && <span>Error Sending. Try Again.</span>}
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
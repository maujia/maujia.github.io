import React from 'react';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-stone-100 font-serif">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
          Arjun Mauji
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          3rd Year Mechanical Engineering, Queen's University (2028)
        </p>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 pb-12">
        {/* About Me Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">About Me</h2>
          <div className="space-y-4 mb-8">
            <p className="text-stone-700 leading-relaxed text-lg">
              → Hi, I'm Arjun, an incoming 3rd year engineering student @QueensU studying Mechanical Engineering
            </p>
            <p className="text-stone-700 leading-relaxed text-lg">
              → I'm currently exploring interests in Systems Software and Machine Learning, specific to the medical field
            </p>
            <p className="text-stone-700 leading-relaxed text-lg">
              → For the past 2 weeks I have been working on a low cost proof of concept gait analyzer<br></br>
            </p>
          </div>
        </div>  
          {/*
          Past Experience
          <div className="mb-8">
            <h3 className="text-xl font-bold text-navy-900 mb-4">Experience</h3>
            <ul className="space-y-3">
              <li className="text-stone-700">
                → <span className="font-semibold text-navy-800">Senior Software Developer</span> at Tech Company Name (2022 - Present)
              </li>
              <li className="text-stone-700">
                → <span className="font-semibold text-navy-800">Frontend Developer</span> at Previous Company (2020 - 2022)
              </li>
            </ul>
          </div>
        */}
        {/* Projects Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Projects</h2>
          {/* Project 1 */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-navy-900 mb-3">Hardware Gait Analyzer</h3>
            <ul className="space-y-2">
              <li className="text-stone-700">→ WHAT: Proof of concept low cost wireless gait analyzer. This has 2 sensor modules, one right under the L4 vertebra to track changing hip movement and another on the side of the thigh. This is to measure basic hip flexion and extension.</li>
              <li className="text-stone-700">→ WHY: To explore interests in embedded systems in relation to the medical and biomechanical field</li>
              <li className="text-stone-700">→ HOW: Python, C, Arduino IDE, Onshape CAD</li>
              <li className="text-stone-700">→ Full Project Timeline: <a href = "https://x.com/ArjunMauji" className="text-blue-600 hover:underline"> https://x.com/ArjunMauji</a></li>
            </ul>
            <div className="flex space-x-4 mt-3">
              <p></p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-navy-900 mb-3">Rate My Prof for QueensU Students</h3>
            <ul className="space-y-2">
              <li className="text-stone-700">→ Website allowing Queen's University students the ability to design and create</li>
              <li className="text-stone-700">→ Technologies used: React, Python, D3.js</li>
              <li className="text-stone-700">→ Key challenges overcome and solutions implemented</li>
              <li className="text-stone-700">→ Impact or results achieved</li>
            </ul>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-navy-800 hover:text-navy-600 transition-colors">
                View Project →
              </a>
              <a href="#" className="text-navy-800 hover:text-navy-600 transition-colors">
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-stone-600 mb-4">
            Let's connect and create something amazing together
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:22cnr1@queensu.ca"
              className="flex items-center text-navy-800 hover:text-navy-600 transition-colors"
            >
              <Mail size={20} className="mr-2" />
              22cnr1@queensu.ca
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-mauji-b67610215/"
              className="flex items-center text-navy-800 hover:text-navy-600 transition-colors"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/maujia"
              className="flex items-center text-navy-800 hover:text-navy-600 transition-colors"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
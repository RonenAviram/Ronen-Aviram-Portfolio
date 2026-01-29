
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ContactBar from './components/ContactBar';

const App: React.FC = () => {
  const [showExperience, setShowExperience] = useState(false);

  const handleReveal = () => {
    setShowExperience(true);
    // Smooth scroll logic is handled by the ID and standard browser behavior
    // but we force a state change to ensure the component is rendered.
    setTimeout(() => {
      const element = document.getElementById('experience');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Hero onReveal={handleReveal} />
      
      {showExperience && (
        <section id="experience" className="w-full max-w-4xl px-6 py-24 animate-fade-in-up">
          <Experience />
        </section>
      )}

      <div className="flex-grow"></div>
      
      <ContactBar />
    </div>
  );
};

export default App;

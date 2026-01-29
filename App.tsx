import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ContactBar from './components/ContactBar';

const App: React.FC = () => {
  const handleReveal = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center animate-entry">
      {/* Hero Section */}
      <div className="w-full">
        <Hero onReveal={handleReveal} />
      </div>
      
      {/* Experience Section */}
      <section id="experience" className="w-full max-w-4xl px-6 py-24">
        <Experience />
      </section>

      <div className="flex-grow min-h-[10rem]"></div>
      
      <ContactBar />
    </div>
  );
};

export default App;
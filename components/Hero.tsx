
import React from 'react';

interface HeroProps {
  onReveal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReveal }) => {
  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQFTtfsTfw7s3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1733063663559?e=1771459200&v=beta&t=m1Ji5KEUOLn4smFhzLdMsufOaOqCHYYNuC_6Dn-SO0I";

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-24 gap-12 md:gap-20 max-w-7xl mx-auto">
      
      {/* Text Content - Centered for balance */}
      <div className="flex-1 flex flex-col items-center text-center order-2 md:order-1">
        {/* Name - Now centered above the card on all devices */}
        <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-10 tracking-tight leading-tight">
          Ronen <span className="text-cyan-500">Aviram</span>
        </h1>

        {/* Identity Stack */}
        <div className="flex flex-col items-center space-y-8 w-full max-w-md">
          
          {/* Interactive Product Leader Card - Refined typography and centered */}
          <button 
            onClick={onReveal}
            className="glass glow-hover group flex flex-col items-center p-8 rounded-3xl transition-all duration-500 transform hover:-translate-y-2 w-full border-white/5 relative overflow-hidden text-center"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors relative z-10 tracking-tight">
              PRODUCT LEADER
            </h2>
            
            <p className="text-slate-400 text-xs md:text-base mt-2 leading-snug relative z-10 max-w-[280px] md:max-w-none font-medium">
              Building Lean, Human-Centered SaaS Products
            </p>

            {/* Chevron with hover scale effect */}
            <div className="mt-8 animate-bounce text-cyan-500 relative z-10 transition-transform duration-300 group-hover:scale-125">
              <i className="fas fa-chevron-down text-xl"></i>
            </div>
          </button>

          {/* Static Identity Elements - Centered for consistency */}
          <div className="space-y-5 pt-4 w-full">
            <p className="text-slate-400 font-medium tracking-wide flex items-center justify-center gap-4 text-lg">
              <i className="fas fa-heart text-cyan-500/50 text-sm"></i> Family Man
            </p>
            <p className="text-slate-400 font-medium tracking-wide flex items-center justify-center gap-4 text-lg">
              <i className="fas fa-running text-cyan-500/50 text-sm"></i> Long Distance Runner 
              <span className="text-slate-500 text-sm font-normal ml-1 tracking-tight">(5k, 10k, 21.1k, 42.2k)</span>
            </p>
            <div className="max-w-xs md:max-w-none mx-auto">
              <p className="text-slate-400 font-medium tracking-wide leading-relaxed flex items-center justify-center gap-4 text-lg">
                <i className="fas fa-shield-halved text-cyan-500/50 text-sm"></i> 
                Reserve Officer & CNO
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged Profile Image Side */}
      <div className="flex-1 flex justify-center order-1 md:order-2">
        <div className="relative group">
          {/* Animated Background Rings */}
          <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-slate-800/50 border border-white/10 shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]">
            <img 
              src={profileImageUrl} 
              alt="Ronen Aviram" 
              className="w-full h-full rounded-full border-4 border-slate-900 object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

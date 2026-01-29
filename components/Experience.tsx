import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Solo Builder (B2C Product)",
      company: "Personal Venture",
      period: "2025 - Present",
      description: "Building a B2C product focused on solving a real, unmet human-centered problem.",
      highlights: []
    },
    {
      role: "VP Product",
      company: "City-State (NPO)",
      period: "2025 - Present",
      description: "Driving product strategy for a national-scale civic-tech initiative, focused on streamlining complex organizational workflows and public-sector efficiency.",
      highlights: []
    },
    {
      role: "Product Team Lead & AI Champion",
      company: "Applied Materials",
      period: "2020 - 2025",
      description: "Scaled from individual contributor to Team Lead, overseeing strategic product roadmaps and cross-functional engineering teams.",
      highlights: [
        "Drove a 25% adoption increase across the strategic product portfolio.",
        "Pioneered GenAI implementation for internal R&D efficiency, reducing manual overhead by 15%."
      ]
    },
    {
      role: "B.Sc. Mechanical Engineering",
      company: "Tel Aviv University",
      period: "Dean's List",
      description: "Strong analytical foundation with a focus on system engineering, complex problem-solving, and mathematical optimization.",
      highlights: []
    },
    {
      role: "IDF Officer (Captain)",
      company: "Armored Corps",
      period: "Military Service",
      description: "Commanded tactical armored units in high-stakes environments, mastering the art of decisive leadership, rapid problem-solving, and managing complex systems under extreme pressure.",
      highlights: []
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
          Professional Track Record
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full"></div>
        </h2>
      </div>

      <div className="relative border-l-2 border-slate-700 ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[11px] top-1 w-5 h-5 bg-slate-900 border-2 ${exp.period.includes('Present') ? 'border-cyan-500' : 'border-slate-600'} rounded-full group-hover:scale-125 transition-transform duration-300`}>
              {exp.period.includes('Present') && (
                <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-20"></div>
              )}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {exp.role}
              </h3>
              <span className={`text-sm font-mono mt-1 md:mt-0 px-3 py-1 rounded-full inline-block ${exp.period.includes('Present') ? 'text-cyan-500 bg-cyan-500/10' : 'text-slate-400 bg-slate-800'}`}>
                {exp.period}
              </span>
            </div>
            
            <p className="text-slate-200 font-semibold mb-2 flex items-center gap-2">
              {exp.company}
            </p>
            
            <p className="text-slate-300 leading-relaxed max-w-2xl">
              {exp.description}
            </p>

            {exp.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1 text-cyan-500 text-[10px]"><i className="fas fa-circle"></i></span>
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/(\d+%)|(\d+)/g, '<b class="text-white font-bold">$1</b>') }}></span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
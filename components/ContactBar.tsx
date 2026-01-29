import React from 'react';

const ContactBar: React.FC = () => {
  return (
    <footer className="fixed bottom-8 w-full px-6 pointer-events-none z-50">
      <div className="max-w-xs mx-auto glass rounded-full px-6 py-3 flex items-center justify-around shadow-2xl pointer-events-auto border border-white/10">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/ronen-aviram/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-all p-3 hover:scale-125 text-[#0077B5]"
          title="LinkedIn Profile"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>

        {/* Email */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Ronen6213@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all p-3 hover:scale-125 group relative"
          title="Send Email via Gmail"
        >
          <i className="fas fa-envelope text-2xl bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent group-hover:drop-shadow-[0_0_8px_rgba(234,67,53,0.4)]"></i>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/972542569556" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#25D366] transition-all p-3 hover:scale-125"
          title="WhatsApp Message"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default ContactBar;
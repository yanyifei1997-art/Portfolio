
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Animation', href: '#animation' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-300 px-6 lg:px-12 py-4 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
    >
      <div className="w-full flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group interactive">
          <div className="w-8 h-8 border-2 border-[#00e5ff] relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-[#00e5ff]/20 animate-pulse"></div>
            <div className="flex items-center justify-center w-full h-full text-[12px] font-black text-[#00e5ff]">Y</div>
          </div>
          <span className="text-xl font-extrabold tracking-tighter group-hover:text-[#00e5ff] transition-colors">YANIMATE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-[#00e5ff] transition-all group py-2 interactive"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00e5ff] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white interactive" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <motion.div 
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        className="fixed inset-0 top-[64px] bg-[#0a0a0a] z-[4000] flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navLinks.map(link => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold hover:text-[#00e5ff] transition-colors interactive"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

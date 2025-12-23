
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, MapPin, Calendar, User } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ProjectDetail: React.FC<Props> = ({ project, onClose, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = 0;
  }, [project]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[6000] bg-[#0a0a0a] flex flex-col"
    >
      {/* Header */}
      <div className="h-20 px-6 lg:px-12 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#0a0a0a]/90 backdrop-blur-xl">
        <h2 className="text-xs font-black tracking-[0.3em] uppercase text-white/50">{project.category} / {project.title}</h2>
        <button 
          onClick={onClose}
          className="p-3 hover:bg-white/10 rounded-full transition-colors interactive"
        >
          <X size={24} />
        </button>
      </div>

      {/* Content */}
      <div ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12 lg:py-24 flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Waterfall Visuals */}
          <div className="lg:w-3/5 space-y-16">
            {[project.mainImage, ...(project.detailImages || [])].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group relative overflow-hidden bg-[#111] interactive"
              >
                <img 
                  src={img} 
                  alt={`${project.title} visual ${idx}`}
                  className="w-full h-auto img-grayscale block shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]"
                />
              </motion.div>
            ))}
          </div>

          {/* Info Sidebar */}
          <div className="lg:w-2/5 space-y-16 lg:sticky lg:top-24 h-fit">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">{project.title}</h1>
              <div className="w-24 h-1 bg-[#00e5ff]"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 pt-12 border-t border-white/10">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00e5ff] border border-white/5 group-hover:border-[#00e5ff]/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/30 tracking-[0.3em] font-black">Location</p>
                  <p className="text-lg font-bold">{project.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00e5ff] border border-white/5 group-hover:border-[#00e5ff]/50 transition-colors">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/30 tracking-[0.3em] font-black">Year</p>
                  <p className="text-lg font-bold">{project.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00e5ff] border border-white/5 group-hover:border-[#00e5ff]/50 transition-colors">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/30 tracking-[0.3em] font-black">Designer</p>
                  <p className="text-lg font-bold">{project.designer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="h-48 lg:h-64 px-6 lg:px-12 border-t border-white/5 flex items-center justify-between bg-[#0a0a0a]">
          <button 
            onClick={() => onNavigate('prev')}
            className="flex flex-col items-start gap-4 group interactive"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold group-hover:text-[#00e5ff] transition-colors">Previous Project</span>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00e5ff] group-hover:bg-[#00e5ff]/5 transition-all">
                <ArrowLeft size={24} />
              </div>
            </div>
          </button>
          
          <button 
            onClick={() => onNavigate('next')}
            className="flex flex-col items-end gap-4 group interactive"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold group-hover:text-[#00e5ff] transition-colors">Next Project</span>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00e5ff] group-hover:bg-[#00e5ff]/5 transition-all">
                <ArrowRight size={24} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;

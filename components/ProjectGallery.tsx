
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project, Category } from '../types';

interface Props {
  onSelectProject: (p: Project) => void;
}

const ProjectGallery: React.FC<Props> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<Category>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Robust sorting by time: latest projects at the top.
    const sorted = [...PROJECTS].sort((a, b) => {
      const parseDate = (d: string) => {
        const parts = d.split('.').map(Number);
        return parts[0] * 100 + (parts[1] || 0);
      };
      return parseDate(b.time) - parseDate(a.time);
    });

    if (filter === 'All') {
      setFilteredProjects(sorted);
    } else {
      setFilteredProjects(sorted.filter(p => p.category === filter));
    }
  }, [filter]);

  const categories: Category[] = ['All', 'Urban', 'Architecture', 'Landscape', 'Interior'];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group interactive
              ${filter === cat ? 'text-[#00e5ff]' : 'text-white/40 hover:text-white'}`}
          >
            {cat}
            {filter === cat && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 border border-[#00e5ff]/50 -z-10 bg-[#00e5ff]/5"
              />
            )}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00e5ff] group-hover:w-full transition-all"></span>
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: idx * 0.02, duration: 0.6 }}
              className="relative break-inside-avoid group overflow-hidden bg-[#111] interactive"
              onClick={() => onSelectProject(project)}
            >
              <div className="relative overflow-hidden cursor-none">
                <img 
                  src={project.mainImage} 
                  alt={project.title}
                  className="w-full h-auto img-grayscale block transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pointer-events-none">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#00e5ff] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-extrabold mb-1">{project.title}</h3>
                    <p className="text-white/40 text-xs mb-6 uppercase tracking-widest">{project.location} · {project.time}</p>
                    
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#00e5ff] border border-[#00e5ff]/30 px-6 py-3 bg-black/40 backdrop-blur-sm w-fit">
                      <Plus size={14} strokeWidth={3} />
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectGallery;

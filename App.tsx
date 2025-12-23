
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, ArrowLeft, Building2, Home, Video, Mail, MessageSquare, Menu, X, Plus } from 'lucide-react';
import PixelLoader from './components/PixelLoader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import ProjectDetail from './components/ProjectDetail';
import AnimationSection from './components/AnimationSection';
import Services from './components/Services';
import About from './components/About';
import Navbar from './components/Navbar';
import { PROJECTS } from './data';
import { Project } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const openProject = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    if (!activeProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === activeProject.id);
    let nextIndex;
    if (direction === 'prev') {
      nextIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    } else {
      nextIndex = (currentIndex + 1) % PROJECTS.length;
    }
    setActiveProject(PROJECTS[nextIndex]);
  };

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      
      <AnimatePresence>
        {loading && <PixelLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-[#0a0a0a] text-white">
          <Navbar />
          
          <section id="hero">
            <Hero />
          </section>

          <section id="projects" className="py-20 px-6 lg:px-20 bg-[#0c0c0c]">
            <ProjectGallery onSelectProject={openProject} />
          </section>

          <section id="animation" className="py-20 px-6 lg:px-20 bg-[#0a0a0a]">
            <AnimationSection />
          </section>

          <section id="services" className="py-20 px-6 lg:px-20 bg-[#0c0c0c]">
            <Services />
          </section>

          <section id="about" className="py-20 px-6 lg:px-20 bg-[#0a0a0a]">
            <About />
          </section>

          <footer className="py-10 px-6 border-t border-white/5 text-center text-white/30 text-sm">
            <p>© 2025 YANIMATE. All rights reserved. Built with precision and passion.</p>
          </footer>

          <AnimatePresence>
            {activeProject && (
              <ProjectDetail 
                project={activeProject} 
                onClose={closeProject} 
                onNavigate={navigateProject}
              />
            )}
          </AnimatePresence>
        </main>
      )}
    </div>
  );
};

export default App;

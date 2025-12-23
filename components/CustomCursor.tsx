
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      
      // Check if the current target is an interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, img, .interactive');
      setIsPaused(!!isInteractive);
    };

    const onMouseDown = () => setHovering(true);
    const onMouseUp = () => setHovering(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999]"
      animate={{ 
        x: pos.x - 16, 
        y: pos.y - 16,
        scale: hovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
    >
      <div className="relative w-full h-full" style={{ perspective: '400px' }}>
        <motion.div 
          className="w-4 h-4 absolute inset-0 m-auto"
          animate={{ 
            rotateX: isPaused ? 0 : 360, 
            rotateY: isPaused ? 0 : 360,
            rotateZ: isPaused ? 45 : 0
          }}
          transition={isPaused ? { duration: 0.5 } : { duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Cube Faces */}
          {[0, 90, 180, 270].map((deg, i) => (
            <div 
              key={i}
              className="absolute inset-0 border border-[#00e5ff] bg-[#00e5ff]/10"
              style={{ transform: `rotateY(${deg}deg) translateZ(8px)` }}
            />
          ))}
          <div className="absolute inset-0 border border-[#00e5ff] bg-[#00e5ff]/10" style={{ transform: 'rotateX(90deg) translateZ(8px)' }} />
          <div className="absolute inset-0 border border-[#00e5ff] bg-[#00e5ff]/10" style={{ transform: 'rotateX(-90deg) translateZ(8px)' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomCursor;

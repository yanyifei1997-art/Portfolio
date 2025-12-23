
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const PixelLoader: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col items-center justify-center"
    >
      <div className="w-64 h-2 border-2 border-white/20 relative overflow-hidden pixel-bar">
        <motion.div 
          className="h-full bg-[#00e5ff]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 font-mono text-xs tracking-widest text-[#00e5ff]">
        INITIALIZING YANIMATE_{Math.floor(progress)}%
      </div>
    </motion.div>
  );
};

export default PixelLoader;

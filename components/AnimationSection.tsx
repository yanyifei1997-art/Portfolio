import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const AnimationSection: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "2024合集",
      embedUrl: "https://v.qq.com/txp/iframe/player.html?vid=m31849qp4lz",
    },
    {
      id: 2,
      title: "2023合集",
      embedUrl: "https://v.qq.com/txp/iframe/player.html?vid=a31845b4jda",
    }
  ];

  return (
    <div>
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-extrabold mb-2 uppercase tracking-tighter">Animation</h2>
        <div className="w-20 h-1 bg-[#00e5ff]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {videos.map((vid, idx) => (
          <motion.div
            key={vid.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative"
          >
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-[#00e5ff] rounded-sm blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <div className="relative aspect-video bg-black overflow-hidden border border-white/10 group-hover:border-[#00e5ff]/50 transition-all duration-500">
              <iframe 
                src={vid.embedUrl}
                className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                frameBorder="0" 
                allowFullScreen={true}
                title={vid.title}
              />
              
              {/* Overlay Color Filter Mask (Hidden on click/hover if needed, but here as per request) */}
              <div className="absolute inset-0 bg-[#00e5ff]/5 opacity-100 group-hover:opacity-0 pointer-events-none transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-[#00e5ff] transition-colors">{vid.title}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mt-1">Architectural Visualization</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e5ff]/40 group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/50 transition-all">
                <Video size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimationSection;
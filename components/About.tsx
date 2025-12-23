
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Instagram } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/3 aspect-[3/4] overflow-hidden relative"
      >
        <img 
          src="https://i.postimg.cc/tRBD36wx/wei-xin-tu-pian-20251222173711-155-65.jpg" 
          alt="Yifei Yan" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 border-8 border-[#00e5ff]/20 pointer-events-none"></div>
      </motion.div>

      <div className="lg:w-2/3 space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-extrabold tracking-tighter">YIFEI YAN</h2>
          <div className="w-20 h-1 bg-[#00e5ff]"></div>
          <p className="text-xl font-light text-[#00e5ff]/80 tracking-widest">Architectural Visualization Artist</p>
        </div>

        <p className="text-lg leading-relaxed text-white/60 font-light">
          毕业于同济大学建筑系，深耕建筑可视化领域5年。精通D5, Lumion, Twinmotion等实时渲染引擎。
          曾先后任职于国内明星建筑事务所与北美建筑公司，拥有深厚的建筑学术背景。
          对空间叙事与光影美学有着极致追求，力求在每一张画面中赋予建筑以生命力。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30">Connect</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00e5ff] transition-colors">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase">Wechat</p>
                  <p className="text-sm font-bold">Felixxx1997</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00e5ff] transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase">Email</p>
                  <p className="text-sm font-bold">felixxxx1997@163.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30">Focus</h4>
            <ul className="text-sm space-y-2 text-white/60 font-light">
              <li>· High-end Static Renders</li>
              <li>· Cinematic Walkthroughs</li>
              <li>· Real-time Interactive Space</li>
              <li>· VR/AR Architectural Experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

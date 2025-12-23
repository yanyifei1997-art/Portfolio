
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Video as VideoIcon, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: any = {
  Building2: Building2,
  Home: Home,
  Video: VideoIcon
};

const Services: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-extrabold uppercase tracking-tighter">Services</h2>
        <div className="w-20 h-1 bg-[#00e5ff] mx-auto"></div>
        <p className="text-white/40 max-w-2xl mx-auto font-light">
          专业建筑可视化服务，提供高效且具竞争力的方案助力您的设计落地。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-[#111] border border-white/5 hover:border-[#00e5ff]/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00e5ff]/5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 bg-[#00e5ff]/10 flex items-center justify-center mb-8 border border-[#00e5ff]/20">
                <Icon size={32} className="text-[#00e5ff]" />
              </div>

              <h3 className="text-xl font-bold mb-4">{service.name}</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-8 whitespace-pre-line">
                {service.description}
              </p>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Cycle</span>
                  <span className="text-sm font-medium text-white/80">{service.turnaround}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 p-10 bg-white/[0.02] border border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-[#00e5ff] font-black uppercase tracking-[0.3em] text-xs mb-6 border-l-4 border-[#00e5ff] pl-4">服务说明 / Service Terms</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white/50 leading-relaxed font-light">
            <div className="flex items-start gap-4 p-4 bg-white/[0.01] border border-white/5 rounded-sm group hover:border-[#00e5ff]/30 transition-colors">
              <CheckCircle2 size={18} className="text-[#00e5ff] mt-0.5 flex-shrink-0" />
              <span>注：所有项目接受一次免费修改，后续修改按50元/张收费。</span>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/[0.01] border border-white/5 rounded-sm group hover:border-[#00e5ff]/30 transition-colors">
              <CheckCircle2 size={18} className="text-[#00e5ff] mt-0.5 flex-shrink-0" />
              <span>效果图更新100/张。</span>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/[0.01] border border-white/5 rounded-sm group hover:border-[#00e5ff]/30 transition-colors">
              <CheckCircle2 size={18} className="text-[#00e5ff] mt-0.5 flex-shrink-0" />
              <span>漫游视频更新按原价30%收取制作费用。</span>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/[0.01] border border-white/5 rounded-sm group hover:border-[#00e5ff]/30 transition-colors">
              <CheckCircle2 size={18} className="text-[#00e5ff] mt-0.5 flex-shrink-0" />
              <span>交付周期灵活高效，效果图1-3天出初稿，漫游视频5-7天完成制作。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

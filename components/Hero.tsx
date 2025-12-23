
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = "Animate Your Vision.";

  useEffect(() => {
    // Typewriter effect
    let charIndex = 0;
    const interval = setInterval(() => {
      setSubtitle(fullSubtitle.slice(0, charIndex));
      charIndex++;
      if (charIndex > fullSubtitle.length) clearInterval(interval);
    }, 100);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: -1000, y: -1000 };

    // Background Grid Squares (3D wireframe effect)
    const bgSquares: any[] = [];
    const spacing = 70;
    for (let x = 0; x < width + spacing; x += spacing) {
      for (let y = 0; y < height + spacing; y += spacing) {
        bgSquares.push({ 
          x, y, 
          size: 4, 
          rot: Math.random() * Math.PI, 
          phase: Math.random() * Math.PI * 2 
        });
      }
    }

    // Pixel Cube Text Logic
    let pixelCubes: any[] = [];
    const createPixelText = () => {
      ctx.fillStyle = 'white';
      ctx.font = `bold ${width > 768 ? 160 : 80}px Inter`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.clearRect(0, 0, width, height);
      ctx.fillText('YANIMATE', width / 2, height / 2);

      const imageData = ctx.getImageData(0, 0, width, height).data;
      pixelCubes = [];
      const step = width > 768 ? 8 : 6;
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          if (imageData[index + 3] > 128) {
            pixelCubes.push({
              x, y,
              originX: x,
              originY: y,
              size: step - 2,
              color: '#00e5ff',
              rot: Math.random() * Math.PI,
            });
          }
        }
      }
    };

    createPixelText();

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createPixelText();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Background Wireframes
      ctx.lineWidth = 1;
      bgSquares.forEach(sq => {
        const dx = mouse.x - sq.x;
        const dy = mouse.y - sq.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 250;

        let scale = 1;
        let rotSpeed = 0.005;

        if (dist < maxDist) {
          const factor = (1 - dist / maxDist);
          scale = 1 + factor * 5;
          rotSpeed = 0.05 * factor;
          sq.rot += rotSpeed;
        } else {
          sq.rot += 0.005;
        }

        ctx.save();
        ctx.translate(sq.x, sq.y);
        ctx.rotate(sq.rot);
        ctx.strokeStyle = `rgba(0, 229, 255, ${0.1 + (scale > 1 ? 0.2 : 0)})`;
        ctx.strokeRect(-sq.size * scale / 2, -sq.size * scale / 2, sq.size * scale, sq.size * scale);
        // Inner cross for "3D wireframe" feel
        if (scale > 2) {
          ctx.beginPath();
          ctx.moveTo(-sq.size * scale / 2, 0);
          ctx.lineTo(sq.size * scale / 2, 0);
          ctx.moveTo(0, -sq.size * scale / 2);
          ctx.lineTo(0, sq.size * scale / 2);
          ctx.stroke();
        }
        ctx.restore();
      });

      // Draw Pixel Cubes (Text)
      pixelCubes.forEach(cube => {
        const dx = mouse.x - cube.x;
        const dy = mouse.y - cube.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = 120;

        if (dist < influence) {
          const angle = Math.atan2(dy, dx);
          const force = (influence - dist) / influence;
          cube.x -= Math.cos(angle) * force * 5;
          cube.y -= Math.sin(angle) * force * 5;
          cube.scale = 1 + force * 1.5;
        } else {
          cube.x += (cube.originX - cube.x) * 0.1;
          cube.y += (cube.originY - cube.y) * 0.1;
          cube.scale = 1;
        }

        ctx.fillStyle = cube.color;
        ctx.globalAlpha = 0.8;
        const s = cube.size * (cube.scale || 1);
        ctx.fillRect(cube.x - s/2, cube.y - s/2, s, s);
        ctx.globalAlpha = 1.0;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="relative z-10 text-center select-none pointer-events-none">
        {/* The Text is rendered via Canvas for the pixel-cube effect, 
            but we keep a hidden element for accessibility/SEO if needed */}
        <div className="h-[200px] flex items-center justify-center invisible">
          <h1 className="text-9xl font-extrabold">YANIMATE</h1>
        </div>
        
        <div className="h-8 mt-4">
          <p className="text-xl md:text-2xl font-light tracking-[0.4em] text-[#00e5ff] uppercase">
            {subtitle}<span className="animate-pulse">_</span>
          </p>
        </div>
      </div>

      <motion.a 
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 interactive"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-white/30">Explore Work</span>
        <ChevronDown className="animate-pulse-slow text-[#00e5ff]" size={32} />
      </motion.a>
    </div>
  );
};

export default Hero;

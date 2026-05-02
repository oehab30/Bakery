import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[65vh] bg-[#e5dfd5]" style={{ clipPath: 'ellipse(160% 100% at 50% 0%)' }}></div>
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 opacity-10 pointer-events-none w-[800px] h-[600px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-12 md:mt-24">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#8c7b6f] text-sm font-bold tracking-[0.3em] uppercase mb-6 font-sans"
        >
          The Art of Baking
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-[#2d231e] text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-[1.1] font-sans"
        >
          Crafted to delight,<br/>
          served with <span className="font-serif italic font-normal text-amber-800">care</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#5c4f45] text-lg md:text-xl font-medium mb-16 max-w-2xl leading-relaxed font-sans"
        >
          From crusty sourdough loaves to delicate French pastries, everything is baked fresh daily with love and tradition.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.4 }}
          className="relative w-full max-w-4xl flex justify-center mt-8"
        >
          {/* Decorative floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 md:-top-10 -right-4 md:right-10 z-20 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-[#e5dfd5] flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-amber-600 animate-pulse"></div>
            <span className="text-[#2d231e] font-bold text-xs tracking-wider uppercase">Baking Now</span>
          </motion.div>

          <div className="relative w-full max-w-3xl rounded-t-[150px] rounded-b-[40px] md:rounded-t-[250px] md:rounded-b-[50px] overflow-hidden shadow-[0_40px_80px_rgba(45,35,30,0.15)] border-[8px] md:border-[12px] border-white z-10 group">
            
            <div className="absolute inset-0 bg-[#2d231e]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>

            <video 
              src="https://video.wixstatic.com/video/11062b_3e60885e0c93458689a28605b2b0c86e/1080p/mp4/file.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

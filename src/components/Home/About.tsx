import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLine from './AnimatedLine';

function About() {
  return (
    <section id="about" className="py-32 bg-[#e5dfd5] font-sans text-center relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[#8c7b6f] text-sm font-bold tracking-[0.2em] uppercase  flex items-center justify-center gap-2"
            >
            <AnimatedLine text="What We Do"/>
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-[#2d231e] mb-6 font-sans"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[#5c4f45] text-lg font-medium leading-relaxed"
          >
            SweetRise offers full-service event solutions and artisan baking tailored to your unique celebrations and daily cravings.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" 
                alt="Custom Cake Design" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-[#2d231e] font-bold text-xl mb-2">Custom Cakes</h3>
            <p className="text-[#5c4f45] font-medium text-sm">Perfect for weddings & birthdays.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group cursor-pointer flex flex-col items-center mt-0 "
          >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop" 
                alt="Event Catering" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-[#2d231e] font-bold text-xl mb-2">Event Catering</h3>
            <p className="text-[#5c4f45] font-medium text-sm">Delight your guests with our pastries.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" 
                alt="Artisan Bread Baking" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-[#2d231e] font-bold text-xl mb-2">Artisan Baking</h3>
            <p className="text-[#5c4f45] font-medium text-sm">Freshly baked breads every morning.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default About;

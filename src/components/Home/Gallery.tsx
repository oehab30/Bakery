import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLine from './AnimatedLine';

const images = [
  {
    src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format&fit=crop&q=60",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=687&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  }
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#f3efe9] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[#8c7b6f] text-sm font-bold tracking-[0.2em] uppercase  flex items-center justify-center gap-2"
            >
              <AnimatedLine text="Our Gallery" lines={1}/>
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold text-[#2d231e] font-sans"
            >
              A Feast for the Eyes
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[#5c4f45] text-lg font-medium leading-relaxed max-w-md mt-6 md:mt-0"
          >
            Take a peek at our delicious creations and our cozy bakery environment. Follow us on Instagram for daily bakes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer ${item.className}`}
            >
              <img 
                src={item.src} 
                alt={`Bakery gallery image ${index + 1}`} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#2d231e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <svg className="w-6 h-6 text-[#2d231e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;

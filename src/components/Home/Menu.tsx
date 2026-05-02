import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLine from './AnimatedLine';

const featuredProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1681218424681-b4f8228ecea9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Butter Croissant"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop",
    alt: "Fresh Fruit Tart"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop",
    alt: "Cinnamon Roll"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop",
    alt: "French Macarons"
  }
];

function Menu() {
  return (
    <section id="menu" className="py-32 bg-white font-sans text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[#8c7b6f] text-sm font-bold tracking-[0.2em] uppercase  flex items-center justify-center gap-2"
            >
            <AnimatedLine text="Featured Products"/>
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#2d231e] leading-tight font-sans"
          >
            Baked fresh daily, crafted with care<br/>to delight every bite
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-20">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[2/3] overflow-hidden rounded-[120px] shadow-[0_10px_30px_rgba(45,35,30,0.08)] mb-6 border-4 border-[#f9f7f4] group-hover:border-[#e5dfd5] transition-colors duration-500">
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-[#2d231e] font-semibold text-lg font-serif italic group-hover:text-amber-700 transition-colors">{product.alt}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#5c4f45] text-base md:text-lg font-medium mb-10 leading-relaxed"
          >
            From rustic breads to delicate pastries, each bite is fresh, flavorful, and made with absolute care using the finest ingredients.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2d231e] text-[#f3efe9] hover:bg-amber-900 transition-all duration-300 px-10 py-4 rounded-full text-sm font-bold tracking-wider uppercase shadow-xl"
          >
            View Full Menu
          </motion.button>
        </div>

      </div>
    </section>
  );
}

export default Menu;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#e5dfd5]/90 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-[#2d231e] tracking-tight">
              SweetRise
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#2d231e] hover:text-amber-700 text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-[#2d231e] text-[#f3efe9] hover:bg-amber-900 transition-colors duration-300 px-6 py-2 text-sm font-medium">
              Order now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2d231e] hover:text-amber-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#e5dfd5] backdrop-blur-lg transition-all duration-300 ease-in-out border-t border-[#d5cec4] ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-4 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col px-6 space-y-2 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#2d231e] hover:text-amber-700 text-lg font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#2d231e] text-[#f3efe9] mt-4 px-6 py-3 text-center text-sm font-medium w-full">
            Order now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
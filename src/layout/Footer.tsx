import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-[#2d231e] text-[#f3efe9] font-sans pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col">
            <a href="#" className="text-3xl font-bold text-[#f3efe9] tracking-tight mb-6">
              SweetRise
            </a>
            <p className="text-[#d5cec4] mb-8 leading-relaxed font-medium">
              Crafting daily freshness with passion and love. Serving the community with artisanal bakes since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#f3efe9]/10 hover:bg-[#f3efe9]/20 p-3 rounded-full transition-colors text-[#f3efe9]">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#f3efe9]/10 hover:bg-[#f3efe9]/20 p-3 rounded-full transition-colors text-[#f3efe9]">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#f3efe9]/10 hover:bg-[#f3efe9]/20 p-3 rounded-full transition-colors text-[#f3efe9]">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Explore</h3>
            <ul className="space-y-4 text-[#d5cec4] font-medium">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-amber-600 rounded-full"></span> Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-amber-600 rounded-full"></span> Our Menu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-amber-600 rounded-full"></span> Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-amber-600 rounded-full"></span> Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Contact</h3>
            <ul className="space-y-4 text-[#d5cec4] font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                <span>123 Baker Street<br/>Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-600 flex-shrink-0" size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-600 flex-shrink-0" size={18} />
                <span>hello@sweetrise.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Hours</h3>
            <ul className="space-y-3 text-[#d5cec4] font-medium">
              <li className="flex justify-between border-b border-[#f3efe9]/10 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">6:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#f3efe9]/10 pb-2">
                <span>Saturday</span>
                <span className="text-white">7:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-amber-600">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#f3efe9]/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#d5cec4]">
          <p>&copy; {new Date().getFullYear()} SweetRise Bakery. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

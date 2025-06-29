
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#24A89C]/95 to-[#1a7a70]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">HeadStart</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-white/80 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-white/10">
                Home
              </a>
              <a href="#about" className="text-white hover:text-white/80 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-white/10">
                About
              </a>
              <a href="#benefits" className="text-white hover:text-white/80 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-white/10">
                Benefits
              </a>
              <a href="#testimonials" className="text-white hover:text-white/80 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-white/10">
                Testimonials
              </a>
              <a href="#authors" className="text-white hover:text-white/80 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-white/10">
                Authors
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 p-2 rounded-2xl transition-all duration-300 hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#24A89C]/98 to-[#1a7a70]/98 backdrop-blur-sm border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="text-white hover:text-white/80 block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-white/80 block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#benefits" 
              className="text-white hover:text-white/80 block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-white/80 block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#authors" 
              className="text-white hover:text-white/80 block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Authors
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculate position manually to ensure fixed header doesn't cover content
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          
          {/* Logo / Name Area */}
          <div className="flex flex-col md:flex-row md:items-center">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight mr-3">
              Varunkumar Salimath
            </h1>
            <span className="hidden md:inline text-gray-300 text-xl font-light mr-3">|</span>
            <span className="text-sm md:text-base text-gray-500 font-medium">
              Electronics Engineer (VLSI)
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-gray-300 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-base font-medium text-gray-600 hover:text-black py-2 border-b border-gray-50 last:border-0 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
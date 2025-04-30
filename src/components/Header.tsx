import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.side-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'zones', label: 'Park Zones' },
    { id: 'safari', label: 'Safari' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'conservation', label: 'Conservation' },
    { id: 'visitor-guidelines', label: 'Visitor Tips' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Vertical Side Menu - Changed to open from right side */}
      <div 
        className={`side-menu fixed top-0 right-0 h-full w-64 bg-gray-500 z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-400">
          <span className="text-white font-bold">RANTHAMBORE</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Book Safari button moved to the top under the header */}
        <div className="w-full px-4 mt-4 mb-4">
          <a
            href="#booking"
            className="block w-full py-3 bg-[#F0533f] text-white font-bold text-center rounded hover:bg-[#d94432] transition-colors duration-300 shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Safari Now
          </a>
        </div>
        
        <nav className="py-2">
          <ul className="flex flex-col">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block px-6 py-3 font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-gray-600 text-white'
                      : 'text-gray-100 hover:bg-gray-600 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Main Header Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          isScrolled 
            ? 'bg-teal-800 bg-opacity-95 shadow-lg py-2' 
            : 'from-teal-800 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo on the left */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <img 
                  src="./logo.png" 
                  alt="Ranthambore National Park Logo" 
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-10' : 'h-16'
                  }`}
                />
              </a>
            </div>
            
            {/* Menu Button - Right side */}
            <button
              className="menu-button text-white focus:outline-none hover:text-gray-200 transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={28} className="transition-all duration-300" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
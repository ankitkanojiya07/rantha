import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Home, Info, Camera, Map, Image, Heart, HelpCircle, Mail, Car } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const sideMenuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we should show or hide the header based on scroll direction
      if (currentScrollY > lastScrollY + 10) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY - 10 || currentScrollY < 50) {
        setIsHeaderVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (sideMenuRef.current && !sideMenuRef.current.contains(target) && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <Info size={18} /> },
    { id: 'wildlife', label: 'Wildlife', icon: <Camera size={18} /> },
    { id: 'zones', label: 'Park Zones', icon: <Map size={18} /> },
    { id: 'safari', label: 'Safari', icon: <Car size={18} /> },
    { id: 'gallery', label: 'Gallery', icon: <Image size={18} /> },
    { id: 'conservation', label: 'Conservation', icon: <Heart size={18} /> },
    { id: 'visitor-guidelines', label: 'Visitor Tips', icon: <HelpCircle size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black transition-all duration-500 ${
          isMenuOpen ? 'opacity-50 z-40' : 'opacity-0 -z-10'
        }`}
        aria-hidden="true"
      />
      
      <div 
        ref={sideMenuRef}
        className={`side-menu fixed top-0 right-0 h-full w-80 bg-transparent z-50 transform transition-all duration-500 ease-in-out shadow-xl
 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-hidden flex flex-col`}
        aria-hidden={!isMenuOpen}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />
        
        <div className="flex justify-between items-center p-6 border-b border-teal-700">
          <span className="text-white font-bold tracking-wider text-lg flex items-center">
            <span className="bg-white text-teal-800 rounded-md px-2 py-1 mr-2 font-extrabold">🐾</span>
            RANTHAMBORE
          </span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-orange-300 transition-colors duration-300 p-1 rounded-full hover:bg-teal-700/50"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="w-full px-6 mt-6 mb-4">
          <a
            href="#booking"
            className="block w-full py-3 bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-center rounded-lg hover:shadow-lg transform transition-all duration-300 hover:translate-y-px active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Safari Now
          </a>
        </div>
        
        <nav className="py-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-transparent">
          <ul className="flex flex-col">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`flex items-center px-6 py-3.5 font-medium transition-all duration-300 relative group ${
                    activeSection === link.id
                      ? 'bg-teal-700/70 text-white'
                      : 'text-gray-100 hover:bg-teal-700/40 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {activeSection === link.id && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-r" />
                  )}
                  
                  <span className={`mr-3 ${activeSection === link.id ? 'text-orange-400' : 'text-teal-300 group-hover:text-orange-300'}`}>
                    {link.icon}
                  </span>
                  
                  <span className="flex-1">{link.label}</span>
                  
                  <ChevronRight 
                    size={16} 
                    className={`transform transition-all duration-300 ${
                      activeSection === link.id ? 'opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
                    }`} 
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* <div className="mt-auto p-6 border-t border-teal-700/50 bg-teal-900/30 text-white/60 text-sm">
          <p className="mb-2">© 2025 Ranthambore National Park</p>
          <p className="flex space-x-4">
            <a href="#terms" className="hover:text-white transition-colors duration-200">Terms</a>
            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy</a>
          </p>
        </div> */}
      </div>
      
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          isScrolled 
            ? 'bg-teal-800/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-gradient-to-b from-black/60 to-transparent py-4'
        } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#home" className="flex items-center group">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="./logo12.png" 
                    alt="Ranthambore National Park Logo" 
                    className={`transition-all duration-500 transform group-hover:scale-105 ${
                      isScrolled ? 'h-16 w-auto' : 'h-24 w-auto'
                    }`} 
                  />
                </div>
                <div className={`ml-3 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                  {/* <h1 className="font-bold text-white tracking-wide text-lg leading-none">RANTHAMBORE</h1>
                  <p className="text-white/70 text-xs">NATIONAL PARK</p> */}
                </div>
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <nav className="hidden md:block mr-4">
                {/* <ul className="flex space-x-1">
                  {navLinks.slice(0, 5).map(link => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                          activeSection === link.id
                            ? 'bg-teal-700/70 text-white'
                            : 'text-white/80 hover:bg-teal-700/30 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul> */}
              </nav>
              
              <div className="relative">
                {/* <button
                  className={`p-2.5 text-white/90 hover:text-white rounded-full transition-all duration-300 ${
                    isSearchOpen ? 'bg-teal-700' : 'hover:bg-teal-700/30'
                  }`}
                  onClick={toggleSearch}
                  aria-label="Search"
                  aria-expanded={isSearchOpen}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button> */}
                
                <div className={`absolute right-0 top-full mt-2 w-64 bg-teal-800/95 backdrop-blur-md rounded-lg shadow-lg transform origin-top-right transition-all duration-300 ${
                  isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <div className="p-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search for wildlife, trails..."
                        className="w-full bg-teal-700/50 text-white placeholder-white/50 border border-teal-600 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        autoFocus={isSearchOpen}
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Book Safari button removed from here as requested */}
              
              <button
                className="menu-button relative p-2.5 text-white/90 hover:text-white rounded-full transition-all duration-300 hover:bg-teal-700/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-800 focus:ring-white/30"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent">
          <div className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" style={{ 
            width: typeof window !== 'undefined' ? `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` : '0%',
            transition: 'width 0.1s ease-out'
          }}></div>
        </div>
      </header>
    </>
  );
};

export default Header;
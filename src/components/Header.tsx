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
    { id: 'sightings', label: 'Sightings update', icon: <car size={18} /> },
    { id: 'safari', label: 'Safari', icon: <Car size={18} /> },
    { id: 'gallery', label: 'Gallery', icon: <Image size={18} /> },
    { id: 'conservation', label: 'Conservation', icon: <Heart size={18} /> },
    { id: 'visitor-guidelines', label: 'Visitor Tips', icon: <HelpCircle size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-[var(--color-background)] transition-all duration-500 ${
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
          <span className="text-[var(--color-text-primary)] font-bold tracking-wider text-lg flex items-center">
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
        
       
        
        <nav className="py-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-transparent">
          <ul className="flex flex-col">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`flex items-center px-6 py-3.5 font-medium transition-all duration-300 relative group ${
                    activeSection === link.id
                      ? 'bg-[var(--color-primary)]/70 text-[var(--color-primary-foreground)]'
                      : 'text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/40 hover:text-[var(--color-primary-foreground)]'
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
         <div className="w-full px-6 mt-6 mb-4">
          <a
            href="#booking"
            className="block w-full py-3 text-[var(--color-text-primary)] bg-[var(--color-accent)] font-bold text-center rounded-lg hover:shadow-lg transform transition-all duration-300 hover:translate-y-px active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Safari Now
          </a>
        </div>
      </div>
      
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[var(--color-background)]/60 backdrop-blur-md shadow-lg py-2' 
            : 'bg-gradient-to-b from-[var(--color-background)]/60 to-transparent py-4'
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
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
              </a>
            </div>
            
            <div className="flex items-center space-x-2">              
              <button
                className="menu-button relative p-2.5 text-[var(--color-text-primary)]/90 hover:text-[var(--color-text-primary)] rounded-full transition-all duration-300 hover:bg-[var(--color-primary)]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-primary)] focus:ring-[var(--color-text-primary)]/30"
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
          <div className="h-full bg-[var(--color-primary)]" style={{ 
            width: typeof window !== 'undefined' ? `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` : '0%',
            transition: 'width 0.1s ease-out'
          }}></div>
        </div>
      </header>
    </>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Use throttling to improve performance
    let scrollTimeout: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        toggleVisibility();
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-secondary)]
          transition-all duration-300 ease-in-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          ${isHovered ? 'bg-[var(--color-primary)] text-[var(--color-surface)] scale-110' : 'bg-[var(--color-secondary)] text-[var(--color-surface)]'}
        `}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
        
        {/* Optional tooltip that appears on hover */}
        <span 
          className={`
            absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap
            bg-[var(--color-primary)] text-[var(--color-surface)] text-xs px-2 py-1 rounded
            transition-all duration-200
            ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
        >
          Back to top
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  
  const images = [
    './rrrr.png',
    './b1.jpg',
    './zone2.jpg',
    './zone1.jpg',
    './petrol.jpg',
    
    './morning.jpg',
    './s8.jpg'
  ];

  useEffect(() => {
    const entranceTimer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    const sliderInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    const handleParallax = () => {
      if (sliderRef.current && heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPercentage = Math.min(scrollPosition / heroHeight, 1);
        
        // Reduced parallax effect
        sliderRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        
        if (heroRef.current) {
          heroRef.current.style.opacity = `${1 - scrollPercentage * 0.6}`;
        }
      }
    };

    window.addEventListener('scroll', handleParallax);
    
    return () => {
      clearTimeout(entranceTimer);
      clearInterval(sliderInterval);
      window.removeEventListener('scroll', handleParallax);
    };
  }, [isPaused, images.length]);

  useEffect(() => {
    // Preload images at highest quality
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Welcome to Ranthambore National Park"
    >
      <div 
        ref={sliderRef}
        className="absolute inset-0 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-all duration-2000 ease-out ${
              currentImageIndex === index 
                ? 'opacity-100 scale-105' 
                : index === (currentImageIndex - 1 + images.length) % images.length 
                  ? 'opacity-0 scale-100 -translate-x-8' 
                  : 'opacity-0 scale-100 translate-x-8'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              // Remove fixed attachment
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              imageRendering: 'crisp-edges',
              willChange: 'transform, opacity'
            }}
            aria-hidden={currentImageIndex !== index}
          />
        ))}

        {/* Very light overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/10 via-transparent to-[var(--color-background)]/10" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 flex flex-col items-center">
        <div className={`max-w-5xl text-center transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}>
          {/* Content here */}
          
          <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Additional content here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
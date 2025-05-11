import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  
  const images = [
    './rrrr.png',
    './petrol.jpg',
    './s3.jpg',
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
    }, 6000);

    const handleParallax = () => {
      if (sliderRef.current && heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPercentage = Math.min(scrollPosition / heroHeight, 1);
        
        sliderRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        
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
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
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
              backgroundAttachment: 'fixed',
              willChange: 'transform, opacity'
            }}
            aria-hidden={currentImageIndex !== index}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 via-black/30 to-teal-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        <div 
          className="absolute inset-0 bg-black opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '100px 100px'
          }}
        />
        
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" 
          style={{
            background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.4) 100%)'
          }} 
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 flex flex-col items-center">
        <div className={`max-w-5xl text-center transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}>
          
          <h2 className="text-center text-white drop-shadow-lg mb-6"><span className="block text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-orange-400 animate-text-shimmer">
              <span className="inline-block mr-2">🐾</span> Ranthambore <span className="inline-block ml-2">🐾</span>
            </span>
            <span className="block text-3xl md:text-3xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-orange-400 animate-text-shimmer italic">
              More Than a Place — A Living Concept of Nature and Legacy
            </span>
          </h2>
          
          <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          </div>
        </div>
      </div>
    </section>
  );
};

const customStyles = `
@keyframes text-shimmer {
  0% {
    background-position: -100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.animate-text-shimmer {
  animation: text-shimmer 8s ease-in-out infinite;
  background-size: 200% 100%;
}
`;

export default Hero;
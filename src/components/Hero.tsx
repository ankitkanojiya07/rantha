import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of image paths
  const images = [
    '/images/rrrr.png',
    '/images/s2.jpg',
    '/images/s3.jpg',
    '/images/s4.jpg',
    '/images/s6.jpg'
  ];

  useEffect(() => {
    // Animation entrance delay
    const entranceTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Image slider interval
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Hide scroll indicator when scrolling starts
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(entranceTimer);
      clearInterval(sliderInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center"
      aria-label="Welcome to Ranthambore National Park"
    >
      {/* Dynamic Backgrounds - Create depth with multiple layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main background image with slider functionality */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-100 filter brightness-90 transition-opacity duration-1000 ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundAttachment: 'fixed'
            }}
            aria-hidden={currentImageIndex !== index}
          />
        ))}

        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0  from-teal-800 via-transparent to-teal-900 opacity-70" />

        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 bg-teal-700 opacity-5"
          style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")'}}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 flex flex-col items-center">
        <div className={`max-w-4xl text-center transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}>
          {/* Image counter indicator */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div> */}
          
          {/* Action buttons */}
          <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          </div>
        </div>
      </div>

      {/* Animated featured highlights */}
      <div className={`relative z-10 container mx-auto px-4 transition-all duration-1000 delay-1200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      </div>
    </section>
  );
};

export default Hero;
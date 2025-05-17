import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Ruler, Calendar, Compass, Camera, Leaf, CloudSun, BadgeCheck } from 'lucide-react';

const QuickFacts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const facts = [
    {
      icon: <MapPin className="h-8 w-8 text-[#997B66]" />,
      title: "Location",
      description: "Sawai Madhopur district, Rajasthan, at the junction of Aravalli and Vindhya hill ranges.",
      stats: [
        { value: "180 km", label: "from Jaipur" },
        { value: "400 km", label: "from Delhi" }
      ]
    },
    {
      icon: <Ruler className="h-8 w-8 text-[#997B66]" />,
      title: "Park Area",
      description: "1,334 sq. km of diverse landscapes including dry deciduous forests, open grasslands, and lakes.",
      stats: [
        { value: "10", label: "safari zones" },
        { value: "3", label: "major lakes" }
      ]
    },
    {
      icon: <CloudSun className="h-8 w-8 text-[#997B66]" />,
      title: "Best Time to Visit",
      description: "October to April when the weather is pleasant and wildlife sightings are frequent.",
      stats: [
        { value: "15-35°C", label: "temperature" },
        { value: "Low", label: "rainfall" }
      ]
    },
    {
      icon: <Camera className="h-8 w-8 text-[#997B66]" />,
      title: "Wildlife Viewing",
      description: "Royal Bengal Tigers and diverse ecosystem with over 300 bird species and various wildlife.",
      stats: [
        { value: "70+", label: "tigers" },
        { value: "300+", label: "bird species" }
      ]
    },
    {
      icon: <Compass className="h-8 w-8 text-[#997B66]" />,
      title: "Safari Types",
      description: "Jeep safaris, canter safaris, and nature walks with expert guides for comprehensive wildlife exploration.",
      stats: [
        { value: "2", label: "daily slots" },
        { value: "3.5 hrs", label: "per safari" }
      ]
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#997B66]" />,
      title: "Park Season",
      description: "Open from October 1 to June 30 annually. Closed during monsoon season (July-September).",
      stats: [
        { value: "9", label: "months open" },
        { value: "6 AM & 2 PM", label: "safari timings" }
      ]
    },
    {
      icon: <Leaf className="h-8 w-8 text-[#997B66]" />,
      title: "Ecosystem",
      description: "Diverse habitats including dense jungle, grasslands, lakes, and ancient ruins providing unique niches for wildlife.",
      stats: [
        { value: "5+", label: "ecosystems" },
        { value: "40+", label: "mammals" }
      ]
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-[#997B66]" />,
      title: "Conservation Status",
      description: "Designated as Project Tiger reserve in 1973 and continues to be one of India's most successful conservation stories.",
      stats: [
        { value: "1973", label: "established" },
        { value: "UNESCO", label: "nominated" }
      ]
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[var(--color-background)] relative overflow-hidden font-serif"
    >
      

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5DED3] rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#997B66] rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with highlighted tagline */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}>
          <div className="inline-block max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold text-[#3C3228] relative inline-block px-6 py-3 bg-[#F2EDE4] rounded-lg shadow-sm">
            Quick Facts About Ranthambore
            <span className={`absolute bottom-0 left-0 w-full h-1 bg-[#997B66] transform origin-left transition-transform duration-1000 ease-out ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></span>
          </h2>
          </div>
        </div>
        
        {/* Facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${150 * (index % 4)}ms` }}
            >
              <div className="h-2 bg-[#997B66]"></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#F2EDE4] p-3 rounded-lg mr-4">
                    {fact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3C3228] mb-1 font-serif">{fact.title}</h3>
                    <p className="text-[#5C5248] text-sm">{fact.description}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between">
                    {fact.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-[#997B66]">{stat.value}</div>
                        <div className="text-xs text-[#7D7268] uppercase tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="inline-block relative">
            <a href="#booking" className="inline-flex items-center px-8 py-4 bg-[#997B66] text-white font-bold rounded-lg shadow-lg hover:bg-[#7D6356] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#997B66] focus:ring-offset-2 group">
              <span className="mr-2">Plan Your Safari Experience</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#C4B6A6] rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
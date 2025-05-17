import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import QuickFacts from './components/QuickFacts';
import Wildlife from './components/Wildlife';
import Zones from './components/Zones';
import SafariInfo from './components/SafariInfo';
import BookingSafari from './components/BookingSafari';
import Gallery from './components/Gallery';
import Conservation from './components/Conservation';
import VisitorTips from './components/VisitorTips';
import Testimonials from './components/Testimonials';
import EnvironmentalSustainability from './components/sus';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SightingsUpdate from './components/SightingsUpdate';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-background text-foreground relative w-full overflow-x-hidden font-serif">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <QuickFacts />
        <Wildlife />
        <Zones />
        <SightingsUpdate />
        <SafariInfo />
        <BookingSafari />
        <Gallery />
        <Conservation />
        <EnvironmentalSustainability />
        <VisitorTips />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
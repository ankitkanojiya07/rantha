import React, { useState, useEffect } from 'react';
import { ChevronDown, Leaf, Droplet, Sun, Recycle, Bird, Users, DollarSign } from 'lucide-react';

const EnvironmentalSustainability = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation entrance delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Define all the sustainability sections
  const sustainabilitySections = [
    {
      id: 'eco-construction',
      title: 'Eco-friendly Construction',
      icon: <Leaf className="text-[#3C3228]-600" />,
      content: (
        <div className="space-y-2">
          <p>Our resort utilizes sustainable building materials that minimize environmental impact while creating a luxurious experience:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reclaimed and locally harvested timber from sustainable forests</li>
            <li>Natural stone sourced from nearby quarries to reduce transportation emissions</li>
            <li>Traditional thatch roofing using native grasses harvested sustainably</li>
            <li>Biophilic design principles that blend structures seamlessly with the natural landscape</li>
            <li>Elevated walkways and structures to minimize ground disturbance and allow wildlife movement</li>
          </ul>
        </div>
      )
    },
    {
      id: 'energy',
      title: 'Renewable Energy Systems',
      icon: <Sun className="text-yellow-500" />,
      content: (
        <div className="space-y-2">
          <p>Our resort operates primarily on clean, renewable energy:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Solar array providing 85% of our electricity needs</li>
            <li>Smart energy management systems that optimize consumption</li>
            <li>Energy-efficient LED lighting throughout all facilities</li>
            <li>Natural cooling through strategic building orientation and ventilation</li>
            <li>Battery storage systems to ensure 24/7 renewable energy availability</li>
          </ul>
          <p className="text-sm italic mt-2">Our goal: Complete carbon neutrality by 2027</p>
        </div>
      )
    },
    {
      id: 'water',
      title: 'Water Conservation',
      icon: <Droplet className="text-blue-500" />,
      content: (
        <div className="space-y-2">
          <p>Water is precious in our ecosystem, and we treat it with respect:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Comprehensive rainwater harvesting systems across the property</li>
            <li>Low-flow fixtures reducing water usage by 40% compared to standard hotels</li>
            <li>Greywater recycling for landscape irrigation</li>
            <li>Natural swimming pools filtered by aquatic plants instead of chemicals</li>
            <li>Real-time water usage monitoring and guest education</li>
          </ul>
          <p className="text-sm italic mt-2">We've reduced our water footprint by 65% since 2020</p>
        </div>
      )
    },
    {
      id: 'waste',
      title: 'Zero Waste Management',
      icon: <Recycle className="text-emerald-600" />,
      content: (
        <div className="space-y-2">
          <p>We're committed to eliminating waste at every step:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Plastic-free environment with bamboo, glass, and other sustainable alternatives</li>
            <li>On-site composting facility converting organic waste to nutrient-rich soil</li>
            <li>Comprehensive recycling program that diverts 95% of waste from landfills</li>
            <li>Upcycling workshops where guests can transform waste into art</li>
            <li>Partnerships with local artisans who create products from reclaimed materials</li>
          </ul>
        </div>
      )
    },
    {
      id: 'wildlife',
      title: 'Wildlife Protection',
      icon: <Bird className="text-orange-500" />,
      content: (
        <div className="space-y-2">
          <p>Our core mission is protecting and enhancing wildlife habitats:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wildlife corridors throughout the property connecting fragmented habitats</li>
            <li>Reforestation program that has planted over 10,000 native trees</li>
            <li>Dark sky lighting policies to minimize disruption to nocturnal animals</li>
            <li>Support for anti-poaching units in the surrounding protected areas</li>
            <li>Monitoring programs tracking the health and populations of key species</li>
          </ul>
          <p className="text-sm italic mt-2">10% of all profits directly fund local conservation efforts</p>
        </div>
      )
    },
    {
      id: 'social',
      title: 'Social Sustainability',
      icon: <Users className="text-purple-500" />,
      content: (
        <div className="space-y-2">
          <p>We believe true sustainability must include social responsibility:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>85% of our staff come from local communities</li>
            <li>Skills development programs providing career advancement opportunities</li>
            <li>Support for local schools and healthcare initiatives</li>
            <li>Celebration of indigenous culture, crafts, and cuisine</li>
            <li>Community-based tourism activities that directly benefit local families</li>
          </ul>
        </div>
      )
    },
    {
      id: 'economic',
      title: 'Economic Sustainability',
      icon: <DollarSign className="text-[#3C3228]-500" />,
      content: (
        <div className="space-y-2">
          <p>Our business model ensures long-term prosperity for all stakeholders:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fair-trade policies with all local suppliers</li>
            <li>Sustainable pricing that values both guests' experience and resource conservation</li>
            <li>Investment in eco-tourism certifications and standards</li>
            <li>Transparent reporting on our sustainability performance</li>
            <li>Financially sustainable conservation initiatives that will continue for generations</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section 
      id="sustainability" 
      className="py-16 bg-[#f5ebe0] from-green-50 to-white"
    >
      <div className={`container mx-auto px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
      }`}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3C3228]-800 mb-4">Environmental Sustainability</h2>
            <p className="text-lg text-gray-700">
              Our commitment to preserving the natural world goes beyond words—it's embedded in everything we do.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
            <p className="text-gray-700 leading-relaxed">
              A truly sustainable wildlife resort must harmonize with its surroundings while actively contributing to 
              conservation. We don't merely exist alongside nature—we serve as a model for environmental stewardship 
              and restoration, focusing on three interconnected pillars: environmental protection, social responsibility, 
              and economic sustainability.
            </p>
          </div>

          {/* Accordion sections */}
          <div className="space-y-4">
            {sustainabilitySections.map((section) => (
              <div 
                key={section.id}
                className="border border-green-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center">
                    <div className="mr-3">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                  </div>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${
                      activeSection === section.id ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 pt-0 border-t border-green-100">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Experience our commitment to sustainability firsthand and discover how luxury and 
              environmental responsibility can go hand in hand.
            </p>
            <button className="bg-[#3C3228] hover:bg-[#3C3228]  text-[#f5ebe0] font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md">
              Book Your Eco-Safari Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalSustainability;
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Leaf, Castle, Crown, Shield } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
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

  const toggleCard = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Enhanced content for expandable cards
  const cardContent = [
    {
      title: "Ancient Glory",
      subtitle: "A Fortress With Stories",
      icon: <Castle size={24} className="text-amber-800" />,
      shortDesc: "Tales of sieges, valiant Rajput kings, and Mughal invasions. The fort has witnessed centuries of battles and royal ceremonies.",
      fullContent: "The majestic Ranthambore Fort dates back to the 10th century and has been a silent witness to numerous historical events. Built by the Chauhan dynasty, it has weathered countless sieges and battles. The fort's strategic position atop a 700-foot hill gave it military advantage, while its intricate architecture showcases the artistic brilliance of medieval India. Within its walls, you'll find temples dedicated to Ganesh, Shiva, and Ramlalaji, each with their own fascinating history. The fort's massive stone ramparts and imposing gateways tell stories of valor, with each stone bearing witness to the rise and fall of empires. Archaeological findings suggest that the area around the fort has been inhabited since at least 5000 BCE, making it one of India's most historically significant landmarks.",
      image: "./f2.jpg"
    },
    {
      title: "Royal Legacy",
      subtitle: "From Hunting Grounds to Sanctuary",
      icon: <Crown size={24} className="text-amber-800" />,
      shortDesc: "The park's role in royal hunting expeditions. Experience the paths where Maharajas once tracked magnificent game.",
      fullContent: "Before becoming a wildlife sanctuary, Ranthambore served as the private hunting grounds for the Maharajas of Jaipur. The elaborate hunting pavilions scattered throughout the park offer glimpses into royal leisure activities of bygone eras. Maharajas would host extravagant hunting parties for visiting dignitaries, including British viceroys and European nobility. The famous hunting lodge known as 'Jogi Mahal' still stands at the edge of Padam Talao lake, though access is now restricted. Historical records mention tiger hunts where over 20 tigers were killed in a single expedition—a stark contrast to today's conservation efforts. The transition from royal hunting reserve to protected sanctuary represents a profound shift in our relationship with wildlife and marks an important chapter in Indian conservation history.",
      image: "./fort.png"
    },
    {
      title: "Modern Conservation",
      subtitle: "Preserving Natural Heritage",
      icon: <Shield size={24} className="text-amber-800" />,
      shortDesc: "Turning battlefields into biodiversity havens. Learn how Ranthambore has become a model for wildlife conservation in India.",
      fullContent: "Ranthambore National Park has evolved from near ecological disaster to conservation success story. In 1973, it was among the first nine tiger reserves established under Project Tiger—India's ambitious tiger conservation program. When protection began, fewer than 20 tigers remained; today, the park supports over 70 tigers. Conservation efforts extend beyond tigers to include habitat restoration, anti-poaching measures, and community involvement. The park has pioneered innovative approaches like camera trapping for monitoring wildlife and involving local communities as conservation stakeholders. Former poachers have been rehabilitated as forest guards, using their intimate knowledge of the terrain to protect rather than hunt wildlife. Ranthambore's success has inspired similar projects across Asia, demonstrating how determined conservation efforts can reverse the decline of endangered species.",
      image: "./fort1.png"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: "linear-gradient(to bottom, #F5EED8, #E8DDC2)",
        position: "relative"
      }}
    >
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23735c3d\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Animated Line */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-amber-900 uppercase tracking-widest mb-2 block">Discover Our Heritage</span>
           <h2 className="text-4xl md:text-5xl font-bold text-amber-950 relative inline-block pb-2">
  About Ranthambore
  <span className={`absolute bottom-0 left-0 w-full h-1 bg-amber-800 transform origin-left transition-transform duration-1000 ease-out ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></span>
</h2>

          </div>
          <p className="mt-4 text-amber-800 max-w-3xl mx-auto text-lg">
            A Tapestry of History, Nature, and Culture
          </p>
        </div>
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6">
              <p className="text-amber-950 leading-relaxed text-lg">
                Ranthambore is not just about its tigers; it is a living museum where centuries-old temples, 
                hunting pavilions, and majestic forts blend with untamed wilderness. The park's 
                unique ecosystem supports an incredible variety of life against the backdrop of rugged terrain.
              </p>
              
              <div className="pl-5 border-l-4 border-amber-700">
                <p className="text-amber-800 leading-relaxed italic">
                  "Historically, the Ranthambore Fort, a UNESCO World Heritage Site, has been a sentinel 
                  of power since the 10th century. It overlooks the entire park, standing as a proud 
                  reminder of Rajasthan's valor and resilience."
                </p>
              </div>
              
              <p className="text-amber-950 leading-relaxed text-lg">
                Once the private hunting grounds of Jaipur's Maharajas, Ranthambore now thrives as a conservation 
                success story under Project Tiger. Beyond its regal predators, visitors can experience an ecosystem 
                brimming with life: leopards, hyenas, sloth bears, marsh crocodiles, and over 300 bird species.
              </p>
            </div>
            
            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Established", value: "1973" },
                { label: "Area", value: "1,334 sq km" },
                { label: "Elevation", value: "215-505m" },
                { label: "Tiger Population", value: "~70" }
              ].map((fact, idx) => (
                <div key={idx} className="bg-[#f5eedd] bg-opacity-70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-amber-100">
                  <span className="text-sm text-amber-700 block">{fact.label}</span>
                  <span className="text-xl font-bold text-amber-950">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image with Details */}
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="./map.jpg" 
                  alt="Ranthambore Fort" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* UNESCO Badge */}
              <div className="absolute -bottom-5 -right-5 bg-amber-700 text-[#f5eedd] p-4 rounded-lg shadow-lg transform rotate-3">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg className="w-10 h-10" viewBox="0 0 122.88 122.88" fill="currentColor">
                      <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM76.39,32.94c-.11-.32-.22-.64-.34-1l-2.18.95a33.67,33.67,0,0,0-47.74,0l-2.18-.95c-.12.32-.23.64-.34,1L26.8,34.06a33.3,33.3,0,0,0,.63,37.8l-3.7,3.7L30,81.84l6.28-6.28-3.65-3.65a26.23,26.23,0,0,1,32.89-39.8,26.37,26.37,0,0,1,24.75,33.52L86.6,62.28,92.88,68.56l6.28-6.28-3.7-3.7a33.51,33.51,0,0,0,.63-37.8l3.19-1.12c-.11-.32-.22-.64-.34-1L96.76,19.6A33.58,33.58,0,0,0,74.82,10h0L76.39,32.94ZM74.05,45.51c0,12.93-7.46,23.61-17.2,24.94V86.06l9.65,9.65L62.22,100l-4.64-4.64L53,100l-4.28-4.29,9.65-9.65V70.45c-9.74-1.33-17.2-12-17.2-24.94Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wide">UNESCO</p>
                    <p className="font-bold">World Heritage Site</p>
                  </div>
                </div>
              </div>
              
              {/* Location Badge */}
              <div className="absolute -top-5 -left-5 bg-[#f5eedd] text-amber-900 px-4 py-2 rounded-lg shadow-lg transform -rotate-3">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">Ranthambore, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Historical Timeline Cards */}
        <div className={`grid grid-cols-1 gap-8 mt-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Exploring Ranthambore's Legacy</h3>
          
          {cardContent.map((card, index) => (
            <div 
              key={index}
              className={`bg-[#f5eedd] rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                expandedCard === index ? 'ring-2 ring-amber-700' : 'hover:shadow-xl'
              }`}
            >
              <div className={`${
                expandedCard === index 
                  ? 'grid grid-cols-1 lg:grid-cols-3' 
                  : 'grid grid-cols-1 md:grid-cols-4'
              }`}>
                {/* Card Image */}
                <div className={`${
                  expandedCard === index ? 'lg:col-span-1' : 'md:col-span-1'
                } overflow-hidden relative`}>
                  <img 
                    src={card.image}
                    alt={card.title} 
                    className={`w-full h-full object-cover ${
                      expandedCard === index ? 'h-64 lg:h-full' : 'h-48 md:h-full'
                    }`}
                  />
                  {expandedCard !== index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 md:hidden">
                      <span className="text-white font-bold text-xl">{card.title}</span>
                    </div>
                  )}
                </div>
                
                {/* Card Content */}
                <div className={`${
                  expandedCard === index ? 'lg:col-span-2 p-8' : 'md:col-span-3 p-6'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-amber-900">{card.title}</h3>
                      <p className="text-amber-700 font-medium">{card.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className={`prose prose-amber max-w-none ${
                    expandedCard === index ? 'max-h-full' : 'max-h-24 overflow-hidden relative'
                  }`}>
                    <p className="text-amber-950">
                      {expandedCard === index ? card.fullContent : card.shortDesc}
                    </p>
                    {expandedCard !== index && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#f5eedd] to-transparent"></div>
                    )}
                  </div>
                  
                  <button 
                    className="mt-4 text-amber-800 font-bold hover:text-amber-900 transition-colors inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 rounded-md px-2 py-1"
                    onClick={(e) => toggleCard(index, e)}
                  >
                    {expandedCard === index ? (
                      <>
                        Show Less <ChevronUp size={18} />
                      </>
                    ) : (
                      <>
                        Learn More <ChevronDown size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tip Box */}
        <div className={`mt-16 transition-all duration-1000 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg shadow-md border-l-4 border-amber-700">
            <div className="flex items-start">
              <div className="bg-amber-200 p-2 rounded-full mr-4 mt-1">
                <Leaf size={24} className="text-amber-800" />
              </div>
              <div>
                <h4 className="font-bold text-amber-900 text-lg mb-2">Cultural Insight</h4>
                <p className="text-amber-950">
                  <span className="font-medium">Local Legend:</span> Don't miss the captivating stories shared by safari guides — these oral histories have been passed down through generations of local families, offering unique perspectives on the park's history and wildlife that you won't find in guidebooks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
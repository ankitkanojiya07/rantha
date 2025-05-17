import React, { useState } from 'react';
import { Clock, Info, ShoppingBag, ChevronRight, Camera, Users, X, ChevronDown } from 'lucide-react';

// Define strong TypeScript interfaces
interface InfoCard {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

interface SafariType {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  details: {
    capacity: string;
    cost: string;
    advantages: string[];
    bestFor: string[];
  };
}

// Modified InfoCard with Read More functionality for Safari Timings
const InfoCard: React.FC<InfoCard> = ({ icon, title, content }) => {
  // Only apply read more functionality for Safari Timings card
  const isSafariTimings = title === "Safari Timings";
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-[var(--color-surface)] rounded-lg shadow-lg p-6 border-t-4 border-[var(--color-accent)] hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-[var(--color-surface-alt)] rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] heading-serif">{title}</h3>
        </div>
        <div className="text-[var(--color-text-secondary)] flex-grow">
          {isSafariTimings ? (
            <>
              <div className={expanded ? "" : "line-clamp-4"}>
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Safari Schedule: An Overview</h4>
                <p className="mb-2">Please note that safari timings in Ranthambhore National Park shift slightly (approximately ±1 hour) depending on the season. Our team will confirm your exact safari timings when you arrive. Below is a general outline to help you plan:</p>
                
                <h5 className="font-semibold mt-3 mb-1">Arrival & Briefing</h5>
                <p className="mb-2">Upon your arrival in Ranthambhore — or at another convenient time — a member of our team will meet you at your hotel for a quick briefing. We'll walk you through your safari itinerary, answer any questions, and make sure you're fully prepared for the adventure ahead.</p>
                
                <h5 className="font-semibold mt-3 mb-1">Safari Departure from Hotel</h5>
                <ul className="list-disc pl-5 mb-2">
                  <li><strong>Morning Safari:</strong> Pick-up at approximately 06:00</li>
                  <li><strong>Afternoon Safari:</strong> Pick-up at approximately 14:00 <em>(Exact timings vary by season.)</em></li>
                </ul>
                <p>Your private Jeep, along with your experienced naturalist guide and driver, will meet you at your hotel. Unlike shared safaris, your private vehicle ensures a direct, non-stop journey to the park — no time wasted collecting other guests.</p>
                
                <h5 className="font-semibold mt-3 mb-1">Arrival at Ranthambhore National Park</h5>
                <ul className="list-disc pl-5 mb-2">
                  <li><strong>Morning Entry:</strong> Around 06:30</li>
                  <li><strong>Afternoon Entry:</strong> Around 14:30</li>
                </ul>
                <p>It typically takes about 20 minutes to reach the park entrance from most hotels. Thanks to your private Jeep, you'll enjoy an efficient and smooth entry process.</p>
                
                <h5 className="font-semibold mt-3 mb-1">Safari Exit from Ranthambhore National Park</h5>
                <ul className="list-disc pl-5 mb-2">
                  <li><strong>Morning Exit:</strong> Around 10:00</li>
                  <li><strong>Afternoon Exit:</strong> Around 18:00</li>
                </ul>
                <p>You're allowed to stay inside the park until these official exit times. However, with a private Jeep, you have the flexibility to end your safari earlier if you wish — whether it's after a memorable sighting or simply to return for some rest.</p>
                
                <h5 className="font-semibold mt-3 mb-1">Return to Hotel</h5>
                <ul className="list-disc pl-5 mb-2">
                  <li><strong>Morning Drop-off:</strong> Approximately 10:30</li>
                  <li><strong>Afternoon Drop-off:</strong> Approximately 18:30</li>
                </ul>
                <p>Morning safari guests typically return to a hearty breakfast at their hotel, while those on afternoon safaris arrive back just in time to relax before dinner or enjoy a sundowner drink. <em>(Exact timing varies depending on the season.)</em></p>
              </div>
              <button 
                onClick={toggleExpand} 
                className="flex items-center justify-center w-full mt-4 py-2 text-[var(--color-primary)] font-medium hover:text-[var(--color-primary)]/80 transition-colors border-t border-[var(--color-border)] pt-2"
              >
                {expanded ? "Show Less" : "Read More"}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </button>
            </>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable card component for safari types with click functionality
const SafariTypeCard: React.FC<SafariType & { onClick: () => void }> = ({ 
  title, description, image, icon, onClick 
}) => (
  <div 
    className="bg-[var(--color-surface)] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-1 group cursor-pointer" 
    onClick={onClick}
  >
    <div className="h-64 relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white flex items-center">
        <div className="mr-3">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

// Safari Detail Modal component
const SafariDetailModal: React.FC<{ 
  safari: SafariType | null; 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ safari, isOpen, onClose }) => {
  if (!isOpen || !safari) return null;

  return (
    <div className="fixed inset-0 bg-[var(--color-background)]/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--color-surface)] rounded-xl overflow-hidden max-w-4xl w-full relative animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-[var(--color-surface)] rounded-full p-1 shadow-md hover:bg-[var(--color-surface-alt)] transition-colors"
        >
          <X className="h-6 w-6 text-[var(--color-text-primary)]" />
        </button>
        
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="h-64 md:h-full relative">
              <img 
                src={safari.image} 
                alt={safari.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r"></div>
              <div className="absolute bottom-4 left-4 md:hidden">
                <div className="bg-amber-400 p-2 rounded-full inline-block mb-2">
                  {safari.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{safari.title}</h2>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-6">
            <div className="hidden md:block">
              <div className="flex items-center mb-4">
                <div className="bg-amber-400 p-2 rounded-full mr-3">
                  {safari.icon}
                </div>
                <h2 className="text-2xl font-bold text-green-900">{safari.title}</h2>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Vehicle Details</h3>
                <p className="text-gray-700 mb-1"><span className="font-medium">Capacity:</span> {safari.details.capacity}</p>
                <p className="text-gray-700"><span className="font-medium">Average Cost:</span> {safari.details.cost}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Advantages</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {safari.details.advantages.map((advantage, idx) => (
                    <li key={idx}>{advantage}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Best For</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {safari.details.bestFor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#booking" 
                className="inline-flex items-center px-5 py-2 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors mt-4"
              >
                Book This Safari
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SafariInfo: React.FC = () => {
  // State for modal
  const [selectedSafari, setSelectedSafari] = useState<SafariType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler to open modal with safari details
  const handleSafariClick = (safari: SafariType) => {
    setSelectedSafari(safari);
    setIsModalOpen(true);
  };

  // Handler to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Safari info cards data
  const infoCards: InfoCard[] = [
    {
      icon: <Clock className="h-8 w-8 text-[var(--color-text-primary)]" />,
      title: "Safari Timings",
      content: null // Content is handled directly in the InfoCard component
    },
    {
      icon: <Info className="h-8 w-8 text-[var(--color-text-primary)]" />,
      title: "Booking Tips",
      content: (
        <>
          <p className="mb-2">Book safaris through official websites at least 90 days in advance, especially during peak season (October-June).</p>
          <p className="mb-2">Carry a government-issued photo ID for mandatory park entry verification.</p>
          <p className="italic text-[var(--color-text-primary)] font-medium">Patience and silence are key virtues that often reward visitors with rare wildlife sightings.</p>
        </>
      )
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-[var(--color-text-primary)]" />,
      title: "Safari Essentials",
      content: (
        <>
          <p className="mb-2">Pack earth-toned attire (khaki, olive, brown), binoculars, wide-brimmed hat, SPF 50+ sunscreen, and sufficient water.</p>
          <p className="mb-2">For photography enthusiasts, telephoto lenses (200-600mm) are highly recommended for wildlife captures.</p>
          <p className="text-[var(--color-text-primary)] font-medium">Avoid perfumes and noisy accessories that might disturb wildlife.</p>
        </>
      )
    }
  ];

  // Safari types data with additional details
  const safariTypes: SafariType[] = [
    {
      title: "Gypsy Safari (6-Seater)",
      description: "More maneuverable, ideal for photography enthusiasts",
      image: "./g3.jpg", 
      icon: <Camera className="h-6 w-6 text-white" />,
      details: {
        capacity: "Maximum 6 visitors plus driver and guide",
        cost: "₹2,000 - ₹3,500 per person depending on zone and season",
        advantages: [
          "Greater maneuverability on narrow forest trails",
          "More personalized wildlife tracking experience",
          "Better opportunities for photography with less crowding",
          "Ability to reach more remote areas of the park"
        ],
        bestFor: [
          "Photography enthusiasts seeking optimal shooting conditions",
          "Wildlife aficionados wanting closer encounters",
          "Small families or intimate groups",
          "Those seeking a premium safari experience"
        ]
      }
    },
    {
      title: "Canter Safari (20-Seater)",
      description: "Cost-effective option, perfect for larger groups",
      image: "./g1.jpg",
      icon: <Users className="h-6 w-6 text-white" />,
      details: {
        capacity: "Up to 20 visitors with driver and guide",
        cost: "₹1,200 - ₹2,000 per person depending on zone and season",
        advantages: [
          "More economical option for budget travelers",
          "Higher seating position provides better visibility over vegetation",
          "Social experience with other wildlife enthusiasts",
          "Ideal for guided group interpretations"
        ],
        bestFor: [
          "Budget-conscious travelers",
          "Larger groups and families",
          "School or educational trips",
          "First-time safari-goers wanting a guided group experience"
        ]
      }
    }
  ];

  return (
    <section id="safari" className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] inline-block border-b-4 border-[var(--color-accent)] pb-2 heading-serif">
            Safari Information
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-3xl mx-auto text-lg body-sans">
            Embark on open Gypsy (6-seater) or Canter (20-seater) safaris through the wild terrains of Ranthambore. 
            Each safari is guided by experienced naturalists who share fascinating insights about the park's ecosystem.
          </p>
          <p className="mt-2 text-[var(--color-primary)] font-medium body-sans">
            Click on any safari type below to view detailed information
          </p>
        </div>

        {/* Safari Types */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {safariTypes.map((safariType, index) => (
            <div key={index} className="md:w-1/2">
              <SafariTypeCard 
                {...safariType} 
                onClick={() => handleSafariClick(safariType)}
              />
            </div>
          ))}
        </div>

        {/* Safari Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>

        {/* Safari Experience */}
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <div className="h-96 bg-cover bg-center relative">
            <img 
              src="./b1.jpg" 
              alt="Wildlife Safari Experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-background)]/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-6">
                <h3 className="text-3xl font-bold text-[var(--color-surface)] mb-4 heading-serif">Experience the Wild</h3>
                <p className="text-[var(--color-surface)] text-lg mb-8 body-sans">
                  Each safari drive in Ranthambore is a unique adventure, offering close encounters with 
                  the wild inhabitants of this magnificent terrain. The thrill of spotting a tiger amidst 
                  ancient ruins or watching a crocodile bask in the sun by the lakes is unparalleled.
                </p>
                <a 
                  href="#booking" 
                  className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-primary)] font-bold rounded-full hover:bg-[var(--color-surface)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                >
                  Book Your Safari
                  <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Safari Details */}
      <SafariDetailModal 
        safari={selectedSafari} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default SafariInfo;
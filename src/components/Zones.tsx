import React, { useState, useCallback } from 'react';
import { Map, X, Camera, Clock, Calendar, Award, AlertTriangle, ChevronRight } from 'lucide-react';

// Strong typing with appropriate interfaces
interface ZoneDetailedInfo {
  bestTime: string;
  difficulty: string;
  duration: string;
  wildlife: string[];
  photography: string;
  tips: string[];
}

interface ZoneData {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  detailedInfo: ZoneDetailedInfo;
}

type ZoneId = 'core' | 'buffer' | 'heritage';

// Separate data from component for cleaner organization
const ZONE_DATA: Record<ZoneId, ZoneData> = {
  core: {
    id: "core",
    name: "Zones (1-5)",
    description: "The prime tiger territories with higher chances of sightings. Zone 3 is particularly famous for lakes like Rajbagh and Padam Talao where tigers often come to drink water.",
    image: "./zone1.jpg",
    highlights:  [
      "Zone 1: T-101 (M), T-105(F), T-107(F) & T-39(F)",
      "Zone 2: T-84(F) with 3 cubs, T-101 (M), T-105(F), T-120(M), T-123(M)	",
      "Zone 3: T-124(F) with 3 cubs, T-120(M)	",
      "Zone 4: T-84(F) with 3 cubs, T-111(F), T-120(M), T-121(M), T-112(M)	",
      "Zone 5: T-120(M), T-121(M), T-125(F) with 2 cubs, T-2311(M), T-112(M)	"
    ],
    detailedInfo: {
      bestTime: "November to March, Early mornings (6:00-9:00 AM)",
      difficulty: "Moderate - Accessible by safari vehicle only",
      duration: "3-4 hours per safari",
      wildlife: [
        "Royal Bengal Tigers",
        "Leopards",
        "Sloth Bears",
        "Sambar Deer",
        "Indian Flying Fox"
      ],
      photography: "Excellent opportunities with natural light filtering through canopies. Zone 3 offers spectacular water reflection shots.",
      tips: [
        "Book at least 90 days in advance for these premium zones",
        "Morning safaris have 30% higher tiger sighting probability",
        "Bring a telephoto lens (200-600mm) for wildlife photography",
        "Zone 3 gets particularly busy - reserve early"
      ]
    }
  },
  buffer: {
    id: "buffer",
    name: "Zones (6-10)",
    description: "Less crowded but equally fascinating, these zones offer a more rustic experience. Zone 6 (Kundal) is known for its open meadows and exceptional birding opportunities.",
    image: "./zone2.jpg",
    highlights: [
      "Zone 6: 	T-39(F), T-108(M), T-127(F), T-101(M)",
      "Zone 7: T-108(M), T-127(F), T-8(F)",
      "Zone 8: 	T-2309(M), T-129(M), T-2310(F)",
      "Zone 9: T-108 (M), T-127(F)",
      "Zone 10: T-108(M), T-99(F), T-08(F), T-129(M),"
    ],
    detailedInfo: {
      bestTime: "Year-round, especially good during monsoon (July-September)",
      difficulty: "Easy to Moderate",
      duration: "2-3 hours per safari",
      wildlife: [
        "Nilgai (Blue Bull)",
        "Jackals",
        "Jungle Cats",
        "Indian Gazelle",
        "Over 270 bird species"
      ],
      photography: "Wide open landscapes provide fantastic panoramic shots. Golden hour lighting creates dramatic scenery.",
      tips: [
        "These zones are ideal for serious birdwatchers",
        "Easier to book last-minute compared to core zones",
        "Zone 10 offers the most peaceful experience with fewer vehicles",
        "Bring binoculars for distant wildlife observation"
      ]
    }
  },
  heritage: {
    id: "heritage",
    name: "Heritage Sites",
    description: "Discover the magnificent Ranthambore Fort, Jogi Mahal, and ancient temples within the park. These ruins tell tales of Rajput valor and the region's rich history.",
    image: "./zone3.png",
    highlights: [
      "Ranthambore Fort: 10th century UNESCO site",
      "Jogi Mahal: Ancient lakeside palace",
      "Ganesh Temple: Active pilgrimage spot",
      "Trinetra Ganesh Temple: One of the oldest Ganesh temples",
      "Ancient Step Wells: Historical water conservation systems"
    ],
    detailedInfo: {
      bestTime: "October to April, Early mornings for photography",
      difficulty: "Moderate - Involves walking and climbing",
      duration: "4-5 hours for complete exploration",
      wildlife: [
        "Langur Monkeys",
        "Peacocks",
        "Bats in the fort structures",
        "Occasional predator sightings near water bodies"
      ],
      photography: "Architectural photography paradise with stone textures and historical elements. Dawn light creates magical ambiance.",
      tips: [
        "Wear comfortable walking shoes for exploring the fort",
        "Carry water and sun protection",
        "Combine with Zone 3 safari for a complete day experience",
        "Respect religious sites and local customs"
      ]
    }
  }
};

// Separate subcomponents for better organization
const ZoneHighlight: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start">
    <span className="text-teal-500 mr-2">•</span>
    <span>{text}</span>
  </li>
);

const DetailInfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ 
  icon, 
  title, 
  children 
}) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
    <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
      {icon}
      {title}
    </h3>
    {children}
  </div>
);

const WildlifeTag: React.FC<{ name: string }> = ({ name }) => (
  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
    {name}
  </span>
);

const ZoneDetailModal: React.FC<{
  zone: ZoneData;
  onClose: () => void;
}> = ({ zone, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto" 
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={zone.image} 
            alt={zone.name}
            className="w-full h-72 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Close details"
          >
            <X size={24} className="text-gray-800" />
          </button>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-teal-800 mb-2">{zone.name}</h2>
          <p className="text-gray-600 mb-8 text-lg">{zone.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <DetailInfoCard 
              icon={<Clock className="mr-2 text-teal-600" size={20} />} 
              title="Best Time to Visit"
            >
              <p className="text-gray-700">{zone.detailedInfo.bestTime}</p>
            </DetailInfoCard>
            
            <DetailInfoCard 
              icon={<Calendar className="mr-2 text-teal-600" size={20} />} 
              title="Duration & Difficulty"
            >
              <p className="text-gray-700">
                <span className="font-medium">Duration:</span> {zone.detailedInfo.duration}<br />
                <span className="font-medium">Difficulty:</span> {zone.detailedInfo.difficulty}
              </p>
            </DetailInfoCard>
          </div>
          
          <DetailInfoCard 
            icon={<Award className="mr-2 text-teal-600" size={20} />} 
            title="Wildlife Highlights"
          >
            <div className="flex flex-wrap gap-2">
              {zone.detailedInfo.wildlife.map((animal, index) => (
                <WildlifeTag key={index} name={animal} />
              ))}
            </div>
          </DetailInfoCard>
          
          <div className="mt-6">
            <DetailInfoCard 
              icon={<Camera className="mr-2 text-teal-600" size={20} />} 
              title="Photography"
            >
              <p className="text-gray-700">{zone.detailedInfo.photography}</p>
            </DetailInfoCard>
          </div>
          
          <div className="mt-6">
            <DetailInfoCard 
              icon={<AlertTriangle className="mr-2 text-teal-600" size={20} />} 
              title="Essential Tips"
            >
              <ul className="space-y-2">
                {zone.detailedInfo.tips.map((tip, index) => (
                  <ZoneHighlight key={index} text={tip} />
                ))}
              </ul>
            </DetailInfoCard>
          </div>
          
          <div className="mt-8 flex justify-between items-center">
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Close
            </button>
            
            <a 
              href="#booking" 
              className="px-6 py-3 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={onClose}
            >
              Book Safari
              <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Zones: React.FC = () => {
  const [activeZone, setActiveZone] = useState<ZoneId>("core");
  const [showDetailedView, setShowDetailedView] = useState(false);
  
  const handleExploreClick = useCallback(() => {
    setShowDetailedView(true);
  }, []);

  const closeDetailedView = useCallback(() => {
    setShowDetailedView(false);
  }, []);

  const currentZone = ZONE_DATA[activeZone];

  return (
    <section id="zones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 inline-block border-b-4 border-teal-400 pb-2">
            Explore Park Zones
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            Ranthambore is divided into 10 zones, each offering unique wildlife experiences and landscapes. 
            From open grasslands to dense forests and serene lakes, every zone has its own charm.
          </p>
        </div>

        {/* Zone Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.keys(ZONE_DATA).map((zoneKey) => {
            const zone = ZONE_DATA[zoneKey as ZoneId];
            return (
              <button
                key={zone.id}
                className={`px-6 py-3 rounded-full font-bold mx-2 mb-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  activeZone === zone.id 
                    ? 'bg-teal-700 text-white shadow-md' 
                    : 'bg-white text-teal-700 hover:bg-teal-100 shadow-sm'
                }`}
                onClick={() => setActiveZone(zone.id as ZoneId)}
                aria-pressed={activeZone === zone.id}
                aria-label={`View ${zone.name}`}
              >
                {zone.name}
              </button>
            );
          })}
        </div>

        {/* Zone Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={currentZone.image} 
                alt={currentZone.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">{currentZone.name}</h3>
              <p className="text-gray-700 mb-6 text-lg">{currentZone.description}</p>
              
              <h4 className="text-lg font-bold text-teal-500 mb-3 flex items-center">
                <Map className="mr-2 text-teal-600" size={18} />
                Zone Highlights Tiger
              </h4>
              <ul className="space-y-2 text-gray-700 mb-8">
                {currentZone.highlights.map((highlight, index) => (
                  <ZoneHighlight key={index} text={highlight} />
                ))}
              </ul>
              
              <div className="mt-8">
                <button 
                  onClick={handleExploreClick}
                  className="inline-flex items-center px-6 py-3 bg-teal-400 text-teal-900 font-bold rounded-full hover:bg-teal-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                  aria-label={`Explore ${currentZone.name} in detail`}
                >
                  Explore {currentZone.name}
                  <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tip Section */}
        <div className="mt-12 bg-teal-700 text-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold mb-3 flex items-center">
            <Award className="mr-2" size={20} />
            Pro Tip
          </h4>
          <p className="text-lg">Early morning safaris often have more wildlife movement and better photography opportunities!</p>
        </div>
      </div>

      {/* Detailed View Modal - Only render when needed */}
      {showDetailedView && (
        <ZoneDetailModal
          zone={currentZone}
          onClose={closeDetailedView}
        />
      )}
    </section>
  );
};

export default Zones;
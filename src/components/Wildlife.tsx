import React, { useEffect, useState, useCallback } from 'react';
import { Bird, Camera, Map, Calendar, Info, Footprints, X, Leaf, Fish, ChevronDown, ChevronUp, Search, ExternalLink, Heart, Clock } from 'lucide-react';

// Interface for wildlife cards
interface WildlifeCard {
  id: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  fullContent: string;
  tags: string[];
}

// Interface for species
interface Species {
  id: string;
  name: string;
  image: string;
  description: string;
  conservationStatus?: string;
  scientificName?: string;
}

// Interface for Flora and Fauna items
interface NatureItem {
  id: string;
  name: string;
  image: string;
  description: string;
  category: 'flora' | 'fauna';
  scientificName: string;
  significance?: string;
}

// Interface for Safari Season
interface SafariSeason {
  season: string;
  months: string;
  highlights: string;
  conditions: string;
}

// Interface for Wildlife Category
interface WildlifeCategory {
  title: string;
  icon: React.ReactNode;
  species: Species[];
}

// Main Wildlife Component
const Wildlife: React.FC = () => {
  const [animateCount, setAnimateCount] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showFlora, setShowFlora] = useState(false);
  const [showFauna, setShowFauna] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'species' | 'conservation'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSpecies, setFilteredSpecies] = useState<Species[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Species | null>(null);

  const wildlifeCategories: WildlifeCategory[] = [
    {
      title: "Apex Predators",
      icon: <Footprints className="h-8 w-8 text-[var(--color-primary)]" />,
      species: [
        {
          id: "royal-bengal-tiger",
          name: "Royal Bengal Tiger",
          image: "./l4.jpg",
          description: "The apex predator of Ranthambore, each individual can be identified by its unique stripe pattern. Known for their majestic presence, these tigers are often spotted near water bodies.",
          conservationStatus: "Endangered",
          scientificName: "Panthera tigris tigris"
        },
        {
          id: "indian-leopard",
          name: "Indian Leopard",
          image: "./leo.jpg",
          description: "Masters of stealth, these elusive cats are often seen in the Kachida Valley. They're adaptable hunters who can often be found resting on tree branches during hot days.",
          conservationStatus: "Vulnerable",
          scientificName: "Panthera pardus fusca"
        }
      ]
    },
    {
      title: "Other Predators",
      icon: <Info className="h-8 w-8 text-[var(--color-primary)]" />,
      species: [
        {
          id: "caracal-hyena",
          name: "Caracals & Striped Hyenas",
          image: "./ll.jpg",
          description: "Caracals are identified by their distinctive ear tufts, while striped hyenas are nocturnal scavengers with remarkable jaws strong enough to crush bones.",
          conservationStatus: "Near Threatened",
          scientificName: "Caracal caracal & Hyaena hyaena"
        },
        {
          id: "jackals-civets",
          name: "Jackals & Indian Civets",
          image: "./jj.jpg",
          description: "Golden jackals are opportunistic omnivores, while the palm civet is a nocturnal mammal with a distinctive mask-like facial pattern.",
          conservationStatus: "Least Concern",
          scientificName: "Canis aureus & Viverra zibetha"
        },
        {
          id: "honey-badgers",
          name: "Honey Badgers",
          image: "/api/placeholder/400/300",
          description: "Known for their fearless nature, honey badgers have thick skin that's nearly impervious to animal bites and stings. They're among the most resilient creatures in the park.",
          conservationStatus: "Least Concern",
          scientificName: "Mellivora capensis"
        }
      ]
    },
    {
      title: "Avian Biodiversity",
      icon: <Bird className="h-8 w-8 text-[var(--color-primary)]" />,
      species: [
        {
          id: "painted-storks",
          name: "Painted Storks",
          image: "./pp.webp",
          description: "These colorful wading birds gather at Ranthambore's lakes, where they can be seen performing elaborate courtship displays during breeding season.",
          conservationStatus: "Near Threatened",
          scientificName: "Mycteria leucocephala"
        },
        {
          id: "kingfishers-vultures",
          name: "Kingfishers & Vultures",
          image: "./kk.jpg",
          description: "Several kingfisher species add vibrant flashes of color to the park, while vultures play a crucial ecological role as nature's cleanup crew.",
          conservationStatus: "Critically Endangered (vultures)",
          scientificName: "Alcedo atthis & Gyps bengalensis"
        }
      ]
    }
  ];

  // All species combined from categories for search
  const allSpecies: Species[] = wildlifeCategories.flatMap(category => category.species);

  // Handle search input change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.length > 0) {
      const filtered = allSpecies.filter(species => 
        species.name.toLowerCase().includes(term) || 
        (species.scientificName && species.scientificName.toLowerCase().includes(term)) ||
        species.description.toLowerCase().includes(term)
      );
      setFilteredSpecies(filtered);
    } else {
      setFilteredSpecies([]);
    }
  }, [allSpecies]);

  // Toggle modal for species detail
  const toggleModal = (species: Species | null) => {
    setModalContent(species);
    setIsModalOpen(!!species);
  };

  useEffect(() => {
    const handleScroll = () => {
      const countersSection = document.getElementById('wildlife-counters');
      if (countersSection) {
        const rect = countersSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimateCount(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Wildlife cards data with expanded content
  const wildlifeCards: WildlifeCard[] = [
    {
      id: "bengal-tiger",
      title: "Royal Bengal Tiger",
      description: "The apex predator of Ranthambore, each tiger has unique stripe patterns and territories. The park's success story has led to a thriving population of over 70 tigers.",
      image: "./l4.jpg",
      linkText: "Tiger Conservation",
      tags: ['predator', 'endangered', 'carnivore'],
      fullContent: "The Royal Bengal Tiger (Panthera tigris tigris) is the crowning glory of Ranthambore National Park. These majestic creatures can weigh up to 250 kg for males and 150 kg for females. Each tiger has a unique stripe pattern, much like human fingerprints, allowing rangers to identify individuals. Tigers are territorial animals, with males commanding territories up to 100 sq km while females maintain smaller ranges of 20-30 sq km.\n\nRanthambore's success in tiger conservation has been remarkable, with numbers growing from near extinction in the 1970s to over 70 individuals today. The park has played a pivotal role in Project Tiger, India's flagship conservation program launched in 1973.\n\nThe best time to spot these magnificent animals is during the hot summer months when they frequently visit water bodies to cool off. Zones 2, 3, and 4 of the park are known hotspots for tiger sightings, particularly around lakes and water holes.\n\nConservation efforts have been bolstered by strict anti-poaching measures, habitat restoration programs, and community involvement. Local communities now actively participate in conservation through eco-tourism initiatives, creating a sustainable model for wildlife protection."
    },
    {
      id: "other-predators",
      title: "Diverse Predators",
      description: "The forests harbor leopards, caracals, striped hyenas, jackals, and the elusive Indian civets. Kachida Valley is especially known for leopard sightings.",
      image: "./leo.jpg",
      linkText: "Predator Ecosystem",
      tags: ['predator', 'carnivore', 'nocturnal'],
      fullContent: "While tigers may be the stars of Ranthambore, the park's predator diversity is equally impressive. Leopards (Panthera pardus) are the second largest big cats in the park, known for their stealth and adaptability. Unlike tigers, they often drag their prey up into trees to avoid competition from other predators. The Kachida Valley area of the park is particularly known for leopard sightings.\n\nCaracals, with their distinctive long ear tufts, are rarely spotted but inhabit the drier regions of the park. These medium-sized cats are remarkable hunters, capable of leaping up to 3 meters in the air to catch birds in flight.\n\nStriped hyenas are nocturnal scavengers with incredibly powerful jaws that can crush bones with ease. Despite their reputation, hyenas are important for ecosystem health, cleaning up carcasses and preventing the spread of disease.\n\nGolden jackals operate in pairs or small family packs, playing a crucial role in the ecosystem as both scavengers and predators of smaller animals. Their distinctive calls can often be heard at dawn and dusk.\n\nIndian civets are nocturnal and elusive, identifiable by their distinctive masked face and ringed tail. These predators maintain the delicate balance of Ranthambore's ecosystem by controlling herbivore populations and helping in seed dispersal through their frugivorous diet."
    },
    {
      id: "bird-paradise",
      title: "Avian Diversity",
      description: "With over 300 bird species including painted storks, kingfishers, eagles, and vultures, Ranthambore is a birdwatcher's paradise throughout the year.",
      image: "./peo.jpg",
      linkText: "Ornithological Guide",
      tags: ['birds', 'migratory', 'resident'],
      fullContent: "Ranthambore National Park is a haven for bird enthusiasts with its rich avifauna comprising over 300 species. The park's varied habitats, from wetlands to deciduous forests, support an impressive diversity of birdlife. Padam Talao, Malik Talao, and Rajbagh Lake are excellent spots for observing water birds.\n\nPainted storks arrive in large numbers during the monsoon and winter seasons, creating spectacular nesting colonies. Their distinctive pink tertial feathers and yellow-tipped bills make them easy to identify even from a distance.\n\nThe park hosts six species of kingfishers, including the vibrant common kingfisher and the larger pied kingfisher. These birds can often be spotted perched near water bodies, diving with precision to catch small fish.\n\nRaptors are well-represented with crested serpent eagles, shikra, and the endangered Indian vultures patrolling the skies. The decline in vulture populations across India makes Ranthambore an important refuge for these scavengers that are vital to ecosystem health.\n\nThe best times for birdwatching are early mornings and late afternoons when birds are most active. During winter months (November to February), migratory birds from as far as Siberia and Europe make Ranthambore their temporary home. Notable winter visitors include the bar-headed geese, northern pintail, and the occasional greater flamingo.\n\nDedicated bird tours can be arranged through the park management for serious birders, often led by local experts with intimate knowledge of bird habitats and behaviors."
    }
  ];

  // Census counters data
  const counters = [
    { number: 70, label: "Royal Bengal Tigers", symbol: "+" },
    { number: 300, label: "Bird Species", symbol: "+" },
    { number: 40, label: "Leopards", symbol: "+" },
    { number: 10, label: "Safari Zones", symbol: "" }
  ];

  // Wildlife categories for detailed cards
  
  // Safari tips data
  const safariTips = [
    {
      icon: <Camera className="h-6 w-6" />,
      tip: "Bring a camera with a good zoom lens (at least 300mm) for wildlife photography. Keep spare batteries and memory cards."
    },
    {
      icon: <Map className="h-6 w-6" />,
      tip: "Zones 2, 3, and 4 offer the highest chances of tiger sightings. Request these zones when booking your safari."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      tip: "Book morning safaris (6:00 AM) for the best lighting conditions and highest animal activity."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      tip: "Be punctual; safari vehicles depart exactly on schedule. Arrive at least 30 minutes before departure."
    }
  ];

  // Safari seasons data
  const safariSeasons: SafariSeason[] = [
    {
      season: "Winter",
      months: "November to February",
      highlights: "Comfortable temperatures, migratory birds, active predators in mid-morning",
      conditions: "Cool mornings (5-10°C), warm afternoons (20-25°C), excellent visibility"
    },
    {
      season: "Summer",
      months: "March to June",
      highlights: "Highest tiger sighting probability near water bodies, lush flora blooming",
      conditions: "Hot (30-45°C), dry, animals concentrate around water sources"
    },
    {
      season: "Monsoon",
      months: "July to October",
      highlights: "Lush green landscapes, breeding season for many species, fewer tourists",
      conditions: "Park partially closed July-September, sporadic rainfall, humid"
    }
  ];

  // Flora and Fauna detailed items
  const natureItems: NatureItem[] = [
    // Flora items
    {
      id: "banyan-tree",
      name: "Banyan Tree",
      image: "./banyan tree.jpg",
      description: "One of India's second-largest banyan trees can be found in Ranthambore. These magnificent trees provide shelter to numerous bird species and are often meeting points for wildlife.",
      category: 'flora',
      scientificName: "Ficus benghalensis",
      significance: "Sacred in Hindu tradition, these trees support entire ecosystems with their vast canopies."
    },
    {
      id: "dhok-tree",
      name: "Dhok Tree",
      image: "./dhok tree.webp",
      description: "Covering over 80% of the forest, Dhok trees are the dominant species in Ranthambore. Their leaves are a favorite food source for many herbivores, and they are well-adapted to the arid conditions of the region.",
      category: 'flora',
      scientificName: "Anogeissus pendula",
      significance: "Critical to the ecosystem, providing food and habitat for numerous species."
    },
    {
      id: "ghost-tree",
      name: "Indian Ghost Tree",
      image: "./ghost tree.jpg",
      description: "Known locally as 'Kullu', these trees have a pale, ghostly appearance. They shed their bark each year, revealing a smooth white surface that appears to glow under moonlight.",
      category: 'flora',
      scientificName: "Sterculia urens",
      significance: "Produces valuable gum karaya and adds unique aesthetic value to the landscape."
    },
    {
      id: "flame-forest",
      name: "Flame of the Forest",
      image: "./flame.jpg",
      description: "This deciduous tree produces vibrant orange-red flowers during spring, creating a spectacular contrast against the dried landscape. The flowers are rich in nectar, attracting numerous pollinators.",
      category: 'flora',
      scientificName: "Butea monosperma",
      significance: "Important for pollinator species and traditional medicine."
    },
    // Fauna items
    {
      id: "sloth-bear",
      name: "Sloth Bear",
      image: "./sloth.jpg",
      description: "These shaggy-coated bears are specialized in feeding on termites and ants. With their powerful claws, they can tear open hardened termite mounds and use their elongated snout to blow away dirt before sucking up insects.",
      category: 'fauna',
      scientificName: "Melursus ursinus",
      significance: "Vulnerable species with specialized ecological niche as insectivores."
    },
    {
      id: "sambar-deer",
      name: "Sambar Deer",
      image: "./deer.jpg",
      description: "The largest deer species in the Indian subcontinent, the Sambar is an important prey species for tigers. They often give alarm calls when predators are nearby, alerting other animals and safari visitors.",
      category: 'fauna',
      scientificName: "Rusa unicolor",
      significance: "Key prey species that supports tiger populations."
    },
    {
      id: "marsh-crocodile",
      name: "Marsh Crocodile",
      image: "./croc.jpg",
      description: "Also known as mugger crocodiles, these reptiles can be spotted basking along the shores of Ranthambore's lakes. They can grow up to 4-5 meters in length and play an important role as apex predators in aquatic ecosystems.",
      category: 'fauna',
      scientificName: "Crocodylus palustris",
      significance: "Vulnerable species that regulates aquatic ecosystems."
    },
    {
      id: "indian-python",
      name: "Indian Python",
      image: "./indian python.jpg",
      description: "These non-venomous constrictors can reach lengths of up to 6 meters. They are ambush predators, relying on their camouflage to surprise prey, which they then constrict and swallow whole.",
      category: 'fauna',
      scientificName: "Python molurus",
      significance: "Near threatened species that controls rodent populations."
    }
  ];

  // Conservation initiatives
  const conservationInitiatives = [
    {
      title: "Anti-Poaching Units",
      description: "Specialized teams patrol the park boundaries 24/7 using advanced surveillance technology to prevent poaching activities."
    },
    {
      title: "Habitat Restoration",
      description: "Ongoing projects to restore degraded areas, maintain water bodies, and create wildlife corridors connecting fragmented habitats."
    },
    {
      title: "Community Engagement",
      description: "Programs involving local communities in conservation through eco-tourism, sustainable livelihoods, and environmental education."
    },
    {
      title: "Scientific Research",
      description: "Collaboration with research institutions for monitoring wildlife populations, studying behavior patterns, and implementing evidence-based conservation strategies."
    }
  ];

  // Filter items by category
  const floraItems = natureItems.filter(item => item.category === 'flora');
  const faunaItems = natureItems.filter(item => item.category === 'fauna');

  return (
    <section id="wildlife" className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] inline-block border-b-4 border-[var(--color-accent)] pb-2 heading-serif">
            Wilderness of Ranthambore
          </h2>
          <p className="mt-6 text-[var(--color-text-secondary)] max-w-3xl mx-auto text-lg body-sans">
            Discover the extraordinary biodiversity that makes Ranthambore National Park a crown jewel of India's natural heritage
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">          <div className="flex items-center bg-[var(--color-surface)] rounded-lg shadow-md overflow-hidden border border-[var(--color-border)]">
            <input
              type="text"
              placeholder="Search species..."
              className="w-full py-3 px-4 outline-none bg-[var(--color-surface)] text-[var(--color-text-primary)]"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="px-4 text-[var(--color-text-secondary)]">
              <Search className="h-5 w-5" />
            </div>
          </div>
            
            {/* Search Results */}
            {searchTerm.length > 0 && (
              <div className="absolute z-10 bg-[var(--color-surface)] shadow-lg rounded-lg mt-2 w-full max-h-64 overflow-y-auto">
                {filteredSpecies.length > 0 ? (
                  <ul className="divide-y divide-[var(--color-border)]">
                    {filteredSpecies.map((species) => (
                      <li 
                        key={species.id} 
                        className="p-3 hover:bg-[var(--color-surface-alt)] cursor-pointer flex items-center"
                        onClick={() => {
                          toggleModal(species);
                          setSearchTerm('');
                        }}
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img 
                            src={species.image} 
                            alt={species.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] heading-serif">{species.name}</h4>
                          <p className="text-xs text-[var(--color-text-secondary)] italic body-sans">{species.scientificName}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-[var(--color-text-secondary)]">
                    No species found matching "{searchTerm}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[var(--color-surface)] rounded-lg shadow-md p-1">
            <button 
              className={`px-4 py-2 font-medium rounded-md transition body-sans ${activeTab === 'overview' ? 'bg-[var(--color-primary)] text-[var(--color-surface)]' : 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 font-medium rounded-md transition body-sans ${activeTab === 'species' ? 'bg-[var(--color-primary)] text-[var(--color-surface)]' : 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]'}`}
              onClick={() => setActiveTab('species')}
            >
              Species Guide
            </button>
            <button 
              className={`px-4 py-2 font-medium rounded-md transition body-sans ${activeTab === 'conservation' ? 'bg-[var(--color-primary)] text-[var(--color-surface)]' : 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]'}`}
              onClick={() => setActiveTab('conservation')}
            >
              Conservation
            </button>
          </div>
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Main Wildlife Cards - Now Clickable */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {wildlifeCards.map((card) => (                  <div key={card.id} className="relative">
                  <div 
                    className="bg-[var(--color-surface)] rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                    onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent p-3">
                        <div className="flex flex-wrap gap-2">
                          {card.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs font-medium bg-[var(--color-surface)]/90 text-[var(--color-text-primary)] px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t-4 border-[var(--color-accent)]">
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 heading-serif">{card.title}</h3>
                      <p className="text-[var(--color-text-secondary)] mb-4 body-sans">{card.description}</p>
                      <div className="inline-flex items-center text-[var(--color-text-primary)] font-bold relative group">
                        {expandedCard === card.id ? "Show Less" : card.linkText}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expandedCard === card.id ? 'rotate-180' : ''}`} />
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  {expandedCard === card.id && (
                    <div className="bg-[var(--color-surface)] rounded-lg shadow-xl p-6 mt-4 border-l-4 border-[var(--color-accent)] relative">
                      <button 
                        className="absolute top-3 right-3 p-1 bg-[var(--color-surface-alt)] rounded-full hover:bg-[var(--color-surface-alt)]/80 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(null);
                        }}
                      >
                        <X className="h-5 w-5 text-[var(--color-text-primary)]" />
                      </button>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 heading-serif">{card.title} - Detailed Information</h3>
                      <p className="text-[var(--color-text-secondary)] whitespace-pre-line leading-relaxed body-sans">{card.fullContent}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Wildlife Census Counter Section */}
            <div id="wildlife-counters" className="bg-[var(--color-surface)] rounded-lg shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-center text-[var(--color-text-primary)] mb-8 heading-serif">Wildlife Census Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {counters.map((counter, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2 flex justify-center items-center">
                      {animateCount ? (
                        <CountUp end={counter.number} duration={2} />
                      ) : (
                        "0"
                      )}
                      {counter.symbol}
                    </div>
                    <div className="text-[var(--color-text-secondary)] body-sans">{counter.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safari Season Selector */}
            <div className="bg-[var(--color-surface-alt)] rounded-lg shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-center text-[var(--color-text-primary)] mb-6 heading-serif">Best Times to Visit</h3>
              <p className="text-[var(--color-text-secondary)] text-center mb-8 body-sans">
                Select a season to discover the unique wildlife experiences each time of year offers
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {safariSeasons.map((season) => (
                  <button
                    key={season.season}
                    className={`px-6 py-3 rounded-lg font-medium transition-all body-sans ${
                      selectedSeason === season.season 
                        ? 'bg-[var(--color-primary)] text-[var(--color-surface)] shadow-md' 
                        : 'bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]/90'
                    }`}
                    onClick={() => setSelectedSeason(selectedSeason === season.season ? null : season.season)}
                  >
                    {season.season} Season
                  </button>
                ))}
              </div>
              
              {selectedSeason && (
                <div className="bg-[var(--color-surface)] rounded-lg p-6 shadow-md">
                  {safariSeasons.filter(s => s.season === selectedSeason).map((season) => (
                    <div key={season.season}>
                      <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 heading-serif">
                        {season.season} Season ({season.months})
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-[var(--color-text-primary)] mb-2 heading-serif">Wildlife Highlights</h5>
                          <p className="text-[var(--color-text-secondary)] body-sans">{season.highlights}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-[var(--color-text-primary)] mb-2 heading-serif">Weather Conditions</h5>
                          <p className="text-[var(--color-text-secondary)] body-sans">{season.conditions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

           {/* Safari Tips Section */}
           {/* Safari Insider Tips Component with matching styling */}
<div className="bg-[var(--color-surface-alt)] rounded-lg shadow-lg p-8 mb-16">
  <h3 className="text-2xl font-bold text-center text-[var(--color-text-primary)] mb-6 heading-serif">Safari Insider Tips</h3>
  <p className="text-[var(--color-text-secondary)] text-center mb-8 body-sans">
    Essential guidance to make the most of your wildlife adventure in Ranthambore
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {safariTips.map((tip, index) => (
      <div key={index} className="flex items-start bg-[var(--color-surface)] p-4 rounded-lg shadow-md">
        <div className="bg-[var(--color-primary)] p-3 rounded-full text-[var(--color-surface)] mr-4 flex-shrink-0">
          {tip.icon}
        </div>
        <p className="text-[var(--color-text-secondary)] body-sans">{tip.tip}</p>
      </div>
    ))}
  </div>

              <div className="text-center mt-10">
                <p className="italic font-medium text-lg mb-6 text-[var(--color-text-primary)] body-serif">
                  "The true joy of Ranthambore lies in its unpredictability — each visit reveals a new chapter in the jungle's ever-unfolding story."
                </p>
                <a href="#booking" className="inline-block px-6 py-3 bg-[var(--color-primary)] text-[var(--color-surface)] font-bold rounded-lg shadow-md hover:bg-[var(--color-primary)]/90 transition-colors">
                  Book Your Safari Experience
                </a>
              </div>
            </div>

            {/* Flora and Fauna Section with Interactive Cards */}
            <div className="bg-[var(--color-surface-alt)] rounded-lg p-8 mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="md:w-1/2">
                  <div 
                    className="flex items-center mb-4 cursor-pointer" 
                    onClick={() => setShowFlora(!showFlora)}
                  >
                    <div className="p-2 bg-[var(--color-surface)] rounded-full mr-3">
                      <Leaf className="h-6 w-6 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] heading-serif">
                      Flora Highlights
                    </h3>
                    <div className="ml-2">
                      {showFlora ? 
                        <ChevronUp className="h-5 w-5 text-[var(--color-text-primary)]" /> : 
                        <ChevronDown className="h-5 w-5 text-[var(--color-text-primary)]" />
                      }
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 text-[var(--color-text-secondary)] space-y-2 mb-6 body-sans">
                    <li>Ancient banyan trees, some among India's oldest</li>
                    <li>Dhok forest (Anogeissus pendula), covering over 80% of the park</li>
                    <li>Medicinal plants with traditional Ayurvedic importance</li>
                    <li>Seasonal flowering species creating vibrant landscapes</li>
                  </ul>
                  
                  <div 
                    className="flex items-center mb-4 cursor-pointer"
                    onClick={() => setShowFauna(!showFauna)}
                  >
                    <div className="p-2 bg-[var(--color-surface)] rounded-full mr-3">
                      <Fish className="h-6 w-6 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] heading-serif">
                      Fauna Diversity
                    </h3>
                    <div className="ml-2">
                      {showFauna ? 
                        <ChevronUp className="h-5 w-5 text-[var(--color-text-primary)]" /> : 
                        <ChevronDown className="h-5 w-5 text-[var(--color-text-primary)]" />
                      }
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 text-[var(--color-text-secondary)] space-y-2 body-sans">
                    <li>40+ mammal species including tigers, leopards, sloth bears</li>
                    <li>300+ bird species, both resident and migratory</li>
                    <li>Diverse reptiles including marsh crocodiles and pythons</li>
                    <li>Rich insect life supporting the forest's ecosystem</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="./colab.jpg" 
                      alt="Ranthambore Wildlife"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-background)]/90 to-transparent p-4">
                      <p className="text-[var(--color-surface)] font-bold italic body-serif">
                        "Ranthambore's lakes and watering holes are biodiversity hotspots where multiple species converge — creating a microcosm of the jungle's ecosystem."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Flora Cards - Expandable Section */}
              {showFlora && (
                <div className="mt-8 animate-fadeIn">
                  <h4 className="text-xl font-semibold text-[#2A4010] mb-4 border-b-2 border-[#BBB157] pb-2 flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    Flora Species Guide
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {floraItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-bold text-[#2A4010] mb-1">{item.name}</h5>
                          <p className="text-xs italic text-gray-500 mb-2">{item.scientificName}</p>
                          <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
                          {item.significance && (
                            <div className="mt-2 pt-2 border-t border-gray-100">
                              <p className="text-xs font-medium text-[#2A4010]">Ecological Significance:</p>
                              <p className="text-xs text-gray-600">{item.significance}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Fauna Cards - Expandable Section */}
              {showFauna && (
                <div className="mt-8 animate-fadeIn">
                  <h4 className="text-xl font-semibold text-[#2A4010] mb-4 border-b-2 border-[#BBB157] pb-2 flex items-center">
                    <Fish className="h-5 w-5 mr-2" />
                    Fauna Species Guide
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {faunaItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-bold text-[#2A4010] mb-1">{item.name}</h5>
                          <p className="text-xs italic text-gray-500 mb-2">{item.scientificName}</p>
                          <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
                          {item.significance && (
                            <div className="mt-2 pt-2 border-t border-gray-100">
                              <p className="text-xs font-medium text-[#2A4010]">Conservation Status:</p>
                              <p className="text-xs text-gray-600">{item.significance}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Species Tab Content */}
        {activeTab === 'species' && (
          <div className="bg-[var(--color-surface)] rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center border-b-2 border-[var(--color-accent)] pb-4 heading-serif">
              Comprehensive Species Guide
            </h3>
            
            {wildlifeCategories.map((category, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-[var(--color-surface-alt)] rounded-full mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] heading-serif">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.species.map((animal) => (
                    <div 
                      key={animal.id} 
                      className="bg-[var(--color-surface)] rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-[var(--color-border)] cursor-pointer"
                      onClick={() => toggleModal(animal)}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={animal.image} 
                          alt={animal.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                        {animal.conservationStatus && (
                          <div className="absolute top-3 right-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              animal.conservationStatus.includes('Endangered') || animal.conservationStatus.includes('Critically') 
                                ? 'bg-red-500 text-[var(--color-surface)]' 
                                : animal.conservationStatus.includes('Vulnerable') || animal.conservationStatus.includes('Near') 
                                  ? 'bg-yellow-400 text-[var(--color-text-primary)]'
                                  : 'bg-green-500 text-[var(--color-surface)]'
                            }`}>
                              {animal.conservationStatus}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 border-t-4 border-[var(--color-accent)]">
                        <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 heading-serif">{animal.name}</h4>
                        <p className="text-sm italic text-[var(--color-text-secondary)] mb-3 body-sans">
                          {animal.scientificName}
                        </p>
                        <p className="text-[var(--color-text-secondary)] line-clamp-3 body-sans">{animal.description}</p>
                        <div className="flex items-center mt-4 text-[var(--color-text-primary)] font-medium">
                          View Details
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conservation Tab Content */}
        {activeTab === 'conservation' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#2A4010] mb-4 text-center">
              Conservation Efforts at Ranthambore
            </h3>
            <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              Ranthambore National Park stands as a testament to successful conservation initiatives that have brought the tiger population back from the brink of extinction
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#F0F2E3] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#2A4010] mb-4 border-b-2 border-[#BBB157] pb-2">Success Story</h4>
                <p className="text-gray-700 mb-4">
                  In the 1970s, Ranthambore's tiger population was critically endangered with fewer than 20 individuals. Through Project Tiger and dedicated conservation efforts, the park now hosts over 70 tigers, representing one of India's most successful conservation initiatives.
                </p>
                <p className="text-gray-700">
                  This recovery demonstrates how strategic conservation management, habitat protection, and community involvement can reverse the decline of endangered species. Today, Ranthambore serves as a global model for tiger conservation.
                </p>
              </div>
              
              <div className="bg-[#F0F2E3] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#2A4010] mb-4 border-b-2 border-[#BBB157] pb-2">Ongoing Challenges</h4>
                <p className="text-gray-700 mb-4">
                  Despite its successes, Ranthambore faces continuing challenges including habitat fragmentation, human-wildlife conflict, and pressure from development and tourism activities around the park's periphery.
                </p>
                <p className="text-gray-700">
                  Conservation authorities are working to address these challenges through wildlife corridors, buffer zone management, and sustainable eco-tourism practices that balance visitor experience with the needs of wildlife.
                </p>
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-[#2A4010] mb-6 text-center">Key Conservation Initiatives</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {conservationInitiatives.map((initiative, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                  <h5 className="font-bold text-[#2A4010] mb-3 border-b border-[#BBB157] pb-2">{initiative.title}</h5>
                  <p className="text-gray-600 text-sm">{initiative.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-[#2A4010] text-white p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-6 text-center">How Visitors Can Contribute</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="p-3 bg-[#BBB157] rounded-full mb-4">
                    <Camera className="h-6 w-6 text-[#2A4010]" />
                  </div>
                  <h5 className="font-bold mb-2">Responsible Tourism</h5>
                  <p className="text-sm">Follow park guidelines, maintain silence during safaris, and respect wildlife boundaries</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="p-3 bg-[#BBB157] rounded-full mb-4">
                    <Heart className="h-6 w-6 text-[#2A4010]" />
                  </div>
                  <h5 className="font-bold mb-2">Support Local Communities</h5>
                  <p className="text-sm">Purchase handicrafts and services from local communities engaged in conservation</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="p-3 bg-[#BBB157] rounded-full mb-4">
                    <Info className="h-6 w-6 text-[#2A4010]" />
                  </div>
                  <h5 className="font-bold mb-2">Spread Awareness</h5>
                  <p className="text-sm">Share your experiences and knowledge about wildlife conservation with others</p>
                </div>
              </div>
            </div>
          </div>
        )}          {/* Conservation Note */}
        <div className="bg-[var(--color-surface)] rounded-lg shadow-lg p-8 mt-12 border-l-4 border-[var(--color-accent)]">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 heading-serif">Conservation Message</h3>
          <p className="text-[var(--color-text-secondary)] leading-relaxed body-sans">
            Ranthambore National Park plays a crucial role in Project Tiger, India's tiger conservation initiative. The park's ecosystem supports not just tigers but a complex web of interdependent species. When visiting, remember that we are guests in their home — maintain silence during safaris, follow guide instructions, and take nothing but photographs. Your responsible tourism helps ensure these magnificent creatures thrive for generations to come.
          </p>
        </div>
      </div>

      {/* Species Detail Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-[var(--color-background)]/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--color-surface)] rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={modalContent.image} 
                alt={modalContent.name}
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-3 right-3 bg-[var(--color-surface)] p-1 rounded-full shadow-md hover:bg-[var(--color-surface-alt)] transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="h-6 w-6 text-[var(--color-text-primary)]" />
              </button>
              {modalContent.conservationStatus && (
                <div className="absolute bottom-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    modalContent.conservationStatus.includes('Endangered') || modalContent.conservationStatus.includes('Critically') 
                      ? 'bg-red-500 text-[var(--color-surface)]' 
                      : modalContent.conservationStatus.includes('Vulnerable') || modalContent.conservationStatus.includes('Near') 
                        ? 'bg-yellow-400 text-[var(--color-text-primary)]'
                        : 'bg-green-500 text-[var(--color-surface)]'
                  }`}>
                    {modalContent.conservationStatus}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] heading-serif">{modalContent.name}</h3>
                  {modalContent.scientificName && (
                    <p className="text-[var(--color-text-secondary)] italic body-sans">{modalContent.scientificName}</p>
                  )}
                </div>
              </div>
              <div className="prose max-w-none text-[var(--color-text-secondary)]">
                <p className="mb-4 body-sans">{modalContent.description}</p>
                {/* Add additional species information sections as needed */}
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex justify-end">
                <button 
                  className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-surface)] rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Enhanced CountUp component with improved animation
const CountUp: React.FC<{ end: number, duration: number }> = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const easeOutQuad = (t: number): number => t * (2 - t);
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const runtime = timestamp - startTime;
      const relativeProgress = runtime / (duration * 1000);
      
      if (relativeProgress < 1) {
        const easedProgress = easeOutQuad(relativeProgress);
        setCount(Math.min(Math.floor(end * easedProgress), end));
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };
    
    animationFrameId = requestAnimationFrame(animateCount);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);
  
  return <>{count}</>;
};

export default Wildlife;
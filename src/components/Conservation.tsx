import React, { useState } from 'react';
import { Shield, Users, Leaf, X, Calendar, MapPin, Award, ExternalLink, BookOpen, Heart, AlertTriangle, Download, Clock, Check } from 'lucide-react';

const Conservation = () => {
  const [activeModal, setActiveModal] = useState(null);

  const conservationCards = [
    {
      id: "project-tiger",
      icon: <Shield className="h-8 w-8 text-emerald-700" />,
      title: "Project Tiger",
      description: "Launched in 1973, Project Tiger has been instrumental in bringing back tigers from the brink of extinction. Ranthambore is one of the success stories of this initiative.",
      link: "Learn About Project Tiger",
      detailedContent: {
        header: "Project Tiger Initiative",
        image: "/api/placeholder/800/400",
        introduction: "Project Tiger is India's most successful conservation initiative launched in 1973 by the Government of India with the support of WWF. It began with 9 tiger reserves covering an area of 16,339 sq km, which has now expanded to 53 reserves covering more than 75,000 sq km.",
        timeline: [
          { year: "1973", event: "Project Tiger launched with 9 reserves including Ranthambore" },
          { year: "1985", event: "Tiger population in Ranthambore reaches 25, up from just 14" },
          { year: "1993", event: "Project expanded to include more protected areas" },
          { year: "2006", event: "Project Tiger restructured as National Tiger Conservation Authority" },
          { year: "2018", event: "Tiger census shows Ranthambore with over 70 tigers" },
          { year: "2022", event: "Advanced monitoring technologies implemented" }
        ],
        keyInitiatives: [
          "Core breeding habitats identified and declared as critical tiger habitats",
          "Creation of buffer zones to reduce human-wildlife conflict",
          "Scientific monitoring using camera traps and satellite tracking",
          "Anti-poaching squads with specialized training and equipment",
          "Relocation of villages from core areas with fair compensation"
        ],
        challenges: [
          "Growing tiger population leading to territorial disputes",
          "Limited genetic diversity in isolated populations",
          "Encroachment at forest boundaries",
          "Rising tourism pressure on habitat"
        ],
        successMetrics: {
          initialPopulation: "14 tigers in 1973",
          currentPopulation: "Over 70 tigers in 2024",
          habitatProtected: "1,334 sq km of prime tiger habitat",
          corridors: "3 wildlife corridors established connecting to nearby forests"
        },
        quote: {
          text: "Project Tiger demonstrates that with political will, scientific approach, and community involvement, we can reverse the decline of endangered species.",
          author: "Dr. Rajesh Singh, Wildlife Conservationist"
        },
        resources: [
          { title: "National Tiger Conservation Authority", url: "#" },
          { title: "Tigers of Ranthambore Database", url: "#" },
          { title: "Annual Tiger Census Report", url: "#" }
        ]
      }
    },
    {
      id: "anti-poaching",
      icon: <Leaf className="h-8 w-8 text-emerald-700" />,
      title: "Anti-Poaching Efforts",
      description: "Dedicated anti-poaching teams patrol the park regularly. Technological advancements like drone surveillance have strengthened protection mechanisms.",
      link: "Protection Measures",
      detailedContent: {
        header: "Anti-Poaching & Protection Measures",
        image: "/api/placeholder/800/400",
        introduction: "Ranthambore employs a comprehensive anti-poaching strategy combining boots-on-ground patrolling with cutting-edge technology. These measures have resulted in zero poaching incidents in the past five years, setting a gold standard for wildlife protection in India.",
        teams: [
          {
            name: "Special Tiger Protection Force (STPF)",
            description: "An elite unit of 54 trained personnel exclusively focused on tiger protection with advanced weapons and training."
          },
          {
            name: "Local Forest Guards",
            description: "112 forest guards from local communities with intimate knowledge of the terrain patrol the reserve in rotating shifts."
          },
          {
            name: "Rapid Response Teams",
            description: "5 mobile units stationed at strategic locations ready to respond to emergencies within 15 minutes."
          }
        ],
        technology: [
          "Thermal drone surveillance for night monitoring",
          "AI-powered camera traps with real-time alerts",
          "GPS tracking collars for select tigers",
          "M-STrIPES (Monitoring System for Tigers' Intensive Protection and Ecological Status) app",
          "Acoustic sensors to detect gunshots and vehicle movements"
        ],
        infrastructure: [
          "78 anti-poaching camps strategically located throughout the reserve",
          "12 watchtowers at key vantage points",
          "4 quick response vehicles equipped with medical supplies",
          "Digital communication network covering 98% of reserve area"
        ],
        collaboration: [
          "Intelligence sharing with Wildlife Crime Control Bureau",
          "Coordination with local police and district administration",
          "Partnership with TRAFFIC (wildlife trade monitoring network)",
          "Community informer network involving villages around the park"
        ],
        impact: {
          poachingDecline: "100% reduction in poaching incidents since 2019",
          arrests: "32 wildlife criminals apprehended in preventive operations",
          intelligence: "164 potential threats neutralized through pre-emptive action"
        },
        resources: [
          { title: "Anti-Poaching Strategy Document", url: "#" },
          { title: "Technology in Wildlife Protection", url: "#" },
          { title: "Volunteer for Patrol Support", url: "#" }
        ]
      }
    },
    {
      id: "community",
      icon: <Users className="h-8 w-8 text-emerald-700" />,
      title: "Community Engagement",
      description: "Local communities are actively involved in conservation through eco-tourism initiatives, providing sustainable livelihoods and reducing dependency on forest resources.",
      link: "Community Programs",
      detailedContent: {
        header: "Community Conservation Programs",
        image: "/api/placeholder/800/400",
        introduction: "The success of Ranthambore's conservation efforts hinges on the active participation of 96 villages surrounding the park. Through innovative community programs, traditional forest-dependent communities have become conservation champions while improving their socioeconomic conditions.",
        programs: [
          {
            name: "Tiger Mitras (Friends of Tigers)",
            description: "A network of 120 local conservation ambassadors from villages surrounding the park who monitor wildlife movement, prevent illegal activities, and educate fellow villagers.",
            impact: "Reduced human-wildlife conflict by 63% since inception"
          },
          {
            name: "Handicraft Collectives",
            description: "Women's self-help groups creating tiger-themed textiles, handicrafts and artwork sold to tourists, providing sustainable income to 850 families.",
            impact: "Average household income increased by ₹48,000 annually"
          },
          {
            name: "Nature Guides Program",
            description: "Training local youth as certified nature guides, creating dignified employment while enhancing visitor experience with authentic local knowledge.",
            impact: "178 certified local guides employed, supporting over 500 family members"
          },
          {
            name: "Village Eco-Development Committees",
            description: "Democratic bodies in each village that manage conservation funds, implement infrastructure projects, and resolve forest-dependency issues.",
            impact: "36 villages have achieved zero forest dependency status"
          }
        ],
        education: {
          schools: "14 conservation-focused schools established in buffer zone villages",
          scholarships: "Annual scholarships for 250 students pursuing conservation-related education",
          awareness: "Mobile education unit reaching 8,000 students annually",
          training: "Skill development programs in ecotourism, sustainable agriculture, and solar technology"
        },
        benefits: [
          "30% of park revenue shared with community development projects",
          "Priority employment in park management and tourism operations",
          "Medical camps serving 14,000 villagers annually",
          "Sustainable agriculture training reducing pressure on forest resources",
          "Alternative fuel solutions (biogas, solar) provided to 2,400 households"
        ],
        testimonial: {
          quote: "Before the community programs, we saw tigers as threats. Now we understand they bring prosperity through tourism, and we are their strongest protectors.",
          name: "Lakshmi Devi",
          role: "Chairperson, Sherpur Village Eco-Development Committee"
        },
        getInvolved: [
          { title: "Volunteer for Community Programs", url: "#" },
          { title: "Purchase Community-Made Products", url: "#" },
          { title: "Sponsor Education Initiatives", url: "#" }
        ]
      }
    }
  ];

  // Modal functionality
  const openModal = (id) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  // Card Component - Extracted for cleaner code
  const ConservationCard = ({ card, openModal }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex justify-center mb-5">
          <div className="p-3 bg-emerald-50 rounded-full">
            {card.icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-emerald-800 mb-3 text-center">{card.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{card.description}</p>
        <div className="text-center">
          <button 
            onClick={() => openModal(card.id)}
            className="inline-flex items-center text-emerald-700 font-medium text-sm hover:text-emerald-900 transition-colors group"
            aria-label={`Learn more about ${card.title}`}
          >
            <span>{card.link}</span>
            <ExternalLink className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
        </div>
      </div>
    </div>
  );

  // Timeline Item Component
  const TimelineItem = ({ year, event }) => (
    <div className="mb-6 relative">
      <div className="absolute -left-6 w-4 h-4 rounded-full bg-emerald-200 border-2 border-emerald-600"></div>
      <h4 className="text-lg font-semibold text-emerald-800">{year}</h4>
      <p className="text-gray-700">{event}</p>
    </div>
  );

  // Metric Card Component
  const MetricCard = ({ label, value }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="text-emerald-600 font-medium text-sm mb-1">{label}</div>
      <div className="text-xl font-bold text-emerald-900">{value}</div>
    </div>
  );

  // Team Card Component
  const TeamCard = ({ team }) => (
    <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-emerald-600">
      <h4 className="font-semibold text-emerald-800">{team.name}</h4>
      <p className="text-gray-600 text-sm">{team.description}</p>
    </div>
  );

  // Program Card Component
  const ProgramCard = ({ program }) => (
    <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-emerald-500">
      <h4 className="font-semibold text-emerald-800">{program.name}</h4>
      <p className="text-gray-600 text-sm mb-2">{program.description}</p>
      <div className="text-xs bg-emerald-50 p-2 rounded text-emerald-800 font-medium">
        <strong>Impact:</strong> {program.impact}
      </div>
    </div>
  );

  // List Item Component
  const ListItem = ({ children }) => (
    <li className="flex items-start mb-2">
      <Check className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={16} />
      <span className="text-gray-700 text-sm">{children}</span>
    </li>
  );

  const renderModal = () => {
    if (!activeModal) return null;

    const activeContent = conservationCards.find(card => card.id === activeModal)?.detailedContent;
    if (!activeContent) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto shadow-2xl">
          <div className="relative">
            <img 
              src={activeContent.image} 
              alt={activeContent.header}
              className="w-full h-64 object-cover"
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Close modal"
            >
              <X size={20} className="text-gray-800" />
            </button>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
              <h2 className="text-2xl font-bold text-white">{activeContent.header}</h2>
            </div>
          </div>
          
          <div className="p-6 lg:p-8">
            <p className="text-gray-700 mb-8 text-base leading-relaxed">{activeContent.introduction}</p>
            
            {activeModal === "project-tiger" && (
              <>
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-5 flex items-center">
                    <Calendar className="mr-2" size={20} />
                    Historical Timeline
                  </h3>
                  <div className="relative border-l-2 border-emerald-300 pl-6 ml-2">
                    {activeContent.timeline.map((item, index) => (
                      <TimelineItem key={index} year={item.year} event={item.event} />
                    ))}
                  </div>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
                    <Shield className="mr-2" size={20} />
                    Key Initiatives
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.keyInitiatives.map((initiative, index) => (
                      <ListItem key={index}>{initiative}</ListItem>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-10 bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-5 flex items-center">
                    <Award className="mr-2" size={20} />
                    Success Metrics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MetricCard label="Initial Tiger Population" value={activeContent.successMetrics.initialPopulation} />
                    <MetricCard label="Current Tiger Population" value={activeContent.successMetrics.currentPopulation} />
                    <MetricCard label="Protected Habitat" value={activeContent.successMetrics.habitatProtected} />
                    <MetricCard label="Wildlife Corridors" value={activeContent.successMetrics.corridors} />
                  </div>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
                    <AlertTriangle className="mr-2" size={20} />
                    Ongoing Challenges
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.challenges.map((challenge, index) => (
                      <ListItem key={index}>{challenge}</ListItem>
                    ))}
                  </ul>
                </div>
              </>
            )}
            
            {activeModal === "anti-poaching" && (
              <>
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-5 flex items-center">
                    <Users className="mr-2" size={20} />
                    Protection Teams
                  </h3>
                  
                  {activeContent.teams.map((team, index) => (
                    <TeamCard key={index} team={team} />
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
                      <Shield className="mr-2" size={20} />
                      Technology Deployed
                    </h3>
                    <ul className="space-y-1">
                      {activeContent.technology.map((tech, index) => (
                        <ListItem key={index}>{tech}</ListItem>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
                      <MapPin className="mr-2" size={20} />
                      Infrastructure
                    </h3>
                    <ul className="space-y-1">
                      {activeContent.infrastructure.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-10 bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-5 flex items-center">
                    <Award className="mr-2" size={20} />
                    Protection Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
                      <div className="text-emerald-600 font-medium text-sm mb-1">Poaching Decline</div>
                      <div className="text-2xl font-bold text-emerald-900">{activeContent.impact.poachingDecline}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
                      <div className="text-emerald-600 font-medium text-sm mb-1">Preventive Arrests</div>
                      <div className="text-2xl font-bold text-emerald-900">{activeContent.impact.arrests}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100">
                      <div className="text-emerald-600 font-medium text-sm mb-1">Threats Neutralized</div>
                      <div className="text-2xl font-bold text-emerald-900">{activeContent.impact.intelligence}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {activeModal === "community" && (
              <>
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-5 flex items-center">
                    <Users className="mr-2" size={20} />
                    Community Programs
                  </h3>
                  
                  {activeContent.programs.map((program, index) => (
                    <ProgramCard key={index} program={program} />
                  ))}
                </div>
                
                <div className="mb-10 bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-5 flex items-center">
                    <BookOpen className="mr-2" size={20} />
                    Education Initiatives
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-emerald-600 font-medium text-sm mb-1">Conservation Schools</div>
                      <div className="text-gray-700">{activeContent.education.schools}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-emerald-600 font-medium text-sm mb-1">Scholarships</div>
                      <div className="text-gray-700">{activeContent.education.scholarships}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-emerald-600 font-medium text-sm mb-1">Awareness Programs</div>
                      <div className="text-gray-700">{activeContent.education.awareness}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-emerald-600 font-medium text-sm mb-1">Skills Training</div>
                      <div className="text-gray-700">{activeContent.education.training}</div>
                    </div>
                  </div>
                </div>
                
                <blockquote className="mb-10 bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600 italic text-gray-700">
                  "{activeContent.testimonial.quote}"
                  <footer className="mt-2 text-sm text-gray-600 font-semibold">
                    — {activeContent.testimonial.name}, {activeContent.testimonial.role}
                  </footer>
                </blockquote>
              </>
            )}
            
            {/* Common resources section for all modals */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
                <BookOpen className="mr-2" size={20} />
                Resources & Information
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {activeContent.resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.url} className="flex items-center text-emerald-700 hover:text-emerald-900 transition-colors group">
                      <ExternalLink className="mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                      <span className="underline underline-offset-2">{resource.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <button 
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Close
              </button>
              
              <a 
                href="#support" 
                className="w-full sm:w-auto px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center font-medium"
                onClick={closeModal}
              >
                <Heart className="mr-2" size={18} />
                Support This Initiative
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="conservation" className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 inline-block relative mb-4">
            Conservation Initiatives
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-emerald-600 rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            Ranthambore's success story is a testament to dedicated conservation efforts and community involvement. 
            From near extinction to a thriving tiger population, the journey has been remarkable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {conservationCards.map((card, index) => (
            <ConservationCard key={index} card={card} openModal={openModal} />
          ))}
        </div>

        {/* Success Story Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src="/images/con1.jpg" 
                alt="Tiger Conservation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">A Conservation Success Story</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In the 1970s, Ranthambore's tiger population was dwindling due to hunting and habitat loss. 
                Through determined conservation efforts, strict anti-poaching measures, and community involvement, 
                the park has seen a remarkable recovery.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, with over 70 tigers roaming its forests, Ranthambore stands as a testament to what 
                dedicated conservation can achieve. The park has not only protected tigers but also 
                restored the entire ecosystem, benefiting all species that call it home.
              </p>
              
              <div className="bg-emerald-50 p-5 rounded-lg mb-6">
                <h4 className="font-semibold text-emerald-800 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Tiger population increased from 14 in 1990 to over 70 today</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Successful relocation of tigers to repopulate other reserves</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Creation of buffer zones to reduce human-wildlife conflict</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Development of sustainable eco-tourism model</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="#support" 
                className="inline-block px-6 py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors shadow-sm"
              >
                Support Conservation
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Render active modal */}
      {renderModal()}
    </section>
  );
};

export default Conservation;
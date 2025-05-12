import React from 'react';
import { AlertTriangle, CheckCircle, X, Package, Lightbulb, Users } from 'lucide-react';

const VisitorTips = () => {
  const tipsCategories = [
    {
      icon: <CheckCircle className="h-8 w-8 text-[var(--color-secondary)]" />,
      title: "Recommended Practices",
      tips: [
        "Wear neutral, earth-toned attire (khaki, olive, beige)",
        "Maintain silence during wildlife safaris",
        "Carry appropriate optical equipment (binoculars, cameras)",
        "Adhere to all guide instructions promptly",
        "Maintain proper distance from wildlife at all times"
      ]
    },
    {
      icon: <X className="h-8 w-8 text-red-700" />,
      title: "Prohibited Actions",
      tips: [
        "Creating excessive noise or playing music",
        "Providing food to any wildlife species",
        "Using flash photography around animals",
        "Disposing of waste improperly within park boundaries",
        "Wearing bright colors that may disturb wildlife"
      ]
    },
    {
      icon: <Package className="h-8 w-8 text-[var(--color-accent)]" />,
      title: "Essential Equipment",
      tips: [
        "Weather-appropriate, breathable clothing",
        "Sun protection (wide-brimmed hat, UV-blocking sunglasses)",
        "SPF 30+ sunscreen and DEET insect repellent",
        "Reusable water container (minimum 1L capacity)",
        "Government-issued identification documents"
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[var(--color-secondary)]" />,
      title: "Expert Recommendations",
      tips: [
        "Secure safari reservations 90 days in advance",
        "Select morning expeditions for optimal wildlife activity",
        "Consider visiting during shoulder seasons for reduced congestion",
        'Use the traditional greeting "Ram Ram Sa!" with local residents',
        "Experience authentic regional Rajasthani cuisine"
      ]
    }
  ];

  return (
    <section id="visitor-guidelines" className="py-16 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2 heading-serif">
            Visitor Guidelines
          </h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-4"></div>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto body-sans">
            Essential information for a responsible and enriching experience at Ranthambore National Park
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tipsCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-3 text-lg font-semibold text-[var(--color-primary)] heading-serif">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start text-[var(--color-text-secondary)] body-sans">
                    <span className="mr-2 mt-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Park Regulations Notice */}
        <div className="mt-12 bg-[var(--color-surface-alt)] border-l-4 border-[var(--color-secondary)] p-6 rounded-md shadow-sm max-w-3xl mx-auto">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-[var(--color-secondary)] mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 heading-serif">
                Park Regulations
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm body-sans">
                Ranthambore National Park enforces strict regulations to ensure wildlife conservation and visitor safety. 
                Non-compliance with established guidelines may result in monetary penalties or immediate removal from park premises. 
                As temporary visitors to their natural habitat, we bear responsibility for respecting wildlife and preserving 
                this ecological sanctuary for future generations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Cultural Awareness */}
        <div className="mt-8 bg-white border border-[var(--color-border)] p-6 rounded-md shadow-sm max-w-3xl mx-auto">
          <div className="flex items-start">
            <Users className="h-6 w-6 text-[var(--color-accent)] mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 heading-serif">Cultural Awareness</h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4 body-sans">
                Ranthambore represents both a wildlife sanctuary and a region with significant cultural heritage. 
                When engaging with local communities, please observe the following protocols:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[var(--color-secondary)] mr-2 mt-1 font-bold">•</span>
                  <span className="text-[var(--color-text-secondary)]">Honor and observe local customs and traditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-secondary)] mr-2 mt-1 font-bold">•</span>
                  <span className="text-[var(--color-text-secondary)]">Obtain consent prior to photographing local residents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-secondary)] mr-2 mt-1 font-bold">•</span>
                  <span className="text-[var(--color-text-secondary)]">Select modest attire when visiting religious sites or villages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-secondary)] mr-2 mt-1 font-bold">•</span>
                  <span className="text-[var(--color-text-secondary)]">Utilize "Ram Ram Sa!" as the traditional Rajasthani greeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-secondary)] mr-2 mt-1 font-bold">•</span>
                  <span className="text-[var(--color-text-secondary)]">Contribute to the local economy by purchasing authentic handicrafts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorTips;
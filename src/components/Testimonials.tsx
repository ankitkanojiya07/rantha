import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ChevronDown, ChevronUp } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
  image?: string;
  visitDate: string;
  tripType: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: "When is Ranthambore National Park open for visitors?",
      answer: "Zones 1 to 5 of Ranthambore National Park are open from the 1st of October to the 30th of June each year, and are closed during the months of July, August, and September. Zones 6 to 10 of Ranthambhore National Park are always open.",
      isOpen: false
    },
    {
      id: 2,
      question: "How many zones does Ranthambore National Park contain?",
      answer: "Ranthambore National Park consists of ten zones. Zones 1 to 5 are regarded as the \"core\" of the park; zones 6 to 10 were added as the park expanded.",
      isOpen: false
    },
    {
      id: 3,
      question: "Which zone of Ranthambore National Park is the most desirable?",
      answer: "It is tough to identify a single region as the best. In all ten zones, wildlife thrives and sightings are frequent.",
      isOpen: false
    },
    {
      id: 4,
      question: "What wildlife can I witness in Ranthambore National Park?",
      answer: "Ranthambore National Park is renowned for having Bengal tigers. There are also leopards, sloth bears, crocodiles, sambar deer, spotted deer, jackals, hyenas, rusty spotted cats, desert foxes, hyenas, chital, nilgai, langurs, black buck, wild boar, chinkara (also known as gazelle), flying foxes, mongooses, monitor lizards, cobra and more.",
      isOpen: false
    },
    {
      id: 5,
      question: "What is the best time to visit Ranthambore National Park?",
      answer: "The best time depends on your preferences. For agreeable weather, visit during October, November, February, or March. For better wildlife sightings, the summer months of April, May, and June are recommended, though they can be quite hot. Generally, the period between October and June is ideal for exploring the park.",
      isOpen: false
    },
  ]);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Our wildlife expedition to Ranthambore exceeded all expectations. The guides demonstrated exceptional knowledge of tiger behavior, which resulted in three remarkable sightings during our 2-day visit. The park's biodiversity—from spotted deer to vibrant birdlife—created a complete wilderness experience.",
      author: "Dr. Priya Sharma",
      location: "Delhi, India",
      rating: 5,
      visitDate: "February 2025",
      tripType: "Family Safari"
    },
    {
      id: 2,
      text: "As a professional wildlife photographer with 15 years of experience across three continents, I found Ranthambore's landscape truly distinctive. The juxtaposition of historic ruins against natural habitats offers unparalleled compositional opportunities. The morning light quality through the deciduous forests creates ideal conditions for wildlife photography.",
      author: "David Miller",
      location: "San Francisco, USA",
      rating: 5,
      visitDate: "November 2024",
      tripType: "Photography Expedition"
    },
    {
      id: 3,
      text: "I was impressed by the park's commitment to conservation and sustainable tourism. Our naturalist guide provided fascinating insights into the tiger monitoring program and ongoing ecological research. The safari experience was well-structured with appropriate wildlife viewing distances maintained throughout. A thoughtfully managed experience.",
      author: "Rajesh Gupta",
      location: "Mumbai, India",
      rating: 4,
      visitDate: "January 2025",
      tripType: "Educational Tour"
    },
    {
      id: 4,
      text: "My third visit to Ranthambore confirmed why it remains India's premier tiger reserve. Beyond the magnificent Bengal tigers, we observed remarkable biodiversity including sloth bears, leopards, and countless bird species. The park's varied terrain—from lakes to dry deciduous forests—creates diverse habitats worth exploring across multiple safaris.",
      author: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      visitDate: "March 2025",
      tripType: "Wildlife Research"
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  }, [testimonials.length]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 8000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleSlideInteraction = () => {
    // Pause autoplay temporarily when user interacts with slides
    setIsAutoPlaying(false);
    const timer = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timer);
  };

  const toggleFAQ = (id: number) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  return (
    <section className="py-16 bg-[#FFF8E8]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Authentic experiences shared by wildlife enthusiasts and travelers who have explored Ranthambore National Park
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button 
            onClick={() => {
              prevSlide();
              handleSlideInteraction();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 border-l-4 border-emerald-600">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <Quote className="w-10 h-10 text-emerald-600 opacity-30 mr-3" />
                        {/* Rating Stars */}
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 italic">
                        Visited: {testimonial.visitDate}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center border-t pt-5 mt-6 border-gray-100">
                      <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-800">{testimonial.author}</p>
                        <div className="flex items-center text-sm">
                          <span className="text-gray-600">{testimonial.location}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-emerald-700 font-medium">{testimonial.tripType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => {
              nextSlide();
              handleSlideInteraction();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-emerald-700 w-6' 
                    : 'bg-gray-300 hover:bg-emerald-400'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  handleSlideInteraction();
                }}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Verification Badge */}
          <div className="flex justify-center mt-10">
            <div className="flex items-center bg-emerald-50 px-4 py-2 rounded-full text-sm">
              <svg className="w-4 h-4 text-emerald-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Verified Guest Reviews</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-emerald-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about planning your visit to Ranthambore National Park
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-100 last:border-b-0">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-inset"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  {faq.isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    faq.isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://ranthamboreregency.com/the-jungle-safari/" 
              className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Book Your Safari Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
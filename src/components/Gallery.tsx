import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
  photographer?: string;
  dateTaken?: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  // Categories with improved organization
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'tigers', name: 'Tigers' },
    { id: 'landscape', name: 'Landscapes' },
    { id: 'birds', name: 'Birds' },
    { id: 'heritage', name: 'Heritage Sites' }
  ];

  // Enhanced image data with additional metadata
  const images: GalleryImage[] = [
    {
      id: '1',
      src: './lake.jpg',
      title: 'Tiger by the Lake',
      description: 'A majestic tiger cooling off near the water edge in Ranthambore National Park.',
      category: 'tigers',
      photographer: 'Aditya Singh',
      dateTaken: 'March 2024'
    },
    {
      id: '2',
      src: './sunset.JPG',
      title: 'Sunrise at Padam Talao',
      description: 'Golden hour at one of Ranthambore\'s most iconic lakes, showcasing the vibrant colors of dawn.',
      category: 'landscape',
      photographer: 'Ravi Prakash',
      dateTaken: 'January 2024'
    },
    {
      id: '3',
      src: './peo.jpg',
      title: 'Peacock in Full Display',
      description: 'A male peacock showing off his colorful plumage during mating season in the grasslands.',
      category: 'birds',
      photographer: 'Meera Subramaniam',
      dateTaken: 'April 2024'
    },
    {
      id: '4',
      src: './f3.jpg',
      title: 'Ranthambore Fort',
      description: 'The ancient 10th century Ranthambore Fort standing tall amidst the forest, a UNESCO World Heritage site.',
      category: 'heritage',
      photographer: 'Vikram Joshi',
      dateTaken: 'February 2024'
    },
    {
      id: '5',
      src: './petrol.jpg',
      title: 'Tiger on Patrol',
      description: 'A Royal Bengal tiger patrolling its territory in the early morning mist, showcasing the apex predator in its natural habitat.',
      category: 'tigers',
      photographer: 'Aditya Singh',
      dateTaken: 'May 2024'
    },
    {
      id: '6',
      src: './king.jpg',
      title: 'Kingfisher in Action',
      description: 'A White-throated Kingfisher perched perfectly, ready to dive for prey in one of Ranthambore\'s many water bodies.',
      category: 'birds',
      photographer: 'Sanjay Kumar',
      dateTaken: 'June 2024'
    },
    {
      id: '7',
      src: './morning.jpg',
      title: 'Misty Morning',
      description: 'The forest comes alive as the morning mist begins to clear, revealing the diverse ecosystem of Ranthambore.',
      category: 'landscape',
      photographer: 'Priya Sharma',
      dateTaken: 'March 2024'
    },
    {
      id: '8',
      src: './temp.jpg',
      title: 'Ancient Temple',
      description: 'One of the many ancient temples within the Ranthambore Fort complex, showcasing intricate architectural details from the 10th century.',
      category: 'heritage',
      photographer: 'Rajesh Mishra',
      dateTaken: 'April 2024'
    },
    {
      id: '9',
      src: './cubs.jpg',
      title: 'Tiger Cubs at Play',
      description: 'Rare capture of tiger cubs playing near their den in Zone 3 of Ranthambore National Park.',
      category: 'tigers',
      photographer: 'Divya Patel',
      dateTaken: 'July 2024'
    },
    {
      id: '10',
      src: './f2.jpg',
      title: 'Jogi Mahal',
      description: 'The historic Jogi Mahal hunting lodge at the base of the fort, surrounded by lush monsoon vegetation.',
      category: 'heritage',
      photographer: 'Karan Desai',
      dateTaken: 'August 2024'
    },
    {
      id: '11',
      src: './owl1.jpg',
      title: 'Spotted Owlet',
      description: 'A pair of spotted owlets roosting in the hollow of an ancient banyan tree.',
      category: 'birds',
      photographer: 'Nisha Singh',
      dateTaken: 'February 2024'
    },
    {
      id: '12',
      src: './fall.jpg',
      title: 'Monsoon Waterfall',
      description: 'Seasonal waterfall cascading down the cliffs near Ranthambore Fort during peak monsoon season.',
      category: 'landscape',
      photographer: 'Anand Verma',
      dateTaken: 'September 2024'
    }
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  // Lightbox controls with keyboard navigation
  const openLightbox = useCallback((index: number) => {
    setActiveImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, goToPrevious, goToNext, closeLightbox]);

  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Current active image for lightbox
  const activeImage = filteredImages[activeImageIndex];

  return (
    <section id="gallery" className="py-24 bg-[#F8F5F0] font-serif">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with improved typography */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3C3228] mb-4">
            Ranthambore Gallery
          </h2>
          <div className="h-1 w-24 bg-[#C4B6A6] mx-auto mb-6"></div>
          <p className="mt-4 text-[#5C5248] max-w-3xl mx-auto text-lg">
            Discover the breathtaking beauty of Ranthambore National Park through our curated collection of 
            premium wildlife and landscape photography captured by renowned professionals.
          </p>
        </div>

        {/* Category Filter with refined design */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                aria-label={`Filter by ${category.name}`}
                className={`px-6 py-3 rounded-md text-base font-medium transition-all duration-300 shadow-sm ${
                  activeCategory === category.id
                    ? 'bg-[#997B66] text-white ring-2 ring-offset-2 ring-[#997B66]'
                    : 'bg-white text-[#3C3228] hover:bg-[#E5DED3] hover:text-[#3C3228]'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#997B66]"></div>
          </div>
        ) : (
          <>
            {/* Gallery Grid with masonry-like layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#E5DED3] text-sm font-medium mb-1">{image.category.charAt(0).toUpperCase() + image.category.slice(1)}</p>
                      <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Camera size={14} className="mr-1" />
                        <span>{image.photographer}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="absolute top-0 right-0 m-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    onClick={() => openLightbox(index)}
                    aria-label="View larger image"
                  >
                    <svg className="w-5 h-5 text-[#997B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Empty state when no images match the filter */}
            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F2EDE4] mb-4">
                  <Camera size={32} className="text-[#997B66]" />
                </div>
                <h3 className="text-xl font-medium text-[#3C3228]">No images found</h3>
                <p className="mt-2 text-[#5C5248]">There are no images in this category yet.</p>
              </div>
            )}
          </>
        )}

        {/* Photography Tips Section with improved layout */}
        <div className="mt-20 bg-white p-8 md:p-10 rounded-lg shadow-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE4] mr-4">
              <Camera size={24} className="text-[#997B66]" />
            </div>
            <h3 className="text-2xl font-bold text-[#3C3228]">Photography Tips from Our Experts</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div>
              <h4 className="font-semibold text-[#3C3228] mb-4">Equipment & Technique</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F2EDE4] flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#997B66]"></div>
                  </div>
                  <p className="text-[#5C5248]">Use telephoto lenses (400mm+) with image stabilization for wildlife photography.</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F2EDE4] flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#997B66]"></div>
                  </div>
                  <p className="text-[#5C5248]">Shoot in RAW format with fast memory cards for better post-processing flexibility.</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F2EDE4] flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#997B66]"></div>
                  </div>
                  <p className="text-[#5C5248]">Set your camera to burst mode (8+ fps) for capturing fast-moving wildlife action.</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F2EDE4] flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#997B66]"></div>
                  </div>
                  <p className="text-[#5C5248]">Use a bean bag or monopod for stability when shooting from safari vehicles.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#3C3228] mb-4">Composition & Ethics</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F2EDE4] flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#997B66]"></div>
                  </div>
                  <p className="text-[#5C5248]">Early morning (6-8am) and golden hour (4-6pm) offer magical lighting conditions.</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F2EDE4] flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#997B66]"></div>
                  </div>
                  <p className="text-[#5C5248]">Respect wildlife by maintaining distance and using silent shutter modes.</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F2EDE4] flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#997B66]"></div>
                  </div>
                  <p className="text-[#5C5248]">Consider the rule of thirds and include environmental context for storytelling.</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#F2EDE4] flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-[#997B66]"></div>
                  </div>
                  <p className="text-[#5C5248]">Join our annual wildlife photography workshop and contest held each October.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-[#5C5248] italic">
              "The best wildlife photographs tell a story about the animal in its natural habitat. Patience is your greatest asset."
              <span className="font-medium block mt-1">- Aditya Singh, Chief Wildlife Photographer</span>
            </p>
          </div>
        </div>
      </div>

     {/* Enhanced Lightbox with navigation */}
      {isLightboxOpen && activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex justify-center items-center p-4">
          <div 
            className="absolute inset-0 z-0"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          ></div>
          
          <div className="relative z-10 max-w-6xl w-full mx-auto bg-[#F9F6F1] rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Image Container */}
            <div className="w-full md:w-2/3 bg-black relative">
              <div className="relative h-[50vh] md:h-[80vh] flex items-center justify-center">
                <img 
                  src={activeImage.src} 
                  alt={activeImage.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button 
                className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-[#F9F6F1]/70 hover:bg-[#F9F6F1] transition-colors duration-300 shadow-md"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-[#3D3026]" />
              </button>
              
              <button 
                className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-[#F9F6F1]/70 hover:bg-[#F9F6F1] transition-colors duration-300 shadow-md"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-[#3D3026]" />
              </button>
            </div>
            
            {/* Details Panel */}
            <div className="w-full md:w-1/3 p-6 md:p-8 relative font-['Lora',serif]">
              <button 
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-[#E9E4DC] transition-colors duration-300"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6 text-[#3D3026]" />
              </button>
              
              <div className="mb-4">
                <p className="text-[#7D6E5B] uppercase tracking-wider text-sm font-medium">
                  {activeImage.category.charAt(0).toUpperCase() + activeImage.category.slice(1)}
                </p>
                <h3 className="text-2xl font-bold mt-1 text-[#3D3026]">{activeImage.title}</h3>
              </div>
              
              <p className="text-[#3D3026]/80 mb-6 leading-relaxed">{activeImage.description}</p>
              
              <div className="pt-6 border-t border-[#E9E4DC] space-y-3">
                <div className="flex items-start">
                  <div className="w-24 flex-shrink-0 text-[#7D6E5B] font-medium">Photographer</div>
                  <div className="text-[#3D3026]">{activeImage.photographer}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 flex-shrink-0 text-[#7D6E5B] font-medium">Date</div>
                  <div className="text-[#3D3026]">{activeImage.dateTaken}</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#E9E4DC]">
                <div className="flex items-center gap-x-4">
                  <p className="text-[#7D6E5B] font-medium">Image {activeImageIndex + 1} of {filteredImages.length}</p>
                  <div className="flex-1 h-1 bg-[#E9E4DC] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#7D6E5B]" 
                      style={{ width: `${((activeImageIndex + 1) / filteredImages.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Attribution */}
      {/* <div className="mt-16 text-center text-[#7D6E5B] text-sm font-['Lora',serif]">
        <p>&copy; {new Date().getFullYear()} Ranthambore National Park Gallery. All rights reserved.</p>
        <p className="mt-1">
          Images contributed by our network of professional wildlife photographers.
        </p>
      </div> */}
    </section>
  );
};

export default Gallery;
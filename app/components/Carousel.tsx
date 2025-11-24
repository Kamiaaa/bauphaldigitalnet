// components/EllipseCarousel.tsx
'use client';

import { useState, useEffect } from 'react';

const EllipseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel items data
  const carouselItems = [
    {
      id: 1,
      image: '/img/slide-01.jpg',
      title: 'বাউফল ডিজিটাল নেট',
      subtitle: 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক অনুমোদিত ব্রডব্যান্ড ইন্টারনেট কানেকশন '
    },
    {
      id: 2,
      image: '/img/slide-02.jpg',
      title: 'বাউফল ডিজিটাল নেট',
      subtitle: 'সর্বনিম্ন ডাউনটাইম'
    },
    {
      id: 3,
      image: '/img/slide-03.jpg',
      title: 'বাউফল ডিজিটাল নেট',
      subtitle: 'দুর্দান্ত গতি'
    },
    {
      id: 4,
      image: '/img/slide-04.jpg',
      title: 'বাউফল ডিজিটাল নেট',
      subtitle: '২৪/৭ কাস্টমার সাপোর্ট'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="w-full mx-auto">
      {/* Main Carousel Container - No rounded corners, only clip-path */}
      <div className="relative h-[500px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              clipPath: 'ellipse(100% 85% at 50% 15%)'
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white pt-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
                {item.title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow-lg">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200 z-20 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200 z-20 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-6 bg-black/30 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm z-20">
          <span className="font-semibold">{currentIndex + 1}</span>
          <span className="mx-1">/</span>
          <span>{carouselItems.length}</span>
        </div>
      </div>
    </div>
  );
};

export default EllipseCarousel;
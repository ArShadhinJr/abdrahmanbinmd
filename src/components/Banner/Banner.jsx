// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getImageUrl = (slideIndex) => {
    // Replace these URLs with your actual image URLs
    const imageUrls = [
      'https://i.ibb.co/4JQFpNk/pexels-kevin-ku-577585.jpg',
      'https://i.ibb.co/PWpx8jY/pexels-lukas-574080.jpg',
    ];
    return imageUrls[slideIndex];
  };

  return (
    <section>
      <div id="default-carousel" className="relative w-full " data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Display the current image */}
          <img
            src={getImageUrl(currentSlide)}
            className="absolute block w-full h-full object-cover"
            alt={`Banner ${currentSlide + 1}`}
            style={{ objectFit: 'cover' }}  
          /> 
          {/* Previous button */}
          <button
            type="button"
            className="absolute top-1/2 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none translate-y-[-50%]"
            data-carousel-prev
            onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + 2) % 2)}
          >
            <span className="text-white text-6xl">&#8249;</span>
          </button>
          {/* Next button */}
          <button
            type="button"
            className="absolute top-1/2 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none translate-y-[-50%]"
            data-carousel-next
            onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % 2)}
          >
            <span className="text-white text-6xl">&#8250;</span>
            
          </button>
          
        </div>
          
      </div>
    </section>
  );
};

export default Banner;

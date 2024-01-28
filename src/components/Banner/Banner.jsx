// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper/modules";
import './Banner.css'; // Import your custom CSS file

const Banner = () => {
  const getImageUrl = (slideIndex) => {
    // Replace these URLs with your actual image URLs
    const imageUrls = [
      'https://i.ibb.co/4JQFpNk/pexels-kevin-ku-577585.jpg',
      'https://i.ibb.co/PWpx8jY/pexels-lukas-574080.jpg',
    ];
    return imageUrls[slideIndex];
  };

  return (
    <Swiper
      spaceBetween={false}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      modules={[Autoplay, Pagination, Navigation, EffectCreative]}
      className="mySwiper"
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-56 md:h-96">
            <img
              src={getImageUrl(index)}
              className="absolute block w-full h-full object-cover"
              alt={`Banner ${index + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next swiper-button-next-custom"></div>
      <div className="swiper-button-prev swiper-button-prev-custom"></div>
    </Swiper>
  );
};

export default Banner;

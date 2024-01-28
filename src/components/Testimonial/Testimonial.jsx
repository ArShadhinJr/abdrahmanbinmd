// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, EffectCreative } from "swiper/modules";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      comment: "Exceptional React developer! Crafted a seamless, feature-rich chatting app. Innovative UI, robust functionalities. Highly recommend for any project!",
      userImage: 'https://source.unsplash.com/random/50x50',
      userName: 'Shakir Mahmud',
      designation: 'CEO, ABCecho Company Ltd.',
    },
    {
      id: 2,
      comment: "Outstanding React developer! Created an intuitive, scalable chatting app. Efficient code, prompt communication. A pleasure to work with, highly recommended.",
      userImage: 'https://source.unsplash.com/random/50x50',
      userName: 'Talukder Rahim',
      designation: 'CTO, XYZexx Inc.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="container my-8">
      <h2 className="text-5xl font-bold my-6 text-center text-primary">Client Testimonials</h2>
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
      modules={[Autoplay, Pagination, EffectCreative]}
      className="mySwiper"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4 text-center">
              <p className="text-lg mb-4">{testimonial.comment}</p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.userImage}
                  alt={testimonial.userName}
                  className="w-16 h-16 object-cover rounded-full mb-4"
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">{testimonial.userName}</h3>
                  <p className="text-gray-600">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container my-8">
      <h2 className="text-5xl font-bold my-6 text-center text-primary">Client Testimonials</h2>
      <div className="lg:flex lg:justify-center">
        <Slider {...sliderSettings} className="lg:w-2/3">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-4 text-center">
                <p className="text-lg mb-4">{testimonial.comment}</p>
                <div className="flex md:flex-col gap-y-4 items-center ">
                  <img
                    src={testimonial.userImage}
                    alt={testimonial.userName}
                    className="w-24 h-24 object-cover rounded-full mr-4 "
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-1">{testimonial.userName}</h3>
                    <p className="text-gray-600">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

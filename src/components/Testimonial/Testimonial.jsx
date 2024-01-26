// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque.",
      userImage: 'https://source.unsplash.com/random/50x50',
      userName: 'John Doe',
      designation: 'CEO, ABC Company',
    },
    {
      id: 2,
      comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      userImage: 'https://source.unsplash.com/random/50x50',
      userName: 'Jane Smith',
      designation: 'CTO, XYZ Inc.',
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

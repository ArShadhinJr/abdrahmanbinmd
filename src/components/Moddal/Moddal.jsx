// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// import css 
import './Moddal.css';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    // Add the 'overflow-hidden' class to the body when the modal is open
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      // Remove the 'overflow-hidden' class when the modal is closed
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup effect when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Example: Completed and Upcoming Features
  const completedFeatures = [
    '✅ সকল সেকশন তৈরি করা হয়েছে।',
    '✅ রিজিউমি ডাউনলোড করা যাচ্ছে।',
  ];

  const upcomingFeatures = [
    '🔜 সকল ডামি ইমেজ বা তথ্য সড়ানো হচ্ছে।',
    '🔜 কিছুটা রেস্পন্সিভ করা হয়েছে। সকল কম্পোনেন্টের জন্য রেস্পন্সিভ শেষ হবে।',
    '🔜 gsap দিয়ে আরো ইন্টারেক্টিভ করা হবে।',
  ];

  return (
    <>
      {isModalOpen && (
        <div  className="fixed font top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-2xl font-bold mb-4 text-red-500">আন্তরিকভাবে দুঃখিত!</p>
            <p className="text-xl text-gray-800">
              আসসালামু আলাইকুম। ওয়েবসাইটের কাজ চলমান রয়েছে।
            </p>
                      <p className="text-lg text-gray-700">কিছু কিছু জায়গায় ডেমো ইমেজ ব্যবহার করা হয়েছে। </p>
                      <p className='text-center p-4 my-3 bg-primary border text-white'>ওয়েব ভার্সন ব্যবহারের অনুরোধ রইল</p>

            {/* Completed Features Section */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">কাজ শেষ হয়েছে:</h3>
              <ul className="flex flex-col gap-0">
                {completedFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700 py-0 my-0 ms-4">{feature}</li>
                ))}
              </ul>
            </div>

            {/* Upcoming Features Section */}
            <div>
              <h3 className="text-lg font-bold mt-4">কাজ শেষ হয়নি:</h3>
              <ul className=" flex flex-col gap-0">
                {upcomingFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700 py-0 my-0 ms-4">{feature}</li>
                ))}
              </ul>
            </div>

            <button
              className="mt-4 bg-green-500 w-full text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={closeModal}
            >
              ঠিক আছে, ধন্যবাদ
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

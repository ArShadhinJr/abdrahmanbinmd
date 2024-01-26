import React, { useState, useEffect } from 'react';

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

  return (
    // Render the modal only if isModalOpen is true
    isModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-2xl font-bold mb-4 text-red-500">আন্তরিকভাবে দুঃখিত!</p>
          <p className="text-xl text-gray-800">
            আসসালামু আলাইকুম। ওয়েবসাইটের কাজ চলমান রয়েছে। 
          </p>
          <p className="text-lg text-gray-700">কিছু কিছু জায়গায় ডেমো ইমেজ ব্যবহার করা হয়েছে।</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={closeModal}
          >
            ঠিক আছে
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;

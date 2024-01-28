// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can log the form data:
    console.log(formData);
    // Show the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal and reset form data
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container my-8">
      <h2 className="text-5xl font-bold my-6 text-center text-primary">Contact Us</h2>
      
      <div className='flex justify-between'>
        {/* First Div - Contact Form */}
        <div className="mb-8 w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto">
            <label className="mb-4">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label className="mb-4">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label className="mb-4">
              Subject:
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label className="mb-4">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="border rounded-md p-2 w-full"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Submit
            </button>
          </form>
        </div>
        
        {/* Second Div - Image with Link */}
        <div className="text-center w-1/2">
          <div className='grid place-content-center'>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://via.placeholder.com/150"  // Replace with your image URL
                alt="Message"
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-2xl font-bold mb-4 text-blue-500">Form Submitted Successfully!</p>
            <p className="text-xl text-gray-800">
              Thank you for contacting us. We will get back to you as soon as possible.
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

// eslint-disable-next-line no-unused-vars
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
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
              <input type="text" name="name" required className="border rounded-md p-2 w-full" />
            </label>
            <label className="mb-4">
              Email:
              <input type="email" name="email" required className="border rounded-md p-2 w-full" />
            </label>
            <label className="mb-4">
              Subject:
              <input type="text" name="subject" required className="border rounded-md p-2 w-full" />
            </label>
            <label className="mb-4">
              Message:
              <textarea name="message" required rows="4" className="border rounded-md p-2 w-full"></textarea>
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
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
    </div>
  );
};

export default Contact;

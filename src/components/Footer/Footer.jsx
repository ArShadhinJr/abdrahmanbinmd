// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../../assets/code.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      {/* First Row - Two Divs */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Div - Logo and Subscription Information */}
        <div className="mb-4 md:mb-0">
          <div className="mb-4 flex md:flex-col  justify-center items-center md:justify-start md:items-start">
            <img
              src={Logo} 
              alt="Logo"
              className="h-24 w-24 mb-6 mr-4"
            />
            <div>
              <p className="text-lg font-bold mb-2">Subscribe to our newsletter</p>
              <p>Get updates on the latest news and trends.</p>
            </div>
          </div>
          {/* Email Subscription Form */}
          <form className="flex w-4/6 justify-center items-center md:justify-start md:items-start">
            <div className="flex items-center w-full">
              <input
                type="email"
                placeholder="Your email"
                className="border-0 p-2 rounded-l-md w-full"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-primary font-bold px-6 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Second Div - Social Links */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start space-y-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          {/* Add more social links as needed */}
        </div>
      </div>

      {/* Second Row - Copyright */}
      <div className="text-center mt-8">
        <p>&copy; 2024 Abdur Rahman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

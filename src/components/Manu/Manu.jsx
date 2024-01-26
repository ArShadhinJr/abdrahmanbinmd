import Logo from '../../assets/code.png';
import { useState } from 'react';

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-gray-200'>
      <nav className='flex justify-between container py-1 '>
        <div className='flex items-center text-3xl gap-x-3 text-secondary'>
          <img src={Logo} alt="logo" width="40px" />
          <p className='font-black'>Abdur Rahman</p>
        </div>
        
        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6 fill-current text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Menu Items */}
        <div className={`lg:flex items-center ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className='lg:flex items-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

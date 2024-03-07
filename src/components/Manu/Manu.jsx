import Logo from '../../assets/code.png';
import { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-gray-200'>
      <nav className='flex justify-between container py-1 relative'>
        <div className='flex items-center text-3xl gap-x-3 text-secondary'>
          <img src={Logo} alt="logo" width="40px" />
          <p className='font-black hidden md:block'>Abdur Rahman</p>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden p-2">
          {isMobileMenuOpen ? (
            <IoIosClose className="h-6 w-6 text-primary" onClick={toggleMobileMenu} />
          ) : (
            <IoIosMenu className="h-6 w-6 text-gray-700" onClick={toggleMobileMenu} />
          )}
        </div>

        {/* Menu Items (visible on mobile when the button is clicked) */}
        <div className={`lg:flex items-center ${isMobileMenuOpen ? 'flex' : 'hidden'} lg:z-auto z-30 absolute top-full left-0 w-full bg-gray-200 p-4`}>
          <ul className='lg:flex items-center '>
            <li><a href="#" className="text-primary hover:text-secondary">Home</a></li>
            <li><a href="#" className="text-primary hover:text-secondary">About</a></li>
            <li><a href="#" className="text-primary hover:text-secondary">Skills</a></li>
            <li><a href="#" className="text-primary hover:text-secondary">Projects</a></li>
            <li><a href="#" className="text-primary hover:text-secondary">Contact</a></li>
          </ul>
          
        </div>
        <div className='lg:block hidden'>
          <ul className='lg:flex items-center  hidden'>
            <li><a href="#" className="text-primary hover:text-secondary">Home</a></li>
            <li><a href="#" className="text-primary hover:text-secondary">About</a></li>
            <li><a href="#" className="text-primary hover:text-secondary">Skills</a></li>
            <li><a href="#" className="text-primary hover:text-secondary">Projects</a></li>
            <li><a href="#" className="text-primary hover:text-secondary">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

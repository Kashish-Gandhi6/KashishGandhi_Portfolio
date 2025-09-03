import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

// Helper function to scroll to the section smoothly
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 70, // Adjust offset for the navbar height
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const resumeLink = 'https://drive.google.com/file/d/1NCgP-qinVynAkkS0Urpcn0MwUmRsYOiX/view?usp=share_link'; 

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Kashish Gandhi &nbsp;
            <span className='sm:block hidden'> | Computer Vision Graduate Student</span>
          </p>
        </Link>
        
        <div className='flex items-center gap-10'>
          <ul className='list-none hidden sm:flex flex-row gap-8'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(nav.title);
                  scrollToSection(nav.id); // Use smooth scrolling
                }}
              >
                <Link to={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          {/* Download Resume Button */}
          <a 
            href={resumeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-white bg-secondary py-2 px-4 rounded-lg hover:bg-white hover:text-primary transition duration-300'
          >
           Resume
          </a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    scrollToSection(nav.id); // Smooth scroll on mobile too
                  }}
                >
                  <Link to={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

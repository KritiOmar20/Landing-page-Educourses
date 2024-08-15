import React, { useState } from 'react';
import './Header.css';
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Educourses</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <FaTimes />
        ) : (
            <FaBars />
        )}
      </button>
    </nav>
  );
};

export default Header;

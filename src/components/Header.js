// Header.js
import React from 'react';
import '../css/Header.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
// import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
        {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Google map: 63 Hà Huy Giáp</a>
        <span>Sđt: 0372637385</span> */}
        <ul className='header'>
          <a> <FaFacebook /> Facebook</a>
          <a> <FaInstagramSquare /> Instagram</a>
          <a> <FaPhoneAlt /> Hotline: 0372637385</a>
        </ul>
        
    </div>
  );
};

export default Header;

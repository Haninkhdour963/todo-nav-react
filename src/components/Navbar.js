// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Todo</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

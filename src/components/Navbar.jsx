
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
  return (
    <div className="main_content" > 
    <ul>
      <li><Link to='/' style={{ color:'white', textDecoration:'none'}}>Home</Link></li>
      <li><Link to='/about' style={{ color:'white', textDecoration:'none'}}>About us</Link></li>
      <li>How to Use</li>
      <li>About Us</li>
    </ul>
  </div>
  );
};
export default Navbar;

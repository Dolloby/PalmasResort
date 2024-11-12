import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = () => (
  <header className="header">
    <div className="logo">PalmasResort</div>
    <nav className='nav-header'>
        <Link to="/" className='link'>Home</Link>
        {/* <Link to="/about" className='link'>About</Link> */}
        <Link to="./Hotel.js" className='link'>Reservaciones</Link>
        <Link to="./AboutUs.js" className='link'>Nosotros</Link>
        <Link to="/login" className='link'>Login</Link>
    </nav>
  </header>
);

export default Header;
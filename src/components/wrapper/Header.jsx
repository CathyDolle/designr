import React from 'react';
import './wrapper.scss'
import { NavLink } from 'react-router-dom';
import Logo from './Logo'

const Header = () => {
  return (
    <header>
      <Logo/>
      <nav>
        <NavLink className="navLink" to="/Inspirations">Collection</NavLink>
        <NavLink className="navLink" to="/Pricing">About us</NavLink>
        <NavLink className="navLink" to="/Pricing">Pricing</NavLink>
        <NavLink className="navLink" to="/login">Login</NavLink>
        <button className="learn">Learn more</button>
        <button><NavLink to="/inscription">Get started</NavLink></button>
      </nav>
    </header>
  );
};

export default Header;
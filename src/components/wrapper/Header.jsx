import React from 'react';
import './wrapper.scss'
import { NavLink } from 'react-router-dom';
import Logo from './Logo'

const Header = () => {
  return (
    <header>
      <Logo/>
      <nav>
        <NavLink className="navLink" to="/inspirations">Collection</NavLink>
        <NavLink className="navLink" to="/about">About us</NavLink>
        <NavLink className="navLink" to="/pricing">Pricing</NavLink>
        <NavLink className="navLink" to="/login">Login</NavLink>
        <button className="learn">Documentation</button>
        <button><NavLink to="/inscription">Get started</NavLink></button>
      </nav>
    </header>
  );
};

export default Header;
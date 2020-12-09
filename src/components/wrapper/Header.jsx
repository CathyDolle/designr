import React from 'react';
import './wrapper.scss'
import { NavLink } from 'react-router-dom';
import Logo from './Logo'

const Header = () => {
  return (
    <header>
      <Logo/>
      <nav>
        <NavLink exact to="/">Products</NavLink>
        <span>•</span>
        <NavLink to="/Inspirations">Inspirations</NavLink>
        <span>•</span>
        <NavLink to="/Pricing">Pricing</NavLink>
      </nav>
      <button>Login</button>
    </header>
  );
};

export default Header;
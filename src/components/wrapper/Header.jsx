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
        <a className="button learn" href="https://www.notion.so/Presentation-23d72b28a9414f66b4e2178efad5b019" target="_blank" rel="noreferrer">Documentation</a>
        <NavLink className="button" to="/inscription">Get started</NavLink>
      </nav>
    </header>
  );
};

export default Header;
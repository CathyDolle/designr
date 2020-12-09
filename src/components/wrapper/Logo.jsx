import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'

const Logo = () => {
  return (
    <NavLink className="logoContain" exact to="/">
      <img src={logo} alt=""/>
    </NavLink>
  );
};

export default Logo;
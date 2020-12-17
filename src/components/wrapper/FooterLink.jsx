import React from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/img/arrow.svg'

const FooterLink = ({path, name, border}) => {
  return (
    <NavLink to={path} className={`footerLinkContainer ${border}`}>
      <div className="a">{name}</div>
      <img src={arrow} alt="arrow"/>
    </NavLink>
  );
};

export default FooterLink;
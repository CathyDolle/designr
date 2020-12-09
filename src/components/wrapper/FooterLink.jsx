import React from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/img/arrow.svg'

const FooterLink = ({path, name, border}) => {
  return (
    <div className={`footerLinkContainer ${border}`}>
      <NavLink to={path}>{name}</NavLink>
      <img src={arrow} alt="arrow"/>
    </div>
  );
};

export default FooterLink;
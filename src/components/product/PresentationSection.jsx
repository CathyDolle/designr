import React from 'react';
import './presentationSection.scss'
import { NavLink } from 'react-router-dom';
import linkArrow from '../../assets/img/product/linkArrow.svg'

function sectionRight({text, visual, title, to, link, href}) {
  return (
    <section className="presentationSection">
      <div className="textContainer">
        <h1>{title}</h1>
        <p>{text}</p>
        { link && <NavLink to={to}>{link}<img src={linkArrow} alt="linkArrow"/></NavLink> && <a href={href} target="_blank" rel="noreferrer">{link}<img src={linkArrow} alt="linkArrow"/></a>}
      </div>
      <div className="visualContainer">
        <img src={visual} alt="visual"/>
      </div>
    </section>
  );
}

export default sectionRight;
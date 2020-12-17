import React from 'react';
import './presentationSection.scss'
import { NavLink } from 'react-router-dom';
import linkArrow from '../../assets/img/product/linkArrow.svg'

function sectionRight({text, visual, title, to, link}) {
  return (
    <section className="presentationSection">
      <div className="visualContainer inverse">
        <img src={visual} alt="visual"/>
      </div>
      <div className="textContainer inverse">
        <h1>{title}</h1>
        <p>{text}</p>
        { link && <NavLink to={to}>{link}<img src={linkArrow} alt="linkArrow"/></NavLink>}
      </div>
    </section>
  );
}

export default sectionRight;
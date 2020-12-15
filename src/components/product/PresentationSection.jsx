import React from 'react';
import './presentationSection.scss'
import { NavLink } from 'react-router-dom';

function sectionRight({text, visual, title, to, link}) {
  return (
    <section className="presentationSection">
      <div className="textContainer">
        <h1>{title}</h1>
        <p>{text}</p>
        { link && <NavLink to={to}>{link}</NavLink>}
      </div>
      <div className="visualContainer">
        <img src={visual} alt="visual"/>
      </div>
    </section>
  );
}

export default sectionRight;
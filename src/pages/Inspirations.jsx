import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import './inspirations.scss'
import preview from '../assets/img/inspirations/preview.png'
import DesignBox from '../components/inspirations/DesignBox'

const Inspirations = () => {
  return (
    <Wrapper>
      <div className="introContainer">
        <div className="textContainer">
          <h1>Our best Mixx®</h1>
          <p>Discover our best Picks and Inspirations that will help you design and  develope your Next Projects. Cool fonts, great palletes and amazing imagary all in one place. Enjoy ;)</p>
        </div>
        <img src={preview} alt="preview"/>
      </div>
      <div className="mainContainer">
        <h2>Our Top Picks</h2>
        <div className="tagContainer">
          <button className="tag active">All</button>
          <span>•</span>
          <button className="tag">Web Design</button>
          <span>•</span>
          <button className="tag">Print</button>
          <span>•</span>
          <button className="tag">Mobile</button>
        </div>
        {/* THUMBNAIL CONTAINER */}
        <div className="designContainer">
          <DesignBox/>
          <DesignBox/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Inspirations;
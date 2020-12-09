import React from 'react';
import './designBox.scss'
import preview from '../../assets/img/inspirations/preview.png'

const DesignBox = () => {
  return (
    <div className="designBox">
      <img src={preview} alt=""/>
      <h2>Test</h2>
      <div className="tagList">
        <button className="tag active">Webdesign</button>
        <button className="tag active">Webdesign</button>
      </div>
      <div className="colorList">
        <div className="color"></div>
      </div>
    </div>
  );
};

export default DesignBox;
import React from 'react';
import './designBox.scss'

const DesignBox = ({product}) => {
  return (
    <div className="designBox">
      <img src={process.env.REACT_APP_API_URL + product.thumbnail} alt=""/>
      <h2>{product.name}</h2>
      <div className="tagList">
        <button className="tag active">{product.category}</button>
      </div>
      <div className="colorList">
        {
          product.colors.map((color, index) => {
            return <div className="color" style={{background: color.hexa}} key={index}></div>
          })
        }
      </div>
    </div>
  );
};

export default DesignBox;
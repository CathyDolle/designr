import React from 'react';
import './priceBox.scss'

const priceBox = ({title, price, text, duration, promotion}) => {
  return (
    <div className='priceBox'>
      <div className="infoContainer">
        <h3>{title}</h3>
        <div className="priceContainer">
        <span>{price}</span><h4>{duration}</h4>
        </div>
        <p className="promotion">{promotion}</p>
      </div>
      <p>{text}</p>
      <button>Start Now</button>
    </div>
  );
};

export default priceBox;
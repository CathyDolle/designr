import React from 'react';
import './priceBox.scss'

const priceBox = ({title, price, text}) => {
  return (
    <div className='priceBox'>
      <div className="infoContainer">
        <h3>{title}</h3>
        <div className="priceContainer">
        <span>{price}</span><h4>/month</h4>
        </div>
      </div>
      <p>{text}</p>
      <button>Start Now</button>
    </div>
  );
};

export default priceBox;
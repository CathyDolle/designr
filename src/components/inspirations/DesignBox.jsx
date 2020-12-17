import React, { useState, useEffect } from 'react';
import './designBox.scss'
import ProductModal from './ProductModal'

const DesignBox = ({product}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (open){
      body.style.overflow = "hidden"
      body.style.paddingRight = "15px"
    }

    return () => {
      body.style.overflow = "auto"
      body.style.paddingRight = "0"
    }
  }, [open])

  return (
    <div className="designBox" onClick={() => setOpen(!open)}>
      <img src={product.thumbnail} alt="thumbnail"/>
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
      <ProductModal active={open} product={product} onClose={() => setOpen(false)}/>
    </div>
  );
};

export default DesignBox;
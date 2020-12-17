import React from 'react';
import './productModal.scss'
import ItemContent from './ItemContent'
import close from './../../assets/img/close.svg'

function ProductModal({active, product, onClose}) {
  const stop = (e) => {
    e.stopPropagation()
  }
  const toggle = () =>{
    onClose()
  }
  return (
    <section onClick={stop} className={active ? 'productModal active' : 'productModal'}>
      <div className="productWrapper">
        <img className="close" src={close} onClick={toggle} alt="closeButton"/>
        <h1>{product.name}</h1>
        <div className="productContent">
          <div className="visualSection">
            <img src={product.thumbnail} alt="product"/>
          </div>
          <div className="infoSection">
            <ItemContent infoName="Category">
              <p className="tag">{product.category}</p>
            </ItemContent>
            <ItemContent infoName="Color palette">
              {
                product.colors.map((color, index) => {
                  return <div className="color" style={{background: color.hexa}} key={index}></div>
                })
              }
            </ItemContent>
            <ItemContent infoName="Font-Family">
              {
                product.fonts.map((font, index) => {
                  return <p className="tag" key={index}>{font}</p>
                })
              }
            </ItemContent>
            <ItemContent infoName="Download">
              <a href={product.figma}>Figma File</a>
              <a href={product.stylesheet}>Stylesheet File</a>
            </ItemContent>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductModal;
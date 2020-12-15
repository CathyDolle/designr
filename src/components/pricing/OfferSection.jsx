import React from 'react';
import "./offerSection.scss"
import checkmark from '../../assets/img/checkmark.svg'

function OfferSection({logo, title, offerName1, offerName2, offerName3}) {
  return (
    <div className="offerSectionContent">
      <div className="titleContent">
        <img src={logo} alt="logo"/>
        <h2>{title}</h2>
      </div>
      <div className="offerSectionContent">
        <div className="offerName">
          <img src={checkmark} alt="checkmark"/>
          <p>{offerName1}</p>
        </div>
        <div className="offerName">
          <img src={checkmark} alt="checkmark"/>
          <p>{offerName2}</p>
        </div>
        <div className="offerName">
          <img src={checkmark} alt="checkmark"/>
          <p>{offerName3}</p>
        </div>
        
      </div>
    </div>
  );
}

export default OfferSection;
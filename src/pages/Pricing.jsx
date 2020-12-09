import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import PriceBox from '../components/pricing/PriceBox'
import './pricing.scss'

const Pricing = () => {
  return (
    <Wrapper>
      <div className="pricingContainer">
        <h1>Best Design® for Best Price</h1>
        <div className="selectSection">
          <button className="active">Month</button>
          <button>Year</button>
        </div>
        <div className="priceSection">
          <PriceBox title="Students" price="$6" text="Web design and web development Students ?
          Get complets Figma UI kit and React composants to easy create your website. "/>
          <PriceBox title="Designers" price="$16" text="Design whatever you want with complets Figma kit UI. Create easily wedb, mobile and print designs."/>
          <PriceBox title="Developers" price="$24" text="No inspiration for the design of your web site? Get React components and create an inspiring website  easily."/>
          <PriceBox title="Enterprises" price="$49" text="Be free in website creation. Easy get inspiration  for design and quickly compose inspiring websites."/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
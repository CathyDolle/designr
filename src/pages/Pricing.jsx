import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import PriceBox from '../components/pricing/PriceBox'
import './pricing.scss'
import OfferSection from '../components/pricing/OfferSection'

// img
import galleryIcon from '../assets/img/pricing/gallery.svg'
import timingIcon from '../assets/img/pricing/timing.svg'
import profilIcon from '../assets/img/pricing/profil.svg'

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
      {/* wave */}
      <svg viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,96C480,96,600,128,720,160C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <section className="offerContainer">
        <span>Our Offer</span>
        <p>Take advantage of many out-of-the-box features right from the start of your subscription</p>
        <div className="offerSection">
          <OfferSection logo={galleryIcon} title={<>Use our collection <br/>without any limits</>} offerName1="Royalty-free images" offerName2="Easy access typography" offerName3="Color palette" />
          <OfferSection logo={profilIcon} title={<>Made for developpers <br/>& designers</>} offerName1="Complete Figma UI Kit" offerName2="React library" offerName3="Reusable components" /> 
          <OfferSection logo={timingIcon} title={<>Optimize your <br/> time</>} offerName1="Available 24/7" offerName2="Fast & reliable" offerName3="Quality documents" />
        </div>
      </section>
    </Wrapper>
  );
};

export default Pricing;
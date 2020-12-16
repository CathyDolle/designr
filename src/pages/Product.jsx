import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import './product.scss'
import PresentationSection from '../components/product/PresentationSection'
import PresentationSectionInverse from '../components/product/PresentationSectionInverse'
// img
import bg from '../assets/img/product/bg.png'
import house from '../assets/img/product/house.png'
import design from '../assets/img/product/design.png'
import ui from '../assets/img/product/ui.png'
import typo from '../assets/img/product/typo.gif'
import images from '../assets/img/product/images.png'
import colors from '../assets/img/product/colors.png'

const Product = () => {
  return (
    <Wrapper>
      {/* Intro */}
      <section className="introContainer">
        <div className="textContainer">
          <h1>A better way to <br/> create a website</h1>
          <p>DesignR is one of the best tool that any designer or developer can use.  Browse our collection, find the Mixx you like and use it for your design or website. Easily and instantly download every element of each Mixx, including: <span>images</span>, <span>typography</span> and <span>colors</span> Simple and Efficent that’s DesignR.</p>
          <button>Get Started</button>
        </div>
        <div className="visualContainer">
          <img src={bg} alt="bg"/>
        </div>
      </section>
      {/* wave */}
      <svg className="wave" viewBox="0 0 1440 320"><path fill="#000000" d="M0,160L60,144C120,128,240,96,360,96C480,96,600,128,720,160C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

      {/* Presentation Container */}
      <section className="presentationContainer">
        {/* presentations */}
        <PresentationSection title="Get your enterprise-grade web design" text="Give an access for your team to improve their creativity and design vision. All you need to create your own vision online" visual={house} to="/Pricing" link="See plans and pricing"/>
        <div className="tripleTextSection">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia, magni quam culpa error, blanditiis dolor ex maxime quod recusandae, modi rem? In recusandae quasi non, quae quisquam magni molestiae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia, magni quam culpa error, blanditiis dolor ex maxime quod recusandae, modi rem? In recusandae quasi non, quae quisquam magni molestiae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia, magni quam culpa error, blanditiis dolor ex maxime quod recusandae, modi rem? In recusandae quasi non, quae quisquam magni molestiae?</p>
        </div>
        <PresentationSection title="Easy components, easy design." text="DesignR® provides wonderful designs and independent and reusable components to create your own design easily." visual={design}/>
        <PresentationSectionInverse title="Complete Figma 
        UI Kit" text="DesignR® provides wonderful designs and independent and reusable components to create your own design easily." to="/Inspirations" link="Download trial UI kit " visual={ui}/>
         <PresentationSection title="Easy components, easy developement." text="DesignR® provides wonderful designs and independent and reusable components to create your own design easily." visual={design}/>
         <PresentationSectionInverse title="Complete React library" text="DesignR® provides wonderful designs and independent and reusable components to create your own design easily." to="/Inspirations" link="Download trial UI kit " visual={ui}/>

         {/* INSIDE THE PRODUCT */}
         <h1 className="bigTitle">Whats inside ?</h1>
         <PresentationSectionInverse title="Typography" text="DesignR® provides wonderful designs and independent and reusable components to create your own design easily." to="/Inspirations" link="Download trial UI kit " visual={typo}/>
         <PresentationSection title="Images" text="Give an access for your team to improve their creativity and design vision. All you need to create your own vision online" visual={images} to="/Pricing" link="See plans and pricing"/>
         <PresentationSectionInverse title="Colors" text="DesignR® provides wonderful designs and independent and reusable components to create your own design easily." to="/Inspirations" link="Download trial UI kit " visual={colors}/>
      </section>

    </Wrapper>
  );
};

export default Product;
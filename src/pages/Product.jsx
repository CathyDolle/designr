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
import develop from '../assets/img/product/develop.svg'
import plume from '../assets/img/product/plume.svg'
import graph from '../assets/img/product/graph.svg'
import dev from '../assets/img/product/dev.png'

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
          <img src={develop} alt="develop"/>
          <p>Develop your own website throw or webpage to add design structure to your site and make the opportunity to transmet a strong message</p>
          <img src={plume} alt="plume"/>
          <p>Have the opportunity to create a unique design by stepping out of your comfort zone and into an unexplored world. </p>
          <img src={graph} alt="graph"/>
          <p>Create a link between each member of your team around DesignR to have a remarkable result by creating the opportunity to develop your idea.</p>
        </div>
        <PresentationSection title="Easy components, easy design." text="We use components to make the work easier. The achievements and the technique being already registered, you only have to concentrate on the creation." visual={design}/>
        <PresentationSectionInverse title="Complete Figma 
        UI Kit" text="DesignR® provides wonderful designs and independent and reusable components to create your own design easily." to="/Inspirations" link="Watch an exemple of our UI kit " visual={ui}/>
         <PresentationSection title="Easy stylesheet, easy developement." text="Use our dynamic variables from our stylesheet and use it as you want, make your design development easier!" visual={dev} to="/Inspirations" link="Watch a website exemple made with our stylesheet"/>

         {/* INSIDE THE PRODUCT */}
         <h1 className="bigTitle">Whats inside ?</h1>
         <PresentationSectionInverse title="Typography" text={<>At DesignR we consider typography to be an <span>art</span>: it is the siment of your design because it alone is enough to give character to your creations. That's why we offer you <span>unique</span> and <span>elegant</span> typography, carefully chosen according to the graphic universe of our templates.</>} visual={typo}/>
         <PresentationSection title="Colors" text={<>Colors are the essential touches that will give <span>personality</span> to your creations. It is often considered that colors can be a reflection of your <span>sensibility</span>, so at DesignR we strive to offer you <span>harmonious colors</span> that will perfectly convey the atmosphere you wish to establish in your creations.</>}  visual={colors}/>
         <PresentationSectionInverse title="Images" text={<>The image is the final touch to your design. It is the photos that will add that <span>extra something</span> to your templates. At DesignR we use royalty-free photos taken with superior quality. <span>Unsplash</span> being the number 1 in this field, we have signed a <span>partnership</span> with them allowing you to also tap into their incredible resources.</>} visual={images}/>
      </section>

    </Wrapper>
  );
};

export default Product;
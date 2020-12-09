import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import './product.scss'
import preview from '../assets/img/product/preview.png'
import bgDuo from '../assets/img/product/bgDuo.png'
import bg from '../assets/img/product/bg.png'

const Product = () => {
  return (
    <Wrapper>
      {/* PREVIEW */}
      <div className="previewContainer">
        <img src={preview} alt="preview"/>
        <h1>Design of <br/>the day</h1>
        <div className="linkContent">
          <a href="/">Discover</a>
        </div>
      </div>

      {/* PRESENTATION */}
      <div className="presentationContainer">
        <h1>Our collection <br/>For your projects.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna ut egestas at. Massa ut eu suspendisse eget. Tempor ultricies eget nunc enim platea eu ullamcorper. Convallis ultrices elit massa interdum elit eu. Massa lacus leo adipiscing felis tortor. Blandit nisl, id adipiscing lacus, tortor iaculis molestie mauris sed. Elementum feugiat non ullamcorper fermentum. Nisi ac metus hac id ut sed vel arcu, venenatis.</p>
        <button>Discover</button>
        <img className="duo" src={bgDuo} alt="bgDuo"/>
        <img className="solo" src={bg} alt="bg"/>
      </div>

      {/* WORKS */}
      <div className="clientContainer">
        <h2>But how does it work ?</h2>
        <h3>are you a...</h3>
        <div className="boxContainer">
        <div className="clientBox">
          <h3>DesigneR?</h3>
          <p>Choose your Mixx from our gallery. And click on "Download the figma file". You will have access to  each files of the project. Our HD images, colors and typography are all yours.</p>
        </div>
        <div className="clientBox">
          <h3>DevelopeR?</h3>
          <p>Choose your Mixx from our gallery. And click on "Download the component file". You will have access to  each files of the project. Our HD images, colors and typography are all yours.</p>
        </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
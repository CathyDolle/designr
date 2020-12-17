import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Wrapper from '../components/wrapper/Wrapper'
import './inspirations.scss'
import preview from '../assets/img/inspirations/preview.png'
import DesignBox from '../components/inspirations/DesignBox'

const Inspirations = () => {
  const [loading, setLoading] = useState(true)
  const [products, setproducts] = useState([])
  const [category, setCategory] = useState("All")
  const categories = [
    "All",
    "Web design",
    "Mobile",
    "Print",
  ]

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      
      const response = await fetch(`http://localhost:3000/products`, {
        // credentials: 'include', Si tu as besoin d'une auth
        method: 'GET',
        mode: 'cors'
      });
      const data = await response.json()

      console.log(response)
      console.log(data)
      setproducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <Wrapper>
      <div className="introContainer">
        <div className="textContainer">
          <h1>Our best Mixx®</h1>
          <p>Discover our best Picks and Inspirations that will help you design and  develope your Next Projects. Cool fonts, great palletes and amazing imagary all in one place. Enjoy ;)</p>
        </div>
        <img src={preview} alt="preview"/>
      </div>
      <div className="mainContainer">
        <h2>Our Top Picks</h2>
        <div className="tagContainer">
          {
            categories.map((tag, index) => {
              return <button onClick={() => setCategory(tag)} className={`tag ${category === tag ? "active" : ''}`} key={index}>{tag}</button>
            })
          }
        </div>
        {/* THUMBNAIL CONTAINER */}
        <div className="designContainer">
          {
            products.filter(product => product.category === category || category === "All").map((product, index) => {
              return <DesignBox product={product} key={index}/>
            })
          }
        </div>
      </div>
    </Wrapper>
  );
};

export default Inspirations;
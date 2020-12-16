import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Wrapper from '../components/wrapper/Wrapper'
import './product-read.scss'

const ProductRead = () => {
  const [loading, setLoading] = useState(true)
  const [product, setproduct] = useState(null)

  let { name } = useParams()

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      
      const response = await fetch(`http://localhost:3000/api/products/${name}`, {
        // credentials: 'include', Si tu as besoin d'une auth
        method: 'GET',
        mode: 'cors'
      });
      const { statusCode, product } = await response.json()

      console.log(statusCode, product)
      setproduct(product);
      setLoading(false);
    };

    getProduct();
  }, [name]);

  return (
    <Wrapper>
      {/* A remplacer par la vue d'un "produit"*/}
      <div className="previewContainer">
        {!loading 
          ? (
            <div>
              <p>Name: {product.name}</p>
              <span>ID: {product._id}</span>
            </div>
            )
          : <p>Chargement...</p>
        }
      </div>
    </Wrapper>
  );
};

export default ProductRead;
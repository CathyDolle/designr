import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Wrapper from '../components/wrapper/Wrapper'
import './product-read.scss'

const ProductRead = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  let { id } = useParams()

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        // credentials: 'include', Si tu as besoin d'une auth
        method: 'GET',
        mode: 'cors'
      });
      const data = await response.json()

      console.log(data)
      setData(data);
      setLoading(false);
    };

    getProduct();
  }, [id]);

  return (
    <Wrapper>
      {/* A remplacer par la vue d'un "produit"*/}
      <div className="previewContainer">
        {!loading 
          ? (
            <div>
              <p>Name: {data.name}</p>
              <span>ID: {data._id}</span>
            </div>
            )
          : <p>Chargement...</p>
        }
      </div>
    </Wrapper>
  );
};

export default ProductRead;
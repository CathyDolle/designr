import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import { useParams } from 'react-router';

function InspirationsItem(props) {
  let { id } = useParams()
  return (
    <Wrapper>
      <h1>{id}</h1>
    </Wrapper>
  );
}

export default InspirationsItem;
import React from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Wrapper = ({children}) => {
  return (
    <div>
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer/>
    </div>
  );
};

export default Wrapper;
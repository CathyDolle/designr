import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import login from '../assets/img/product/bg.png'
import './login.scss'

function Login(props) {
  return (
    <Wrapper>
      <section className="loginSection">
        <h1>Log in</h1>
        <form action="/">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="First Name"/>
          <label htmlFor="">Password</label>
          <input type="text" placeholder="•••••••••••"/>
        </form>
        <button>Login</button>
      </section>
      <section className="visualSection">
        <img src={login} alt="login"/>
      </section>
    </Wrapper>
  );
}

export default Login;
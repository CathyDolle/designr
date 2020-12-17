import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import deco from '../assets/img/product/bg.png'
import github from '../assets/img/login/github.svg'
import { NavLink } from 'react-router-dom';
import './login.scss'

function Login(props) {
  return (
    <Wrapper>
      <section className="loginSection">
        <h1>Log in</h1>
        <form action="/">
          {/* <label htmlFor="">Email</label> */}
          <input type="text" placeholder="First Name"/>
          {/* <label htmlFor="">Password</label> */}
          <input type="text" placeholder="•••••••••••"/>
        </form>
        <div className="buttonContainer">
          <button className="github"><img src={github} alt="github"/>Log in with github</button>
          <button>Login</button>
          <div>
            <NavLink to="/inscription">Create an account</NavLink>
            <NavLink to="/">Forget password?</NavLink>
          </div>
        </div>
        {/* <img className="deco" src={deco} alt="deco"/> */}
      </section>
    </Wrapper>
  );
}

export default Login;
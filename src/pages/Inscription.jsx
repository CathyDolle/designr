import React, { useEffect} from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import login from '../assets/img/product/bg.png'
import github from '../assets/img/login/github.svg'
import './login.scss'

function Login(props) {
  // useEffect(() => {
  //   const body = document.querySelector('body')
  //   body.style.setProperty("--bgColor", "black")
  //   body.style.setProperty("--fontColor", "white")

  //   return () => {
  //     body.style.setProperty("--bgColor", "#f7f4eb")
  //     body.style.setProperty("--fontColor", "black")
  //   }
  // }, [])
  return (
    <Wrapper>
      <section className="loginSection">
        <h1>Join the community</h1>
        <p>Create your free DesignR  account to get started</p>
        <form action="/">
          {/* <label htmlFor="">First Name</label> */}
          <input type="text" placeholder="First Name"/>
          {/* <label htmlFor="">Last Name</label> */}
          <input type="text" placeholder="Last Name"/>
          {/* <label htmlFor="">Email</label> */}
          <input type="text" placeholder="Email Name"/>
          {/* <label htmlFor="">Password</label> */}
          <input type="text" placeholder="•••••••••••"/>
        </form>
        <div className="buttonContainer">
          <button className="github"><img src={github} alt="github"/>Sign up with github</button>
          <button>Create my account</button>
        </div>
      </section>
    </Wrapper>
  );
}

export default Login;
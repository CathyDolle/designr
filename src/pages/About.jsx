import React, { useEffect }from 'react';
import './about.scss'
import Wrapper from '../components/wrapper/Wrapper'
import flash from '../assets/img/about/flash.png'
import flash2 from '../assets/img/about/flash2.png'
import access from '../assets/img/about/access.png'

function About() {
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.setProperty("--bgColor", "black")
    body.style.setProperty("--fontColor", "white")

    return () => {
      body.style.setProperty("--bgColor", "#f7f4eb")
      body.style.setProperty("--fontColor", "black")
    }
  }, [])
  return (
    <Wrapper>
      <section className="aboutSection">
        <div className="aboutContent">
          <h1>About us</h1>
          <p>Tech founders are too busy thinking about the business and they don’t have the time or resources to build a long-term design for their brand. 
          <br/>  
          <br/>  
          <span>That’s where we come in.</span>
          </p>
          <img src={flash} alt="flash"/>
        </div>
        <div className="missionContent">
          <img className="access" src={access} alt="flash"/>
          <img src={flash2} alt="flash"/>
          <h2>
          Our mission is to work with<br/>
          startups that are changing<br/>
          the way the world works by<br/>
          providing accessible and<br/>
          trusted <span>design</span> visions.<br/>
          </h2>
          <div className="verticalLine"/>
          <h2>What we believe</h2>
          <p>At <span>DesignR</span>, we believe in the power of</p>
          <p className="desc">Our best-in-class thinkers
          will help you from start to finish
          <span>Originality</span></p>

          <p className="desc">The sooner we come in, the faster we can
          determine if your brand story is working,
          and help lay a foundation to make it work even harder.
          <span>Futuristic<br/>Vision</span></p>

          <p className="desc">We’re choosy about finding elite brand
          strategists to work with, because their
          stellar experience allows them to be
          equally picky about the projects
          they choose.
          <span>Selectivity</span></p>

          <p className="desc">Our years of collective experience
          helps us get to the root of the matter
          and solve your problems faster.
          <span>A shorter<br/>runway</span></p>

          <p className="desc">We focus our energies and finances
          on our clients, instead of fancy offices,
          bloated org charts or $5,000
          cappuccino machines.
          <span>Running<br/>Lean</span></p>

          <p className="desc">As a startup ourselves, we get how hard it is
          to find trusted partners. That’s why we offer
          a 2-week risk-free trial, no strings attached.
          Only pay if you wish to continue.
          <span>Satisfaction<br/>guaranteed</span></p>

          <h2 className="knowMore">Want to know more <br/>about how we work?</h2>
          <button>Contact us</button>
          <button className="discover">Discover what we do</button>
        </div>
      </section>
    </Wrapper>
  );
}

export default About;
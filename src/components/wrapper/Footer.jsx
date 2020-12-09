import React from 'react';
import FooterLink from './FooterLink'
import logo from '../../assets/img/logo.svg'

const Footer = () => {
  return (
    <footer>
      <FooterLink exact path="/" name="Our Products"/>
      <FooterLink path="/Inspirations" name="Design Inspirations"/>
      <FooterLink border="borderBottom" path="/Pricing" name="Pricing"/>
      <div className="demiBox left">
        <img src={logo} alt="logo"/>
      </div>
      <div className="demiBox">
        <p>Discover our best Picks and Inspirations that will help you design and  develope your Next Projects. Cool fonts, great palletes and amazing imagary all in one place. Enjoy ;)</p>
        <p className="copyright">Conçu avec ❥ à Paris. ©2020 DesignR Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
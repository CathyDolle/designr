import React from 'react';
import FooterLink from './FooterLink'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer>
      <FooterLink path="/inspirations" name="Collection"/>
      <FooterLink exact path="/about" name="About us"/>
      <FooterLink border="borderBottom" path="/Pricing" name="Pricing"/>
      <div className="demiBox left">
        <Logo/>
      </div>
      <div className="demiBox">
        <p>Discover our best Picks and Inspirations that will help you design and  develope your Next Projects. Cool fonts, great palletes and amazing imagary all in one place. Enjoy ;)</p>
        <p className="copyright">Conçu avec ❥ à Paris. ©2020 DesignR Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Whatsapp from '../Icons/Whatsapp';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Innova Home</h3>
          <p>Transformando hogares con tecnología y diseño.</p>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Whatsapp />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Innova Home. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';
import Copyright from './Copyright';

// Icones das redes sociais
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  // Tamanhos estabelecidos pelo FtntAwesome
  const iconSize = "lg";

    return (
      <>
        <footer>
          <div className="conteudo-footer">
            <div className="container flex">
              <ul id="navegacao" className="footer-links flex">
                <li><a href="#/">Ajuda e contato</a></li>
                <li><a href="#/">Mapa do site</a></li>
                <li><a href="#/">Vender na Unijobs</a></li>
                <li><a href="#/">Noções básicas de como comprar</a></li>
              </ul>
              <ul id="redes-sociais" className="footer-links">
                <li><a href="#/"><FontAwesomeIcon size={iconSize} icon={faFacebookF} /></a></li>
                <li><a href="#/"><FontAwesomeIcon size={iconSize} icon={faYoutube} /></a></li>
                <li><a href="#/"><FontAwesomeIcon size={iconSize} icon={faLinkedinIn} /></a></li>
                <li><a href="#/"><FontAwesomeIcon size={iconSize} icon={faInstagram} /></a></li>
                <li><a href="#/"><FontAwesomeIcon size={iconSize} icon={faTwitter} /></a></li>
              </ul>
            </div>
          </div>

          <Copyright />
        </footer>
      </>
    );
}

export default Footer;
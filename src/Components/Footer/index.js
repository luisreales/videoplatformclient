import React from "react";
import {Container} from 'react-bootstrap';
import "./footer.scss";
/**
 * 
 * Return Footer, with the information of copyright of the site
 * @parentComponent App *  
 * @return {JSX} *  
 * */

const Footer = () => {
  return (
    <Container fluid>
      <footer className='footer'> 
          <p>All copyright @Univision</p>
          {new Date().getFullYear()}
      </footer>
    </Container>
  );
};

export default Footer;

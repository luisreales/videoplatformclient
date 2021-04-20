import React from "react";
import "./footer.scss";
/**
 * 
 * Return Footer, with the information of copyright of the site
 * @parentComponent App *  
 * @return {JSX} *  
 * */

const Footer = () => {
  return (
   
      <footer className='footer'> 
          <p>All copyright @Univision - {new Date().getFullYear()}</p>
          
      </footer>
   
  );
};

export default Footer;

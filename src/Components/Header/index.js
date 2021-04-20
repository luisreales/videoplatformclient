import React from "react";
import "./header.scss";
import NavBarUI from './NavBar';

/**
 * 
 * Return Header of the component, with a NavBarUI as a Child component
 * @parentComponent App *
 * @childComponent NavBarUI 
 * @return {JSX} *  
 * */


const Header = () => {
  return (
    <header>
        <NavBarUI />
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          <img
            src="/assets/logounivision.jpg"
            alt="prueba"
            className="img-dimension"
          />{" "}
          <i className='fab fa-react' /> VPA - UNIVISION
        </h4>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
// import styled from "styled-components";
import { Button } from "../styles/Button";
import {useEffect} from  "react";


const Header = () => {
  
useEffect(() => {
  window.addEventListener('scroll', isSticky);
  return () => {
      window.removeEventListener('scroll', isSticky);
  };
});
/* Method that will fix header after a specific scrollable */
     const isSticky = () => {
          const header = document.querySelector('.header-section');
          const scrollTop = window.scrollY;
          scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
      };

  return (
    
    // <MainHeader className="header-section">
    <div className="Header header-section"> 
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
      <div className="sign-in-part">
        <div className="dropdown">
            <NavLink className="Student-signin" to="/register">
          <span>Sign in</span>
            </NavLink>
        </div>
        <NavLink className="contact" to="/contact">
          <Button>Contact us</Button>
        </NavLink>
      </div>
      </div>
    // </MainHeader>
   
    
  );
};


export default Header;

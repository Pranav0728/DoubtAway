import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
      <div className="sign-in-part">
        <div class="dropdown">
            <NavLink className="Student-signin" to="/register">
          <span>Sign in</span>
            </NavLink>
        </div>
        <NavLink className="contact" to="/contact">
          <Button>Contact us</Button>
        </NavLink>
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  border-bottom: 0.0625rem solid #e0e0e0;
  top: 0;

  .logo {
    height: auto;
    width: 20rem;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown span {
    font-size: 2rem;
    margin-right: 2rem;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 16rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 1.2rem 1.6rem;
    z-index: 1;
  }
  .dropdown-content p {
    font-size: 2rem;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

export default Header;

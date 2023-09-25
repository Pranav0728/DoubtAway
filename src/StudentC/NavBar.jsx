import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const NavBar = () => {
  return (
    <MainHeader>
      <NavLink to="/student">
        <img src="./images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <NavLink to="/">
        <Button onClick={() => signOut(auth)}>Logout</Button>
      </NavLink>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4rem;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #e0e0e0;

  .logo {
    height: auto;
    width: 20rem;
  }
`;
export default NavBar;

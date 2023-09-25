import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const Side = styled.nav`
    height: 90vh;
    border-right: 0.0625rem solid #e0e0e0;
    width: 17%;
    .sidebar {
      height: 100%;
      width: 100%;
      background-color: #fff;
    }
    .SidebarList {
      height: auto;
      padding: 0;
      width: 100%;
    }
    .SidebarList .row {
      color: black;
      width: 100%;
      height: 6rem;
      border-bottom: 0.0625rem solid #e0e0e0;
      list-style-type: none;
      margin: 0%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
    }
    .SidebarList #active {
      background-color: #f2f2f2;
    }
    .SidebarList .row:hover {
      cursor: pointer;
      background-color: #f2f2f2;
    }

    .row .icon {
      flex: 30%;
      display: grid;
      place-items: center;
    }
    .css-i4bv87-MuiSvgIcon-root {
      font-size: 3rem;
    }
    .row .tittle {
      flex: 70%;
    }
  `;
  return (
    <Side>
      <div className="sidebar">
        <ul className="SidebarList">
          <NavLink to="/student">
            <li className="row">
              <div className="icon">
                <HomeIcon />
              </div>
              <div className="tittle">Home</div>
            </li>
          </NavLink>
          <NavLink to="/studentdoubt">
            <div className="row">
              <div className="icon">
                <PeopleIcon />
              </div>
              <div className="tittle">Teachers</div>
            </div>
          </NavLink>
        </ul>
      </div>
    </Side>
  );
};

export default Sidebar;

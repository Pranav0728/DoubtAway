import React from "react";
import styled from "styled-components";
import HomeC from "../Chats/pages/HomeC";

const StudentHome = () => {

  const Side = styled.nav`
    position: fixed;
    top: 10vh;
    right: 0;
    height: 90vh;
    width: 83%;
    ${'' /* display: flex;
    justify-content: center;
    align-items: center; */}
  `;
;

  return (
    <Side>
      <HomeC/>
    </Side>
  );
};

export default StudentHome;

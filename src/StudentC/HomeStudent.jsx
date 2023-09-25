import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../Chats/context/AuthContext";
import { ChatContext } from "../Chats/context/ChatContext";

const HomeStudent = () => {
  const { currentUser } = useContext(AuthContext);
  const Side = styled.nav`
    position: fixed;
    top: 10vh;
    right: 0;
    height: 90vh;
    width: 83%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color:#fff;
  `;

  return (
    <Side>
      <h1>Hello</h1>
      <h2>{currentUser.displayName}</h2>
    </Side>
  );
};

export default HomeStudent;

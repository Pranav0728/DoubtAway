import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import styled from "styled-components";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
      <div className="info">
      <img id="dp" src={data.user?.photoURL || 'default-avatar-url'} alt="" />
        <span>{data.user?.displayName}</span>
      </div>
        <div className="chatIcons">
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;

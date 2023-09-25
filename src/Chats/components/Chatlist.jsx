import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { NavLink } from "react-router-dom";

const Chatlist = () => {
  const { data } = useContext(ChatContext);

  return (
      <div className="chatInfo">
        {/* <span>{data.user?.displayName}</span> */}
      </div>
  );
};
export default Chatlist;

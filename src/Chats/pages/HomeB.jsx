import React from "react";
import SidebarC from "../components/SidebarC";
import Chat from "../components/Chat";
import Chatlist from "../components/Chatlist";
import NavBar from "../../StudentC/NavBar";
import Sidebar from "../../StudentC/sidebar";

const HomeB = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="Chatcontainer">
        <div className="chatlistteacher">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default HomeB;

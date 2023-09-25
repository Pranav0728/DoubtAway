import React from "react";
import SidebarC from "../components/SidebarC";
import Chat from "../components/Chat";
import Chatlist from "../components/Chatlist";
import NavBar from "../../StudentC/NavBar";
import Sidebar from "../../StudentC/sidebar";
import Slidebart from "../../TeacherC/Slidebart";

const HomeT = () => {
  return (
    <>
      <NavBar />
      <Slidebart />
      <div className="Chatcontainer">
        <div className="chatlistteacher">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default HomeT;

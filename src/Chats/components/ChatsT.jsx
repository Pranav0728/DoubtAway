import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { NavLink } from "react-router-dom";

const ChatsT = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser?.uid), (doc) => {
        setChats(doc.data() || {}); // Set to an empty object if data is undefined
      });

      return () => {
        unsub();
      };
    };

    currentUser?.uid && getChats(); // Add optional chaining
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a, b) => b[1]?.date - a[1]?.date).map((chat) => (
        <NavLink to="/HomeT">
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1]?.userInfo)}
        >
          <img src={chat[1]?.userInfo?.photoURL || 'default-avatar-url'} alt="" />
          <div className="userChatInfo">
            <span>{chat[1]?.userInfo?.displayName || 'Unknown User'}</span>
            <p>{chat[1]?.lastMessage?.text || 'No messages yet'}</p>
          </div>
        </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ChatsT;

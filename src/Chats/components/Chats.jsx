import { doc, onSnapshot, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { NavLink } from "react-router-dom";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [userRole, setUserRole] = useState(""); // State to store user's role

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = async () => {
      try {
        const userDocRef = doc(db, "users", currentUser?.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUserRole(userData.role); // Set the user's role

          const unsub = onSnapshot(doc(db, "userChats", currentUser?.uid), (doc) => {
            setChats(doc.data() || {});
          });

          return () => {
            unsub();
          };
        } else {
          console.error("User document not found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a, b) => b[1]?.date - a[1]?.date).map((chat) => (
        <NavLink
          to={userRole === "student" ? "/HomeB" : "/HomeT"} // Navigate based on the user's role
          key={chat[0]}
        >
          <div
            className="userChat"
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

export default Chats;

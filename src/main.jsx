import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./Chats/context/AuthContext";
import { ChatContextProvider } from "./Chats/context/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);

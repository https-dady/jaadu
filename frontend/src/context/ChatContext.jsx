// ============================================================================
// Chat Context
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Chat related global state manage karna.
//
// Responsibilities:
// - Selected Chat
// - Mobile Sidebar
//
// ============================================================================

import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { dummyChats } from "@/data/dummyChats";

const ChatContext = createContext();

export function ChatProvider({ children }) {

  // Selected Chat
  const [selectedChat, setSelectedChat] = useState(dummyChats[0]);

  // Mobile Sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const value = {
    selectedChat,
    setSelectedChat,

    isSidebarOpen,
    setSidebarOpen,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useChat() {
  return useContext(ChatContext);
}
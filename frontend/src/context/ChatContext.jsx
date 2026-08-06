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
  const [selectedChat, setSelectedChat] = useState(
  window.innerWidth >= 768 ? dummyChats[0] : null
);

  // Mobile Sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const openChat = (chat) => {
  setSelectedChat(chat);

  if (window.innerWidth < 768) {
    setSidebarOpen(false);
  }
};

const backToSidebar = () => {
  setSelectedChat(null);

  if (window.innerWidth < 768) {
    setSidebarOpen(true);
  }
};

  const value = {
  selectedChat,
  setSelectedChat,

  isSidebarOpen,
  setSidebarOpen,

  openChat,
  backToSidebar,
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
// ============================================================================
// Chat List
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Sidebar me saare chats render karna.
//
// Future:
// - Backend API
// - Search Filter
// - Infinite Scroll
//
// ============================================================================

import ChatItem from "./ChatItem";
import { dummyChats } from "@/data/dummyChats";

function ChatList() {
  return (
    <div className="py-2">
      {dummyChats.map((chat) => (
        <ChatItem
          key={chat.id}
          id={chat.id}
          name={chat.name}
          avatar={chat.avatar}
          lastMessage={chat.lastMessage}
          time={chat.time}
          isOnline={chat.isOnline}
          unreadCount={chat.unreadCount}
        />
      ))}
    </div>
  );
}

export default ChatList;
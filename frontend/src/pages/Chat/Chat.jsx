// ============================================================================
// Chat Page
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Main Chat Screen.
//
// Layout:
//
// Sidebar
//      │
//      └── Chat Window
//              ├── ChatHeader
//              ├── MessageList
//              └── MessageInput
//
// ============================================================================

import MainLayout from "@/layouts/MainLayout";

import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import MessageInput from "@/components/chat/MessageInput";

function Chat() {
  return (
    <MainLayout>

      <div className="h-full flex flex-col">

        <ChatHeader />

        <MessageList />

        <MessageInput />

      </div>

    </MainLayout>
  );
}

export default Chat;
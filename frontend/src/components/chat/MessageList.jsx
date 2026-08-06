// ============================================================================
// Message List
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Selected chat ke messages render karna.
//
// ============================================================================

import MessageBubble from "./MessageBubble";
import EmptyMessages from "./EmptyMessages";
import { useChat } from "@/context/ChatContext";
import { dummyMessages } from "@/data/dummyMessages";

function MessageList() {
  const { selectedChat } = useChat();

  const messages = dummyMessages[selectedChat?.id] || [];
    if (messages.length === 0) {
  return <EmptyMessages />;
}
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message.text}
          time={message.time}
          isOwnMessage={message.senderId === "me"}
        />
      ))}
    </div>
  );
}

export default MessageList;
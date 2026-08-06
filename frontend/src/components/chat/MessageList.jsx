// ============================================================================
// Message List
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Chat ke saare messages render karna.
//
// Note:
// Abhi dummy messages use honge.
// Future me ye messages backend se aayenge.
//
// ============================================================================

import MessageBubble from "./MessageBubble";

function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">

      <MessageBubble
        message="Hello bro! Kaise ho?"
        time="10:45 AM"
      />

      <MessageBubble
        message="Bilkul badhiya 😄"
        isOwnMessage
        time="10:46 AM"
      />

      <MessageBubble
        message="JAADU project ka kya scene hai?"
        time="10:47 AM"
      />

      <MessageBubble
        message="Authentication complete ho gaya 🚀"
        isOwnMessage
        time="10:48 AM"
      />

      <MessageBubble
        message="Ab UI bana rahe hain."
        isOwnMessage
        time="10:49 AM"
      />

      <MessageBubble
        message="Awesome 🔥"
        time="10:50 AM"
      />

    </div>
  );
}

export default MessageList;
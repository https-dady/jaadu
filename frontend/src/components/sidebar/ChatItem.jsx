// ============================================================================
// Chat Item
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Sidebar me single chat preview render karna.
//
// Features:
// - Active State
// - Hover Effect
// - Online Indicator
// - Unread Badge
// - Click to Select Chat
//
// ============================================================================

import PropTypes from "prop-types";
import { useChat } from "@/context/ChatContext";

function ChatItem({
  id,
  name = "Rahul Sharma",
  lastMessage = "Hello bro! Kaise ho?",
  time = "10:45 AM",
  avatar = "R",
  isOnline = true,
  unreadCount = 0,
}) {
const { selectedChat, openChat } = useChat();

  return (
    <div
      onClick={() =>
  openChat({
          id,
          name,
          avatar,
          lastMessage,
          time,
          isOnline,
          unreadCount,
        })
      }
      className={`
        relative
        flex
        items-center
        gap-3
        px-4
        py-3
        mx-2
        mb-1
        rounded-xl
        cursor-pointer
        transition-all
        duration-200
        ${
          selectedChat?.id === id
            ? "bg-blue-100 border-l-4 border-blue-600 shadow-sm"
            : "hover:bg-gray-100"
        }
      `}
    >
      {/* Avatar */}
      <div className="relative">
        <div
          className="
            h-12
            w-12
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
            select-none
          "
        >
          {avatar}
        </div>

        {isOnline && (
          <span
            className="
              absolute
              bottom-0
              right-0
              h-3.5
              w-3.5
              rounded-full
              bg-green-500
              border-2
              border-white
            "
          />
        )}
      </div>

      {/* Chat Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold truncate">
            {name}
          </h3>

          <span className="text-xs text-gray-500">
            {time}
          </span>
        </div>

        <p className="text-sm text-gray-500 truncate">
          {lastMessage}
        </p>
      </div>

      {/* Unread Badge */}
      {unreadCount > 0 && selectedChat?.id !== id && (
        <div
          className="
            absolute
            right-4
            bottom-3
            h-5
            min-w-5
            px-1
            rounded-full
            bg-blue-600
            text-white
            text-[10px]
            flex
            items-center
            justify-center
            font-semibold
          "
        >
          {unreadCount}
        </div>
      )}
    </div>
  );
}

ChatItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  lastMessage: PropTypes.string,
  time: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  unreadCount: PropTypes.number,
};

export default ChatItem;
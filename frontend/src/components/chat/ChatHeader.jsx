// ============================================================================
// Chat Header
// ============================================================================

import {
  HiOutlinePhone,
  HiOutlineVideoCamera,
  HiOutlineEllipsisVertical,
} from "react-icons/hi2";

import { useChat } from "@/context/ChatContext";

function ChatHeader() {

  const { selectedChat } = useChat();

  if (!selectedChat) return null;

  return (
    <header
      className="
        h-20
        bg-white
        border-b
        border-gray-200
        px-6
        flex
        items-center
        justify-between
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <div
          className="
            relative
            h-12
            w-12
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
          "
        >
          {selectedChat.avatar}

          {selectedChat.isOnline && (
            <span
              className="
                absolute
                bottom-0
                right-0
                h-3
                w-3
                rounded-full
                bg-green-500
                border-2
                border-white
              "
            />
          )}
        </div>

        <div>

          <h2 className="font-semibold text-lg">
            {selectedChat.name}
          </h2>

          <p className="text-sm text-gray-500">
            {selectedChat.isOnline
              ? "Online"
              : "Offline"}
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        <button className="p-2 rounded-lg hover:bg-gray-100">
          <HiOutlinePhone size={22} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100">
          <HiOutlineVideoCamera size={22} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100">
          <HiOutlineEllipsisVertical size={22} />
        </button>

      </div>

    </header>
  );
}

export default ChatHeader;
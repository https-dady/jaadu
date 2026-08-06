// ============================================================================
// Chat Header
// ============================================================================

import {
  HiOutlinePhone,
  HiOutlineVideoCamera,
  HiOutlineEllipsisVertical,
  HiOutlineArrowLeft,
} from "react-icons/hi2";

import { useChat } from "@/context/ChatContext";

function ChatHeader() {
  const { selectedChat, backToSidebar } = useChat();

  if (!selectedChat) return null;

  return (
    <header
      className="
        h-16
        sm:h-20
        bg-white
        border-b
        border-gray-200
        px-3
        sm:px-6
        flex
        items-center
        justify-between
        shrink-0
      "
    >
      {/* Left */}

      <div className="flex items-center gap-3 min-w-0">
        <button
  onClick={backToSidebar}
  className="
    md:hidden
    p-2
    rounded-lg
    hover:bg-gray-100
    transition
  "
>
  <HiOutlineArrowLeft size={22} />
</button>
        <div
          className="
            relative
            h-10
            w-10
            sm:h-12
            sm:w-12
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
            shrink-0
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

        <div className="min-w-0">
          <h2 className="font-semibold text-base sm:text-lg truncate">
            {selectedChat.name}
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 truncate">
            {selectedChat.isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <HiOutlinePhone
            size={20}
            className="sm:w-[22px] sm:h-[22px]"
          />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <HiOutlineVideoCamera
            size={20}
            className="sm:w-[22px] sm:h-[22px]"
          />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <HiOutlineEllipsisVertical
            size={20}
            className="sm:w-[22px] sm:h-[22px]"
          />
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;
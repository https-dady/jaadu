// ============================================================================
// Message Input
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Chat message type aur send karne ke liye.
//
// Future:
// - Emoji Picker
// - File Upload
// - Image Upload
// - Voice Message
// - Socket.IO Integration
//
// ============================================================================

import {
  HiOutlineFaceSmile,
  HiOutlinePaperClip,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

function MessageInput() {
  return (
    <div
      className="
        h-20
        bg-white
        border-t
        border-gray-200
        px-5
        flex
        items-center
        gap-3
      "
    >
      {/* Emoji */}

      <button
        className="
          p-2
          rounded-lg
          hover:bg-gray-100
          transition
        "
      >
        <HiOutlineFaceSmile size={24} />
      </button>

      {/* Attachment */}

      <button
        className="
          p-2
          rounded-lg
          hover:bg-gray-100
          transition
        "
      >
        <HiOutlinePaperClip size={24} />
      </button>

      {/* Input */}

      <input
        type="text"
        placeholder="Type a message..."
        className="
          flex-1
          h-12
          px-4
          rounded-xl
          border
          border-gray-300
          outline-none
          focus:border-blue-500
        "
      />

      {/* Send */}

      <button
        className="
          h-12
          w-12
          rounded-xl
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          hover:bg-blue-700
          transition
        "
      >
        <HiOutlinePaperAirplane size={22} />
      </button>
    </div>
  );
}

export default MessageInput;
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
        h-16
        sm:h-20
        bg-white
        border-t
        border-gray-200
        px-3
        sm:px-5
        flex
        items-center
        gap-2
        sm:gap-3
        shrink-0
      "
    >
      {/* Emoji */}

      <button
        className="
          p-2
          rounded-lg
          hover:bg-gray-100
          transition
          shrink-0
        "
      >
        <HiOutlineFaceSmile
          size={20}
          className="sm:w-6 sm:h-6"
        />
      </button>

      {/* Attachment */}

      <button
        className="
          p-2
          rounded-lg
          hover:bg-gray-100
          transition
          shrink-0
        "
      >
        <HiOutlinePaperClip
          size={20}
          className="sm:w-6 sm:h-6"
        />
      </button>

      {/* Input */}

      <input
        type="text"
        placeholder="Type a message..."
        className="
          flex-1
          h-10
          sm:h-12
          px-4
          rounded-xl
          border
          border-gray-300
          outline-none
          text-sm
          focus:border-blue-500
          transition
        "
      />

      {/* Send */}

      <button
        className="
          h-10
          w-10
          sm:h-12
          sm:w-12
          rounded-xl
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          hover:bg-blue-700
          transition
          shrink-0
        "
      >
        <HiOutlinePaperAirplane
          size={20}
          className="sm:w-[22px] sm:h-[22px]"
        />
      </button>
    </div>
  );
}

export default MessageInput;
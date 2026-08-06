// ============================================================================
// Empty Messages
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Jab selected chat me koi message na ho.
//
// ============================================================================

import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

function EmptyMessages() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="text-center">

        <HiOutlineChatBubbleLeftRight
          size={70}
          className="mx-auto text-gray-300"
        />

        <h2 className="mt-5 text-xl font-semibold text-gray-700">
          No Messages Yet
        </h2>

        <p className="mt-2 text-gray-500">
          Start a conversation 👋
        </p>

      </div>
    </div>
  );
}

export default EmptyMessages;
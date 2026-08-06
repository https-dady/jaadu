// ============================================================================
// Message Bubble
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Single message bubble.
//
// Future:
// - Incoming Message
// - Outgoing Message
// - Read Status
// - Time
// - Image/File Messages
//
// ============================================================================

import PropTypes from "prop-types";

function MessageBubble({
  message,
  isOwnMessage,
  time,
}) {
  return (
    <div
      className={`flex mb-4 ${
        isOwnMessage
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[70%]
          rounded-2xl
          px-4
          py-3
          shadow-sm
          ${
            isOwnMessage
              ? "bg-blue-600 text-white rounded-br-md"
              : "bg-white text-gray-800 rounded-bl-md"
          }
        `}
      >
        <p className="text-sm leading-relaxed">
          {message}
        </p>

        <p
          className={`
            mt-2
            text-[11px]
            text-right
            ${
              isOwnMessage
                ? "text-blue-100"
                : "text-gray-400"
            }
          `}
        >
          {time}
        </p>
      </div>
    </div>
  );
}

MessageBubble.propTypes = {
  message: PropTypes.string.isRequired,
  isOwnMessage: PropTypes.bool,
  time: PropTypes.string,
};

MessageBubble.defaultProps = {
  isOwnMessage: false,
  time: "",
};

export default MessageBubble;
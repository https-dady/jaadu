// ============================================================================
// Message Service
// ============================================================================
//
// Purpose:
// Is file me Message Module ki saari business logic likhi jayegi.
//
// MVC Flow:
//
// Route
//    │
//    ▼
// Controller
//    │
//    ▼
// Message Service   ← (Ye File)
//    │
//    ▼
// Models
//    │
//    ▼
// MongoDB
//
// NOTE:
//
// Controller kabhi database se directly baat nahi karega.
// Saari business logic Service Layer me hogi.
//
// ============================================================================


// ============================================================================
// Imports
// ============================================================================

// Message Model
const Message = require("../models/Message");

// Chat Model
const Chat = require("../models/Chat");

// Mongoose
const mongoose =  require("mongoose");

// ============================================================================
// Function : sendMessage
// ============================================================================
//
// Purpose:
//
// Ye function:
//
// ✔ Message database me save karega
// ✔ Chat ka lastMessage update karega
//
// Parameters:
//
// currentUserId
// chatId
// text
//
// Returns:
//
// Newly created message
//
// ============================================================================

const sendMessage = async (
    currentUserId,
    chatId,
    text
) => {

    // ==========================================================
    // STEP 1
    // Validate ChatId
    // ==========================================================

    if (!mongoose.Types.ObjectId.isValid(chatId)) {
        throw new Error("Invalid chat id.");
    }

    // ==========================================================
    // STEP 2
    // Validate Message
    // ==========================================================

    if (!text || !text.trim()) {
        throw new Error("Message cannot be empty.");
    }

    // ==========================================================
    // STEP 3
    // Find Chat
    // ==========================================================

    const chat = await Chat.findById(chatId);

    if (!chat) {
        throw new Error("Chat not found.");
    }

    // ==========================================================
    // STEP 4
    // Check Participant
    // ==========================================================

    const isParticipant = chat.participants.some(
        participant =>
            participant.toString() === currentUserId
    );

    if (!isParticipant) {
        throw new Error(
            "You are not allowed to send messages in this chat."
        );
    }

    // ==========================================================
    // STEP 5
    // Create Message
    // ==========================================================

    const message = await Message.create({

        chat: chatId,

        sender: currentUserId,

        text: text.trim()

    });

    // ==========================================================
    // STEP 6
    // Update Last Message
    // ==========================================================

    chat.lastMessage = message._id;

    await chat.save();

    return message;
};


// ============================================================================
// Function : getMessages
// ============================================================================
//
// Purpose:
//
// Kisi particular chat ke saare messages return karega.
//
// Parameters:
//
// chatId
//
// Returns:
//
// Messages Array
//
// ============================================================================

const getMessages = async (chatId) => {

    // ------------------------------------------------------------------------
    // Chat ke saare messages fetch karo.
    //
    // createdAt : 1
    //
    // Oldest message upar
    // Latest message niche
    //
    // Bilkul WhatsApp ki tarah.
//
// ------------------------------------------------------------------------

    const messages = await Message.find({

        chat: chatId

    })

    // Sender ki basic details bhi frontend ko bhejenge.

    .populate(

        "sender",

        "fullName profileImage"

    )

    // Messages ko oldest se newest order me sort karenge.

    .sort({

        createdAt: 1

    });


    return messages;

};


// ============================================================================
// Export
// ============================================================================

module.exports = {

    sendMessage,

    getMessages

};
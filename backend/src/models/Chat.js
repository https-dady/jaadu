// ===============================================================
// Chat Model
// ===============================================================
//
// Purpose:
// Ye model ek chat ko represent karta hai.
//
// Ek chat me:
// ✔ Participants kaun hain
// ✔ Last message kya hai
// ✔ Future me Group Chat support
//
// Note:
// Is file me sirf database ka structure define hota hai.
// Yaha business logic kabhi nahi likhte.
// ===============================================================

const mongoose = require("mongoose");

// Chat Schema
const chatSchema = new mongoose.Schema(
  {
    // -----------------------------------------------------------
    // participants
    // -----------------------------------------------------------
    // Chat me jitne users honge unke ObjectId yaha store honge.
    //
    // Example:
    //
    // participants:[
    //    TarunId,
    //    RahulId
    // ]
    //
    // Future me Group Chat:
    //
    // participants:[
    //    A,
    //    B,
    //    C,
    //    D
    // ]
    // -----------------------------------------------------------

    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,

        // User collection ko reference karta hai
        ref: "User",

        required: true,
      },
    ],

    // -----------------------------------------------------------
    // lastMessage
    // -----------------------------------------------------------
    //
    // Chat ka latest message.
    //
    // Isse chat list bahut fast load hoti hai.
    //
    // Agar ye field na ho to har baar
    // Message collection me query lagani padegi.
    //
    // WhatsApp bhi isi type ki optimization use karta hai.
    // -----------------------------------------------------------

    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Message",

      default: null,
    },

    // -----------------------------------------------------------
    // Group Chat Support
    // -----------------------------------------------------------

    isGroup: {
      type: Boolean,
      default: false,
    },

    groupName: {
      type: String,
      default: "",
    },

    groupImage: {
      type: String,
      default: "",
    },
  },

  // Automatically adds:
  // createdAt
  // updatedAt

  {
    timestamps: true,
  }
);

// Export Model

module.exports = mongoose.model("Chat", chatSchema);
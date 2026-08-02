// ============================================================================
// Chat Service
// ============================================================================
//
// Purpose:
// Is file me Chat se related saari business logic likhi jayegi.
//
// MVC Architecture:
//
// Route
//   ↓
// Controller
//   ↓
// Service   ← (Ye file)
//   ↓
// Model
//   ↓
// MongoDB
//
// Controller sirf request aur response handle karega.
// Saari calculations, validations aur database logic Service me hogi.
//
// ============================================================================

const Chat = require("../models/Chat");

// ============================================================================
// Function : createChat
// ----------------------------------------------------------------------------
// Purpose:
// Jab ek user kisi dusre user ko pehli baar message karega,
// tab ye function check karega:
//
// 1. Kya dono users ke beech pehle se chat exist karti hai?
//
//      YES → Existing chat return kar do.
//      NO  → Nayi chat create karo.
//
// Isse duplicate chats kabhi create nahi hongi.
// WhatsApp, Telegram aur Messenger bhi isi approach ko follow karte hain.
//
// Parameters:
//
// currentUserId → Login kiya hua user
// receiverId    → Jis user se chat start karni hai
//
// Returns:
//
// Existing Chat
// OR
// Newly Created Chat
//
// ============================================================================

const createChat = async (currentUserId, receiverId) => {

    // ------------------------------------------------------------------------
    // STEP 1
    // Check karo ki existing chat already present hai ya nahi.
    //
    // "$all" operator ka matlab:
    //
    // participants me dono ids honi chahiye.
    //
    // Example:
    //
    // participants = [A, B]
    //
    // Search:
    //
    // $all:[A,B]
    //
    // Match ✔
    //
    // Agar order ulta ho:
    //
    // participants=[B,A]
    //
    // Tab bhi Match ✔
    //
    // Isi wajah se $all use karte hain.
    // ------------------------------------------------------------------------

    const existingChat = await Chat.findOne({

        // Sirf personal chats check karni hain.
        isGroup: false,

        participants: {
            $all: [currentUserId, receiverId]
        }

    })

    // ------------------------------------------------------------------------
    // STEP 2
    // Agar chat already exist karti hai,
    // to nayi chat create nahi karni.
    // Existing chat return kar do.
    // ------------------------------------------------------------------------

    if (existingChat) {
        return existingChat;
    }

    // ------------------------------------------------------------------------
    // STEP 3
    // Chat exist nahi karti.
    //
    // Isliye new Chat create karenge.
    // ------------------------------------------------------------------------

    const newChat = await Chat.create({

        participants: [
            currentUserId,
            receiverId
        ]

    });

    // ------------------------------------------------------------------------
    // STEP 4
    // Newly created chat return kar do.
    // ------------------------------------------------------------------------

    return newChat;
};

// ============================================================================
// Function : getMyChats
// ============================================================================
//
// Purpose:
//
// Login user ki saari chats return karega.
//
// Example:
//
// Tarun Login hai
//
// Database me
//
// Chat 1
// Participants
// [Tarun, Rahul]
//
// Chat 2
// Participants
// [Tarun, Aman]
//
// Return:
//
// Chat1
// Chat2
//
// ============================================================================

const getMyChats = async (currentUserId) => {

    // ------------------------------------------------------------------------
    // MongoDB me search kar rahe hain
    //
    // $in operator ka matlab:
    //
    // "participants array ke andar agar currentUserId present ho"
    //
    // To wo chat return kar do.
    // ------------------------------------------------------------------------

    const chats = await Chat.find({

        participants: {
            $in: [currentUserId]
        }

    })

    // ------------------------------------------------------------------------
    // Participants ki details bhi chahiye.
    //
    // Sirf ObjectId nahi.
    //
    // Example:
    //
    // Before
    //
    // participants:
    // [
    //   "687aa2..."
    // ]
    //
    // After Populate
    //
    // participants:
    // [
    //   {
    //      fullName,
    //      email,
    //      profileImage
    //   }
    // ]
    // ------------------------------------------------------------------------

    .populate(
        "participants",
        "fullName email profileImage"
    )

    // ------------------------------------------------------------------------
    // Last Message bhi populate karenge.
    // ------------------------------------------------------------------------

    .populate(
        "lastMessage"
    )

    // ------------------------------------------------------------------------
    // Latest chat sabse upar dikhni chahiye.
    //
    // WhatsApp bhi isi tarah sort karta hai.
    // ------------------------------------------------------------------------

    .sort({

        updatedAt: -1

    });

    return chats;

};

// ============================================================================
// Export
// ============================================================================

module.exports = {
    createChat,
    getMyChats
};
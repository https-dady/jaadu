// ============================================================================
// Chat Controller
// ============================================================================
//
// Purpose:
// Ye file sirf Request aur Response handle karegi.
//
// MVC Flow:
//
// Client
//    │
//    ▼
// Route
//    │
//    ▼
// Controller  ← (Ye file)
//    │
//    ▼
// Service
//    │
//    ▼
// MongoDB
//
// IMPORTANT:
//
// Controller me business logic nahi likhte.
// Wo hamesha Service Layer me hoti hai.
//
// ============================================================================


// Chat Service import kar rahe hain.
const { createChat } = require("../services/chat.service");


// ============================================================================
// Function : create
// ----------------------------------------------------------------------------
// Purpose:
//
// User jab kisi dusre user par click karega,
// frontend receiverId bhejega.
//
// Example:
//
// POST /api/chats
//
// Body:
//
// {
//      "receiverId":"687a4d98d73..."
// }
//
// Logged in user ki id JWT middleware se aayegi.
//
// req.user.id
//
// Ye function:
//
// 1. Request body se receiverId lega
// 2. Logged in user ki id lega
// 3. Service ko call karega
// 4. Response client ko bhej dega
//
// ============================================================================

const create = async (req, res) => {

    try {

        // --------------------------------------------------------------------
        // Logged in user ki id
        // Ye auth middleware ne req.user me store ki thi.
        // --------------------------------------------------------------------

        const currentUserId = req.user.id;


        // --------------------------------------------------------------------
        // Frontend se jis user se chat start karni hai
        // uski id aa rahi hai.
        // --------------------------------------------------------------------

        const { receiverId } = req.body;


        // --------------------------------------------------------------------
        // Business Logic Service Layer handle karegi.
        // Controller sirf call karega.
        // --------------------------------------------------------------------

        const chat = await createChat(
            currentUserId,
            receiverId
        );


        // --------------------------------------------------------------------
        // Success Response
        // --------------------------------------------------------------------

        return res.status(201).json({

            success: true,

            message: "Chat created successfully.",

            data: chat

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ============================================================================
// Function : getChats
// ============================================================================
//
// Purpose:
//
// Login user ki saari chats frontend ko bhejna.
//
// Flow:
//
// Client
//      │
//      ▼
// GET /api/chats
//
//      │
//      ▼
// Controller
//
//      │
//      ▼
// Service
//
//      │
//      ▼
// MongoDB
//
//      │
//      ▼
// Response
//
// ============================================================================

const { getMyChats } = require("../services/chat.service");

// ============================================================================
// Get My Chats Controller
// ============================================================================

const getChats = async (req, res) => {

    try {

        // --------------------------------------------------------------------
        // JWT Middleware ne logged in user ki details
        // req.user me store kar di hain.
        // --------------------------------------------------------------------

        const currentUserId = req.user.id;

        // --------------------------------------------------------------------
        // Service Layer ko call karenge.
        // Service database se chats fetch karegi.
        // --------------------------------------------------------------------

        const chats = await getMyChats(currentUserId);

        // --------------------------------------------------------------------
        // Success Response
        // --------------------------------------------------------------------

        return res.status(200).json({

            success: true,

            count: chats.length,

            data: chats

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ============================================================================
// Export Controller
// ============================================================================

module.exports = {

    create,
    getChats 

};
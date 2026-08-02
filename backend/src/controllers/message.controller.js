// ============================================================================
// Message Controller
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
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
// Controller   ← (Ye File)
//    │
//    ▼
// Service
//    │
//    ▼
// MongoDB
//
// IMPORTANT:
//
// ❌ Controller me database queries nahi likhte.
//
// ✔ Sirf request receive karna
// ✔ Service call karna
// ✔ Response bhejna
//
// ============================================================================


// ============================================================================
// Imports
// ============================================================================

const {

    sendMessage,

    getMessages

} = require("../services/message.service");


// ============================================================================
// Function : send
// ============================================================================
//
// Purpose:
//
// Login user message bhejega.
//
// Request:
//
// POST /api/messages
//
// Body:
//
// {
//      "chatId":"687ab......",
//      "text":"Hello Bro"
// }
//
// Flow:
//
// Client
//      │
//      ▼
// Controller
//      │
//      ▼
// Service
//      │
//      ▼
// MongoDB
//
// ============================================================================

const send = async (req, res) => {

    try {

        // --------------------------------------------------------------------
        // Logged In User
        // --------------------------------------------------------------------

        const currentUserId = req.user.id;


        // --------------------------------------------------------------------
        // Request Body
        // --------------------------------------------------------------------

        const {

            chatId,

            text

        } = req.body;


        // --------------------------------------------------------------------
        // Service Call
        // --------------------------------------------------------------------

        const message = await sendMessage(

            currentUserId,

            chatId,

            text

        );


        // --------------------------------------------------------------------
        // Success Response
        // --------------------------------------------------------------------

        return res.status(201).json({

            success: true,

            message: "Message sent successfully.",

            data: message

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
// Function : getAllMessages
// ============================================================================
//
// Purpose:
//
// Kisi ek chat ke saare messages return karega.
//
// Endpoint:
//
// GET /api/messages/:chatId
//
// ============================================================================

const getAllMessages = async (req, res) => {

    try {

        // Chat Id URL Params se aayegi.

        const { chatId } = req.params;


        // Service call

        const messages = await getMessages(chatId);


        return res.status(200).json({

            success: true,

            count: messages.length,

            data: messages

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
// Export
// ============================================================================

module.exports = {

    send,

    getAllMessages

};
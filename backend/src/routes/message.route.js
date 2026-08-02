// ============================================================================
// Message Routes
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Is file me Message Module ke saare API Endpoints define honge.
//
// MVC Flow:
//
// Client
//    │
//    ▼
// Route  ← (Ye File)
//    │
//    ▼
// Auth Middleware
//    │
//    ▼
// Controller
//    │
//    ▼
// Service
//    │
//    ▼
// MongoDB
//
// IMPORTANT:
//
// Route ka kaam sirf request ko sahi controller tak pahunchana hai.
//
// ❌ Database Query nahi
// ❌ Business Logic nahi
//
// ============================================================================

const express = require("express");

// Express Router
const router = express.Router();


// ============================================================================
// Imports
// ============================================================================

// Message Controller

const {

    send,

    getAllMessages

} = require("../controllers/message.controller");


// Authentication Middleware

const authMiddleware = require("../middleware/auth.middleware");


// ============================================================================
// POST /api/messages
// ----------------------------------------------------------------------------
//
// Purpose:
//
// Kisi chat me naya message bhejna.
//
// Authorization:
//
// Bearer Token Required
//
// Request Body:
//
// {
//      "chatId":"687....",
//      "text":"Hello"
// }
//
// Flow:
//
// Client
//      │
//      ▼
// Route
//      │
//      ▼
// JWT Middleware
//      │
//      ▼
// Controller
//
// ============================================================================

router.post(

    "/",

    authMiddleware,

    send

);


// ============================================================================
// GET /api/messages/:chatId
// ----------------------------------------------------------------------------
//
// Purpose:
//
// Kisi ek chat ke saare messages return karega.
//
// Example:
//
// GET /api/messages/687ab762....
//
// ============================================================================

router.get(

    "/:chatId",

    authMiddleware,

    getAllMessages

);


// ============================================================================
// Export Router
// ============================================================================

module.exports = router;
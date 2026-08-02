// ============================================================================
// Chat Routes
// ============================================================================
//
// Purpose:
//
// Is file me Chat Module ke saare API endpoints define honge.
//
// Example:
//
// POST   /api/chats
// GET    /api/chats
// GET    /api/chats/:id
//
// Abhi hum sirf Create Chat API bana rahe hain.
//
// ============================================================================

const express = require("express");

// Express Router create kar rahe hain.
const router = express.Router();

// ============================================================================
// Import Controllers
// ============================================================================

// Controller request ko handle karega.
const { create, getChats } = require("../controllers/chat.controller");

// ============================================================================
// Import Middlewares
// ============================================================================

// Sirf login user hi chat create kar sake.
const authMiddleware = require("../middleware/auth.middleware");

// ============================================================================
// Create Chat
// ----------------------------------------------------------------------------
//
// Endpoint:
//
// POST /api/chats
//
// Authorization:
//
// Bearer Token Required
//
// Request Body:
//
// {
//      "receiverId":"687ab7d8f....."
// }
//
// Flow:
//
// Client
//      ↓
// Route
//      ↓
// JWT Middleware
//      ↓
// Controller
//      ↓
// Service
//      ↓
// Database
//
// ============================================================================

router.post(
    "/",
    authMiddleware,
    create
);

router.get("/", authMiddleware, getChats);

// ============================================================================
// Export Router
// ============================================================================

module.exports = router;
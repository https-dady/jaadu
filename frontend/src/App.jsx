// ============================================================================
// App Component
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Ye application ki root routing file hai.
//
// Responsibilities:
// - Browser Router Setup
// - Public Routes
// - Protected Routes
//
// Route Types:
//
// Public
// ├── /          → Login
// └── /signup    → Signup
//
// Protected
// └── /chat      → Chat
//
// ============================================================================

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "@/pages/Login/Login";
import Signup from "@/pages/Signup/Signup";
import Chat from "@/pages/Chat/Chat";

// Protected Route
import ProtectedRoute from "@/routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================================================================
            Public Routes
        ================================================================= */}

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* ================================================================
            Protected Routes
        ================================================================= */}

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
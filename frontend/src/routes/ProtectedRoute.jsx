// ============================================================================
// Protected Route
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Ye component protected pages ko secure karta hai.
//
// Agar user login nahi hai to Login Page par redirect karega.
//
// Agar login hai to requested page render karega.
//
// Flow:
//
// User
//   │
//   ▼
// Protected Route
//   │
//   ├── Token + User hai ?
//   │          │
//   │          ├── YES → Page Render
//   │          │
//   │          └── NO → Login Page
//
// ============================================================================

import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

function ProtectedRoute({ children }) {

  const {
    token,
    user,
    authLoading,
  } = useAuth();

  // --------------------------------------------------------------------------
  // Jab tak authentication check ho rahi hai
  // --------------------------------------------------------------------------

  if (authLoading) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  }

  // --------------------------------------------------------------------------
  // Agar login nahi hai
  // --------------------------------------------------------------------------

  if (!token || !user) {

    return <Navigate to="/" replace />;

  }

  // --------------------------------------------------------------------------
  // Login hai
  // --------------------------------------------------------------------------

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;